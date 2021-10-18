import cn from 'classnames';
import SocialCard from './SocialCard';
import SwitchButton from '@components/common/SwitchButton';
import { sosmed } from '@lib/constants';

const SocialSection = ({ isPartial }) => {
  const filterDB = isPartial ? sosmed.slice(0, 6) : sosmed;
  return (
    <section
      className={cn(
        'mb-6 max-w-3xl mx-auto px-4 sm:px-6 xl:px-8',
        isPartial ? 'pt-6' : 'pt-10 pb-24 lg:pb-16'
      )}>
      <h1
        className={cn(
          'text-xl md:text-2xl font-mono font-bold tracking-wide',
          isPartial ? 'text-secondary' : 'text-primary md:text-4xl'
        )}>
        Social Accounts
      </h1>
      <div className='flex-col items-center mt-3 w-full'>
        <ul
          className={cn(
            'grid grid-cols-2 sm:grid-cols-3 gap-2 my-2 mt-4 w-full',
            isPartial ? 'md:gap-3' : 'md-gap-6'
          )}>
          {filterDB.map((social) => (
            <SocialCard
              key={social.title}
              to={social.link}
              title={social.title}
              username={social.username}
              ispriority={social.isPriority.toString()}
              icon='true'>
              {social.icon}
            </SocialCard>
          ))}
        </ul>
      </div>
      <div className='pt-3 my-3 w-full leading-5 text-center'>
        <div className='flex justify-center text-indigo-300 animate-pulse'>
          <SwitchButton
            href={isPartial ? '/social' : '/#social'}
            type={isPartial ? 'right' : 'left'}
          />
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
