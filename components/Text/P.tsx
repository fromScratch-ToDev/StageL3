"use client"
import { LangContext } from "@/context/Context";
import { useContext } from "react";


export default function P(props : {text_fr : string | undefined, text_en : string | undefined, className? : string, size? : string  }) {
  const text_fr = props.text_fr;
  const text_en = props.text_en;
  const className = props.className;
  const size = props.size ? props.size : "md"   
  const sizeMap: Record<string, string> = {
    xs: 'text-[8px] lg:text-[10px] xl:text-xs 2xl:text-sm',
    md: 'text-sm lg:text-base xl:text-lg 2xl:text-xl',
  };
  const lang = useContext(LangContext);

  return (
    <div className={`${sizeMap[size]} ${className} `}>
      {lang === "FR" ? 
      text_fr?.split("\n").map((phrase, index) => phrase === "" ? <div key={index} className="p-2.5"></div> : <p key={phrase.charAt(0)+index+phrase.charAt(1)}>{phrase}</p>) 
      : 
      text_en?.split("\n").map((phrase, index) => phrase === "" ? <div key={index} className="p-2.5"></div> : <p key={phrase.charAt(0)+index+phrase.charAt(1)}>{phrase}</p>)}
    </div>
  );
}
