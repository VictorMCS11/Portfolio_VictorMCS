import { FC } from 'react';
import documentPDF from '../assets/cv.pdf'; // Importa el PDF

const OpenPDF: FC = () => {
  const handleOpenPDF = () => {
    window.open(documentPDF, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleOpenPDF}
      className="z-20 fixed right-5 bottom-5 w-max rounded-[15px] px-4 py-5 border-2 border-secondary dark:bg-tertiary bg-primary font-bold dark:text-primary text-tertiary transform duration-200 hover:text-primary dark:hover:bg-secondary hover:bg-secondary"
    >
      Abrir CV en PDF
    </button>
  );
};

export default OpenPDF;