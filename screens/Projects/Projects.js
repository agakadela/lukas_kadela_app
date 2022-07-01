import cn from 'classnames';
import Link from 'next/link';
import Item from '../../components/News/Item';
import ScrollAnimation from '../../components/ScrollAnimation';
import Tag from '../../components/Tag';
import TextOverlap from '../../components/TextOverlap';
import styles from './projects.module.css';

const Projects = ({ allProjectsData }) => {
  console.log(allProjectsData);
  return (
    <div id='projects' className={cn('section section-pb')}>
      <div className={cn('container', styles.container)}>
        <div className={styles.upper_content}>
          <div className={styles.content}>
            <Tag number='02' background='#cabdff' />
            <TextOverlap title='Projects' text='Projects' />
          </div>
          <Link href='/portfolio'>
            <a className={cn('button-small', styles.button)}>View All</a>
          </Link>
        </div>

        <div className={styles.wrapper}>
          {allProjectsData.map((item, index) => (
            <ScrollAnimation key={item.title + index}>
              <Link href={`/projects/${item.id}`}>
                <a>
                  <Item {...item} />
                </a>
              </Link>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
