/* eslint-disable @next/next/no-img-element */

const icons = [
  { name: 'next js', path: '/icons/nextjs.svg', link: 'https://nextjs.org' },
  {
    name: 'tailwindcss',
    path: '/icons/tailwind.svg',
    link: 'https://tailwindcss.com',
  },
  { name: 'vercel', path: '/icons/vercel.svg', link: 'https://vercel.com' },
  { name: 'notion', path: '/icons/notion.svg', link: 'https://notion.so' },
  { name: 'github', path: '/icons/github.svg', link: 'https://github.com' },
];

const stylesP =
  'flex items-center space-x-1 font-mono text-sm text-white uppercase';

export default function Footer() {
  return (
    <footer className=' px-4 sm:px-6 lg:px-8'>
      <div className='max-w-3xl mx-auto items-start space-y-2 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden'>
        <div className='flex flex-col-reverse md:grid md:grid-cols-4 gap-4 items-start md:items-center'>
          <div className='space-y-1 md:col-span-2 whitespace-nowrap'>
            <div className='flex items-center space-x-2'>
              <p className={stylesP}>Built with</p>
              <div className='flex items-center space-x-2'>
                {icons.map((to) => (
                  <a
                    key={to.link}
                    href={to.link}
                    target='_blank'
                    rel='noreferrer'>
                    <img
                      src={to.path}
                      alt={to.name}
                      className='w-7 h-7 fill-white transform transition-all origin-center hover:scale-110'
                    />
                  </a>
                ))}
              </div>
            </div>
            <div className={stylesP}>
              <p>This website is also open sourceed on </p>
              <a
                href='https://github.com/girfansyah/website'
                target='_blank'
                rel='noreferrer'>
                <span className='underline inline-block text-blue-400 hover:text-blue-500'>
                  Github
                </span>
              </a>
            </div>
          </div>
          <div className='flex md:justify-end space-x-1 md:col-span-1'>
            <div className='flex flex-col space-y-2'>
              <p className={stylesP}>Comming soon</p>
            </div>
          </div>
          <div className='flex md:justify-end space-x-1 md:col-span-1'>
            <div className='flex flex-col space-y-2'>
              <p className={stylesP}>Comming soon</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
