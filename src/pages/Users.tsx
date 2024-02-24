import PageLayout from "../components/layout/PageLayout";
import {User} from "../types";
import fetcher from "../utils/fetcher";
import {UserDetail} from "../components/user/UserDetail";
import useSWR from "swr";

export default function Users() {
    const { data: users, isLoading, error } = useSWR<User[]>('/users', fetcher)

    if (error) {
        return (
            <PageLayout>
                <div>{error}</div>
            </PageLayout>
        )
    }

    if (isLoading || !users) {
        return (
            <PageLayout>
                <div>loading...</div>
            </PageLayout>
        )
    }

    return (
        <PageLayout>
            {
                users.map(user =>
                    <UserDetail key={user.id} user={user} />
                )
            }
        </PageLayout>
    )
}