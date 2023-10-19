import s from './Dialogs.module.css';

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={`{s.dialog}  ${s.active}` }>
                    Lelka
                </div>
                <div className={s.dialog}>
                    Dimich
                </div>
                <div className={s.dialog}>
                    Andrey
                </div>
                <div className={s.dialog}>
                    Sveta
                </div>
                <div className={s.dialog}>
                    SaHsa
                </div>
                <div className={s.dialog}>
                    Nastya
                </div>
            </div>
            <div className={s.messages}>
               <div className={s.message}>Hi </div>
                <div className={s.message}> How is you?</div>
                <div className={s.message}>Yo</div>



            </div>
        </div>
    );
};

