import React, { useState } from 'react';

const HstryLog0100 = () => {
  const [logData, setLogData] = useState([
    { id: 1, dateTime: '2023-10-25 10:30:15', user: 'admin(관리자)', targetModule: '상품관리', targetRecordId: 'PRD-001 (참이슬)', fieldName: '매입단가', oldValue: '1,000', newValue: '1,100', reason: '제조사 단가 인상' },
    { id: 2, dateTime: '2023-10-24 14:20:00', user: 'sales_mgr(영업팀장)', targetModule: '매출처관리', targetRecordId: 'CST-045 (이마트)', fieldName: '담당자명', oldValue: '김철수', newValue: '이영희', reason: '담당자 변경' },
    { id: 3, dateTime: '2023-10-23 09:15:33', user: 'sys_admin(시스템관리자)', targetModule: '사용자관리', targetRecordId: 'USER-010 (홍길동)', fieldName: '권한', oldValue: '영업사원', newValue: '영업팀장', reason: '승진' },
  ]);

  const [searchParams, setSearchParams] = useState({
    startDate: '2023-10-01',
    endDate: '2023-10-31',
    moduleName: '전체'
  });

  const handleSearch = () => {
    alert('이력 조회를 수행합니다.');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>변경 이력 조회 (HSTRY-LOG-0100)</h2>
      <p style={{ color: '#666' }}>매입처, 매출처, 상품, 사용자 정보 등의 주요 변경 이력을 통합 조회합니다.</p>

      <div style={{ backgroundColor: '#fff', padding: '20px', border: '1px solid #ddd', borderRadius: '4px', marginBottom: '20px' }}>
        <h3>조회 조건</h3>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <label>기간</label>
          <input type="date" value={searchParams.startDate} onChange={e => setSearchParams({...searchParams, startDate: e.target.value})} style={{ padding: '5px' }} />
          <span>~</span>
          <input type="date" value={searchParams.endDate} onChange={e => setSearchParams({...searchParams, endDate: e.target.value})} style={{ padding: '5px' }} />

          <label>모듈 구분</label>
          <select value={searchParams.moduleName} onChange={e => setSearchParams({...searchParams, moduleName: e.target.value})} style={{ padding: '5px' }}>
            <option>전체</option>
            <option>자사정보</option>
            <option>매입처관리</option>
            <option>매출처관리</option>
            <option>상품관리</option>
            <option>사용자관리</option>
          </select>

          <button onClick={handleSearch} style={{ padding: '8px 24px', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginLeft: 'auto' }}>조회</button>
        </div>
      </div>

      <div style={{ flex: 1, backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '8px', overflowY: 'auto', padding: '15px' }}>
        <h3 style={{ marginBottom: '15px', margin: 0, fontSize: '16px' }}>변경 이력 목록</h3>

        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', fontSize: '14px' }}>
          <thead style={{ backgroundColor: '#f8f9fa' }}>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>변경 일시</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>변경자 (ID/이름)</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>대상 모듈</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>대상 레코드 (ID)</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>변경 항목 (필드명)</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>변경 전 데이터</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>변경 후 데이터</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>변경 사유</th>
            </tr>
          </thead>
          <tbody>
            {logData.map((row) => (
              <tr key={row.id}>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{row.dateTime}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{row.user}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{row.targetModule}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>{row.targetRecordId}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px', fontWeight: 'bold' }}>{row.fieldName}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px', color: '#666', textDecoration: 'line-through' }}>{row.oldValue}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px', color: '#0056b3', fontWeight: 'bold' }}>{row.newValue}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>{row.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HstryLog0100;
