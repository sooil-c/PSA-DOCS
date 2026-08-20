import React, { useState } from 'react';

const InvtMng0100 = () => {
  const [startDate, setStartDate] = useState('2023-10-01');
  const [endDate, setEndDate] = useState('2023-10-31');
  const [searchProduct, setSearchProduct] = useState('');
  const [transactionType, setTransactionType] = useState('전체');

  // Dummy data for Inventory Movements (수불 내역)
  const [inventoryMovements, setInventoryMovements] = useState([
    {
      id: 1,
      date: '2023-10-05',
      type: '매입',
      productCode: 'P001',
      productName: '참이슬 후레쉬',
      quantityBox: 100,
      quantityBottle: 3000,
      partnerName: '하이트진로',
      remark: '정기 발주',
    },
    {
      id: 2,
      date: '2023-10-08',
      type: '매출',
      productCode: 'P001',
      productName: '참이슬 후레쉬',
      quantityBox: -20,
      quantityBottle: -600,
      partnerName: '대한상사',
      remark: '주말 물량',
    },
    {
      id: 3,
      date: '2023-10-12',
      type: '자사소비',
      productCode: 'P002',
      productName: '카스 프레쉬',
      quantityBox: -2,
      quantityBottle: -40,
      partnerName: '본사',
      remark: '직원 회식',
    },
    {
      id: 4,
      date: '2023-10-15',
      type: '반품(매입)',
      productCode: 'P003',
      productName: '처음처럼',
      quantityBox: -5,
      quantityBottle: -150,
      partnerName: '롯데칠성음료',
      remark: '라벨 훼손',
    },
    {
      id: 5,
      date: '2023-10-20',
      type: '폐기',
      productCode: 'P004',
      productName: '발렌타인 17년',
      quantityBox: 0,
      quantityBottle: -2,
      partnerName: '-',
      remark: '파손',
    },
  ]);

  const handleSearch = () => {
    console.log('Searching inventory movements...', { startDate, endDate, searchProduct, transactionType });
  };

  const getRowStyle = (type) => {
    switch (type) {
      case '매입': return { color: '#2196f3' }; // Blue
      case '매출': return { color: '#f44336' }; // Red
      case '자사소비':
      case '폐기': return { color: '#ff9800' }; // Orange
      case '반품(매입)':
      case '반품(매출)': return { color: '#9c27b0' }; // Purple
      default: return { color: '#333' };
    }
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat('ko-KR').format(num);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>수불 내역 조회 (INVT-MNG-0100)</h2>
        <div>
          <button style={buttonStyle('#6c757d')} onClick={() => alert('엑셀 다운로드 기능은 준비 중입니다.')}>엑셀 다운로드</button>
        </div>
      </div>

      {/* Search Area */}
      <div style={{ backgroundColor: '#fff', border: '1px solid #ddd', padding: '15px', borderRadius: '8px', marginBottom: '20px', display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label style={{ fontWeight: 'bold', fontSize: '14px', whiteSpace: 'nowrap', flexShrink: 0, marginRight: '10px' }}>조회 기간</label>
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} style={inputStyle} />
          <span style={{ margin: '0 10px' }}>~</span>
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} style={inputStyle} />
        </div>

        <div>
          <label style={{ fontWeight: 'bold', fontSize: '14px', whiteSpace: 'nowrap', flexShrink: 0, marginRight: '10px' }}>수불 유형</label>
          <select value={transactionType} onChange={(e) => setTransactionType(e.target.value)} style={inputStyle}>
            <option value="전체">전체</option>
            <option value="매입">매입</option>
            <option value="매출">매출</option>
            <option value="자사소비">자사소비</option>
            <option value="반품">반품</option>
            <option value="폐기">폐기</option>
          </select>
        </div>

        <div>
          <label style={{ fontWeight: 'bold', fontSize: '14px', whiteSpace: 'nowrap', flexShrink: 0, marginRight: '10px' }}>상품</label>
          <input
            type="text"
            placeholder="코드/상품명"
            value={searchProduct}
            onChange={(e) => setSearchProduct(e.target.value)}
            style={inputStyle}
          />
        </div>
        <button onClick={handleSearch} style={{ padding: '8px 24px', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginLeft: 'auto' }}>조회</button>
      </div>

            {/* 그리드 영역 */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '10px' }}>
        <h3 style={{ margin: 0, fontSize: '16px' }}>수불 내역 목록</h3>
      </div>
      <div style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
          <thead>
            <tr style={{ backgroundColor: '#f4f4f9', borderBottom: '2px solid #ddd' }}>
              <th style={thStyle}>일자</th>
              <th style={thStyle}>유형</th>
              <th style={thStyle}>상품코드</th>
              <th style={thStyle}>상품명</th>
              <th style={thStyle}>수량(BOX)</th>
              <th style={thStyle}>수량(본)</th>
              <th style={thStyle}>거래처/부서</th>
              <th style={thStyle}>적요</th>
            </tr>
          </thead>
          <tbody>
            {inventoryMovements.map((item) => (
              <tr key={item.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={tdStyle}>{item.date}</td>
                <td style={{ ...tdStyle, fontWeight: 'bold', ...getRowStyle(item.type) }}>{item.type}</td>
                <td style={tdStyle}>{item.productCode}</td>
                <td style={tdStyle}>{item.productName}</td>
                <td style={{ ...tdStyle, textAlign: 'right', fontWeight: 'bold', ...getRowStyle(item.type) }}>
                  {item.quantityBox > 0 ? `+${formatNumber(item.quantityBox)}` : formatNumber(item.quantityBox)}
                </td>
                <td style={{ ...tdStyle, textAlign: 'right', fontWeight: 'bold', ...getRowStyle(item.type) }}>
                  {item.quantityBottle > 0 ? `+${formatNumber(item.quantityBottle)}` : formatNumber(item.quantityBottle)}
                </td>
                <td style={tdStyle}>{item.partnerName}</td>
                <td style={{ ...tdStyle, textAlign: 'left' }}>{item.remark}</td>
              </tr>
            ))}
            {inventoryMovements.length === 0 && (
              <tr>
                <td colSpan="8" style={{ padding: '20px', color: '#888' }}>조회된 수불 내역이 없습니다.</td>
              </tr>
            )}
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
  padding: '12px 8px',
  fontWeight: 'bold',
  color: '#333',
};

const tdStyle = {
  padding: '12px 8px',
  color: '#555',
};

export default InvtMng0100;
