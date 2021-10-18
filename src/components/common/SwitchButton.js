import Link from 'next/link';
import { ArrowRight, ArrowLeft } from '@components/Icons/HeroIcons';

const SwitchButton = ({ href, type, label }) => {
  return (
    <Link href={href || '#'}>
      <a className='align-bottom cursor-pointer' aria-label={href}>
        {label && <span className='text-md'>{label}</span>}
        {type && (
          <span className='text-lg align-bottom'>
            {type === 'right' && <ArrowRight />}
            {type === 'left' && <ArrowLeft />}
          </span>
        )}
      </a>
    </Link>
  );
};

export default SwitchButton;
