import React, { useRef, useState } from "react";
import useInput from "../hook/useInput";
import { AddColorFormPorp } from "../type/proptype";

const AddColorForm: React.FunctionComponent<AddColorFormPorp> = (props: AddColorFormPorp) => {
    const titleHook = useInput("");
    const colorHook = useInput("#000000");
    const titleProps = titleHook.v;
    const colorProps = colorHook.v;
    const resetTitle = titleHook.reset;
    const resetColor = colorHook.reset;
    const submit = (e: any) => {
        e.preventDefault();
        props.onNewColor(titleProps.value, colorProps.value);
        resetTitle();
        resetColor();
    }

    return (
        <form onSubmit={submit}>
            <input {...titleProps} type="text" placeholder="color title..." required />
            <input {...colorProps} type="color" required />
            <button>ADD</button>
        </form>
    );
}

export default AddColorForm;