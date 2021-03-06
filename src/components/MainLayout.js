import { Fragment } from 'react';
import Header from '@components/Header';
import { motion } from 'framer-motion';
import Footer from '@components/Footer';

const variants = {
  initial: {
    opacity: 0,
    y: 32,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.61, 1, 0.88, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -32,
    transition: {
      duration: 0.4,
      ease: [0.61, 1, 0.88, 1],
    },
  },
};

export default function MainLayout(props) {
  const { children } = props;
  return (
    <Fragment>
      <Header />
      <motion.main
        className='flex-grow'
        initial='initial'
        animate='enter'
        exit='exit'
        variants={variants}
        role='main'>
        {children}
      </motion.main>
      <Footer />
    </Fragment>
  );
}
