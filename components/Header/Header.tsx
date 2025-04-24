"use client"

import { usePathname } from 'next/navigation';
import P from "../Text/P";
import HeaderHome from "./HeaderHome";
import Menu from './Menu';

export default function Header() {
    const pathname = usePathname();
    const isHome = pathname === '/';
    
    if (isHome) {
        return(
            <HeaderHome>
                <div className="flex flex-row justify-between w-full pt-4 md:pt-6 px-3 sm:px-6 md:px-12">
                <div className="w-1/3 min-w-38">
                    <h2 className=" lg:text-lg xl:text-xl 2xl:text-2xl ">François Malespine</h2>
                </div>
                    <div  className="w-2/3 max-w-200">
                        <div className="">
                            <Menu></Menu>
                        </div>
                    </div>
                </div>
            </HeaderHome>
        )
    }

    return(
        <div className="flex flex-row justify-between w-full pt-4 md:pt-6 px-3 sm:px-6 md:px-12">
            <div className="w-1/3 min-w-38">
                <h2 className=" lg:text-lg xl:text-xl 2xl:text-2xl ">François Malespine</h2>
                <P text_fr="Espaces Intérieurs" text_en="Interior Spaces" className="text-tertiary font-poppins" size="sm"></P>
            </div>
            <div  className="w-2/3 max-w-200">
                <div className="">
                    <Menu></Menu>
                </div>
            </div>
        </div>
    )
}