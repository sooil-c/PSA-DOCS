import React, { useState } from 'react';

const SalsPrf0100 = () => {
  const [performanceData, setPerformanceData] = useState([
    { id: 1, empName: '김철수', targetSales: 50000000, actualSales: 45000000, targetCollection: 50000000, actualCollection: 48000000, newCustomers: 3 },
    { id: 2, empName: '이영희', targetSales: 40000000, actualSales: 42000000, targetCollection: 40000000, actualCollection: 35000000, newCustomers: 5 },
    { id: 3, empName: '박지성', targetSales: 60000000, actualSales: 55000000, targetCollection: 60000000, actualCollection: 60000000, newCustomers: 1 },
  ]);

  const [searchMonth, setSearchMonth] = useState('2023-10');

  const handleSearch = () => {
    alert(`${searchMonth} 영업사원 실적을 조회합니다.`);
  };

  const calculateAchievement = (actual, target) => {
    if (target === 0) return 0;
    return ((actual / target) * 100).toFixed(1);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>영업사원 실적 조회 (SALS-PRF-0100)</h2>
      <p style={{ color: '#666' }}>영업사원별 월간 매출 달성률 및 수금 실적을 분석합니다.</p>

      <div style={{ backgroundColor: '#fff', padding: '20px', border: '1px solid #ddd', borderRadius: '4px', marginBottom: '20px' }}>
        <h3>조회 조건</h3>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <label>조회 월</label>
          <input type="month" value={searchMonth} onChange={e => setSearchMonth(e.target.value)} style={{ padding: '5px' }} />

          <button onClick={handleSearch} style={{ padding: '8px 24px', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginLeft: 'auto' }}>조회</button>
        </div>
      </div>

      <div style={{ backgroundColor: '#fff', padding: '20px', border: '1px solid #ddd', borderRadius: '4px' }}>
        <h3 style={{ marginBottom: '15px' }}>영업 실적 현황</h3>

        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
          <thead style={{ backgroundColor: '#f8f9fa' }}>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '10px' }} rowSpan="2">사원명</th>
              <th style={{ border: '1px solid #ddd', padding: '5px' }} colSpan="3">매출 실적 (원)</th>
              <th style={{ border: '1px solid #ddd', padding: '5px' }} colSpan="3">수금 실적 (원)</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }} rowSpan="2">신규 거래처 (곳)</th>
            </tr>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '5px', backgroundColor: '#e9ecef' }}>목표</th>
              <th style={{ border: '1px solid #ddd', padding: '5px', backgroundColor: '#e9ecef' }}>실적</th>
              <th style={{ border: '1px solid #ddd', padding: '5px', backgroundColor: '#e9ecef' }}>달성률 (%)</th>
              <th style={{ border: '1px solid #ddd', padding: '5px', backgroundColor: '#e9ecef' }}>목표</th>
              <th style={{ border: '1px solid #ddd', padding: '5px', backgroundColor: '#e9ecef' }}>실적</th>
              <th style={{ border: '1px solid #ddd', padding: '5px', backgroundColor: '#e9ecef' }}>달성률 (%)</th>
            </tr>
          </thead>
          <tbody>
            {performanceData.map((row) => (
              <tr key={row.id}>
                <td style={{ border: '1px solid #ddd', padding: '10px', fontWeight: 'bold' }}>{row.empName}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>{row.targetSales.toLocaleString()}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right', color: '#0056b3' }}>{row.actualSales.toLocaleString()}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right', fontWeight: 'bold', color: calculateAchievement(row.actualSales, row.targetSales) >= 100 ? 'green' : 'red' }}>
                  {calculateAchievement(row.actualSales, row.targetSales)}%
                </td>
                <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>{row.targetCollection.toLocaleString()}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right', color: '#0056b3' }}>{row.actualCollection.toLocaleString()}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right', fontWeight: 'bold', color: calculateAchievement(row.actualCollection, row.targetCollection) >= 100 ? 'green' : 'red' }}>
                  {calculateAchievement(row.actualCollection, row.targetCollection)}%
                </td>
                <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>{row.newCustomers}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalsPrf0100;
