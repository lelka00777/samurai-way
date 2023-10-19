import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialigs/Dialigs";
import {Route } from "react-router-dom";
import {News} from "./Components/News/News";
import {Musik} from "./Components/Musik/Music";
import {Sittings} from "./Components/Sittings/Sittings";


function App() {
    return (

        <div className="app-wrapper">

                <Header/>
                <Navbar/>


                <div className="app-wrapper-content">
                    <Route path={'/dialogs'} component={Dialogs}/>

                    <Route path={'/profile'} component={Profile}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Musik}/>
                    <Route path={'/sittings'} component={Sittings}/>

                </div>



        </div>

    );
}

export default App;
