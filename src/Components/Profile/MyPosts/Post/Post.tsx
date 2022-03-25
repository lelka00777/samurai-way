import React from 'react';
import s from './Post.module.css';


type PropsType = {
    message: string
    like: number
}

const Post = (props: PropsType) => {
    return (

        <div className={s.item}>
            <img alt='img'
                 src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFsoG_ULqRnkpL5HQde__jM5SZS2C-EPoVzg&usqp=CAU'/>
            {props.message}
            <div>
                <span>like</span>{props.like}

            </div>

        </div>


    )

};


export default Post;



