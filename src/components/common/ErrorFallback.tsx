import PageLayout from "../layout/PageLayout";

interface Props {
    error: Error
}

export default function ErrorFallback({error}: Props) {
    return (
        <PageLayout>
            <h1>Error!</h1>
            <div style={{color: 'red'}}>{error.message}</div>
        </PageLayout>
    )
}