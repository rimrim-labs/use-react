import PageLayout from "../components/layout/PageLayout";
import ErrorFallback from "../components/common/ErrorFallback"
import {User} from "../types";
import fetcher from "../utils/fetcher";
import {UserDetail} from "../components/user/UserDetail";
import useSWR from "swr";

export default function Users() {
    const { data: users } = useSWR<User[]>('/users', fetcher, {suspense: true})

    return (
        <div>
            {users!.map(user => <UserDetail key={user.id} user={user} />)}
        </div>
    )
}