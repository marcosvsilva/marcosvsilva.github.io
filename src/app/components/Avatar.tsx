import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import avatarImage from '../images/avatar/avatar.jpg';

type AvatarProps = {
  large?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

function Avatar({ large = false, className, style, ...props }: AvatarProps) {
  return (
    <Link
      style={style}
      href="/"
      aria-label="Home"
      className={clsx(className, 'pointer-events-auto')}
      {...props}
    >
      <Image
        src={avatarImage}
        alt="Marcos Silva"
        sizes={large ? ('4rem' as string) : ('2.25rem' as string)}
        className={clsx('rounded-full bg-zinc-100 object-cover dark:bg-zinc-800', large ? 'h-16 w-16' : 'h-9 w-9')}
        priority
      />
    </Link>
  );
}

export default Avatar;
