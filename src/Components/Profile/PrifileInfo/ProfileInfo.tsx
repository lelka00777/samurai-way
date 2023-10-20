import s from './ProfileInfo.module.css';
import React from "react";

export const ProfileInfo = () => {
    return (<div>


        <div>
            <img className={s.img} alt={'2'} src='https://www.interior.ru/images/setka/2022_07_22/1915.jpg'/>
        </div>
        <div className={s.descriptionBlock}>
            avatar + description
        </div>
    </div>)
}
