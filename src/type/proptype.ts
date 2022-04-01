export interface StarProp {
    selected: boolean,
    onSelect: any
};

export interface StarRatingProp {
    id: string
    selectedStars: number,
    totalStars: number,
    onRate: any
};

export interface ColorProp {
    id: string,
    title: string,
    color: string,
    rating: number,
    onRemove: any,
    onRate: any
};

export interface ColorListProp {
    colors: ColorProp[]
}

export interface AppProp {
    colors: ColorListProp
};

export interface AddColorFormPorp {
    onNewColor: any
};