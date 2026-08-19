import React, { useState } from 'react';
import './App.css';
import InfoMng0200 from './pages/InfoMng0200';
import InfoMng0300 from './pages/InfoMng0300';
import InfoMng0400 from './pages/InfoMng0400';
import PrchsSlip0100 from './pages/PrchsSlip0100';
import SlsSlip0100 from './pages/SlsSlip0100';
import DdlnMng0100 from './pages/DdlnMng0100';
import SysMenu0200 from './pages/SysMenu0200';
import SysAuthrt0300 from './pages/SysAuthrt0300';
import SlsSprt0300 from './pages/SlsSprt0300';
import InfoMng0100 from './pages/InfoMng0100';

function App() {
  const [activeMenu, setActiveMenu] = useState('INFO-MNG-0200');

  const renderContent = () => {
    switch (activeMenu) {
      case 'INFO-MNG-0100':
        return <InfoMng0100 />;
      case 'INFO-MNG-0200':
        return <InfoMng0200 />;
      case 'INFO-MNG-0300':
        return <InfoMng0300 />;
      case 'INFO-MNG-0400':
        return <InfoMng0400 />;
      case 'PRCHS-SLIP-0100':
        return <PrchsSlip0100 />;
      case 'SLS-SLIP-0100':
        return <SlsSlip0100 />;
      case 'SLS-SPRT-0300':
        return <SlsSprt0300 />;
      case 'DDLN-MNG-0100':
        return <DdlnMng0100 />;
      case 'SYS-MENU-0200':
        return <SysMenu0200 />;
      case 'SYS-AUTHRT-0300':
        return <SysAuthrt0300 />;
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
            style={{ padding: '10px 0', borderBottom: '1px solid #444', cursor: 'pointer', color: getMenuColor('INFO-MNG-0100') }}
            onClick={() => setActiveMenu('INFO-MNG-0100')}
          >
            자사정보 등록
          </li>
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
          <li
            style={{ padding: '10px 0', borderBottom: '1px solid #444', cursor: 'pointer', color: getMenuColor('INFO-MNG-0400') }}
            onClick={() => setActiveMenu('INFO-MNG-0400')}
          >
            상품 등록 및 관리
          </li>
          <li
            style={{ padding: '10px 0', borderBottom: '1px solid #444', cursor: 'pointer', color: getMenuColor('PRCHS-SLIP-0100') }}
            onClick={() => setActiveMenu('PRCHS-SLIP-0100')}
          >
            매입전표등록
          </li>
          <li
            style={{ padding: '10px 0', borderBottom: '1px solid #444', cursor: 'pointer', color: getMenuColor('SLS-SLIP-0100') }}
            onClick={() => setActiveMenu('SLS-SLIP-0100')}
          >
            매출전표등록
          </li>
          <li
            style={{ padding: '10px 0', borderBottom: '1px solid #444', cursor: 'pointer', color: getMenuColor('SLS-SPRT-0300') }}
            onClick={() => setActiveMenu('SLS-SPRT-0300')}
          >
            매출처 지원품 관리
          </li>
          <li
            style={{ padding: '10px 0', borderBottom: '1px solid #444', cursor: 'pointer', color: getMenuColor('DDLN-MNG-0100') }}
            onClick={() => setActiveMenu('DDLN-MNG-0100')}
          >
            일/월 마감 관리
          </li>
          <li
            style={{ padding: '10px 0', borderBottom: '1px solid #444', cursor: 'pointer', color: getMenuColor('SYS-MENU-0200') }}
            onClick={() => setActiveMenu('SYS-MENU-0200')}
          >
            메뉴 등록 관리
          </li>
          <li
            style={{ padding: '10px 0', borderBottom: '1px solid #444', cursor: 'pointer', color: getMenuColor('SYS-AUTHRT-0300') }}
            onClick={() => setActiveMenu('SYS-AUTHRT-0300')}
          >
            메뉴/버튼 권한 관리
          </li>
        </ul>
      </div>
      <div style={{ flex: 1, backgroundColor: '#f4f4f9', padding: '20px', overflowY: 'auto' }}>
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
