import clsx from 'clsx';
import Image from 'next/image';

import UfgLogo from './UfgLogo.jpg';

function Ufg() {
  return (
    <Image
      src={UfgLogo}
      alt="Marcos Silva"
      sizes={'2.25rem' as string}
      className={clsx('rounded-full bg-zinc-100 object-cover dark:bg-zinc-800', 'h-5 w-5')}
      priority
    />
  );
}

export default Ufg;
