import { createContext } from 'react';
import ReactDOM from 'react-dom';
import AddColorForm from './component/AddColorForm';
import colors from './data/colordata.json';
import App from './component/App';
import { AddColorFormPorp } from './type/proptype';

export const ColorContext = createContext(colors);

// const prop: AddColorFormPorp = {
//     onNewColor: (title: string, color: string) => {
//         console.log("the title is " + title);
//         console.log("the color is " + color);
//     },
// };

// ReactDOM.render(
//     <AddColorForm onNewColor={prop.onNewColor} />,
//     document.getElementById('root')
// );

// 状态全部放在根部而一路从根部加属性到节点太不现实，应该使用
// 上下文钩子。
ReactDOM.render(
    <ColorContext.Provider value={colors}>
        <App />
    </ColorContext.Provider>,
    document.getElementById('root')
);