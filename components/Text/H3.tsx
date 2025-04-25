"use client"
import { LangContext } from "@/context/Context";
import { useContext } from "react";


export default function H3(props : {text_fr : string |null, text_en : string| null , className? : string, no_padding? : boolean}) {
  const text_fr = props.text_fr;
  const text_en = props.text_en;
  const className = props.className;
  const lang = useContext(LangContext);
  
  return (
    <h3 className={`py-2 md:py-4 xl:py-8 font-merriweather text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl ${className}`}>
      {lang === "FR" ? text_fr : text_en}
    </h3>
  );
}
