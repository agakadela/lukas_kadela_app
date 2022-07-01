import cn from 'classnames';
import Breadcrumb from '../../../components/Breadcrumb';
import styles from './hero.module.css';
import { motion } from 'framer-motion';
import { item, variants } from '../../../variants/animation';
import ScrollAnimation from '../../../components/ScrollAnimation';
import Card from '../../../components/Card';

const items = [
  {
    icon: 'navigation',
    title: 'Address',
    subtitle: 'Emaus 22',
    text: '30-213 Krakow, POLAND',
    boolean: 'true',
  },
  {
    icon: 'mail-right',
    title: 'Email Address',
    subtitle: 'contact@lukaskadela.com',
    // text: 'contact@company.com',
    boolean: 'true',
  },
  {
    icon: 'call',
    title: 'Phone Numbers',
    subtitle: '0048 603 520 076',
    // text: '1-800-123-4567',
    boolean: 'true',
  },
];

const Hero = () => {
  return (
    <motion.div
      initial='hidden'
      animate='show'
      variants={variants}
      className={cn('section', styles.section)}
    >
      <div className={cn('container', styles.container)}>
        <div className={styles.content}>
          <Breadcrumb name='CONTACT' />
          <motion.h1 variants={item} className={cn('hero', styles.title)}>
            Contact
          </motion.h1>
        </div>

        <div className={styles.wrapper}>
          {items.map((item, index) => (
            <Card
              key={item.title + index}
              position='center'
              align='center'
              {...item}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
