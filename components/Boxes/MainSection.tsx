import { PropsWithChildren } from "react";

export default function MainSection(props : PropsWithChildren) {
    return(
        <section className="px-32 lg:px-48 xl:px-64 2xl:px-80 ">
            {props.children}
        </section>
    )
}