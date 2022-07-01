import styles from './hero.module.css';
import cn from 'classnames';
// import Stats from './Stats';
import { motion } from 'framer-motion';
import { variants, item } from '../../../variants/animation';
import Image from 'next/image';
import Link from 'next/link';
import { Link as AnchorLink } from 'react-scroll';

// const stats = [
//   {
//     title: '+84',
//     text: 'Clients worldwide',
//   },
//   {
//     title: '120',
//     text: 'Projects done',
//   },
// ];

const Hero = () => {
  return (
    <div className={cn('section', styles.section)}>
      <div className={cn('container', styles.container)}>
        <motion.div
          initial='hidden'
          animate='show'
          variants={variants}
          className={styles.content}
        >
          <motion.span variants={item} className={cn('hairline', styles.span)}>
            Ph. D.
          </motion.span>
          <motion.h1 variants={item} className={cn('hero', styles.title)}>
            {'LUKAS KADELA'}
          </motion.h1>
          <motion.p variants={item} className={cn('body', styles.subtitle)}>
            Ph. D. Historic preservation specjalist with{' '}
            <span className={cn('body-bold', styles.text)}>15 years</span> of
            experience in field
          </motion.p>
          <div className={styles.wrapper}>
            <Link href='/contact'>
              <a>
                <motion.button
                  variants={item}
                  className={cn('button', styles.button)}
                >
                  Let&apos;s talk
                </motion.button>
              </a>
            </Link>
            <AnchorLink to='projects' offset={-128} smooth={true}>
              <motion.button
                variants={item}
                className={cn('button button-stroke', styles.button)}
              >
                Projects
              </motion.button>
            </AnchorLink>
          </div>

          {/* <div className={styles.stats_wrapper}>
            {stats.map((item, index) => (
              <motion.div variants={item} key={item.title + index}>
                <Stats variants={item} key={index} {...item} />
              </motion.div>
            ))}
          </div> */}
        </motion.div>

        <div className={styles.image_container}>
          <Image
            className={styles.image}
            src='/images/avatar.png'
            layout='fill'
            objectFit='cover'
            alt='Lukas Kadela hero photo'
          />
          <div className={styles.overlay} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
