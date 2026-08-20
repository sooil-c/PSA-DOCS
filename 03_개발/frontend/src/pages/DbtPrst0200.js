import React, { useState } from 'react';

const DbtPrst0200 = () => {
  const [searchDate, setSearchDate] = useState('2023-10-25');
  const [searchSupplier, setSearchSupplier] = useState('');

  // Dummy data for Accounts Payable Status
  const [payableList, setPayableList] = useState([
    {
      id: 1,
      supplierCode: 'S001',
      supplierName: '하이트진로',
      previousBalance: 15000000,
      currentPurchase: 5000000,
      currentPayment: 10000000,
      currentBalance: 10000000,
      status: '정상',
    },
    {
      id: 2,
      supplierCode: 'S002',
      supplierName: '오비맥주',
      previousBalance: 8000000,
      currentPurchase: 2000000,
      currentPayment: 0,
      currentBalance: 10000000,
      status: '주의',
    },
    {
      id: 3,
      supplierCode: 'S003',
      supplierName: '롯데칠성음료',
      previousBalance: 3000000,
      currentPurchase: 1000000,
      currentPayment: 4000000,
      currentBalance: 0,
      status: '정상',
    },
  ]);

  const handleSearch = () => {
    console.log('Searching accounts payable status...', { searchDate, searchSupplier });
    // In a real app, this would fetch data from the server.
    // For the mockup, we'll just log the action.
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(amount);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>채무 현황 조회 (DBT-PRST-0200)</h2>
        <div>
          <button style={buttonStyle('#6c757d')} onClick={() => alert('엑셀 다운로드 기능은 준비 중입니다.')}>엑셀 다운로드</button>
          <button style={buttonStyle('#4caf50')} onClick={() => alert('인쇄 기능은 준비 중입니다.')}>인쇄</button>
        </div>
      </div>

      {/* Search Area */}
      <div style={{ backgroundColor: '#fff', border: '1px solid #ddd', padding: '15px', borderRadius: '8px', marginBottom: '20px', display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
        <div>
          <label style={{ fontWeight: 'bold', fontSize: '14px', whiteSpace: 'nowrap', flexShrink: 0, marginRight: '10px' }}>기준 일자</label>
          <input
            type="date"
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={{ fontWeight: 'bold', fontSize: '14px', whiteSpace: 'nowrap', flexShrink: 0, marginRight: '10px' }}>매입처</label>
          <input
            type="text"
            placeholder="코드/매입처명"
            value={searchSupplier}
            onChange={(e) => setSearchSupplier(e.target.value)}
            style={inputStyle}
          />
        </div>
        <button onClick={handleSearch} style={{ padding: '8px 24px', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginLeft: 'auto' }}>조회</button>
      </div>

            {/* 그리드 영역 */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '10px' }}>
        <h3 style={{ margin: 0, fontSize: '16px' }}>채무 현황 목록</h3>
      </div>
      <div style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
          <thead>
            <tr style={{ backgroundColor: '#f4f4f9', borderBottom: '2px solid #ddd' }}>
              <th style={thStyle}>매입처코드</th>
              <th style={thStyle}>매입처명</th>
              <th style={thStyle}>전월 이월액</th>
              <th style={thStyle}>당월 매입액</th>
              <th style={thStyle}>당월 지급액</th>
              <th style={thStyle}>당월 미지급액(잔액)</th>
              <th style={thStyle}>상태</th>
            </tr>
          </thead>
          <tbody>
            {payableList.map((item) => (
              <tr key={item.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={tdStyle}>{item.supplierCode}</td>
                <td style={tdStyle}>{item.supplierName}</td>
                <td style={{ ...tdStyle, textAlign: 'right' }}>{formatCurrency(item.previousBalance)}</td>
                <td style={{ ...tdStyle, textAlign: 'right' }}>{formatCurrency(item.currentPurchase)}</td>
                <td style={{ ...tdStyle, textAlign: 'right', color: '#2196f3' }}>{formatCurrency(item.currentPayment)}</td>
                <td style={{ ...tdStyle, textAlign: 'right', fontWeight: 'bold', color: item.currentBalance > 0 ? '#f44336' : '#4caf50' }}>
                  {formatCurrency(item.currentBalance)}
                </td>
                <td style={tdStyle}>
                  <span style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    backgroundColor: item.status === '정상' ? '#e8f5e9' : '#ffebee',
                    color: item.status === '정상' ? '#4caf50' : '#f44336',
                    fontSize: '0.9em'
                  }}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
            {payableList.length === 0 && (
              <tr>
                <td colSpan="7" style={{ padding: '20px', color: '#888' }}>조회된 채무 내역이 없습니다.</td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr style={{ backgroundColor: '#fff3e0', fontWeight: 'bold', borderTop: '2px solid #ddd' }}>
              <td colSpan="2" style={tdStyle}>합계</td>
              <td style={{ ...tdStyle, textAlign: 'right' }}>
                {formatCurrency(payableList.reduce((sum, item) => sum + item.previousBalance, 0))}
              </td>
              <td style={{ ...tdStyle, textAlign: 'right' }}>
                {formatCurrency(payableList.reduce((sum, item) => sum + item.currentPurchase, 0))}
              </td>
              <td style={{ ...tdStyle, textAlign: 'right', color: '#2196f3' }}>
                {formatCurrency(payableList.reduce((sum, item) => sum + item.currentPayment, 0))}
              </td>
              <td style={{ ...tdStyle, textAlign: 'right', color: '#f44336' }}>
                {formatCurrency(payableList.reduce((sum, item) => sum + item.currentBalance, 0))}
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

export default DbtPrst0200;
