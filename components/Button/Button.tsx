import { LangContext } from '@/context/Context';
import { JSX, useContext } from 'react';

function Button(props : {text_fr : string, text_en : string, className? : string, handleClick? : () => void, svg? : JSX.Element, type? : "submit" | "reset" | "button" | undefined}) {
  const text_fr = props.text_fr;
  const text_en = props.text_en;
  const className = props.className;
  const SVG = props.svg;
  const handleClick = props.handleClick;
  const lang = useContext(LangContext);
  const type = props.type;

  return (
      <button type={type} onClick={handleClick} className={`flex gap-1.5 px-6 py-3 bg-secondary text-white border-1 border-white rounded-3xl cursor-pointer ${className}`}>
        { SVG }{lang === "FR" ?  text_fr : text_en}
      </button>
  )
}

export default Button