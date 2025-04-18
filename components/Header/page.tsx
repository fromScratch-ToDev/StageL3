import Menu from "./Menu/page";
import Toggle from "./Toggle/page";

export default function Header(props : {isAccueil? : boolean}) {
    const isAccueil = props.isAccueil;
    
    return(
        <div className="flex flex-row justify-between w-full">
            <div className="w-max">
                <p className="text-3xl font-merriweather">François Malespine</p>
                {! isAccueil && <p className="text-xl text-tertiary font-poppins">Espaces Intérieurs</p>}
            </div>
            <div className="flex flex-row gap-10 items-center">
                <Menu></Menu>
                <Toggle></Toggle>
            </div>
        </div>
    )
}