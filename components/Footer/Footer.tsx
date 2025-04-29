import Link from 'next/link'
import P from '../Text/P'

function Footer() {
  return (
    <footer className='p-2.5 self-start flex justify-between w-screen'>
      <P size='xs' text_fr='2025 © François Malespine.  Tous droits réservés.' text_en='2025 © François Malespine. All rights reserved.' className='ml-0'></P>
      <div className='px-5 flex gap-5' >
        <Link href="/politique_de_confidentialite"><P size='xs' text_fr='Politique de confidentialité' text_en='Privacy Policy'></P></Link>
        <Link href="/cgu"><P size='xs' text_fr='Conditions d’utilisation' text_en='Terms of Service'></P></Link>
      </div>
    </footer>
  )
}

export default Footer