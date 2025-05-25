import Button from '@/components/Button/Button';
import P from '@/components/Text/P';
import Close from '@/public/svg/Close';

interface PopUpProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm?: () => void;
    title?: string;
    message_fr?: string;
    message_en?: string;
    confirmLabel_fr?: string;
    confirmLabel_en?: string;
    cancelLabel_fr?: string;
    cancelLabel_en?: string;
    showConfirm?: boolean;
    redirectHref?: string;
}

const PopUp: React.FC<PopUpProps> = ({
    isOpen,
    onClose,
    onConfirm,
    title = "Confirmation",
    message_fr = "Êtes-vous sûr de vouloir continuer ?",
    message_en = "Are you sure you want to continue?",
    confirmLabel_fr = "Confirmer",
    confirmLabel_en = "Confirm",
    cancelLabel_fr = "Annuler",
    cancelLabel_en = "Cancel",
}) => {
    if (!isOpen) return null;

    return (
        <div className='fixed inset-0 h-dvh w-screen backdrop-blur-sm z-50 flex items-end sm:items-center justify-center'>
            <div className='z-10 bg-primary flex flex-col gap-5 py-5 px-10 border-secondary border-2 shadow-2xl relative'>
                <Close
                    className="absolute top-2 right-2 cursor-pointer"
                    handleClick={onClose}
                    aria-label="Fermer"
                />
                <h2 className="text-xl font-semibold mb-4">{title}</h2>
                <P text_fr={message_fr} text_en={message_en} />
                <div className="flex justify-between gap-2">
                    <Button
                        text_fr={cancelLabel_fr}
                        text_en={cancelLabel_en}
                        handleClick={onClose}
                    />
                    <Button
                        text_fr={confirmLabel_fr}
                        text_en={confirmLabel_en}
                        handleClick={onConfirm}
                    />
                </div>
            </div>
        </div>
    );
};

export default PopUp;