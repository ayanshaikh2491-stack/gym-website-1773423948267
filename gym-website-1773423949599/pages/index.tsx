import Head from 'next/head';
import Header from '../components/Header';
import MainContent from '../components/MainContent';

function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Gym Website</title>
        <meta name="description" content="Professional Gym Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <MainContent />
    </div>
  );
}

export default HomePage;