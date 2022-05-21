import {IUser} from "./type";

export const countActiveUsers = (users:IUser[]) => {
    console.log('활성 사용자 수를 세기')
    return users.filter(user => user.active).length
}