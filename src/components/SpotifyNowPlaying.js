/* eslint-disable @next/next/no-img-element */
import useSWR from 'swr';
import fetcher from '@lib/fetcher';
import { SpotifyIcon } from './Icons/LogoIcons';

const SpotifyNowPlaying = () => {
  const { data } = useSWR('/api/now-playing', fetcher);
  console.log(data);
  return (
    <div className='border-2 border-gray-500 rounded-2xl'>
      <div className='w-full'>
        <div className='flex items-center space-x-6 p-4'>
          <div className='flex items-center justify-center'>
            {data?.albumImageUrl ? (
              <div className='w-[100px] h-[100px] relative'>
                <div className={data?.isPlaying ? 'animate-spin-slow' : null}>
                  <img src={data.albumImageUrl} alt={data.title} />
                  <div className='z-[1] bg-white absolute w-full h-full top-0 origin-center scale-[0.2] rounded-full' />
                  <div className='z-[2] bg-black absolute w-full h-full top-0 origin-center scale-[0.07] rounded-full' />
                </div>
              </div>
            ) : (
              <div className='w-[100px] h-[100px] bg-gray-600 relative  rounded-full'>
                <div className='z-[1] bg-white absolute w-full h-full top-0 origin-center scale-[0.2] rounded-full' />
                <div className='z-[2] bg-black absolute w-full h-full top-0 origin-center scale-[0.07] rounded-full' />
              </div>
            )}
          </div>
          <div className='max-w-full truncate space-y-1'>
            {data?.songUrl ? (
              <a href={data.songUrl} target='_blank' rel='noopener noreferrer'>
                <div className='flex items-center space-x-1'>
                  <div>
                    <SpotifyIcon />
                  </div>
                  <p className='text-gray-200 max-w-max truncate text-sm font-bold hover:text-green-400'>
                    {data.title}
                  </p>
                </div>
              </a>
            ) : (
              <p className='text-gray-300 font-bold'>Not playing any song.</p>
            )}

            <div className='space-y-1'>
              <div>
                {/* name, type album*/}
                <p className='text-primary max-w-max truncate text-sm'>
                  <span className='text-xs font-bold uppercase'>
                    {data?.albumtype}
                  </span>{' '}
                  {data?.album ?? ''}
                </p>
              </div>
              <div>
                {/* artist */}
                <p className='text-primary max-w-max truncate text-sm'>
                  <span className='text-xs font-bold uppercase'>
                    {data?.artistUrl ? 'Artist :' : ''}
                  </span>{' '}
                  <a
                    href={`${data?.artistUrl ?? ''}`}
                    target='_blank'
                    rel='noopener noreferrer'>
                    {data?.artist ?? ''}
                  </a>
                </p>
              </div>
              <div>
                <div className='pl-1 my-2'>
                  {data?.isPlaying ? (
                    <div className='flex items-center space-x-2'>
                      <div className='relative w-3 h-3'>
                        <div className='w-full h-full bg-yellow-500 rounded-full animate-ping' />
                        <div className='w-full h-full bg-yellow-500 rounded-full absolute top-0' />
                      </div>
                      <p className='text-primary text-xs font-bold uppercase'>
                        Playing
                      </p>
                    </div>
                  ) : (
                    <div className='flex items-center space-x-2'>
                      <div className='w-3 h-3 relative'>
                        <div className='w-full h-full bg-yellow-500 rounded-full animate-ping' />
                        <div className='w-full h-full bg-yellow-500 rounded-full absolute top-0' />
                      </div>
                      <p className='text-primary text-xs font-bold uppercase'>
                        Paused
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div>
              <p className='text-primary text-xs'>
                Real-Time syncing with{' '}
                <a
                  href='https://developer.spotify.com/documentation/web-api/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-bold hover:text-green-400'>
                  Spotify API
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotifyNowPlaying;
