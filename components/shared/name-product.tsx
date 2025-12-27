interface NameProduct {
    name: string;
}
export default function NameProduct({name}: NameProduct) {
    return (
        <section className="h-[96px] bg-very-dark-gray grid place-items-center">
            <h4 className="h4 text-white uppercase">
                {name}

            </h4>
        </section>
    )
}