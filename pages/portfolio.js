import Layout from '../components/Layout';
import { Hero } from '../screens/Projects';

import { getSortedData } from '../lib/data';

export async function getStaticProps() {
  const allProjectsData = getSortedData('portfolio');
  console.log(allProjectsData);
  return {
    props: {
      allProjectsData,
    },
  };
}

const Blog = ({ allProjectsData }) => {
  return (
    <Layout>
      <Hero allProjectsData={allProjectsData} />
    </Layout>
  );
};

export default Blog;
