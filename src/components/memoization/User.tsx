import React from "react";
import { IUserProps } from "./type";

export const User: React.FC<IUserProps> = ({ user, onRemove, onToggle }) => {
    console.log('render User')
    return(
        <div>
            <b style={{ cursor: 'pointer', color: user.active ? 'green' : 'black' }} onClick={ () => onToggle(user.id) }>
                {user.username}
            </b>
            &nbsp;
            <span>({user.email})</span>
            <button onClick={ () => onRemove(user.id) }>삭제</button>
        </div>
    )
}
export const UserMemo = React.memo(User)