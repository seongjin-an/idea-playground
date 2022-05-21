import React, {ChangeEvent, useCallback, useMemo, useRef, useState} from "react";
import {IUser} from "./type";
import {countActiveUsers} from "./utils";
import {CreateUser, CreateUserMemo} from "./CreateUser";
import {UserList} from "./UserList";

const NoMemoization: React.FC = () => {
    console.log('render Memoization component')
    const [ inputs, setInputs ] = useState<{ username: string, email: string }>({ username: '', email: '' })
    const { username, email } = inputs

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setInputs({...inputs, [name]: value})
    }

    const [ users, setUsers ] = useState<IUser[]>([
        {
            id: 1,
            username: 'ansj',
            email: 'ansj@ansj.com',
            active: true,
        },
        {
            id: 2,
            username: 'ansj2',
            email: 'ansj2@ansj2.com',
            active: false,
        },
        {
            id: 3,
            username: 'ansj3',
            email: 'ansj3@ansj3.com',
            active: false,
        }
    ])

    const nextId = useRef<number>(4)
    const onCreate = () => {
        const user: IUser = {
            id: nextId.current,
            username,
            email,
            active: false
        }
        setUsers(users.concat(user))
        setInputs({
            username: '',
            email: ''
        })
        nextId.current +=1
    }

    const onRemove = (id: number) => {
        setUsers(users.filter(user => user.id !== id))
    }

    const onToggle = (id: number) => {
        setUsers(users.map(user => user.id === id ? { ...user, active: !user.active } :user ))
    }

    //useMemo: 값을 재활용!
    const count = useMemo(() => countActiveUsers(users), [users])
    return(
        <>
            <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
            <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
            <div>활성 사용자 수: {count}</div>
        </>
    )
}

export default NoMemoization