const AboutSection = () => {
  return (
    <section>
      <article className='max-w-3xl mx-auto px-4 sm:px-6 xl:px-8 pt-10 pb-24 lg:pb-16'>
        <h1 className='font-bold font-mono text-3xl md:text-5xl tracking-wide mb-8'>
          About me
        </h1>
        <div className='space-y-2'>
          <p className='leading-relaxed'>
            Hey, I`m Gilang. I`m a Frontend Developer from Indonesia. I
            graduared from{' '}
            <a
              href='https://unas.ac.id'
              target='_blank'
              rel='noopener noreferrer'
              className='font-bold text-blue-400 hover:text-blue-600'>
              UNAS
            </a>{' '}
            majored in Computer Science.
          </p>
          <p className='leading-relaxed'>
            I started off teaching myself design and web development. The
            emergence of Javascript frameworks propelled my skills to full stack
            development. Love open source & Web 3.0 towards the future of the
            world.
          </p>
        </div>
      </article>
    </section>
  );
};

export default AboutSection;
