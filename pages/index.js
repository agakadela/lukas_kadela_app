import React from 'react';
import Layout from '../components/Layout';
import { getSortedData } from '../lib/data';
import { Hero, Projects, Services } from '../screens/Home';

export async function getStaticProps() {
  const allProjectsData = getSortedData('projects');
  console.log(allProjectsData);
  return {
    props: {
      allProjectsData,
    },
  };
}
export default function Home({ allProjectsData }) {
  return (
    <Layout>
      <Hero />
      <Services />
      <Projects number='02' allProjectsData={allProjectsData} />
    </Layout>
  );
}
