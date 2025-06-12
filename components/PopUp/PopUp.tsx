import Link from 'next/link';
import Button from '../Button/Button';
import P from '../Text/P';

export default function EmailConfirmationPopup(props : {isVisible:boolean}) {
    const isVisible = props.isVisible;

    if (!isVisible) return null;

    return (
        <>
        <div className='fixed inset-0 h-dvh w-screen backdrop-blur-sm z-1 flex items-end sm:items-center justify-center '>
            <div className='z-10 bg-primary flex flex-col gap-5 py-5 px-10 border-secondary border-2 shadow-2xl'>
                <P text_fr='Votre message a bien été transmis. Je vous répondrais dans les plus brefs délais.' text_en='Your message has been successfully sent. I will respond as soon as possible.'/>
                <Link href={"/"} className='w-fit rounded-3xl'>
                    <Button text_fr="Retourner à l'accueil" text_en="Go back to the homepage"/>
                </Link>
            </div>
        </div>
        </>
    );
}
