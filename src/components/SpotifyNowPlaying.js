const SpotifyNowPlaying = () => {
  return (
    <div className='border-2 border-secondary rounded-2xl'>
      <div className='w-full'>
        <div className='flex items-center space-x-6 p-4'>
          <div className='flex items-center justify-center'>
            {/* tape playing  ? :*/}
            <div className='w-[100px] h-[100px] bg-gray-700 relative rounded-full'>
              <div className='z-[1] bg-white absolute w-full h-full top-0 origin-center scale-[0.2] rounded-full' />
              <div className='z-[2] bg-black absolute w-full h-full top-0 origin-center scale-[0.07] rounded-full' />
            </div>
            {/* end tape */}
          </div>
          <div className='max-w-full truncate space-y-1'>
            {/* song  ? :*/}
            <p className='text-gray-300 font-bold'>Not playing any song.</p>
            {/* end song  */}
            <div className='space-y-1'>
              <div>
                {/* name, type album*/}
                <p className='text-primary max-w-max truncate text-sm'>
                  <span className='text-xs font-bold uppercase'></span>
                </p>
              </div>
              <div>
                {/* artist */}
                <p className='text-primary max-w-max truncate text-sm'>
                  <span className='text-xs font-bold uppercase'></span>
                </p>
              </div>
              <div>
                <div className='pl-1 my-2'>
                  {/* play? */}
                  <div className='flex items-center space-x-2'>
                    <div className='w-3 h-3 relative'>
                      <div className='w-full h-full bg-yellow-500 rounded-full animate-ping' />
                      <div className='w-full h-full bg-yellow-500 rounded-full absolute top-0' />
                    </div>
                    <p className='text-primary text-xs font-bold uppercase'>
                      Paused
                    </p>
                  </div>
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
