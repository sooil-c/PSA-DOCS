import React, { useState } from 'react';

const StngMng0200 = () => {
  const [selectedSupplier, setSelectedSupplier] = useState(null);

  // Dummy list of suppliers
  const supplierList = [
    { code: 'S001', name: '하이트진로' },
    { code: 'S002', name: '오비맥주' },
    { code: 'S003', name: '롯데칠성음료' },
  ];

  // Dummy settings specific to a supplier
  const [supplierSettings, setSupplierSettings] = useState({
    S001: { useCustomVat: false, customVatMethod: 'ROUND', autoPaymentLink: true },
    S002: { useCustomVat: true, customVatMethod: 'FLOOR', autoPaymentLink: false },
    S003: { useCustomVat: false, customVatMethod: 'ROUND', autoPaymentLink: false },
  });

  const [currentSetting, setCurrentSetting] = useState(null);

  const handleSupplierSelect = (code) => {
    setSelectedSupplier(code);
    // Initialize or get existing setting
    setCurrentSetting(supplierSettings[code] || { useCustomVat: false, customVatMethod: 'ROUND', autoPaymentLink: false });
  };

  const handleSettingChange = (field, value) => {
    if (currentSetting) {
      setCurrentSetting({ ...currentSetting, [field]: value });
    }
  };

  const handleSave = () => {
    if (!selectedSupplier) {
      alert('매입처를 선택해주세요.');
      return;
    }
    setSupplierSettings({
      ...supplierSettings,
      [selectedSupplier]: currentSetting,
    });
    alert('매입처별 환경설정이 저장되었습니다.');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>매입처별 환경설정 (STNG-MNG-0200)</h2>
      </div>

      <div style={{ display: 'flex', gap: '20px' }}>
        {/* Left Sidebar: Supplier List */}
        <div style={{ width: '300px', backgroundColor: '#fff', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h3 style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginTop: 0 }}>매입처 목록</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {supplierList.map((sup) => (
              <li
                key={sup.code}
                onClick={() => handleSupplierSelect(sup.code)}
                style={{
                  padding: '10px',
                  borderBottom: '1px solid #f0f0f0',
                  cursor: 'pointer',
                  backgroundColor: selectedSupplier === sup.code ? '#e3f2fd' : 'transparent',
                  fontWeight: selectedSupplier === sup.code ? 'bold' : 'normal',
                }}
              >
                [{sup.code}] {sup.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Content: Settings Form */}
        <div style={{ flex: 1, backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          {!selectedSupplier ? (
            <div style={{ textAlign: 'center', color: '#888', padding: '50px 0' }}>
              좌측 목록에서 설정을 변경할 매입처를 선택해주세요.
            </div>
          ) : (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #333', paddingBottom: '10px', marginBottom: '20px' }}>
                <h3 style={{ margin: 0 }}>
                  설정 정보 <span style={{ color: '#2196f3' }}>({supplierList.find(s => s.code === selectedSupplier)?.name})</span>
                </h3>
                <button style={buttonStyle('#4caf50')} onClick={handleSave}>저장</button>
              </div>

              <div style={formGroupStyle}>
                <label style={labelStyle}>전용 부가세 단수 처리 방식 사용 여부</label>
                <div>
                  <label style={{ marginRight: '15px' }}>
                    <input
                      type="radio"
                      checked={currentSetting.useCustomVat === false}
                      onChange={() => handleSettingChange('useCustomVat', false)}
                    /> 공통 환경설정 따름
                  </label>
                  <label>
                    <input
                      type="radio"
                      checked={currentSetting.useCustomVat === true}
                      onChange={() => handleSettingChange('useCustomVat', true)}
                    /> 예외 방식 적용 (해당 매입처 전용)
                  </label>
                </div>
              </div>

              {currentSetting.useCustomVat && (
                <div style={{ ...formGroupStyle, padding: '15px', backgroundColor: '#f9f9f9', border: '1px solid #eee', borderRadius: '4px' }}>
                  <label style={labelStyle}>매입처 전용 부가세 단수 처리 방식</label>
                  <select
                    value={currentSetting.customVatMethod}
                    onChange={(e) => handleSettingChange('customVatMethod', e.target.value)}
                    style={inputStyle}
                  >
                    <option value="ROUND">반올림</option>
                    <option value="FLOOR">절사 (내림)</option>
                    <option value="CEIL">절상 (올림)</option>
                  </select>
                  <p style={{ fontSize: '0.85em', color: '#f44336', marginTop: '5px' }}>
                    * 이 설정은 공통 설정(STNG-COM-0100)보다 우선적으로 적용됩니다.
                  </p>
                </div>
              )}

              <div style={formGroupStyle}>
                <label style={labelStyle}>자동 결제/지급 연동 (외상매입금)</label>
                <div>
                   <label style={{ marginRight: '15px' }}>
                    <input
                      type="radio"
                      checked={currentSetting.autoPaymentLink === true}
                      onChange={() => handleSettingChange('autoPaymentLink', true)}
                    /> 사용 (매입 확정 시 채무 즉시 발생)
                  </label>
                  <label>
                    <input
                      type="radio"
                      checked={currentSetting.autoPaymentLink === false}
                      onChange={() => handleSettingChange('autoPaymentLink', false)}
                    /> 미사용 (채무 발생 보류)
                  </label>
                </div>
              </div>

            </div>
          )}
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
  padding: '8px 20px',
  borderRadius: '4px',
  cursor: 'pointer',
  fontWeight: 'bold',
});

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
  maxWidth: '300px',
  boxSizing: 'border-box',
};

export default StngMng0200;
