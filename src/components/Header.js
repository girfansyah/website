import { useRouter } from 'next/router';
import Link from 'next/link';
import Img from 'next/image';
import cn from 'classnames';

const links = [
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
  { name: 'Snippets', path: '/snippets' },
  { name: 'About', path: '/about' },
];

const Header = () => {
  const router = useRouter();
  const pathname = router.pathname.split('/[')[0]; // active paths on dynamic router

  return (
    <header className='sticky top-0 z-30 bg-black bg-opacity-60 h-[72px] backdrop-blur'>
      <nav
        className='flex items-center justify-between max-w-3xl p-4 mx-auto transition ease-in'
        role='navigation'
        aria-label='main-navigation'
        data-cy='nav-bar'>
        <Link href='/' passHref>
          <a className='w-10 h-10 rounded-full'>
            <Img
              src='/profile.png'
              alt='logo girfansyah'
              width='40'
              height='40'
              layout='responsive'
            />
          </a>
        </Link>
        <div className='flex items-center space-x-2'>
          <ul className='flex group space-x-2'>
            {links.map(({ name, path }) => (
              <li
                key={name}
                className={cn(
                  pathname === path
                    ? 'bg-gray-600 text-gray-50'
                    : 'text-gray-300',
                  'rounded items-center py-2 px-2 md:px-4 leading-none font-semibold text-sm md:text-base whitespace-nowrap group-hover:text-gray-50 hover:bg-gray-600 transition'
                )}>
                <a href={path}>{name}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
