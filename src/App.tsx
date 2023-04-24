import React from 'react';
import './App.css';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Footer } from './features/footer/Footer';
import { Header } from './features/header/Header';
import MonthlySummaryTable from './features/monthlySummaryTable/MonthlySummaryTable';

const App: React.FC = () => {
  const {
    token: { colorBgContainer},
  } = theme.useToken();

  return (
    <Layout className='layout'>
      <Header />
      <Layout.Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content" style={{ background: colorBgContainer }}>
          <MonthlySummaryTable />
        </div>
      </Layout.Content>
      <Footer/>
    </Layout>
  );
}

export default App;
