import H2 from "@/components/Text/H2"
import P from "@/components/Text/P"

const text_fr = `Nous respectons votre vie privée.
Les seules données collectées via ce site sont celles que vous nous communiquez volontairement à travers le formulaire de contact.

Les informations collectées (nom, adresse email, message) sont utilisées uniquement pour répondre à votre demande.
Nous ne partageons vos données avec aucun tiers.
Aucune inscription à une newsletter ou utilisation commerciale de vos données n'est effectuée.

Si vous souhaitez demander la suppression de vos informations, veuillez nous contacter via le formulaire.

Date de dernière mise à jour : 28 avril 2025.`
const text_en = `We respect your privacy.
The only data collected through this website are those you voluntarily provide via the contact form.

The collected information (name, email address, message) is used solely to respond to your inquiry.
We do not share your data with any third parties.
There is no newsletter subscription or commercial use of your data.

If you wish to request the deletion of your information, please contact us through the form.

Last updated: April 28, 2025.`
function Politique_de_confidentialite() {
  return (
    <>
    <H2 text_fr="Politique de confidentialité" text_en="Privacy Policy"></H2>
    <P text_fr={text_fr} text_en={text_en}></P>
    </>
  )
}

export default Politique_de_confidentialite