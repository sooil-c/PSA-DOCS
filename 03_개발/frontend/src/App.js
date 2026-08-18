import React from 'react';
import './App.css';
import InfoMng0200 from './pages/InfoMng0200';

function App() {
  return (
    <div className="App" style={{ display: 'flex', height: '100vh' }}>
      <div style={{ width: '250px', backgroundColor: '#282c34', color: 'white', padding: '20px' }}>
        <h2>PSA-DOCS</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ padding: '10px 0', borderBottom: '1px solid #444', cursor: 'pointer' }}>매입처 등록 및 관리</li>
          <li style={{ padding: '10px 0', borderBottom: '1px solid #444', color: '#888' }}>매출처 등록 및 관리</li>
          <li style={{ padding: '10px 0', borderBottom: '1px solid #444', color: '#888' }}>상품 등록 및 관리</li>
          <li style={{ padding: '10px 0', borderBottom: '1px solid #444', color: '#888' }}>매입전표등록</li>
        </ul>
      </div>
      <div style={{ flex: 1, backgroundColor: '#f4f4f9', padding: '20px', overflowY: 'auto' }}>
        <InfoMng0200 />
      </div>
    </div>
  );
}

export default App;
