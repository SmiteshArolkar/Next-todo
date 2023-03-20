import Header from "./Header"

export default function Layout(props)
{
    const { children }  = props
    return (
        <div className="flex flex-col min-h-screen relative bg-slate-900">
            <Header></Header>
            <main className="flex-1  bg-yellow-50">
            {children}
            </main>
        </div>
    )
}