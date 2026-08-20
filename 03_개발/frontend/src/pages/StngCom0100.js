import React, { useState } from 'react';

const StngCom0100 = () => {
  // State for common settings
  const [settings, setSettings] = useState({
    useFifo: true,
    defaultVatRate: '10', // 10%
    vatCalculationMethod: 'ROUND', // 반올림
    inventoryUnit: 'BOTTLE', // 기준 단위
    allowNegativeInventory: false, // 마이너스 재고 허용 여부
  });

  const handleSettingChange = (field, value) => {
    setSettings({
      ...settings,
      [field]: value,
    });
  };

  const handleSave = () => {
    console.log('Saving common settings...', settings);
    alert('공통 환경설정이 저장되었습니다.');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>공통 환경설정 (STNG-COM-0100)</h2>
        <button style={buttonStyle('#4caf50')} onClick={handleSave}>저장</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>

        {/* 재고/물류 설정 */}
        <div style={cardStyle}>
          <h3 style={{ borderBottom: '2px solid #333', paddingBottom: '10px', marginBottom: '20px' }}>재고 / 물류 설정</h3>

          <div style={formGroupStyle}>
            <label style={labelStyle}>선입선출(FIFO) 적용 여부</label>
            <div>
              <label style={{ marginRight: '15px' }}>
                <input
                  type="radio"
                  checked={settings.useFifo === true}
                  onChange={() => handleSettingChange('useFifo', true)}
                /> 사용 (오래된 재고부터 차감)
              </label>
              <label>
                <input
                  type="radio"
                  checked={settings.useFifo === false}
                  onChange={() => handleSettingChange('useFifo', false)}
                /> 미사용 (단순 수량 차감)
              </label>
            </div>
          </div>

          <div style={formGroupStyle}>
            <label style={labelStyle}>마이너스 재고 허용</label>
            <div>
              <label style={{ marginRight: '15px' }}>
                <input
                  type="radio"
                  checked={settings.allowNegativeInventory === true}
                  onChange={() => handleSettingChange('allowNegativeInventory', true)}
                /> 허용 (출고 우선)
              </label>
              <label>
                <input
                  type="radio"
                  checked={settings.allowNegativeInventory === false}
                  onChange={() => handleSettingChange('allowNegativeInventory', false)}
                /> 불가 (재고 부족 시 출고 에러)
              </label>
            </div>
          </div>

          <div style={formGroupStyle}>
            <label style={labelStyle}>기본 재고 조회 단위</label>
            <select
              value={settings.inventoryUnit}
              onChange={(e) => handleSettingChange('inventoryUnit', e.target.value)}
              style={inputStyle}
            >
              <option value="BOTTLE">본 (Bottle) 중심</option>
              <option value="BOX">BOX 중심</option>
            </select>
          </div>
        </div>

        {/* 세무/단가 설정 */}
        <div style={cardStyle}>
          <h3 style={{ borderBottom: '2px solid #333', paddingBottom: '10px', marginBottom: '20px' }}>세무 / 금액 설정</h3>

          <div style={formGroupStyle}>
            <label style={labelStyle}>전사 기본 부가세율</label>
            <select
              value={settings.defaultVatRate}
              onChange={(e) => handleSettingChange('defaultVatRate', e.target.value)}
              style={inputStyle}
            >
              <option value="10">10% (과세)</option>
              <option value="0">0% (면세)</option>
            </select>
          </div>

          <div style={formGroupStyle}>
            <label style={labelStyle}>부가세 계산 단수 처리 (소수점)</label>
            <select
              value={settings.vatCalculationMethod}
              onChange={(e) => handleSettingChange('vatCalculationMethod', e.target.value)}
              style={inputStyle}
            >
              <option value="ROUND">반올림</option>
              <option value="FLOOR">절사 (내림)</option>
              <option value="CEIL">절상 (올림)</option>
            </select>
            <p style={{ fontSize: '0.85em', color: '#666', marginTop: '5px' }}>* 전표 단위 합계에서 발생하는 부가세 소수점을 어떻게 처리할지 설정합니다.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

// Reusable styles
const buttonStyle = (bgColor) => ({
  backgroundColor: bgColor,
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '4px',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '1em',
});

const cardStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
};

const formGroupStyle = {
  marginBottom: '25px',
};

const labelStyle = {
  display: 'block',
  fontWeight: 'bold',
  marginBottom: '10px',
  color: '#333',
};

const inputStyle = {
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  width: '100%',
  boxSizing: 'border-box',
};

export default StngCom0100;
