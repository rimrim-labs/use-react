interface Props {
    children: React.ReactNode
}

export default function PageLayout({children}: Props) {
    return <>
        <header>
            This is a sample header.
        </header>
        <section>
            <h1>This is a sample title.</h1>
            <div>{children}</div>
        </section>
        <footer>
            This is a sample footer
        </footer>
    </>

}