import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClickOutside from "./components/ClickOutside";
import CustomHook from "./components/CustomHook";
import HookFlow from "./components/HookFlow";
import TestCopmo from "./components/TestCopmo";
import ForceRender from "./components/ForceRender";
import ForceRender2 from "./components/ForceRender2";
import Memoization from "./components/memoization/Memoization";
import NoMemoization from "./components/memoization/NoMemoization";

function App() {
    return (
        <>
            {/*<ClickOutside/>*/}
            {/*<CustomHook/>*/}

            {/*<HookFlow/>*/}

            {/*<ForceRender/>*/}
            {/*<ForceRender2/>*/}

            <NoMemoization/>
            {/*<Memoization/>*/}
        </>
    );
}

export default App;
