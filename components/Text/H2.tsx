import { PropsWithChildren } from "react"

export default function H2(props : PropsWithChildren){
    return(
        <h2 className="py-12 font-merriweather text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
            {props.children}
        </h2>
    )
}