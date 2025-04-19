'use client'

export default function Toggle(props : {lang : string, handleClick : () => void}){
    const lang = props.lang;

    if (lang === "FR") {
        return (
            <div onClick={props.handleClick} className="flex flex-row bg-secondary rounded-4xl border-1 border-secondary w-22.5 h-10 items-center gap-1.25 cursor-pointer">
            <button className="text-base bg-primary h-full w-12.5 rounded-full cursor-pointer">FR</button>
            <p className="text-base text-primary h-max cursor-pointer w-10">EN</p>
        </div>
        )
    } else {
        return (
            <div onClick={props.handleClick} className="flex flex-row bg-secondary rounded-4xl border-1 border-secondary w-22.5 h-10 items-center gap-1.25 cursor-pointer">
            <p className="text-base text-primary text-end h-max cursor-pointer w-10">FR</p>
            <button className="text-base bg-primary  h-full w-12.5 rounded-full cursor-pointer">EN</button>
        </div>
        )
    }
}