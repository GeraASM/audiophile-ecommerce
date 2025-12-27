export function Wrapper ({children}: {children: React.ReactNode}) {
    return <section className="px-4 md:px-10 xl:px-40 my-[100px]">
        {children}
    </section>
}


export function WrapperProduct({children}: {children: React.ReactNode}) {
    return <section className="px-6 md:px-10 xl:px-40">
        {children}
    </section>
}