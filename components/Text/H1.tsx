import { LangContext } from "@/context/Context";
import { useContext } from "react";


export default function H1(props : {text_fr : string, text_en : string , className? : string }) {
  const text_fr = props.text_fr;
  const text_en = props.text_en;
  const className = props.className;

  const lang = useContext(LangContext);
  
  return (
    <h1 className={`titled-border text-tertiary font-poppins text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-center inline-block border-b-2 ${className}`}>
      {lang === "FR" ? text_fr : text_en}
    </h1>
  );
}
