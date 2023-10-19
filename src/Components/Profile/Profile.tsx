import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (<div >


        <div>
            <img alt={'2'} src='https://www.interior.ru/images/setka/2022_07_22/1915.jpg'/>
        </div>

        <div>
            avatar+description
        </div>
        <MyPosts />


    </div>)

};

export default Profile;