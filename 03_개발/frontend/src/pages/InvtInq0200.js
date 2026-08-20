import React, { useState } from 'react';

const InvtInq0200 = () => {
  const [inventoryData, setInventoryData] = useState([
    { code: 'P001', name: '참이슬 후레쉬', type: '소주', unit: 'BOX', safeStock: 500, currentStock: 850, status: '정상' },
    { code: 'P002', name: '카스 프레쉬', type: '맥주', unit: 'BOX', safeStock: 300, currentStock: 120, status: '부족' },
    { code: 'P003', name: '처음처럼', type: '소주', unit: 'BOX', safeStock: 400, currentStock: 410, status: '정상' },
    { code: 'P004', name: '발렌타인 17년', type: '양주', unit: '본', safeStock: 50, currentStock: 15, status: '부족' },
    { code: 'P005', name: '테라', type: '맥주', unit: 'BOX', safeStock: 300, currentStock: 600, status: '정상' }
  ]);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ margin: 0 }}>현재고 조회 (INVT-INQ-0200)</h2>
        <div>
          <button style={{ padding: '8px 16px', marginRight: '10px', backgroundColor: '#607D8B', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>엑셀 다운로드</button>
          <button style={{ padding: '8px 16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>인쇄</button>
        </div>
      </div>

      {/* 상단 검색 영역 */}
      <div style={{ backgroundColor: '#fff', border: '1px solid #ddd', padding: '15px', borderRadius: '8px', marginBottom: '20px', display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <label style={{ fontWeight: 'bold', fontSize: '14px', whiteSpace: 'nowrap', flexShrink: 0 }}>기준 일시</label>
          <span style={{ padding: '6px', backgroundColor: '#f0f0f0', borderRadius: '4px', border: '1px solid #ccc', display: 'inline-block' }}>
            {new Date().toLocaleString()} (실시간)
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <label style={{ fontWeight: 'bold', fontSize: '14px', whiteSpace: 'nowrap', flexShrink: 0 }}>주종</label>
          <select style={{ padding: '6px', border: '1px solid #ccc', borderRadius: '4px' }}>
            <option value="">전체</option>
            <option value="소주">소주</option>
            <option value="맥주">맥주</option>
            <option value="양주">양주</option>
          </select>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <label style={{ fontWeight: 'bold', fontSize: '14px', whiteSpace: 'nowrap', flexShrink: 0 }}>상품</label>
          <div style={{ display: 'inline-flex', gap: '5px' }}>
            <input type="text" placeholder="코드/상품명" style={{ padding: '6px', border: '1px solid #ccc', borderRadius: '4px' }} />
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <label style={{ fontWeight: 'bold', fontSize: '14px', whiteSpace: 'nowrap', flexShrink: 0 }}>재고 상태</label>
          <select style={{ padding: '6px', border: '1px solid #ccc', borderRadius: '4px' }}>
            <option value="">전체</option>
            <option value="정상">정상</option>
            <option value="부족">안전재고 부족</option>
          </select>
        </div>
        <button style={{ padding: '8px 24px', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginLeft: 'auto' }}>조회</button>
      </div>

      {/* 그리드 영역 */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '10px' }}>
        <h3 style={{ margin: 0, fontSize: '16px' }}>현재고 목록</h3>
      </div>
      <div style={{ flex: 1, backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '8px', overflowY: 'auto', padding: '15px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', fontSize: '14px' }}>
          <thead style={{ backgroundColor: '#f5f5f5', position: 'sticky', top: 0, zIndex: 1 }}>
            <tr>
              <th style={{ padding: '12px', borderBottom: '1px solid #ddd', borderRight: '1px solid #eee' }}>상품코드</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #ddd', borderRight: '1px solid #eee' }}>상품명</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #ddd', borderRight: '1px solid #eee' }}>주종</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #ddd', borderRight: '1px solid #eee' }}>단위</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #ddd', borderRight: '1px solid #eee' }}>안전 재고</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #ddd', borderRight: '1px solid #eee' }}>현재 재고</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>상태</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData.map((row) => (
              <tr key={row.code} style={{ borderBottom: '1px solid #eee', backgroundColor: row.status === '부족' ? '#ffebee' : 'transparent' }}>
                <td style={{ padding: '12px', borderRight: '1px solid #eee' }}>{row.code}</td>
                <td style={{ padding: '12px', borderRight: '1px solid #eee', textAlign: 'left', fontWeight: 'bold' }}>{row.name}</td>
                <td style={{ padding: '12px', borderRight: '1px solid #eee' }}>{row.type}</td>
                <td style={{ padding: '12px', borderRight: '1px solid #eee' }}>{row.unit}</td>
                <td style={{ padding: '12px', borderRight: '1px solid #eee', textAlign: 'right' }}>{row.safeStock.toLocaleString()}</td>
                <td style={{ padding: '12px', borderRight: '1px solid #eee', textAlign: 'right', fontWeight: 'bold', color: row.status === '부족' ? '#d32f2f' : '#1976d2' }}>
                  {row.currentStock.toLocaleString()}
                </td>
                <td style={{ padding: '12px' }}>
                  {row.status === '부족' ? (
                    <span style={{ padding: '4px 8px', backgroundColor: '#f44336', color: 'white', borderRadius: '4px', fontSize: '12px' }}>부족 알림</span>
                  ) : (
                    <span style={{ padding: '4px 8px', backgroundColor: '#4CAF50', color: 'white', borderRadius: '4px', fontSize: '12px' }}>정상</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvtInq0200;
