import { LangContext } from '@/context/Context';
import { useContext } from 'react';

function Button(props : {text_fr : string, text_en : string, className? : string, handleClick? : () => void}) {
  const text_fr = props.text_fr;
  const text_en = props.text_en;
  const className = props.className;
  const handleClick = props.handleClick;
  const lang = useContext(LangContext);

  return (
    <button onClick={handleClick} className={`px-6 py-3 bg-secondary text-white border-1 border-white rounded-3xl cursor-pointer ${className}`}>
      {lang === "FR" ?  text_fr : text_en}
    </button>
  )
}

export default Button