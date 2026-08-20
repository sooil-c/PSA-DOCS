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
import SysUser0100 from './pages/SysUser0100';
import PrchsInq0200 from './pages/PrchsInq0200';
import SlsInq0200 from './pages/SlsInq0200';
import DbtGive0100 from './pages/DbtGive0100';
import BndMng0100 from './pages/BndMng0100';
import InvtInq0200 from './pages/InvtInq0200';
import DbtPrst0200 from './pages/DbtPrst0200';
import BndPrst0200 from './pages/BndPrst0200';
import InvtMng0100 from './pages/InvtMng0100';
import InvtMng0300 from './pages/InvtMng0300';
import StngCom0100 from './pages/StngCom0100';
import StngMng0200 from './pages/StngMng0200';
import StngMng0300 from './pages/StngMng0300';
import SysPrst0100 from './pages/SysPrst0100';
import BrdMng0100 from './pages/BrdMng0100';
import TaxInv0100 from './pages/TaxInv0100';
import BtlDps0100 from './pages/BtlDps0100';
import SalsPrf0100 from './pages/SalsPrf0100';
import HstryLog0100 from './pages/HstryLog0100';

function App() {
  const [activeMenu, setActiveMenu] = useState('INFO-MNG-0200');

  const renderContent = () => {
    switch (activeMenu) {
      case 'SYS-USER-0100':
        return <SysUser0100 />;
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
      case 'PRCHS-INQ-0200':
        return <PrchsInq0200 />;
      case 'DBT-GIVE-0100':
        return <DbtGive0100 />;
      case 'DBT-PRST-0200':
        return <DbtPrst0200 />;
      case 'SLS-SLIP-0100':
        return <SlsSlip0100 />;
      case 'SLS-INQ-0200':
        return <SlsInq0200 />;
      case 'BND-MNG-0100':
        return <BndMng0100 />;
      case 'BND-PRST-0200':
        return <BndPrst0200 />;
      case 'SLS-SPRT-0300':
        return <SlsSprt0300 />;
      case 'INVT-MNG-0100':
        return <InvtMng0100 />;
      case 'INVT-INQ-0200':
        return <InvtInq0200 />;
      case 'INVT-MNG-0300':
        return <InvtMng0300 />;
      case 'DDLN-MNG-0100':
        return <DdlnMng0100 />;
      case 'SYS-MENU-0200':
        return <SysMenu0200 />;
      case 'SYS-AUTHRT-0300':
        return <SysAuthrt0300 />;
      case 'STNG-COM-0100':
        return <StngCom0100 />;
      case 'STNG-MNG-0200':
        return <StngMng0200 />;
      case 'STNG-MNG-0300':
        return <StngMng0300 />;
      case 'SYS-PRST-0100':
        return <SysPrst0100 />;
      case 'BRD-MNG-0100':
        return <BrdMng0100 />;
      case 'TAX-INV-0100':
        return <TaxInv0100 />;
      case 'BTL-DPS-0100':
        return <BtlDps0100 />;
      case 'SALS-PRF-0100':
        return <SalsPrf0100 />;
      case 'HSTRY-LOG-0100':
        return <HstryLog0100 />;
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
            style={{ padding: '10px 0', borderBottom: '1px solid #444', cursor: 'pointer', color: getMenuColor('SYS-PRST-0100') }}
            onClick={() => setActiveMenu('SYS-PRST-0100')}
          >
            대시보드
          </li>
          <li
            style={{ padding: '10px 0', borderBottom: '1px solid #444', cursor: 'pointer', color: getMenuColor('BRD-MNG-0100') }}
            onClick={() => setActiveMenu('BRD-MNG-0100')}
          >
            게시판
          </li>
          <li
            style={{ padding: '10px 0', borderBottom: '1px solid #444', cursor: 'pointer', color: getMenuColor('SYS-USER-0100') }}
            onClick={() => setActiveMenu('SYS-USER-0100')}
          >
            사용자 관리
          </li>
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
            style={{ padding: '10px 0', borderBottom: '1px solid #444', cursor: 'pointer', color: getMenuColor('PRCHS-INQ-0200') }}
            onClick={() => setActiveMenu('PRCHS-INQ-0200')}
          >
            매입 내역 조회
          </li>
          <li
            style={{ padding: '10px 0', borderBottom: '1px solid #444', cursor: 'pointer', color: getMenuColor('DBT-GIVE-0100') }}
            onClick={() => setActiveMenu('DBT-GIVE-0100')}
          >
            외상대금 지급 관리
          </li>
          <li
            style={{ padding: '10px 0', borderBottom: '1px solid #444', cursor: 'pointer', color: getMenuColor('DBT-PRST-0200') }}
            onClick={() => setActiveMenu('DBT-PRST-0200')}
          >
            채무 현황 조회
          </li>
          <li
            style={{ padding: '10px 0', borderBottom: '1px solid #444', cursor: 'pointer', color: getMenuColor('SLS-SLIP-0100') }}
            onClick={() => setActiveMenu('SLS-SLIP-0100')}
          >
            매출전표등록
          </li>
          <li
            style={{ padding: '10px 0', borderBottom: '1px solid #444', cursor: 'pointer', color: getMenuColor('SLS-INQ-0200') }}
            onClick={() => setActiveMenu('SLS-INQ-0200')}
          >
            매출 내역 조회
          </li>
          <li
            style={{ padding: '10px 0', borderBottom: '1px solid #444', cursor: 'pointer', color: getMenuColor('TAX-INV-0100') }}
            onClick={() => setActiveMenu('TAX-INV-0100')}
          >
            세금계산서 관리
          </li>
          <li
            style={{ padding: '10px 0', borderBottom: '1px solid #444', cursor: 'pointer', color: getMenuColor('BND-MNG-0100') }}
            onClick={() => setActiveMenu('BND-MNG-0100')}
          >
            수금 등록 관리
          </li>
          <li
            style={{ padding: '10px 0', borderBottom: '1px solid #444', cursor: 'pointer', color: getMenuColor('BND-PRST-0200') }}
            onClick={() => setActiveMenu('BND-PRST-0200')}
          >
            미수금 현황 조회
          </li>
          <li
            style={{ padding: '10px 0', borderBottom: '1px solid #444', cursor: 'pointer', color: getMenuColor('SLS-SPRT-0300') }}
            onClick={() => setActiveMenu('SLS-SPRT-0300')}
          >
            매출처 지원품 관리
          </li>
          <li
            style={{ padding: '10px 0', borderBottom: '1px solid #444', cursor: 'pointer', color: getMenuColor('SALS-PRF-0100') }}
            onClick={() => setActiveMenu('SALS-PRF-0100')}
          >
            영업사원 실적 조회
          </li>
          <li
            style={{ padding: '10px 0', borderBottom: '1px solid #444', cursor: 'pointer', color: getMenuColor('INVT-MNG-0100') }}
            onClick={() => setActiveMenu('INVT-MNG-0100')}
          >
            수불 내역 조회
          </li>
          <li
            style={{ padding: '10px 0', borderBottom: '1px solid #444', cursor: 'pointer', color: getMenuColor('INVT-INQ-0200') }}
            onClick={() => setActiveMenu('INVT-INQ-0200')}
          >
            현재고 조회
          </li>
          <li
            style={{ padding: '10px 0', borderBottom: '1px solid #444', cursor: 'pointer', color: getMenuColor('INVT-MNG-0300') }}
            onClick={() => setActiveMenu('INVT-MNG-0300')}
          >
            재고 실사/조정
          </li>
          <li
            style={{ padding: '10px 0', borderBottom: '1px solid #444', cursor: 'pointer', color: getMenuColor('BTL-DPS-0100') }}
            onClick={() => setActiveMenu('BTL-DPS-0100')}
          >
            용기 보증금 관리
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
          <li
            style={{ padding: '10px 0', borderBottom: '1px solid #444', cursor: 'pointer', color: getMenuColor('HSTRY-LOG-0100') }}
            onClick={() => setActiveMenu('HSTRY-LOG-0100')}
          >
            변경 이력 조회
          </li>
          <li
            style={{ padding: '10px 0', borderBottom: '1px solid #444', cursor: 'pointer', color: getMenuColor('STNG-COM-0100') }}
            onClick={() => setActiveMenu('STNG-COM-0100')}
          >
            공통 환경설정
          </li>
          <li
            style={{ padding: '10px 0', borderBottom: '1px solid #444', cursor: 'pointer', color: getMenuColor('STNG-MNG-0200') }}
            onClick={() => setActiveMenu('STNG-MNG-0200')}
          >
            매입처별 환경설정
          </li>
          <li
            style={{ padding: '10px 0', borderBottom: '1px solid #444', cursor: 'pointer', color: getMenuColor('STNG-MNG-0300') }}
            onClick={() => setActiveMenu('STNG-MNG-0300')}
          >
            매출처별 환경설정
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
