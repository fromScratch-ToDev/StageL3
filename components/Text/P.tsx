import { LangContext } from "@/context/Context";
import { useContext } from "react";


export default function P(props : {text_fr : string, text_en : string , className? : string, size? : string  }) {
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
    <p className={`${sizeMap[size]} ${className}`}>
      {lang === "FR" ? text_fr : text_en}
    </p>
  );
}
