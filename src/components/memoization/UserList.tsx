import React from "react";
import { IUsersProps } from "./type";
import {User} from "./User";

export const UserList: React.FC<IUsersProps> = ({ users, onRemove, onToggle }) => {
    console.log('render UserList')
    return(
        <div>
            {users.map(user=> (<User user={ user } onRemove={ onRemove } onToggle={ onToggle }/>))}
        </div>
    )
}
export const UserListMemo = React.memo(UserList)