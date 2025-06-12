'use client'

import { LangContext } from '@/context/Context';
import { useForm, ValidationError } from '@formspree/react';
import Link from 'next/link';
import { useContext } from 'react';
import Button from '../Button/Button';
import H2 from '../Text/H2';
import P from '../Text/P';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xvgazjjz");
  const lang = useContext(LangContext);
  if (state.succeeded) {
      return (
        <div className='flex flex-col justify-center items-center gap-5 h-[60vh]'>
          <P text_fr='Merci pour votre message!' text_en='Thanks for your message!'></P>
          <Link href="/"><Button text_fr="Retourner à l'accueil" text_en='Go back to homepage'></Button></Link>
        </div>
    )
  }
 
  return (
    <>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <H2 className="mb-4 font-bold text-center font-merriweather" text_fr={"Contactez-moi"} text_en={"Contact Me"} no_padding={true}></H2>
          <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                  <label htmlFor="email" className="block mb-2 text-sm md:text-base xl:text-lg font-medium">{lang === "FR" ? "Votre email" : "Your email"}</label>
                  <input type="email" id="email" name="email" className="block p-2.5 w-full text-sm rounded-lg border border-secondary shadow-sm focus:outline focus:outline-secondary " placeholder="exemple@gmail.com" required/>
                  <ValidationError  prefix="Email" field="email" errors={state.errors}/>
              </div>
          
              <div className="sm:col-span-2">
                  <label htmlFor="message" className="block mb-2 text-sm md:text-base xl:text-lg font-medium ">{lang === "FR" ? "Votre message" : "Your message"}</label>
                  <textarea id="message" name="message" rows={6} className="block p-2.5 w-full text-sm rounded-lg shadow-sm border focus:outline focus:outline-secondary " placeholder={lang === "FR" ? "Votre message..." : "Your message ..."} required></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              <Button type="submit" text_fr="Envoyer l'email" text_en="Send email" className="shadow-sm"></Button>

          </form>
      </div>
    </>
  )
}
