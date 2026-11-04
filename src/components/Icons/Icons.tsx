import type { ReactNode, SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (children: ReactNode, { size = 24, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    {children}
  </svg>
);

export const ShieldIcon = (p: IconProps) =>
  base(
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </>,
    p,
  );

export const TruckIcon = (p: IconProps) =>
  base(
    <>
      <path d="M3 6h11v9H3z" />
      <path d="M14 9h4l3 3v3h-7" />
      <circle cx="7.5" cy="17.5" r="1.8" />
      <circle cx="17.5" cy="17.5" r="1.8" />
    </>,
    p,
  );

export const CardIcon = (p: IconProps) =>
  base(
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18M6.5 15h4" />
    </>,
    p,
  );

export const SearchIcon = (p: IconProps) =>
  base(
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M16.5 16.5L21 21" />
    </>,
    p,
  );

export const BoxIcon = (p: IconProps) =>
  base(
    <>
      <path d="M4 8l2-4h12l2 4v11H4z" />
      <path d="M4 8h16" />
      <path d="M14.5 12.5h-5M12 10l-2.5 2.5L12 15" />
    </>,
    p,
  );

export const HeartIcon = (p: IconProps) =>
  base(<path d="M12 20s-7-4.6-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.4-7 10-7 10z" />, p);

export const UserIcon = (p: IconProps) =>
  base(
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="10" r="3" />
      <path d="M6.5 18c1.3-2.2 3.2-3 5.5-3s4.2.8 5.5 3" />
    </>,
    p,
  );

export const CartIcon = (p: IconProps) =>
  base(
    <>
      <path d="M3 4h2.5l2 11h10l2-8H7" />
      <circle cx="9" cy="19" r="1.2" />
      <circle cx="17" cy="19" r="1.2" />
    </>,
    p,
  );

export const CrownIcon = (p: IconProps) =>
  base(<path d="M3 8l4.5 4L12 5l4.5 7L21 8l-2 11H5z" />, p);

export const ChevronLeftIcon = (p: IconProps) => base(<path d="M15 6l-6 6 6 6" />, p);
export const ChevronRightIcon = (p: IconProps) => base(<path d="M9 6l6 6-6 6" />, p);
export const CloseIcon = (p: IconProps) => base(<path d="M6 6l12 12M18 6L6 18" />, p);

export const InstagramIcon = (p: IconProps) =>
  base(
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r=".6" fill="currentColor" />
    </>,
    p,
  );

export const FacebookIcon = (p: IconProps) =>
  base(<path d="M14 8.5h2.5V4.5H14a4 4 0 00-4 4V11H7.5v4H10v5.5h4V15h2.5l.5-4H14V8.8c0-.2.1-.3.3-.3z" />, p);

export const LinkedinIcon = (p: IconProps) =>
  base(
    <>
      <path d="M5 9.5h3V19H5z" />
      <circle cx="6.5" cy="6" r="1.5" />
      <path d="M10.5 9.5h3v1.4c.5-.9 1.6-1.7 3.2-1.7 2.8 0 3.3 1.9 3.3 4.3V19h-3v-4.8c0-1.1-.1-2.2-1.5-2.2s-1.5 1.1-1.5 2.2V19h-3z" />
    </>,
    p,
  );
