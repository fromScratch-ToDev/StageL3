"use client"
import { LangContext } from "@/context/Context";
import { useContext } from "react";


export default function H2(props : {text_fr : string |null, text_en : string| null , className? : string, no_padding? : boolean}) {
  const text_fr = props.text_fr;
  const text_en = props.text_en;
  const className = props.className;
  const no_padding = props.no_padding;
  const lang = useContext(LangContext);
  
  return (
    <h2 className={` ${!no_padding && "py-6 md:py-12" } font-merriweather text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl ${className}`}>
      {lang === "FR" ? text_fr : text_en}
    </h2>
  );
}
