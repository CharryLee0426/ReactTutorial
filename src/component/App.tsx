import React, { useState } from "react";
import colorData from '../data/colordata.json';
import ColorList from "./ColorList";
import AddColorForm from "./AddColorForm";
import { nanoid } from "nanoid";


const App: React.FunctionComponent = () => {
    const [appColor, setAppColor] = useState(colorData);

    // define a function variable.
    const remove = (id: string) => {
        const newAppColor = appColor.filter((color) =>
            color.id !== id);
        setAppColor(newAppColor);
    }

    // define a function variable.
    const rateColor = (id: string, rating: number) => {
        const newAppColor = appColor.map((color) =>
            color.id === id ? {...color, rating} : color);
        setAppColor(newAppColor);
    }

    // define a submit handle function
    const onNewColor = (title: string, color: string) => {
        const newColor = [
            ...appColor,
            {
                id: nanoid(),
                rating: 0,
                title: title,
                color: color
            }
        ];
        setAppColor(newColor);
    };

    // then add onRemove prop by using map method.
    return (
    <>
    <AddColorForm onNewColor={onNewColor} />
    <ColorList colors={appColor.map((n, i) => ({
        "id": n.id,
        "color": n.color,
        "title": n.title,
        "rating": n.rating,
        "onRemove": remove,
        "onRate": rateColor
    }))} />
    </>
    )
}

export default App;