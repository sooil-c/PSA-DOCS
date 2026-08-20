import React, { useState } from 'react';

const BndPrst0200 = () => {
  const [searchDate, setSearchDate] = useState('2023-10-25');
  const [searchCustomer, setSearchCustomer] = useState('');

  // Dummy data for Accounts Receivable Status
  const [receivableList, setReceivableList] = useState([
    {
      id: 1,
      customerCode: 'C001',
      customerName: '대한상사',
      previousReceivable: 5000000,
      currentSales: 2000000,
      currentCollection: 4000000,
      currentReceivable: 3000000,
      badDebtFlag: false,
    },
    {
      id: 2,
      customerCode: 'C002',
      customerName: '청춘식당',
      previousReceivable: 1000000,
      currentSales: 500000,
      currentCollection: 1500000,
      currentReceivable: 0,
      badDebtFlag: false,
    },
    {
      id: 3,
      customerCode: 'C003',
      customerName: '밤비노유흥',
      previousReceivable: 12000000,
      currentSales: 0,
      currentCollection: 0,
      currentReceivable: 12000000,
      badDebtFlag: true, // 악성 채권
    },
    {
      id: 4,
      customerCode: 'C004',
      customerName: '제일할인마트',
      previousReceivable: 0,
      currentSales: 8000000,
      currentCollection: 3000000,
      currentReceivable: 5000000,
      badDebtFlag: false,
    },
  ]);

  const handleSearch = () => {
    console.log('Searching accounts receivable status...', { searchDate, searchCustomer });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(amount);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>미수금 현황 조회 (BND-PRST-0200)</h2>
        <div>
          <button style={buttonStyle('#6c757d')} onClick={() => alert('엑셀 다운로드 기능은 준비 중입니다.')}>엑셀 다운로드</button>
          <button style={buttonStyle('#4caf50')} onClick={() => alert('인쇄 기능은 준비 중입니다.')}>인쇄</button>
        </div>
      </div>

      {/* Search Area */}
      <div style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', marginBottom: '20px', display: 'flex', gap: '20px', alignItems: 'center' }}>
        <div>
          <label style={{ marginRight: '10px', fontWeight: 'bold' }}>기준 일자:</label>
          <input
            type="date"
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={{ marginRight: '10px', fontWeight: 'bold' }}>매출처:</label>
          <input
            type="text"
            placeholder="코드/매출처명"
            value={searchCustomer}
            onChange={(e) => setSearchCustomer(e.target.value)}
            style={inputStyle}
          />
        </div>
        <button style={buttonStyle('#2196f3')} onClick={handleSearch}>조회</button>
      </div>

      {/* Data Grid Area */}
      <div style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
          <thead>
            <tr style={{ backgroundColor: '#f4f4f9', borderBottom: '2px solid #ddd' }}>
              <th style={thStyle}>매출처코드</th>
              <th style={thStyle}>매출처명</th>
              <th style={thStyle}>전월 미수금</th>
              <th style={thStyle}>당월 매출액</th>
              <th style={thStyle}>당월 수금액</th>
              <th style={thStyle}>당월 미수금(잔액)</th>
              <th style={thStyle}>비고</th>
            </tr>
          </thead>
          <tbody>
            {receivableList.map((item) => (
              <tr key={item.id} style={{ borderBottom: '1px solid #eee', backgroundColor: item.badDebtFlag ? '#fff0f0' : 'transparent' }}>
                <td style={tdStyle}>{item.customerCode}</td>
                <td style={tdStyle}>{item.customerName}</td>
                <td style={{ ...tdStyle, textAlign: 'right' }}>{formatCurrency(item.previousReceivable)}</td>
                <td style={{ ...tdStyle, textAlign: 'right' }}>{formatCurrency(item.currentSales)}</td>
                <td style={{ ...tdStyle, textAlign: 'right', color: '#4caf50' }}>{formatCurrency(item.currentCollection)}</td>
                <td style={{ ...tdStyle, textAlign: 'right', fontWeight: 'bold', color: item.currentReceivable > 0 ? '#f44336' : '#333' }}>
                  {formatCurrency(item.currentReceivable)}
                </td>
                <td style={tdStyle}>
                  {item.badDebtFlag ? (
                    <span style={{ color: '#f44336', fontWeight: 'bold', fontSize: '0.9em' }}>악성 채권</span>
                  ) : (
                    <span style={{ color: '#aaa', fontSize: '0.9em' }}>-</span>
                  )}
                </td>
              </tr>
            ))}
            {receivableList.length === 0 && (
              <tr>
                <td colSpan="7" style={{ padding: '20px', color: '#888' }}>조회된 미수금 내역이 없습니다.</td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr style={{ backgroundColor: '#fff3e0', fontWeight: 'bold', borderTop: '2px solid #ddd' }}>
              <td colSpan="2" style={tdStyle}>합계</td>
              <td style={{ ...tdStyle, textAlign: 'right' }}>
                {formatCurrency(receivableList.reduce((sum, item) => sum + item.previousReceivable, 0))}
              </td>
              <td style={{ ...tdStyle, textAlign: 'right' }}>
                {formatCurrency(receivableList.reduce((sum, item) => sum + item.currentSales, 0))}
              </td>
              <td style={{ ...tdStyle, textAlign: 'right', color: '#4caf50' }}>
                {formatCurrency(receivableList.reduce((sum, item) => sum + item.currentCollection, 0))}
              </td>
              <td style={{ ...tdStyle, textAlign: 'right', color: '#f44336' }}>
                {formatCurrency(receivableList.reduce((sum, item) => sum + item.currentReceivable, 0))}
              </td>
              <td style={tdStyle}></td>
            </tr>
          </tfoot>
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

export default BndPrst0200;
