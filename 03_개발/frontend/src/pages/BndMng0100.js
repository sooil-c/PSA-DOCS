import React, { useState } from 'react';

const BndMng0100 = () => {
  const [collectionList, setCollectionList] = useState([
    { id: 'COL20231002-01', date: '2023-10-02', customer: '대한상사', method: '무통장입금', amount: 1500000, remark: '9월분 일부 수금' },
    { id: 'COL20231010-01', date: '2023-10-10', customer: '청춘식당', method: '카드결제', amount: 350000, remark: '' }
  ]);

  const [formData, setFormData] = useState({
    date: '2023-10-25',
    customer: '',
    method: '무통장입금',
    amount: '',
    remark: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (!formData.customer || !formData.amount) {
      alert('매출처와 수금액은 필수 입력입니다.');
      return;
    }
    const newCollection = {
      id: `COL${formData.date.replace(/-/g, '')}-0X`,
      ...formData,
      amount: parseInt(formData.amount, 10)
    };
    setCollectionList([newCollection, ...collectionList]);
    alert('수금 내역이 등록되었습니다.');
    setFormData({ ...formData, amount: '', remark: '' });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ margin: 0 }}>수금 등록 관리 (BND-MNG-0100)</h2>
        <div>
          <button style={{ padding: '8px 16px', marginRight: '10px', backgroundColor: '#607D8B', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>미수금 현황 조회</button>
          <button onClick={handleSave} style={{ padding: '8px 16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>등록/저장</button>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '20px', flex: 1 }}>
        {/* 좌측: 등록 폼 */}
        <div style={{ flex: 1, backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '4px', padding: '20px', display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ borderBottom: '2px solid #333', paddingBottom: '10px', marginTop: 0 }}>수금 정보 입력</h3>

          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
            <tbody>
              <tr>
                <th style={{ width: '120px', textAlign: 'left', padding: '12px', backgroundColor: '#f9f9f9', borderBottom: '1px solid #eee' }}>수금일자 <span style={{color:'red'}}>*</span></th>
                <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                  <input type="date" name="date" value={formData.date} onChange={handleChange} style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
                </td>
              </tr>
              <tr>
                <th style={{ textAlign: 'left', padding: '12px', backgroundColor: '#f9f9f9', borderBottom: '1px solid #eee' }}>매출처 <span style={{color:'red'}}>*</span></th>
                <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <input type="text" name="customer" value={formData.customer} onChange={handleChange} placeholder="매출처명" style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px', flex: 1 }} />
                    <button style={{ padding: '8px 12px', cursor: 'pointer' }}>검색</button>
                  </div>
                </td>
              </tr>
              <tr>
                <th style={{ textAlign: 'left', padding: '12px', backgroundColor: '#f9f9f9', borderBottom: '1px solid #eee' }}>수금 수단 <span style={{color:'red'}}>*</span></th>
                <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                  <select name="method" value={formData.method} onChange={handleChange} style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px', width: '100%' }}>
                    <option value="무통장입금">무통장입금</option>
                    <option value="카드결제">카드결제</option>
                    <option value="현금수금">현금수금</option>
                    <option value="어음">어음</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th style={{ textAlign: 'left', padding: '12px', backgroundColor: '#f9f9f9', borderBottom: '1px solid #eee' }}>수금 금액 <span style={{color:'red'}}>*</span></th>
                <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                  <input type="number" name="amount" value={formData.amount} onChange={handleChange} placeholder="숫자만 입력" style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px', width: '100%', textAlign: 'right' }} />
                </td>
              </tr>
              <tr>
                <th style={{ textAlign: 'left', padding: '12px', backgroundColor: '#f9f9f9', borderBottom: '1px solid #eee' }}>적요(비고)</th>
                <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                  <input type="text" name="remark" value={formData.remark} onChange={handleChange} style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px', width: '100%' }} />
                </td>
              </tr>
            </tbody>
          </table>

          <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#e3f2fd', border: '1px solid #bbdefb', borderRadius: '4px' }}>
            <strong>[참고]</strong> 선택된 매출처의 현재 미수금 잔액은 <strong>4,200,000 원</strong> 입니다.
          </div>
        </div>

        {/* 우측: 수금 이력 목록 */}
        <div style={{ flex: 2, backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '4px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '15px', borderBottom: '1px solid #ccc', backgroundColor: '#f9f9f9', display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontWeight: 'bold' }}>최근 수금 내역</span>
            <div>
              <input type="month" defaultValue="2023-10" style={{ padding: '4px', marginRight: '5px' }} />
              <button style={{ padding: '4px 8px' }}>조회</button>
            </div>
          </div>
          <div style={{ flex: 1, overflowY: 'auto', padding: '10px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
              <thead style={{ backgroundColor: '#f5f5f5' }}>
                <tr>
                  <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>수금일자</th>
                  <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>매출처</th>
                  <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>수금수단</th>
                  <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>수금금액</th>
                  <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>적요</th>
                </tr>
              </thead>
              <tbody>
                {collectionList.map((col) => (
                  <tr key={col.id} style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '10px' }}>{col.date}</td>
                    <td style={{ padding: '10px' }}>{col.customer}</td>
                    <td style={{ padding: '10px' }}>{col.method}</td>
                    <td style={{ padding: '10px', textAlign: 'right', fontWeight: 'bold', color: '#1976d2' }}>{col.amount.toLocaleString()} 원</td>
                    <td style={{ padding: '10px' }}>{col.remark}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BndMng0100;
