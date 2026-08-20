import React, { useState } from 'react';

const BtlDps0100 = () => {
  const [depositData, setDepositData] = useState([
    { id: 1, date: '2023-10-25', customer: '이마트 성수점', bottleType: '소주병', outQty: 500, inQty: 480, depositPerBottle: 100, handlingFee: 30 },
    { id: 2, date: '2023-10-25', customer: '홈플러스 영등포점', bottleType: '맥주병', outQty: 300, inQty: 290, depositPerBottle: 130, handlingFee: 33 },
    { id: 3, date: '2023-10-25', customer: '백종원 프랜차이즈 본사', bottleType: '소주병', outQty: 1000, inQty: 850, depositPerBottle: 100, handlingFee: 30 },
  ]);

  const [searchParams, setSearchParams] = useState({
    startDate: '2023-10-01',
    endDate: '2023-10-31',
    customerName: ''
  });

  const handleSearch = () => {
    alert('조회 되었습니다.');
  };

  const calculateTotal = (qty, fee) => {
    return qty * fee;
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>용기 보증금(공병) 관리 (BTL-DPS-0100)</h2>
      <p style={{ color: '#666' }}>공병 출고 및 회수 수량을 관리하고, 보증금 및 취급수수료 정산 내역을 조회합니다. (단위: 본)</p>

      <div style={{ backgroundColor: '#fff', padding: '20px', border: '1px solid #ddd', borderRadius: '4px', marginBottom: '20px' }}>
        <h3>조회 조건</h3>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <label>기간:</label>
          <input type="date" value={searchParams.startDate} onChange={e => setSearchParams({...searchParams, startDate: e.target.value})} style={{ padding: '5px' }} />
          <span>~</span>
          <input type="date" value={searchParams.endDate} onChange={e => setSearchParams({...searchParams, endDate: e.target.value})} style={{ padding: '5px' }} />

          <label>매출처명:</label>
          <input type="text" placeholder="매출처 입력" value={searchParams.customerName} onChange={e => setSearchParams({...searchParams, customerName: e.target.value})} style={{ padding: '5px' }} />

          <button onClick={handleSearch} style={{ padding: '6px 12px', cursor: 'pointer' }}>조회</button>
        </div>
      </div>

      <div style={{ backgroundColor: '#fff', padding: '20px', border: '1px solid #ddd', borderRadius: '4px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
          <h3>공병 수불 및 정산 내역</h3>
          <button style={{ padding: '6px 15px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>엑셀 다운로드</button>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
          <thead style={{ backgroundColor: '#f8f9fa' }}>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '10px' }} rowSpan="2">일자</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }} rowSpan="2">매출처명</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }} rowSpan="2">용기종류</th>
              <th style={{ border: '1px solid #ddd', padding: '5px' }} colSpan="2">수량 (본)</th>
              <th style={{ border: '1px solid #ddd', padding: '5px' }} colSpan="2">단가 (원)</th>
              <th style={{ border: '1px solid #ddd', padding: '5px' }} colSpan="3">정산 금액 (원)</th>
            </tr>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '5px', backgroundColor: '#e9ecef' }}>출고</th>
              <th style={{ border: '1px solid #ddd', padding: '5px', backgroundColor: '#e9ecef' }}>회수</th>
              <th style={{ border: '1px solid #ddd', padding: '5px', backgroundColor: '#e9ecef' }}>보증금</th>
              <th style={{ border: '1px solid #ddd', padding: '5px', backgroundColor: '#e9ecef' }}>수수료</th>
              <th style={{ border: '1px solid #ddd', padding: '5px', backgroundColor: '#e9ecef' }}>회수 보증금</th>
              <th style={{ border: '1px solid #ddd', padding: '5px', backgroundColor: '#e9ecef' }}>회수 수수료</th>
              <th style={{ border: '1px solid #ddd', padding: '5px', backgroundColor: '#e9ecef' }}>합계</th>
            </tr>
          </thead>
          <tbody>
            {depositData.map((row) => (
              <tr key={row.id}>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.date}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.customer}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.bottleType}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'right', color: '#dc3545' }}>{row.outQty.toLocaleString()}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'right', color: '#28a745' }}>{row.inQty.toLocaleString()}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'right' }}>{row.depositPerBottle.toLocaleString()}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'right' }}>{row.handlingFee.toLocaleString()}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'right' }}>{calculateTotal(row.inQty, row.depositPerBottle).toLocaleString()}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'right' }}>{calculateTotal(row.inQty, row.handlingFee).toLocaleString()}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'right', fontWeight: 'bold' }}>
                  {(calculateTotal(row.inQty, row.depositPerBottle) + calculateTotal(row.inQty, row.handlingFee)).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BtlDps0100;
