import React, { useState } from 'react';

const StngMng0300 = () => {
  const [customers, setCustomers] = useState([
    { id: 'C001', name: '이마트 성수점' },
    { id: 'C002', name: '홈플러스 영등포점' },
    { id: 'C003', name: '백종원 프랜차이즈 본사' },
  ]);

  const [selectedCustomer, setSelectedCustomer] = useState('C001');

  const [settings, setSettings] = useState({
    unitVatRounding: 'round', // 'floor', 'ceil', 'round'
    totalAmountRounding: 'round',
    productPriceVatUsage: 'include', // 'include', 'exclude'
    productPriceVatRounding: 'round',
  });

  const handleSettingChange = (e) => {
    const { name, value } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    alert(`매출처 [${selectedCustomer}] 설정이 저장되었습니다.`);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>매출처별 환경설정 (STNG-MNG-0300)</h2>
      <p style={{ color: '#666' }}>특정 매출처에 대해 공통 설정보다 우선 적용되는 개별 설정을 관리합니다.</p>

      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <div style={{ flex: 1, backgroundColor: '#fff', border: '1px solid #ddd', padding: '15px', borderRadius: '4px' }}>
          <h3>매출처 목록</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {customers.map((customer) => (
              <li
                key={customer.id}
                style={{
                  padding: '10px',
                  borderBottom: '1px solid #eee',
                  cursor: 'pointer',
                  backgroundColor: selectedCustomer === customer.id ? '#e6f2ff' : 'transparent',
                }}
                onClick={() => setSelectedCustomer(customer.id)}
              >
                [{customer.id}] {customer.name}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ flex: 2, backgroundColor: '#fff', border: '1px solid #ddd', padding: '15px', borderRadius: '4px' }}>
          <h3>설정 상세 (매출처 코드: {selectedCustomer})</h3>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>단위 부가세 계산 방식</label>
            <select name="unitVatRounding" value={settings.unitVatRounding} onChange={handleSettingChange} style={{ padding: '5px', width: '200px' }}>
              <option value="round">반올림</option>
              <option value="floor">절삭</option>
              <option value="ceil">절상</option>
            </select>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>매출 합계 금액 계산 방식</label>
            <select name="totalAmountRounding" value={settings.totalAmountRounding} onChange={handleSettingChange} style={{ padding: '5px', width: '200px' }}>
              <option value="round">반올림</option>
              <option value="floor">절삭</option>
              <option value="ceil">절상</option>
            </select>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>상품 가격 부가세 기준</label>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <select name="productPriceVatUsage" value={settings.productPriceVatUsage} onChange={handleSettingChange} style={{ padding: '5px', width: '150px' }}>
                <option value="include">부가세 포함</option>
                <option value="exclude">부가세 별도</option>
              </select>
              <span>+</span>
              <select name="productPriceVatRounding" value={settings.productPriceVatRounding} onChange={handleSettingChange} style={{ padding: '5px', width: '150px' }}>
                <option value="round">반올림</option>
                <option value="floor">절삭</option>
                <option value="ceil">절상</option>
              </select>
            </div>
            <small style={{ color: '#888' }}>해당 매출처에 등록된 상품 가격에 대한 부가세 적용 방식입니다.</small>
          </div>

          <button onClick={handleSave} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            저장
          </button>
        </div>
      </div>
    </div>
  );
};

export default StngMng0300;
