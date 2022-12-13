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
import QueryApp from "./components/reactquery/QueryApp";
import ListDetail from "./components/reactquery/list/ListDetail";
import SkeletonCompo from "./components/skeleton/SkeletonCompo";
import SuspenseCompo from "./components/skeleton/suspense/SuspenseCompo";
import LeafletMap from "./components/work/LeafletMap";

function App() {
    return (
        <>
            {/*<ClickOutside/>*/}
            {/*<CustomHook/>*/}

            {/*<HookFlow/>*/}

            {/*<ForceRender/>*/}
            {/*<ForceRender2/>*/}

            {/*<NoMemoization/>*/}
            {/*<Memoization/>*/}

            {/*<QueryApp />*/}
            {/*<ListDetail />*/}

            {/*<SkeletonCompo />*/}
            {/*<SuspenseCompo />*/}

            <LeafletMap/>
        </>
    );
}

export default App;
