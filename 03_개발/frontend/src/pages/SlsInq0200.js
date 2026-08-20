import React, { useState } from 'react';

const SlsInq0200 = () => {
  const [salesData, setSalesData] = useState([
    { id: 'SL20231002-01', date: '2023-10-02', customer: '대한상사', rep: '김영업', product: '참이슬 후레쉬', unit: 'BOX', qty: 50, price: 900000, vat: 90000, total: 990000 },
    { id: 'SL20231002-02', date: '2023-10-02', customer: '대한상사', rep: '김영업', product: '카스 프레쉬', unit: 'BOX', qty: 20, price: 550000, vat: 55000, total: 605000 },
    { id: 'SL20231012-01', date: '2023-10-12', customer: '민국유통', rep: '이영업', product: '발렌타인 17년', unit: '본', qty: 2, price: 400000, vat: 40000, total: 440000 },
    { id: 'SL20231015-01', date: '2023-10-15', customer: '청춘식당', rep: '김영업', product: '처음처럼', unit: 'BOX', qty: 10, price: 180000, vat: 18000, total: 198000 }
  ]);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ margin: 0 }}>매출 내역 조회 (SLS-INQ-0200)</h2>
        <div>
          <button style={{ padding: '8px 16px', marginRight: '10px', backgroundColor: '#607D8B', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>엑셀 다운로드</button>
          <button style={{ padding: '8px 16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>인쇄</button>
        </div>
      </div>

      {/* 상단 검색 영역 */}
      <div style={{ padding: '15px', backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '4px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
          <div>
            <label style={{ fontWeight: 'bold', marginRight: '10px' }}>조회 기간:</label>
            <input type="date" defaultValue="2023-10-01" style={{ padding: '6px', border: '1px solid #ccc', borderRadius: '4px' }} />
            {' ~ '}
            <input type="date" defaultValue="2023-10-31" style={{ padding: '6px', border: '1px solid #ccc', borderRadius: '4px' }} />
          </div>
          <div>
            <label style={{ fontWeight: 'bold', marginRight: '10px' }}>매출처:</label>
            <div style={{ display: 'inline-flex', gap: '5px' }}>
              <input type="text" placeholder="코드/매출처명" style={{ padding: '6px', border: '1px solid #ccc', borderRadius: '4px' }} />
              <button style={{ padding: '6px 12px', cursor: 'pointer' }}>검색</button>
            </div>
          </div>
          <div>
            <label style={{ fontWeight: 'bold', marginRight: '10px' }}>상품:</label>
            <div style={{ display: 'inline-flex', gap: '5px' }}>
              <input type="text" placeholder="코드/상품명" style={{ padding: '6px', border: '1px solid #ccc', borderRadius: '4px' }} />
              <button style={{ padding: '6px 12px', cursor: 'pointer' }}>검색</button>
            </div>
          </div>
          <div>
            <label style={{ fontWeight: 'bold', marginRight: '10px' }}>영업사원:</label>
            <select style={{ padding: '6px', border: '1px solid #ccc', borderRadius: '4px' }}>
              <option value="">전체</option>
              <option value="김영업">김영업</option>
              <option value="이영업">이영업</option>
            </select>
          </div>
          <button style={{ padding: '6px 12px', cursor: 'pointer' }}>조회</button>
        </div>
      </div>

      {/* 그리드 영역 */}
      <div style={{ flex: 1, backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '4px', overflowY: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', fontSize: '14px' }}>
          <thead style={{ backgroundColor: '#f5f5f5', position: 'sticky', top: 0, zIndex: 1 }}>
            <tr>
              <th style={{ padding: '12px', borderBottom: '1px solid #ddd', borderRight: '1px solid #eee' }}>전표번호</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #ddd', borderRight: '1px solid #eee' }}>매출일자</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #ddd', borderRight: '1px solid #eee' }}>매출처</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #ddd', borderRight: '1px solid #eee' }}>영업사원</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #ddd', borderRight: '1px solid #eee' }}>상품명</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #ddd', borderRight: '1px solid #eee' }}>단위</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #ddd', borderRight: '1px solid #eee' }}>수량</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #ddd', borderRight: '1px solid #eee' }}>공급가액</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #ddd', borderRight: '1px solid #eee' }}>부가세</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>합계금액</th>
            </tr>
          </thead>
          <tbody>
            {salesData.map((row) => (
              <tr key={row.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '10px', borderRight: '1px solid #eee' }}>{row.id}</td>
                <td style={{ padding: '10px', borderRight: '1px solid #eee' }}>{row.date}</td>
                <td style={{ padding: '10px', borderRight: '1px solid #eee', textAlign: 'left' }}>{row.customer}</td>
                <td style={{ padding: '10px', borderRight: '1px solid #eee' }}>{row.rep}</td>
                <td style={{ padding: '10px', borderRight: '1px solid #eee', textAlign: 'left' }}>{row.product}</td>
                <td style={{ padding: '10px', borderRight: '1px solid #eee' }}>{row.unit}</td>
                <td style={{ padding: '10px', borderRight: '1px solid #eee', textAlign: 'right' }}>{row.qty.toLocaleString()}</td>
                <td style={{ padding: '10px', borderRight: '1px solid #eee', textAlign: 'right' }}>{row.price.toLocaleString()} 원</td>
                <td style={{ padding: '10px', borderRight: '1px solid #eee', textAlign: 'right' }}>{row.vat.toLocaleString()} 원</td>
                <td style={{ padding: '10px', textAlign: 'right', fontWeight: 'bold' }}>{row.total.toLocaleString()} 원</td>
              </tr>
            ))}
          </tbody>
          <tfoot style={{ position: 'sticky', bottom: 0, backgroundColor: '#e3f2fd', fontWeight: 'bold' }}>
            <tr>
              <td colSpan="6" style={{ padding: '12px', textAlign: 'center', borderRight: '1px solid #ccc' }}>합계</td>
              <td style={{ padding: '12px', textAlign: 'right', borderRight: '1px solid #ccc' }}>
                {salesData.reduce((acc, curr) => acc + curr.qty, 0).toLocaleString()}
              </td>
              <td style={{ padding: '12px', textAlign: 'right', borderRight: '1px solid #ccc' }}>
                {salesData.reduce((acc, curr) => acc + curr.price, 0).toLocaleString()} 원
              </td>
              <td style={{ padding: '12px', textAlign: 'right', borderRight: '1px solid #ccc' }}>
                {salesData.reduce((acc, curr) => acc + curr.vat, 0).toLocaleString()} 원
              </td>
              <td style={{ padding: '12px', textAlign: 'right' }}>
                {salesData.reduce((acc, curr) => acc + curr.total, 0).toLocaleString()} 원
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default SlsInq0200;
