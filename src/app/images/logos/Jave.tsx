import clsx from 'clsx';
import Image from 'next/image';

import JaveLogo from './JaveLogo.png';

function Jave() {
  return (
    <Image
      src={JaveLogo}
      alt="Marcos Silva"
      sizes={'2.25rem' as string}
      className={clsx('rounded-full bg-zinc-100 object-cover dark:bg-zinc-800', 'h-5 w-5')}
      priority
    />
  );
}

export default Jave;
