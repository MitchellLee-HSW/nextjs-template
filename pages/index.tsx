import { FC } from 'react';
import Layout from '@components/layout';
import utilStyles from '@styles/utils.module.css';
import Loading from '@components/loading';

const meta = {
  // title: "Test",
  description: "A template Next.js website"
};

const Home: FC = () => {
  return (
    <Layout meta={meta} home>
      <section className={utilStyles.headingMd}>
        <p style={{marginBottom: "0"}}>Lorem ispsum...</p>
      </section>
      <Loading diameter="240px" thickness="50px" />
    </Layout>
  )
};

export default Home;