import React from 'react';
import CTA from '../components/CTA';
import Layout from '../components/Layout';
import News from '../components/News';
import { getSortedNewsData } from '../lib/news';
import { Clients, Hero, Projects, Services } from '../screens/Home';

export async function getStaticProps() {
  const allNewsData = getSortedNewsData();

  return {
    props: {
      allNewsData,
    },
  };
}

export default function Home({ allNewsData }) {
  return (
    <Layout>
      <Hero />
      <CTA
        number='01'
        background='#ffd88d'
        title='About me'
        image='/images/about-img.png'
      />
      <Services />
      <Projects />
      <Clients />
      <News number='04' allNewsData={allNewsData} />
    </Layout>
  );
}
