import { ChangeEvent } from "react";

export interface IUser {
    id: number;
    username: string;
    email: string;
    active: boolean;
}

export interface IUsersProps{
    users: IUser[];
    onRemove: (id: number) => void;
    onToggle: (id: number) => void;
}

export interface ICreateUserProps {
    username: string;
    email: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onCreate: () => void;
}

export interface IUserProps {
    user: IUser;
    onRemove: (id: number) => void;
    onToggle: (id: number) => void;
}