import { User } from "../../types";

interface Props {
    user: User
}

export function UserDetail({ user }: Props) {
    return (
        <div>
            <b>User {user.id}</b>
            <div>name: {user.name}</div>
            <div>age: {user.age}</div>
            <div>address: {user.address}</div>
        </div>
    )
}