import PageLayout from "../components/layout/PageLayout";
import {User} from "../types";
import fetcher from "../utils/fetcher";
import {UserDetail} from "../components/user/UserDetail";
import useSWR from "swr";
import {Suspense} from "react";
import Loading from "../components/common/Loading";

export default function Users() {
    const { data: users, isLoading, error } = useSWR<User[]>('/users', fetcher)

    if (error) {
        return (
            <PageLayout>
                <div>{error.message}</div>
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
            <Suspense fallback ={<Loading />}>
            {
                users.map(user =>
                    <UserDetail key={user.id} user={user} />
                )
            }
            </Suspense>
        </PageLayout>
    )
}