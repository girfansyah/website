import Link from 'next/link';
import Img from 'next/image';
import cn from 'classnames';

const ProjectCard = ({
  isPartial,
  href,
  title,
  exlink,
  summary,
  icon,
  tags,
  ...props
}) => {
  return (
    <li
      className='group col-span-1 border border-gray-700 rounded-lg'
      {...props}>
      <Link href={href} passHref>
        <a>
          <div className='px-4 py-2 space-y-4 pl-3'>
            <div className={cn('flex items-start', icon && 'space-x-3')}>
              <div className='w-[10%] md:w-auto'>
                {icon && (
                  <div className='relative w-10 h-10 md:w-12 md:h-12'>
                    <Img
                      src={icon}
                      alt={title}
                      width='50'
                      height='50'
                      layout='responsive'
                    />
                  </div>
                )}
              </div>

              <div className='space-y-1'>
                <h3 className='text-md md:text-lg font-mono font-bolf leading-wide text-gray-300'>
                  {title}
                </h3>
                {summary && (
                  <p className='block flex-nowrap w-full text-base text-secondary truncate'>
                    {summary}
                  </p>
                )}
                {tags && (
                  <div className='space-x-2'>
                    {tags?.map((tag) => (
                      <p key={tag} className='text-secondary text-sm'>
                        {tag}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* <div className='flex justify-between items-center p-4 leading-5'>
            {icon && (
              <div className='flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full mr-2 md:mr-4'>
                <Img
                  src={icon}
                  alt={title}
                  width='50'
                  height='50'
                  layout='responsive'
                />
              </div>
            )}
            <div className='flex-grow overflow-hidden'>
              <h3 className='text-md md:text-lg font-mono font-medium leading-wide text-gray-300'>
                {title}
              </h3>
              {summary && (
                <p className='block flex-nowrap w-full text-sm text-secondary truncate'>
                  {summary}
                </p>
              )}
              {tags && (
                <div className='space-x-2'>
                  {tags?.map((tag) => (
                    <span key={tag} className='text-secondary text-xs'>
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div> */}
        </a>
      </Link>
    </li>
  );
};
export default ProjectCard;
