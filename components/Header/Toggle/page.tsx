'use client'

export default function Toggle(){

    function handleClick(e : React.MouseEvent<HTMLDivElement>){
        const div = e.currentTarget; 
        const p = div.children[0].tagName == "P"? div.children[0] : div.children[1]; 
        const button = div.children[0].tagName == "BUTTON"? div.children[0] : div.children[1]; 
        button.textContent = button.textContent == "FR" ? "EN" : "FR";
        p.textContent = p.textContent == "FR" ? "EN" : "FR";
        if (p.classList.contains("text-end")){ 
            p.classList.remove("text-end")
        } else {
            p.classList.add("text-end");
        } 
        div.appendChild(div.children[0]);
    }

    return (
        <div onClick={(e) => handleClick(e)}  className="flex flex-row bg-secondary rounded-4xl border-1 border-secondary w-22.5 h-10 items-center gap-1.25 cursor-pointer">
            <button className="text-base bg-primary h-full w-12.5 rounded-full cursor-pointer">FR</button>
            <p className="text-base text-primary h-max cursor-pointer w-10">EN</p>
        </div>
    )
}