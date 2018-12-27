import React from "react";
import "./main.scss";
import Select from "./components/Select/Select";
import Option from "./components/Select/Option";
import RegexInput from "./components/Inputs/RegexInput/RegexInput";
import Form from "./components/Form/Form";

const validators = {
    height: (values: { [field: string]: any }) => {
        if (values.height > 0) {
            return {isValid: true, error: ""};
        } else {
            return {isValid: false, error: "Die Höhe muss größer als 1 sein."};
        }
    },

};

const Main = () => (
    <div>
        <Form onSubmit={(form) => console.log(form)} validatorMap={validators}>
            {(form) => (
                <div>
                    <Select defaultValue={"Default"} onChange={form.update("selectOption")}>
                        <Option>Option 1</Option>
                        <Option>Default</Option>
                        <Option>Option 3</Option>
                    </Select>
                    <RegexInput label="Favourite Number" onChange={form.update("favNumber")} regex={/^\d*$/}/>
                    <button type="submit">Submit</button>
                </div>
            )}
        </Form>
    </div>
);

export default Main;
