

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Titulo() {
  return (
    <span className={`${inter.className} text-xl md:text-2xl font-semibold whitespace-nowrap dark:text-white text-blue-900`}>
      MEDICINA LABORAL
    </span>
  );
}
