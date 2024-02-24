import {User} from "../types";
import fetcher from "../utils/fetcher";
import {UserDetail} from "../components/user/UserDetail";
import useSWR from "swr";
import {useErrorBoundary} from "react-error-boundary";

export default function Users() {
    const { data: users, error } = useSWR<User[]>('/users', fetcher, {suspense: true})
    const {showBoundary} = useErrorBoundary()

    if (error) {
        showBoundary(error)
    }

    return (
        <div>
            {users!.map(user => <UserDetail key={user.id} user={user} />)}
        </div>
    )
}