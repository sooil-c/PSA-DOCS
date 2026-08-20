import React, { useState } from 'react';

const TaxInv0100 = () => {
  const [invoices, setInvoices] = useState([
    { id: 1, date: '2023-10-25', customer: '이마트 성수점', amount: 5000000, vat: 500000, status: '미발행', syncResult: '-' },
    { id: 2, date: '2023-10-25', customer: '홈플러스 영등포점', amount: 3500000, vat: 350000, status: '발행성공', syncResult: '성공' },
    { id: 3, date: '2023-10-25', customer: '백종원 프랜차이즈 본사', amount: 8000000, vat: 800000, status: '발행실패', syncResult: '사업자번호 오류' },
  ]);

  const handleIssue = () => {
    alert('선택된 세금계산서 일괄 발행을 요청합니다.');
    const updated = invoices.map(inv =>
      inv.status === '미발행' ? { ...inv, status: '처리중', syncResult: '전송대기' } : inv
    );
    setInvoices(updated);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>세금계산서 관리 (TAX-INV-0100)</h2>

      <div style={{ backgroundColor: '#fff', padding: '20px', border: '1px solid #ddd', borderRadius: '4px', marginBottom: '20px' }}>
        <h3>발행 대상 조회</h3>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <label>발행 일자</label>
          <input type="date" defaultValue="2023-10-25" style={{ padding: '5px' }} />
          <label>상태</label>
          <select style={{ padding: '5px' }}>
            <option>전체</option>
            <option>미발행</option>
            <option>발행성공</option>
            <option>발행실패</option>
          </select>
          <button style={{ padding: '5px 15px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>조회</button>
        </div>
      </div>

      <div style={{ backgroundColor: '#fff', padding: '20px', border: '1px solid #ddd', borderRadius: '4px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
          <h3>세금계산서 내역 및 홈택스 연동 결과</h3>
          <button onClick={handleIssue} style={{ padding: '8px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            선택 일괄 발행 (홈택스 전송)
          </button>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
          <thead style={{ backgroundColor: '#f8f9fa' }}>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}><input type="checkbox" /></th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>발행일자</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>매출처명</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>공급가액</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>부가세</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>합계금액</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>상태</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>홈택스 연동 결과</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv) => (
              <tr key={inv.id}>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}><input type="checkbox" /></td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{inv.date}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{inv.customer}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>{inv.amount.toLocaleString()}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>{inv.vat.toLocaleString()}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>{(inv.amount + inv.vat).toLocaleString()}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px', color: inv.status === '발행실패' ? 'red' : inv.status === '발행성공' ? 'green' : 'black' }}>
                  {inv.status}
                </td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{inv.syncResult}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaxInv0100;
