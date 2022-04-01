import React from "react";
import { ColorListProp } from '../type/proptype';
import Color from "./Color";

const ColorList: React.FunctionComponent<ColorListProp> = (props: ColorListProp) => {
    if (!props.colors.length) {
        return <div>No Color Listed</div>;
    } else {
        return (
            <div>
                {props.colors.map((n, i) => (
                    <Color id={n.id} title={n.title} color={n.color} rating={n.rating} onRemove={n.onRemove} onRate={n.onRate} />
                ))}
            </div>
        );
    }
}

export default ColorList;