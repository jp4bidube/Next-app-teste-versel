import React from 'react';
import Head from 'next/head';

import Logo from '../assets/danielviado3x.svg';
import { Container } from '../styles/pages/Home';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <Logo />
      <h1>Site do Daniel</h1>
      <p>Site feito com Next.js teste!</p>
    </Container>
  );
};
export default Home;
