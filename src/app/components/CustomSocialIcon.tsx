import { SocialIcon } from 'react-social-icons';

interface CustomSocialIconProps {
  url: string;
  ariaLabel: string;
}

export function CustomSocialIcon({ url, ariaLabel }: CustomSocialIconProps) {
  return (
    <SocialIcon
      url={url}
      aria-label={ariaLabel}
      style={{ height: 30, width: 30, opacity: 0.7 }}
      bgColor="black"
    />
  );
}
