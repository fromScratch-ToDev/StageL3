import { PropsWithChildren } from "react";

export default function MainSection(props : PropsWithChildren) {
    return(
        <section className="px-8 sm:px-16 md:px-32 lg:px-48 xl:px-64 2xl:px-80 md:pb-8 flex-grow">
            {props.children}
        </section>
    )
}