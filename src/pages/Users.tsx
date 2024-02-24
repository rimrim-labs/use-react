import PageLayout from "../components/layout/PageLayout";
import { useEffect, useState } from "react";
import { User } from "../types";
import fetcher from "../utils/fetcher";
import { UserDetail } from "../components/user/UserDetail";

export default function Users() {
    const [users, setUsers] = useState<User[]>([])
    const [error, setError] = useState<string>()

    useEffect(() => {
        (async () => {
            try {
                const users = await fetcher<User[]>('/users')
                setUsers(users)
            } catch (err) {
                console.error(err)
                setError('알 수 없는 에러가 발생했습니다.')
            }
        })()
    })

    return (
        <PageLayout>
            {error ?
                <div>{error}</div> :
                users.map(user => <UserDetail user={user} />)
            }
        </PageLayout>
    )
}