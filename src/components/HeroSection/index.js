import cn from 'classnames';
import { PolyWork } from '@components/Icons/LogoIcons';
import { ContactButton } from '@components/common/ContactButton';

export default function HeroSection({ isPartial, title, content }) {
  return (
    <div
      className={cn(
        isPartial
          ? 'px-4 sm:px-6 xl:px-8 pt-4 pb-10 md:pb-12 md:pt-6'
          : 'max-w-full mx-auto'
      )}>
      <div
        className={cn(
          'px-4 sm:px-6 py-4 md:flex-row md:space-y-0 space-y-2',
          isPartial
            ? 'max-w-xl mx-auto md:py-4 border-2 border-white rounded'
            : 'max-w-3xl mx-auto md:py-8'
        )}>
        <div className='flex flex-col space-y-4 max-w-2xl items-start'>
          {title && (
            <h1 className='font-bold font-mono text-3xl md:text-5xl tracking-wide text-gray-50'>
              {title}
            </h1>
          )}
          {content && (
            <p className='max-w-xl text-base text-gray-200'>{content}</p>
          )}
          {isPartial && (
            <a
              href='https://www.polywork.com/girfansyah'
              rel='noopener noreferrer'
              target='_blank'>
              <button className='flex gap-2 px-4 mt-4 py-1.5 space-x-3 text-xs md:text-sm border border-gray-500 hover:border-gray-600 rounded bg-gray-700 hover:bg-gray-600 transition-colors duration-300 text-gray-200 hover:text-gray-50 '>
                <PolyWork className='w-5 h-5' />
                My Changelog
              </button>
            </a>
          )}
        </div>
        {isPartial && (
          <div className='flex relative'>
            <div className='absolute right-[95px] top-[-30px] bottom-0'>
              <ContactButton href='mailto:gilangoi.go@gmail.com' />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
