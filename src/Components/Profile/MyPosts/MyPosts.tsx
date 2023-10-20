import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div><textarea></textarea></div>
                <div>
                    <button>Add post</button>
                </div>


            </div>
            <div className={s.posts}>
                <Post message={'Hi, hoe are you?'} like={15}/>
                <Post message={"it's my first post"} like={12}/>
                <Post message={"Props"} like={10}/>

            </div>


        </div>)

};


export default MyPosts;