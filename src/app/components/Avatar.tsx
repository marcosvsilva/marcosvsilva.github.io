import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import avatarImage from '../images/avatar/avatar.jpg';

type AvatarProps = {
  large?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

function Avatar({ large = false, className, style }: AvatarProps) {
  return (
    <Link
      href="/"
      aria-label="Home"
      className={clsx(className, 'pointer-events-auto')}
    >
      <Image
        src={avatarImage}
        alt="Marcos Silva"
        width={large ? 64 : 36}
        height={large ? 64 : 36}
        style={style}
        className={clsx('rounded-full bg-zinc-100 object-cover dark:bg-zinc-800', large ? 'h-16 w-16' : 'h-9 w-9')}
      />
    </Link>
  );
}

export default Avatar;
