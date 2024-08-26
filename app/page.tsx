import React from 'react';
import Grid from './components/Grid';
import Search from './components/Search';
import Layout from './layout';

const Page: React.FC = () => {
  <h1 className='text-center font-bold mt-6 heading'>Welcome to the Spreadsheet App</h1>
  return (
    <div>
      <Layout>
        <Search />
        <Grid />
      </Layout>
    </div>
  );
};

export default Page;