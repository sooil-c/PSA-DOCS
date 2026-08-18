import React, { useState } from 'react';
import './App.css';
import InfoMng0200 from './pages/InfoMng0200';
import InfoMng0300 from './pages/InfoMng0300';

function App() {
  const [activeMenu, setActiveMenu] = useState('INFO-MNG-0200');

  const renderContent = () => {
    switch (activeMenu) {
      case 'INFO-MNG-0200':
        return <InfoMng0200 />;
      case 'INFO-MNG-0300':
        return <InfoMng0300 />;
      default:
        return <div>메뉴를 선택해주세요.</div>;
    }
  };

  const getMenuColor = (menuId) => activeMenu === menuId ? 'white' : '#888';

  return (
    <div className="App" style={{ display: 'flex', height: '100vh' }}>
      <div style={{ width: '250px', backgroundColor: '#282c34', color: 'white', padding: '20px' }}>
        <h2>PSA-DOCS</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li
            style={{ padding: '10px 0', borderBottom: '1px solid #444', cursor: 'pointer', color: getMenuColor('INFO-MNG-0200') }}
            onClick={() => setActiveMenu('INFO-MNG-0200')}
          >
            매입처 등록 및 관리
          </li>
          <li
            style={{ padding: '10px 0', borderBottom: '1px solid #444', cursor: 'pointer', color: getMenuColor('INFO-MNG-0300') }}
            onClick={() => setActiveMenu('INFO-MNG-0300')}
          >
            매출처 등록 및 관리
          </li>
          <li style={{ padding: '10px 0', borderBottom: '1px solid #444', color: '#888' }}>상품 등록 및 관리</li>
          <li style={{ padding: '10px 0', borderBottom: '1px solid #444', color: '#888' }}>매입전표등록</li>
        </ul>
      </div>
      <div style={{ flex: 1, backgroundColor: '#f4f4f9', padding: '20px', overflowY: 'auto' }}>
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
