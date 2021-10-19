import Link from 'next/link';
import cn from 'classnames';
import ProjectCard from './ProjectCard';
import { ArrowUpRight } from '@components/Icons/HeroIcons';
import SwitchButton from '@components/common/SwitchButton';

const fakerData = [
  {
    exlink: '/',
    title: 'Comming soon',
    summary: ' 👾',
  },
  {
    exlink: '/',
    title: 'Comming soon',
    summary: '👾',
  },
  {
    exlink: '/',
    title: 'Comming soon',
    summary: '👾',
  },
  {
    exlink: '/',
    title: 'Comming soon',
    summary: '👾',
  },
];

const ProjectSection = ({ isPartial }) => {
  const filterDB = isPartial ? fakerData.slice(0, 3) : fakerData.slice(0, 1);
  return (
    <section id='projects'>
      <div
        className={cn(
          'max-w-3xl mx-auto px-4 sm:px-6 xl:px-8',
          !isPartial ? 'pb-24 lg:pb-16' : 'pb-8 pt-6'
        )}>
        {isPartial ? (
          <div className='flex items-center space-x-2'>
            <h2 className='text-xl md:text-2xl font-mono font-bold text-secondary tracking-wide'>
              Projects
            </h2>
            <div className='flex items-center px-2 py-1 space-x-1 font-mono text-gray-900 font-bold text-xs bg-gray-50 cursor-pointer'>
              <Link href='/projects' passHref>
                <a className='rainbow-text-hover'>SEE ALL</a>
              </Link>
              <ArrowUpRight />
            </div>
          </div>
        ) : null}
        <div className={cn('flex flex-col mt-3 w-full')}>
          <ul className='grid grid-cols-1 gap-4'>
            {filterDB.map((data, id) => (
              <ProjectCard
                key={id}
                href={data.exlink}
                title={data.title}
                icon={data.icon}
                summary={data.summary}
                tags={data.tags}
              />
            ))}
          </ul>
        </div>
        {!isPartial && (
          <div className='pt-3 my-3 w-full leading-5 text-center'>
            <div className='flex justify-center text-indigo-300 animate-pulse'>
              <SwitchButton
                href={isPartial ? null : '/#projects'}
                type={isPartial ? null : 'left'}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectSection;
