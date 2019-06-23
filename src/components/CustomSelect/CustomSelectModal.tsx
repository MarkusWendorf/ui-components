import React from "react";

interface Props {
    open: boolean;
    onClose: () => void;
    onSelected: (selectedItem: string) => void;
}

interface State {
    items: any[];
    text: string;
}

class CustomSelectModal extends React.Component<Props, State> {

    public state: State = {
        items: [],
        text: "",
    };

    public componentDidMount() {
        this.getTodos();
    }

    public render() {

        const {items, text} = this.state;

        return (
            <div className={"custom-select " + (this.props.open ? "open" : "")} onClick={this.close}>
                <div className="custom-select__body">
                    <input
                        value={text}
                        onChange={this.onChange}
                        ref={(input) => input && input.focus()}
                        className={"custom-select__input"}
                    />
                    <ul className={"custom-select__items"}>
                        {items.filter((item) =>
                            item.title.toLowerCase().startsWith(text.toLowerCase()),
                        ).map((item: any) =>
                            <li key={item.id} onClick={() => this.onSelected(item.title)}>{item.title}</li>,
                        )}
                    </ul>
                </div>
            </div>
        );
    }

    private getTodos = () => {

        fetch("https://jsonplaceholder.typicode.com/todos").then((res) => res.json()).then((result) => {
            this.setState({items: result});
        });
    };

    private onChange = (e: any) => {
        this.setState({ text: e.target.value });
    };

    private onSelected = (selectedItem: string) => {
        this.props.onSelected(selectedItem);
    };

    private close = (e: any) => {

        if (e.currentTarget === e.target) {
            this.setState({ text: "" }, this.props.onClose);
        }
    };
}

export default CustomSelectModal;
