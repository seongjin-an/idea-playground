import React from "react";
import { ICreateUserProps } from "./type";

export const CreateUser: React.FC<ICreateUserProps> =
    ({ username, email, onChange, onCreate }) => {
        console.log('render CreateUser')
        return(
            <div>
                <input name='username' placeholder='계정명' onChange={onChange} value={username} />
                <input name='email' placeholder='이메일' onChange={onChange} value={email} />
                <button onClick={onCreate}>등록</button>
            </div>
        )
    }
export const CreateUserMemo = React.memo(CreateUser)