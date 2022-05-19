import React, {ChangeEvent, useCallback, useMemo, useRef, useState} from 'react'

interface IUser {
    id: number;
    username: string;
    email: string;
    active: boolean;
}
interface ICreateUserProps {
    username: string;
    email: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onCreate: () => void;
}
const CreateUser: React.FC<ICreateUserProps> =
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
const CreateUserMemo = React.memo(CreateUser)

interface IUserProps {
    user: IUser;
    onRemove: (id: number) => void;
    onToggle: (id: number) => void;
}
const User: React.FC<IUserProps> = ({ user, onRemove, onToggle }) => {
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
const UserMemo = React.memo(User)

interface IUsersProps{
    users: IUser[];
    onRemove: (id: number) => void;
    onToggle: (id: number) => void;
}
const UserList: React.FC<IUsersProps> = ({ users, onRemove, onToggle }) => {
    console.log('render UserList')
    return(
        <div>
            {users.map(user=> (<User user={ user } onRemove={ onRemove } onToggle={ onToggle }/>))}
        </div>
    )
}
const UserListMemo = React.memo(UserList)

const countActiveUsers = (users:IUser[]) => {
    console.log('활성 사용자 수를 세기')
    return users.filter(user => user.active).length
}

const ReuseFunction: React.FC = () => {
    console.log('render ReuseFunction component')
    const [ inputs, setInputs ] = useState<{ username: string, email: string }>({ username: '', email: '' })
    const { username, email } = inputs

    const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setInputs({...inputs, [name]: value})
    },[inputs])

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
    const onCreate = useCallback(() => {
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
    }, [users, username, email])

    const onRemove = useCallback((id: number) => {
        setUsers(users.filter(user => user.id !== id))
    }, [users])

    const onToggle = useCallback((id: number) => {
        setUsers(users.map(user => user.id === id ? { ...user, active: !user.active } :user ))
    }, [] )

    //useMemo: 값을 재활용!
    const count = useMemo(() => countActiveUsers(users), [users])
    return(
        <>
            <CreateUserMemo username={username} email={email} onChange={onChange} onCreate={onCreate} />
            <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
            <div>활성 사용자 수: {count}</div>
        </>
    )
}

export default ReuseFunction