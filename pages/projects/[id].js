import Layout from '../../components/Layout';
import { getAllDataIds, getNewData, getSortedData } from '../../lib/data';
import cn from 'classnames';
import Head from 'next/head';
import Date from '../../components/Date';
import styles from './id.module.css';
import Breadcrumb from '../../components/Breadcrumb';
import Link from 'next/link';
import Icon from '../../components/Icon';
import ScrollAnimation from '../../components/ScrollAnimation';

const projects = [
  {
    link: '/',
    image: '/images/09.jpg',
  },
  {
    link: '/',
    image: '/images/08.jpg',
  },
  {
    link: '/',
    image: '/images/07.jpg',
  },
  {
    link: '/',
    image: '/images/06.jpg',
  },
];

export async function getStaticPaths() {
  const paths = getAllDataIds('projects');

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const newData = await getNewData(params.id, 'projects');
  const allProjectsData = getSortedData('projects');

  return {
    props: {
      newData,
      allProjectsData,
    },
  };
}

const New = ({ newData, allProjectsData }) => {
  console.log(allProjectsData);
  return (
    <Layout>
      <Head>
        <title>{newData.title}</title>
      </Head>
      <div className={cn('section', styles.section)}>
        <div className={cn('container', styles.container)}>
          <div className={styles.content}>
            <div className={styles.breadcrumb}>
              <Link href='/'>
                <a className={cn('hairline-small', styles.breadcrumb_text)}>
                  HOME
                </a>
              </Link>
              <Icon name='arrow-right' />
              <p className={cn('hairline-small', styles.breadcrumb_tag)}>
                {newData.tag}
              </p>
              <Icon name='arrow-right' />
              <p className={cn('hairline-small', styles.breadcrumb_title)}>
                {newData.intro}
              </p>
            </div>
            <ScrollAnimation>
              <h1 className={cn('h2', styles.title)}>{newData.title}</h1>
            </ScrollAnimation>
            <div className={styles.breadcrumb}>
              <Link href='/'>
                <a className={cn('hairline-small', styles.author)}>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <rect width='24' height='24' rx='12' fill='#23262F' />
                    <rect
                      x='8'
                      y='8'
                      width='8'
                      height='8'
                      rx='4'
                      fill='#FCFCFD'
                    />
                  </svg>
                  URIOSTEGUI
                </a>
              </Link>
              /
              <Date dateString={newData.date} />/
              <p className={cn('hairline-small', styles.author)}>
                {newData.tag}
              </p>
            </div>
            <div className={styles.image_container}>
              <img className={styles.image} src={newData.image} />
            </div>

            <div
              className={cn('caption', styles.contentHtml)}
              dangerouslySetInnerHTML={{ __html: newData.contentHtml }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default New;
