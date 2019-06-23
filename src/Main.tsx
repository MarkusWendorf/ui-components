import React from "react";
import "./main.scss";
import Select from "./components/Select/Select";
import Option from "./components/Select/Option";
import RegexInput from "./components/Inputs/RegexInput/RegexInput";
import Form from "./components/Form/Form";
import CustomSelect from "./components/CustomSelect/CustomSelect";

const validators = {
    height: (values: { [field: string]: any }) => {
        if (values.height > 0) {
            return {isValid: true, error: ""};
        } else {
            return {isValid: false, error: "Die Höhe muss größer als 1 sein."};
        }
    },

};

class Main extends React.Component {

    public state = {
        open: false,
    };

    public render() {

        return (
            <div>
                <p>{JSON.stringify(this.state)}</p>
                <input/>
                <button onClick={() => this.setState({ open: !this.state.open})}>Show</button>
                <CustomSelect helperText={"Wohnort auswählen"}/>
            </div>
        );
    }
}

export default Main;
