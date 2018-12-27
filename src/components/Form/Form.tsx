import React, {ReactNode} from "react";
import {Validation} from "../model";

type Validator = (value: any) => Validation;

interface Api {
    update: (field: string) => (newVal: any) => void;
    validate: (field: string) => void;
    isValid: (field: string) => Validation;
}

interface Props {
    children: (s: Api) => ReactNode;
    onSubmit: (s: State) => void;
    validatorMap: { [field: string]: Validator };
}

interface State {
    values: { [field: string]: any };
    validation: { [field: string]: Validation };
    // touched, meaning the user entered something (not merely clicked)
    touched: { [field: string]: boolean };
}

class Form extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            values: {},
            validation: {},
            touched: {},
        };

    }

    public render() {

        const {onSubmit} = this.props;
        console.log(this.state.values);

        return (
            <form onSubmit={this.onSubmit}>
                {this.props.children({
                    ...this.state,
                    update: this.update,
                    validate: this.validate,
                    isValid: this.isValid,
                })}
            </form>
        );
    }

    private onSubmit = (event: any) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    };

    private update = (field: string) => {
        return (newValue: any) => {
            this.setState({
                values: {...this.state.values, [field]: newValue},
                touched: {...this.state.touched, [field]: true},
            });
        };
    };

    private isValid = (field: string): Validation => {
        return this.state.validation[field] || {isValid: true, error: ""};
    };

    private validate = (field: string) => {

        if (!this.state.touched[field]) {
            return;
        }

        const validator = this.props.validatorMap[field];
        const validated = validator(this.state.values);

        this.setState({
            validation: {...this.state.validation, [field]: validated},
        });
    };

    private runFormValidation = () => {
        const validators = this.props.validatorMap;
        const validation: { [field: string]: Validation } = {};

        Object.keys(validators)
            .forEach((field) => {
                validation[field] = validators[field](this.state.values);
            });

        this.setState({validation});
    };
}

export default Form;
