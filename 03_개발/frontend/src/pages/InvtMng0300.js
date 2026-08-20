import React, { useState } from 'react';

const InvtMng0300 = () => {
  const [countDate, setCountDate] = useState('2023-10-31');
  const [searchProduct, setSearchProduct] = useState('');

  // Dummy data for Physical Inventory
  const [inventoryList, setInventoryList] = useState([
    {
      id: 1,
      productCode: 'P001',
      productName: '참이슬 후레쉬',
      sysQtyBox: 50,
      sysQtyBottle: 1500,
      physQtyBox: 50,
      physQtyBottle: 1498,
      reason: '파손 확인',
    },
    {
      id: 2,
      productCode: 'P002',
      productName: '카스 프레쉬',
      sysQtyBox: 120,
      sysQtyBottle: 2400,
      physQtyBox: 120,
      physQtyBottle: 2400,
      reason: '',
    },
    {
      id: 3,
      productCode: 'P003',
      productName: '처음처럼',
      sysQtyBox: 80,
      sysQtyBottle: 1600,
      physQtyBox: 81,
      physQtyBottle: 1620,
      reason: '입고 누락분 발견',
    },
    {
      id: 4,
      productCode: 'P004',
      productName: '발렌타인 17년',
      sysQtyBox: 5,
      sysQtyBottle: 30,
      physQtyBox: 4,
      physQtyBottle: 28,
      reason: '망실',
    },
  ]);

  const handleSearch = () => {
    console.log('Searching inventory for counting...', { countDate, searchProduct });
  };

  const handlePhysQtyChange = (id, field, value) => {
    const updatedList = inventoryList.map(item => {
      if (item.id === id) {
        return { ...item, [field]: value === '' ? 0 : Number(value) };
      }
      return item;
    });
    setInventoryList(updatedList);
  };

  const handleReasonChange = (id, value) => {
    const updatedList = inventoryList.map(item => {
      if (item.id === id) {
        return { ...item, reason: value };
      }
      return item;
    });
    setInventoryList(updatedList);
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat('ko-KR').format(num);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>재고 실사/조정 (INVT-MNG-0300)</h2>
        <div>
          <button style={buttonStyle('#6c757d')} onClick={() => alert('엑셀 양식 다운로드')}>양식 다운로드</button>
          <button style={buttonStyle('#28a745')} onClick={() => alert('엑셀 업로드')}>엑셀 업로드</button>
          <button style={buttonStyle('#2196f3')} onClick={() => alert('조정 데이터가 저장되었습니다.')}>실사 저장(조정)</button>
        </div>
      </div>

      {/* Search Area */}
      <div style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', marginBottom: '20px', display: 'flex', gap: '20px', alignItems: 'center' }}>
        <div>
          <label style={{ marginRight: '10px', fontWeight: 'bold' }}>실사 기준일:</label>
          <input
            type="date"
            value={countDate}
            onChange={(e) => setCountDate(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={{ marginRight: '10px', fontWeight: 'bold' }}>상품:</label>
          <input
            type="text"
            placeholder="코드/상품명"
            value={searchProduct}
            onChange={(e) => setSearchProduct(e.target.value)}
            style={inputStyle}
          />
        </div>
        <button style={buttonStyle('#607d8b')} onClick={handleSearch}>재고 불러오기</button>
      </div>

      {/* Data Grid Area */}
      <div style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
          <thead>
            <tr style={{ backgroundColor: '#f4f4f9', borderBottom: '2px solid #ddd' }}>
              <th style={thStyle} rowSpan="2">상품코드</th>
              <th style={thStyle} rowSpan="2">상품명</th>
              <th style={thStyle} colSpan="2">전산 재고 (A)</th>
              <th style={thStyle} colSpan="2">실사 재고 (B)</th>
              <th style={thStyle} colSpan="2">차이 (B-A)</th>
              <th style={thStyle} rowSpan="2">조정 사유</th>
            </tr>
            <tr style={{ backgroundColor: '#f4f4f9', borderBottom: '2px solid #ddd' }}>
              <th style={thStyle}>BOX</th>
              <th style={thStyle}>본</th>
              <th style={thStyle}>BOX</th>
              <th style={thStyle}>본</th>
              <th style={thStyle}>BOX</th>
              <th style={thStyle}>본</th>
            </tr>
          </thead>
          <tbody>
            {inventoryList.map((item) => {
              const diffBox = item.physQtyBox - item.sysQtyBox;
              const diffBottle = item.physQtyBottle - item.sysQtyBottle;
              const hasDiff = diffBox !== 0 || diffBottle !== 0;

              return (
                <tr key={item.id} style={{ borderBottom: '1px solid #eee', backgroundColor: hasDiff ? '#fff8e1' : 'transparent' }}>
                  <td style={tdStyle}>{item.productCode}</td>
                  <td style={tdStyle}>{item.productName}</td>
                  <td style={{ ...tdStyle, textAlign: 'right', backgroundColor: '#fafafa' }}>{formatNumber(item.sysQtyBox)}</td>
                  <td style={{ ...tdStyle, textAlign: 'right', backgroundColor: '#fafafa' }}>{formatNumber(item.sysQtyBottle)}</td>
                  <td style={{ ...tdStyle, padding: '4px' }}>
                    <input
                      type="number"
                      value={item.physQtyBox}
                      onChange={(e) => handlePhysQtyChange(item.id, 'physQtyBox', e.target.value)}
                      style={{ width: '60px', textAlign: 'right', padding: '4px', border: '1px solid #ccc', borderRadius: '4px' }}
                    />
                  </td>
                  <td style={{ ...tdStyle, padding: '4px' }}>
                    <input
                      type="number"
                      value={item.physQtyBottle}
                      onChange={(e) => handlePhysQtyChange(item.id, 'physQtyBottle', e.target.value)}
                      style={{ width: '60px', textAlign: 'right', padding: '4px', border: '1px solid #ccc', borderRadius: '4px' }}
                    />
                  </td>
                  <td style={{ ...tdStyle, textAlign: 'right', fontWeight: 'bold', color: diffBox > 0 ? '#2196f3' : (diffBox < 0 ? '#f44336' : '#333') }}>
                    {diffBox > 0 ? `+${diffBox}` : diffBox}
                  </td>
                  <td style={{ ...tdStyle, textAlign: 'right', fontWeight: 'bold', color: diffBottle > 0 ? '#2196f3' : (diffBottle < 0 ? '#f44336' : '#333') }}>
                    {diffBottle > 0 ? `+${diffBottle}` : diffBottle}
                  </td>
                  <td style={{ ...tdStyle, padding: '4px' }}>
                    <input
                      type="text"
                      value={item.reason}
                      onChange={(e) => handleReasonChange(item.id, e.target.value)}
                      placeholder="사유 입력"
                      style={{ width: '90%', padding: '4px', border: '1px solid #ccc', borderRadius: '4px' }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Reusable styles
const buttonStyle = (bgColor) => ({
  backgroundColor: bgColor,
  color: 'white',
  border: 'none',
  padding: '8px 16px',
  borderRadius: '4px',
  cursor: 'pointer',
  marginLeft: '10px',
  fontWeight: 'bold',
});

const inputStyle = {
  padding: '6px',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

const thStyle = {
  padding: '10px 6px',
  fontWeight: 'bold',
  color: '#333',
  borderRight: '1px solid #ddd',
};

const tdStyle = {
  padding: '10px 6px',
  color: '#555',
  borderRight: '1px solid #ddd',
};

export default InvtMng0300;
