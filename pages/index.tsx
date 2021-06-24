import { FC } from 'react';
import Layout from '@components/layout';
import utilStyles from '@styles/utils.module.css';

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
    </Layout>
  )
};

export default Home;