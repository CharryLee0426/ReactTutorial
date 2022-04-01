import React from 'react';
import { StarProp, StarRatingProp } from '../type/proptype';
import { FaStar } from 'react-icons/fa';

const Star: React.FunctionComponent<StarProp> = (props: StarProp) => {
    return (
        <FaStar color={props.selected ? 'red' : 'grey'} onClick={props.onSelect} />
    );
}

const createArray = (length: number) => [...Array(length)];

const StarRating: React.FunctionComponent<StarRatingProp> = (props: StarRatingProp) => {
    return (
        <>
            {createArray(props.totalStars).map((n, i) => (
                <Star key={i} selected={props.selectedStars > i} onSelect={() => props.onRate(props.id ,(i + 1))} />
            ))}
            <p>
                {props.selectedStars} of {props.totalStars} stars.
            </p>
        </>
    )
}

export default StarRating;