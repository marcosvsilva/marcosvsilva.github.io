import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';

interface CustomSocialIconProps {
  url: string;
  ariaLabel: string;
}

function CustomSocialIconDescrition({ url, ariaLabel }: CustomSocialIconProps) {
  return (
    <div className="lg:pl-9 my-2">
      <SocialIcon
        url={url}
        aria-label={ariaLabel}
        style={{ height: 30, width: 30, opacity: 0.7, marginRight: 20 }}
      />
      <Link href={url}>{ariaLabel}</Link>
    </div>
  );
}

export default CustomSocialIconDescrition;
