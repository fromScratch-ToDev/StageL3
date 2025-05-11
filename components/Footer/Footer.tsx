import Link from 'next/link'
import P from '../Text/P'

function Footer() {
  return (
    <footer className='p-2.5 block md:flex md:flex-row-reverse self-start justify-between w-screen '>
      <div className='md:px-5 block md:flex gap-5 justify-between ' >
        <Link href="/politique_de_confidentialite"><P size='xs' text_fr='Politique de confidentialité' text_en='Privacy Policy'></P></Link>
        <Link href="/cgu"><P size='xs' text_fr='Conditions d’utilisation' text_en='Terms of Service'></P></Link>
      </div>
      <P size='xs' text_fr='2025 © François Malespine.  Tous droits réservés.' text_en='2025 © François Malespine. All rights reserved.' className='ml-0'></P>
    </footer>
  )
}

export default Footer