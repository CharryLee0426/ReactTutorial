import React from "react";
import { FaTrash } from "react-icons/fa";
import { ColorProp } from "../type/proptype";
import StarRating from "./StarRating";

const Color: React.FunctionComponent<ColorProp> = (props: ColorProp) => {
    const starrating = props.rating;
    return (
        <section>
            <h1>{props.title}</h1>
            <button onClick={() => props.onRemove(props.id)}>
                <FaTrash />
            </button>
            <div style={{height: 50, backgroundColor: props.color}}></div>
            <StarRating id={props.id} selectedStars={starrating} totalStars={5} onRate={props.onRate} />
        </section>
    )
}

export default Color;