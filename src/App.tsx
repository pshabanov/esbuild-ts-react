import React, {useState} from 'react';
import './index.css'
//@ts-ignore
import logo from './logo.png'

const App = () => {

    const [state, setState] = useState<number>(0)

    const onBtnClick = (value: string): void => {
        setState(state + 1)
        console.log(value)
    }

    return (
        <div>
            <h1>Value - {state}</h1>
            <img src={logo} alt=""/>
            <div onClick={() => {
                onBtnClick('14235')
            }}>Click
            </div>
        </div>
    );
};

export default App;
