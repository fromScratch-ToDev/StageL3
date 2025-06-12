"use client"
import { LangContext } from "@/context/Context";
import { useContext } from "react";

export default function P(props : {text_fr : string | undefined, text_en : string | undefined, className? : string, size? : string  }) {
  const text_fr = props.text_fr;
  const text_en = props.text_en;
  const className = props.className;
  const size = props.size ? props.size : "md"   
  const sizeMap: Record<string, string> = {
    xs: 'text-[0.5rem] lg:text-[0.625rem] xl:text-xs 2xl:text-sm',
    sm: 'text-xs lg:text-sm xl:text:base 2xl:text-lg',
    md: 'text-sm lg:text-base xl:text-lg 2xl:text-xl'
  };
  const lang = useContext(LangContext);

  const parseTextWithLinks = (text: string) => {
    const parts = text.split(/(<a>.*?<\/a>)/g);
    
    return parts.map((part, index) => {
      if (part.startsWith('<a>') && part.endsWith('</a>')) {
        const linkText = part.replace(/<\/?a>/g, '');
        return (
          <a key={index} href={linkText} className="underline text-blue-600 hover:text-blue-800">
            {linkText}
          </a>
        );
      }
      return part;
    });
  };

  const renderContent = (text: string | undefined) => {
    return text?.split("\n").map((phrase, index) => 
      phrase === "" ? 
        <div key={index} className="p-2.5"></div> : 
        <p key={phrase.charAt(0)+index+phrase.charAt(1)}>
          {parseTextWithLinks(phrase)}
        </p>
    );
  };

  return (
    <div className={`${sizeMap[size]} ${className}`}>
      {lang === "FR" ? renderContent(text_fr) : renderContent(text_en)}
    </div>
  );
}
