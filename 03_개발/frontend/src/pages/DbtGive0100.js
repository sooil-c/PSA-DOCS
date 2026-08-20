import React, { useState } from 'react';

const DbtGive0100 = () => {
  const [paymentList, setPaymentList] = useState([
    { id: 'PAY20231005-01', date: '2023-10-05', supplier: '하이트진로', method: '계좌이체', amount: 5000000, remark: '10월 초 결제' },
    { id: 'PAY20231015-01', date: '2023-10-15', supplier: '오비맥주', method: '어음', amount: 3000000, remark: '어음 30일' }
  ]);

  const [formData, setFormData] = useState({
    date: '2023-10-20',
    supplier: '',
    method: '계좌이체',
    amount: '',
    remark: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (!formData.supplier || !formData.amount) {
      alert('매입처와 지급액은 필수 입력입니다.');
      return;
    }
    const newPayment = {
      id: `PAY${formData.date.replace(/-/g, '')}-0X`,
      ...formData,
      amount: parseInt(formData.amount, 10)
    };
    setPaymentList([newPayment, ...paymentList]);
    alert('외상대금 지급이 등록되었습니다.');
    setFormData({ ...formData, amount: '', remark: '' });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ margin: 0 }}>외상대금 지급 관리 (DBT-GIVE-0100)</h2>
        <div>
          <button style={{ padding: '8px 16px', marginRight: '10px', backgroundColor: '#607D8B', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>미지급 잔액 조회</button>
          <button onClick={handleSave} style={{ padding: '8px 16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>등록/저장</button>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '20px', flex: 1 }}>
        {/* 좌측: 등록 폼 */}
        <div style={{ flex: 1, backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '4px', padding: '20px', display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ borderBottom: '2px solid #333', paddingBottom: '10px', marginTop: 0 }}>지급 정보 입력</h3>

          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
            <tbody>
              <tr>
                <th style={{ width: '120px', textAlign: 'left', padding: '12px', backgroundColor: '#f9f9f9', borderBottom: '1px solid #eee' }}>지급일자 <span style={{color:'red'}}>*</span></th>
                <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                  <input type="date" name="date" value={formData.date} onChange={handleChange} style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
                </td>
              </tr>
              <tr>
                <th style={{ textAlign: 'left', padding: '12px', backgroundColor: '#f9f9f9', borderBottom: '1px solid #eee' }}>매입처 <span style={{color:'red'}}>*</span></th>
                <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <input type="text" name="supplier" value={formData.supplier} onChange={handleChange} placeholder="매입처명" style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px', flex: 1 }} />
                    <button style={{ padding: '8px 12px', cursor: 'pointer' }}>검색</button>
                  </div>
                </td>
              </tr>
              <tr>
                <th style={{ textAlign: 'left', padding: '12px', backgroundColor: '#f9f9f9', borderBottom: '1px solid #eee' }}>결제 수단 <span style={{color:'red'}}>*</span></th>
                <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                  <select name="method" value={formData.method} onChange={handleChange} style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px', width: '100%' }}>
                    <option value="계좌이체">계좌이체</option>
                    <option value="어음">어음</option>
                    <option value="현금">현금</option>
                    <option value="카드">법인카드</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th style={{ textAlign: 'left', padding: '12px', backgroundColor: '#f9f9f9', borderBottom: '1px solid #eee' }}>지급 금액 <span style={{color:'red'}}>*</span></th>
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

          <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#e8f5e9', border: '1px solid #c8e6c9', borderRadius: '4px' }}>
            <strong>[참고]</strong> 선택된 매입처의 현재 미지급 잔액은 <strong>12,500,000 원</strong> 입니다.
          </div>
        </div>

        {/* 우측: 지급 이력 목록 */}
        <div style={{ flex: 2, backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '4px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '15px', borderBottom: '1px solid #ccc', backgroundColor: '#f9f9f9', display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontWeight: 'bold' }}>최근 지급 내역</span>
            <div>
              <input type="month" defaultValue="2023-10" style={{ padding: '4px', marginRight: '5px' }} />
              <button style={{ padding: '4px 8px' }}>조회</button>
            </div>
          </div>
          <div style={{ flex: 1, overflowY: 'auto', padding: '10px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
              <thead style={{ backgroundColor: '#f5f5f5' }}>
                <tr>
                  <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>지급일자</th>
                  <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>매입처</th>
                  <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>결제수단</th>
                  <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>지급금액</th>
                  <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>적요</th>
                </tr>
              </thead>
              <tbody>
                {paymentList.map((pay) => (
                  <tr key={pay.id} style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '10px' }}>{pay.date}</td>
                    <td style={{ padding: '10px' }}>{pay.supplier}</td>
                    <td style={{ padding: '10px' }}>{pay.method}</td>
                    <td style={{ padding: '10px', textAlign: 'right', fontWeight: 'bold', color: '#d32f2f' }}>{pay.amount.toLocaleString()} 원</td>
                    <td style={{ padding: '10px' }}>{pay.remark}</td>
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

export default DbtGive0100;
