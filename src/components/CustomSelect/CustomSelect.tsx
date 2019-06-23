import React from "react";
import "./custom-select.scss";
import ChevronDown from "../Icons/ChevronDown";
import CustomSelectModal from "./CustomSelectModal";

interface Props {
    helperText: string;
}

interface State {
    showModal: boolean;
    selected: string;
}

class CustomSelect extends React.Component<Props, State> {

    public state = {
        showModal: false,
        selected: "",
    };

    public render() {

        return (
            <div className="custom-select">
                <div className="custom-select__text" onClick={this.toggleModal}>
                    {this.state.selected || this.props.helperText}
                </div>
                <ChevronDown/>
                <CustomSelectModal
                    open={this.state.showModal}
                    onClose={this.toggleModal}
                    onSelected={this.onSelected}
                />
            </div>
        );
    }

    public toggleModal = () => {
      this.setState({ showModal: !this.state.showModal });
    };

    public onSelected = (selected: string) => {
        this.setState({ selected, showModal: false });
    };
}

export default CustomSelect;
