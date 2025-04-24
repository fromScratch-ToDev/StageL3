import { LangContext } from "@/context/Context";
import { useContext } from "react";
import Button from "../Button/Button";
import H2 from "../Text/H2";

export default function ContactForm() {
  const lang = useContext(LangContext);


  function handleAction(formData : FormData){
    console.log("envoyer");
    console.log(formData.get("email"));
    console.log(formData.get("subject"));
    console.log(formData.get("message"));
  }

  return (
    <section className="">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <H2 className="mb-4 font-bold text-center font-merriweather" text_fr={"Contactez-moi"} text_en={"Contact Me"} no_padding={true}></H2>
          <form action={handleAction} className="space-y-8">
              <div>
                  <label htmlFor="email" className="block mb-2 text-sm md:text-base xl:text-lg font-medium ">{lang === "FR" ? "Votre email" : "Your email"}</label>
                  <input type="email" id="email" name="email" className="block p-2.5 w-full text-sm rounded-lg border border-secondary shadow-sm focus:outline focus:outline-secondary " placeholder="exemple@gmail.com" required/>
              </div>
              <div>
                  <label htmlFor="subject" className="block mb-2 text-sm md:text-base xl:text-lg font-medium ">{lang === "FR" ? "Sujet" : "Subject"}</label>
                  <input type="text" id="subject" name="subject" className="block p-2.5 w-full text-sm rounded-lg border shadow-sm focus:outline focus:outline-secondary " placeholder={lang === "FR" ? "De quoi souhaitez vous parler" : "What would you like to talk about?"} required/>
              </div>
              <div className="sm:col-span-2">
                  <label htmlFor="message" className="block mb-2 text-sm md:text-base xl:text-lg font-medium ">{lang === "FR" ? "Votre message" : "Your message"}</label>
                  <textarea id="message" name="message" rows={6} className="block p-2.5 w-full text-sm rounded-lg shadow-sm border focus:outline focus:outline-secondary " placeholder={lang === "FR" ? "Votre message..." : "Your message ..."} required></textarea>
              </div>
              <Button type="submit" text_fr="Envoyer l'email" text_en="Send email" className="shadow-sm"></Button>

          </form>
      </div>
    </section>
  )
}
