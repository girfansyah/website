export const ArrowRight = ({ className }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className={className || 'h-6 w-6'}
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M14 5l7 7m0 0l-7 7m7-7H3'
    />
  </svg>
);

export const ArrowLeft = ({ className }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className={className || 'h-6 w-6'}
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M10 19l-7-7m0 0l7-7m-7 7h18'
    />
  </svg>
);

export const ArrowUpRight = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='18'
    height='18'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'>
    <path d='M18 6L6 18'></path>
    <path d='M8 6h10v10'></path>
  </svg>
);

export const ExternalLink = ({ className }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className={className || 'h-6 w-6'}
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
    />
  </svg>
);

export const LinkIcon = ({ className }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className={className || 'h-6 w-6'}
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'
    />
  </svg>
);

export const BadgeCheck = ({ className }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className={className || 'h-5 w-5'}
    viewBox='0 0 20 20'
    fill='currentColor'>
    <path
      fillRule='evenodd'
      d='M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
      clipRule='evenodd'
    />
  </svg>
);

export const CheckCircle = ({ className, stroke }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className={className || 'h-6 w-6'}
    fill='none'
    viewBox='0 0 24 24'
    stroke={stroke || '#fff'}>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
    />
  </svg>
);

export const CheckPlus = ({ stroke }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='h-6 w-6'
    fill='none'
    viewBox='0 0 24 24'
    stroke={stroke || '#000'}>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
    />
  </svg>
);
