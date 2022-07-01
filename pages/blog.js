import Layout from '../components/Layout';
import { Hero } from '../screens/Blog';

import { getSortedData } from '../lib/data';

export async function getStaticProps() {
  const allNewsData = getSortedData('news');

  return {
    props: {
      allNewsData,
    },
  };
}

const Blog = ({ allNewsData }) => {
  return (
    <Layout>
      <Hero allNewsData={allNewsData} />
    </Layout>
  );
};

export default Blog;
