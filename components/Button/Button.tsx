import { JSX } from 'react';
import P from '../Text/P';

function Button(props : {
  text_fr : string, 
  text_en : string, 
  className? : string, 
  handleClick? : () => void, 
  svg? : JSX.Element, 
  type? : "submit" | "reset" | "button" | undefined,
  disabled? : boolean
}) {
  const text_fr = props.text_fr;
  const text_en = props.text_en;
  const className = props.className;
  const SVG = props.svg;
  const handleClick = props.handleClick;
  const type = props.type;
  const disabled = props.disabled;
  
  return (
      <button 
        type={type} 
        onClick={handleClick} 
        disabled={disabled}
        className={`flex gap-1.5 px-6 py-3 bg-secondary text-white border-1 border-white rounded-3xl cursor-pointer z-5 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      >
        { SVG }<P text_fr={text_fr} text_en={text_en}></P>  
      </button>
  )
}

export default Button