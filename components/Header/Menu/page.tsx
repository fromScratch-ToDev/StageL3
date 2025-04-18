import Link from "next/link"
export default function Menu(){

    return(  <>
    <menu className="flex flex-row gap-5 text-2xl items-center">
        <li><Link href="/">Accueil</Link></li>
        <li><Link href="/">Galeries</Link></li>
        <li><Link href="/">Expositions</Link></li>
        <li><Link href="/">Biographie</Link></li>
        <li><Link href="/">Contact</Link></li>
    </menu>

        </>
    )
}