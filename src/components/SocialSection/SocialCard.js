import { BadgeCheck } from '@components/Icons/HeroIcons';

const SocialCard = (props) => {
  const { children, to, title, username, icon, ispriority } = props;
  return (
    <li
      className='group col-span-1 cursor-pointer p-2 border-gray-700 rounded-lg border-2 hover:border-dashed hover:border-gray-400'
      {...props}>
      <a href={to} rel='noopener noreferrer' target='_blank'>
        <div className='flex items-center leading-5 text-left no-underline '>
          {icon && (
            <div className='box-border flex flex-shrink-0 justify-center mr-4 w-8 text-3xl text-left  text-gray-400 group-hover:text-gray-200'>
              {children}
            </div>
          )}
          <div className='overflow-hidden text-left '>
            <h4 className='inline-flex items-center text-sm font-medium leading-normal text-gray-300 group-hover:text-gray-100'>
              {title}
              {ispriority === 'true' && (
                <span className='pl-2 text-green-400'>
                  <BadgeCheck className='h-5 w-5' />
                </span>
              )}
            </h4>
            <p className='block flex-nowrap w-full text-xs text-gray-400 group-hover:text-gray-200 group-hover:underline truncate whitespace-nowrap'>
              {username}
            </p>
          </div>
        </div>
      </a>
    </li>
  );
};

export default SocialCard;
