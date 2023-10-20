import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


//-------------------------------------------------------------------------------------------------------
export type DialogItemPropsType = {
    dialogs: DialogsType[]
}
export type DialogsType = {
    id: string
    name: string

}


const DialogItem: React.FC<DialogItemPropsType> = (props) => {


    return (
        <div className={`{s.dialog}  ${s.active}`}>
            {props.dialogs.map((el) => {
                return (<div className={s.dialogsItem}>

                        <NavLink to={el.id}>{el.name}</NavLink>


                    </div>

                )
            })}

        </div>
    )
}

//--------------------------------------------Сообщения ---------------------------------------------
type MessagePropsType = {
    message: MessageType[]
}
type MessageType = {
    mesage: string
}

const Message = (props: MessagePropsType) => {

    return (<div>
            {props.message.map((el) => {
                return (
                    <div className={s.messages}>
                        <div >{el.mesage}</div>
                    </div>
                )
            })}
        </div>

    )
}
// --------------------------------------------------Родительская ----------------------------------------
export const Dialogs = () => {
    const dialogs = [
        {id: '/dialogs/1', name: 'Lelka'},
        {id: '/dialogs/2', name: 'Dimich'},
        {id: '/dialogs/3', name: 'Andrey'},
        {id: '/dialogs/4', name: 'Sveta'},
        {id: '/dialogs/5', name: 'SaHsa'},
        {id: '/dialogs/6', name: 'Nastya'},
        {id: '/dialogs/7', name: 'Lezova'}
    ]
    const message = [
        {mesage: 'Hi'},
        {mesage: 'How is you'},
        {mesage: 'Yo'},{mesage: 'Hello'}

    ]
    return (
        <div className={s.dialogs}>
            <DialogItem dialogs={dialogs}/>
            <Message message={message}/>
        </div>
    );
};

//-------------------------------------------------------------------------------------------------------