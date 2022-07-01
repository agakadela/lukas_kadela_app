import cn from 'classnames';
import styles from './footertip.module.css';

const FooterTip = () => {
  return (
    <div className={cn('container', styles.container)}>
      <p className={cn('caption', styles.title)}>
        Copyright © 2022 - Lukas Kadela
      </p>
      <img src='/images/logo.svg' className={cn(styles.logo)} />
      <p className={cn('caption')}>Terms & Conditions | Privacy Policy </p>
    </div>
  );
};

export default FooterTip;
