// src/app/home/Home.tsx

import { Metadata } from 'next';
import Header from '../../components/Header';
import styles from './home.module.css';

export const metadata: Metadata = {
  title: 'Industrial Ink - Home',
  description: 'Welcome to Industrial Ink',
};

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
    </div>
  );
}

export default Home;
