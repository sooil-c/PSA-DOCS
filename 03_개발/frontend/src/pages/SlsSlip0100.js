import React, { useState } from 'react';

const SlsSlip0100 = () => {
  const [items, setItems] = useState([]);
  const [fastInput, setFastInput] = useState({ code: '', qtyBox: '', qtyBottle: '' });

  const [totals, setTotals] = useState({ supply: 0, vat: 0, total: 0 });

  const handleFastInputChange = (e) => {
    const { name, value } = e.target;
    setFastInput({ ...fastInput, [name]: value });
  };

  const handleAddRow = () => {
    if (!fastInput.code) return;

    // Mocking product data lookup
    const newItem = {
      id: Date.now(),
      code: fastInput.code,
      name: `상품 ${fastInput.code}`,
      qtyBox: Number(fastInput.qtyBox) || 0,
      qtyBottle: Number(fastInput.qtyBottle) || 0,
      price: 15000,
      supply: 15000 * ((Number(fastInput.qtyBox) || 0) + (Number(fastInput.qtyBottle) || 0)),
      vat: 1500 * ((Number(fastInput.qtyBox) || 0) + (Number(fastInput.qtyBottle) || 0))
    };

    newItem.total = newItem.supply + newItem.vat;

    const newItems = [...items, newItem];
    setItems(newItems);
    calculateTotals(newItems);
    setFastInput({ code: '', qtyBox: '', qtyBottle: '' });
  };

  const handleDeleteRow = (id) => {
    const newItems = items.filter(item => item.id !== id);
    setItems(newItems);
    calculateTotals(newItems);
  };

  const calculateTotals = (currentItems) => {
    const t = currentItems.reduce((acc, curr) => ({
      supply: acc.supply + curr.supply,
      vat: acc.vat + curr.vat,
      total: acc.total + curr.total
    }), { supply: 0, vat: 0, total: 0 });
    setTotals(t);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', padding: '15px', borderRadius: '5px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <h2 style={{ margin: 0 }}>매출전표등록 (SLS-SLIP-0100)</h2>
        <button style={{...btnStyle, backgroundColor: '#2196f3', color: 'white'}}>[명세서 인쇄]</button>
      </div>

      {/* Master Area */}
      <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '5px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '15px' }}>
        <div><label style={labelStyle}>전표일자 *</label><input type="date" style={fullInputStyle} /></div>
        <div>
          <label style={labelStyle}>거래유형 *</label>
          <select style={fullInputStyle}>
            <option>일반매출</option>
            <option>자사소비</option>
          </select>
        </div>
        <div><label style={labelStyle}>매출처 *</label><div style={{display:'flex', gap:'5px'}}><input type="text" style={fullInputStyle} placeholder="검색" /><button style={btnStyle}>검색</button></div></div>
        <div><label style={labelStyle}>영업담당자</label><input type="text" style={fullInputStyle} /></div>
        <div><label style={labelStyle}>비고</label><input type="text" style={fullInputStyle} /></div>
      </div>

      {/* Fast Input Area */}
      <div style={{ backgroundColor: '#e8f5e9', padding: '15px', borderRadius: '5px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', display: 'flex', gap: '15px', alignItems: 'flex-end' }}>
        <div style={{ flex: 1 }}><label style={labelStyle}>상품코드 (스캔/검색)</label><input type="text" name="code" value={fastInput.code} onChange={handleFastInputChange} onKeyPress={(e) => e.key === 'Enter' && handleAddRow()} style={fullInputStyle} autoFocus /></div>
        <div style={{ width: '100px' }}><label style={labelStyle}>수량 (BOX)</label><input type="number" name="qtyBox" value={fastInput.qtyBox} onChange={handleFastInputChange} onKeyPress={(e) => e.key === 'Enter' && handleAddRow()} style={fullInputStyle} /></div>
        <div style={{ width: '100px' }}><label style={labelStyle}>수량 (본)</label><input type="number" name="qtyBottle" value={fastInput.qtyBottle} onChange={handleFastInputChange} onKeyPress={(e) => e.key === 'Enter' && handleAddRow()} style={fullInputStyle} /></div>
        <button onClick={handleAddRow} style={{...btnStyle, height: '35px', backgroundColor: '#4caf50', color: 'white', border: 'none'}}>[엔터/저장]</button>
      </div>

      {/* Grid Area */}
      <div style={{ flex: 1, backgroundColor: 'white', borderRadius: '5px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1, overflowY: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
            <thead style={{ backgroundColor: '#f5f5f5', position: 'sticky', top: 0 }}>
              <tr>
                <th style={thStyle}>No</th>
                <th style={thStyle}>상품코드</th>
                <th style={thStyle}>상품명</th>
                <th style={thStyle}>BOX</th>
                <th style={thStyle}>본</th>
                <th style={thStyle}>단가</th>
                <th style={thStyle}>공급가</th>
                <th style={thStyle}>부가세</th>
                <th style={thStyle}>합계</th>
                <th style={thStyle}>삭제</th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 ? (
                <tr><td colSpan="10" style={{ padding: '20px', color: '#999' }}>입력된 전표 데이터가 없습니다.</td></tr>
              ) : (
                items.map((item, idx) => (
                  <tr key={item.id} style={{ borderBottom: '1px solid #eee' }}>
                    <td style={tdStyle}>{idx + 1}</td>
                    <td style={tdStyle}>{item.code}</td>
                    <td style={tdStyle}>{item.name}</td>
                    <td style={tdStyle}>{item.qtyBox}</td>
                    <td style={tdStyle}>{item.qtyBottle}</td>
                    <td style={tdStyle}>{item.price.toLocaleString()}</td>
                    <td style={tdStyle}>{item.supply.toLocaleString()}</td>
                    <td style={tdStyle}>{item.vat.toLocaleString()}</td>
                    <td style={tdStyle}>{item.total.toLocaleString()}</td>
                    <td style={tdStyle}><button onClick={() => handleDeleteRow(item.id)} style={{...btnStyle, color: 'red'}}>삭제</button></td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Footer Totals */}
        <div style={{ backgroundColor: '#e8f5e9', padding: '15px', borderTop: '2px solid #4caf50', display: 'flex', justifyContent: 'flex-end', gap: '30px', fontWeight: 'bold' }}>
          <div>총 공급가: {totals.supply.toLocaleString()} 원</div>
          <div>총 부가세: {totals.vat.toLocaleString()} 원</div>
          <div style={{ color: '#2e7d32', fontSize: '1.2em' }}>총 합계: {totals.total.toLocaleString()} 원</div>
        </div>
      </div>
    </div>
  );
};

const labelStyle = { display: 'block', marginBottom: '5px', fontSize: '13px', color: '#666', fontWeight: 'bold' };
const fullInputStyle = { width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ccc', boxSizing: 'border-box' };
const btnStyle = { padding: '8px 12px', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer', backgroundColor: '#f0f0f0' };
const thStyle = { padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f5f5f5' };
const tdStyle = { padding: '10px' };

export default SlsSlip0100;
