import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./PrifileInfo/ProfileInfo";


const Profile = () => {
    return (<div>

        <ProfileInfo/>
        <MyPosts/>


    </div>)

};

export default Profile;




