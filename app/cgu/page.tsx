import H2 from '@/components/Text/H2'
import P from '@/components/Text/P'

const text_fr = `Ce site a pour objectif de présenter les œuvres d'un artiste peintre.
Les visiteurs peuvent utiliser le formulaire de contact pour envoyer un message.

L'utilisation du site est libre et gratuite.
Toute utilisation abusive du formulaire de contact est interdite.

Ce site peut contenir des liens vers d'autres sites externes ; nous ne sommes pas responsables de leur contenu.

Date de dernière mise à jour : 28 avril 2025.`

const text_en = `This website is intended to showcase the artworks of a painter.
Visitors may use the contact form to send a message.

Use of the website is free of charge.
Any abusive use of the contact form is prohibited.

This website may contain links to external sites; we are not responsible for their content.

Last updated: April 28, 2025.`

function CGU() {
  return (
    <>
        <H2 text_fr="Conditions générales d'utilisation" text_en="Terms of Service"></H2>
        <P text_fr={text_fr} text_en={text_en}></P>
    </>
  )
}

export default CGU