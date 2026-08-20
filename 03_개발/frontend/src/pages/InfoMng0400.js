import React, { useState } from 'react';

const InfoMng0400 = () => {
  const [activeTab, setActiveTab] = useState('기본정보');

  const [formData, setFormData] = useState({
    code: '',
    barcode: '',
    name: '',
    alcoholType: '',
    volume: '',
    abv: '',
    unit: 'BOX',
    bottlesPerBox: '',
    taxType: '과세',
    vatRate: '10',
    purchasePrice: '',
    purchaseVat: '',
    purchaseTotal: '',
    salesPrice: '',
    salesVat: '',
    salesTotal: '',
    bottleDeposit: '',
    startDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (!formData.name) {
      alert('상품명을 입력해주세요.');
      return;
    }
    if (!formData.alcoholType) {
      alert('주종을 선택해주세요.');
      return;
    }
    if (!formData.startDate) {
      alert('적용 시작일을 입력해주세요.');
      return;
    }
    alert('저장되었습니다.');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '20px' }}>

      {/* 상단: 타이틀 및 버튼 영역 */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>상품 등록 및 관리</h2>
        <div>
          <button style={{ padding: '8px 16px', marginRight: '10px', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>신규</button>
          <button onClick={handleSave} style={{ padding: '8px 16px', marginRight: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>저장</button>
          <button style={{ padding: '8px 16px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>삭제</button>
          <button style={btnStyle}>변경이력 조회</button>
        </div>
      </div>

      {/* 상단: 검색 영역 */}
      <div style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h3 style={{ marginTop: 0 }}>검색 조건</h3>
        <div style={{ display: 'flex', gap: '15px' }}>
          <input type="text" placeholder="상품명" style={inputStyle} />
          <input type="text" placeholder="바코드" style={inputStyle} />
          <select style={inputStyle}>
            <option value="">분류 전체</option>
            <option value="소주">소주</option>
            <option value="맥주">맥주</option>
          </select>
          <select style={inputStyle}>
            <option value="">과세여부 전체</option>
            <option value="과세">과세</option>
            <option value="면세">면세</option>
          </select>
          <button style={btnStyle}>검색</button>
        </div>
      </div>

      {/* 중단: 목록 영역 */}
      <div style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', flex: 1, overflowY: 'auto' }}>
        <h3 style={{ marginTop: 0 }}>검색 결과</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f0f0f0', textAlign: 'left' }}>
              <th style={thStyle}>상품코드</th>
              <th style={thStyle}>바코드</th>
              <th style={thStyle}>상품명</th>
              <th style={thStyle}>주종</th>
              <th style={thStyle}>단위</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="5" style={{ ...tdStyle, textAlign: 'center', padding: '20px', color: '#888' }}>
                검색 결과가 없습니다.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 하단: 상세 영역 */}
      <div style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <div style={{ display: 'flex', borderBottom: '1px solid #ccc', marginBottom: '15px' }}>
          <div
            style={{ ...tabStyle, borderBottom: activeTab === '기본정보' ? '2px solid #007bff' : 'none', fontWeight: activeTab === '기본정보' ? 'bold' : 'normal' }}
            onClick={() => setActiveTab('기본정보')}
          >
            기본정보
          </div>
          <div
            style={{ ...tabStyle, borderBottom: activeTab === '금액정보' ? '2px solid #007bff' : 'none', fontWeight: activeTab === '금액정보' ? 'bold' : 'normal' }}
            onClick={() => setActiveTab('금액정보')}
          >
            금액정보
          </div>
        </div>

        <form>
          {activeTab === '기본정보' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              <div style={formRowStyle}>
                <label style={labelStyle}>상품코드</label>
                <input type="text" name="code" value={formData.code} onChange={handleChange} disabled placeholder="자동생성" style={{...inputStyle, flex: 1}} />
              </div>
              <div style={formRowStyle}>
                <label style={labelStyle}>바코드</label>
                <input type="text" name="barcode" value={formData.barcode} onChange={handleChange} style={{...inputStyle, flex: 1}} />
              </div>
              <div style={formRowStyle}>
                <label style={labelStyle}>상품명 <span style={{color:'red'}}>*</span></label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} style={{...inputStyle, flex: 1}} />
              </div>
              <div style={formRowStyle}>
                <label style={labelStyle}>주종 <span style={{color:'red'}}>*</span></label>
                <select name="alcoholType" value={formData.alcoholType} onChange={handleChange} style={{...inputStyle, flex: 1}}>
                  <option value="">선택</option>
                  <option value="소주">소주</option>
                  <option value="맥주">맥주</option>
                  <option value="양주">양주</option>
                  <option value="와인">와인</option>
                  <option value="비주류">비주류</option>
                </select>
              </div>
              <div style={formRowStyle}>
                <label style={labelStyle}>용량(ml)</label>
                <input type="number" name="volume" value={formData.volume} onChange={handleChange} style={{...inputStyle, flex: 1}} />
              </div>
              <div style={formRowStyle}>
                <label style={labelStyle}>알코올 도수(%)</label>
                <input type="number" name="abv" value={formData.abv} onChange={handleChange} style={{...inputStyle, flex: 1}} />
              </div>
              <div style={formRowStyle}>
                <label style={labelStyle}>단위</label>
                <select name="unit" value={formData.unit} onChange={handleChange} style={{...inputStyle, flex: 1}}>
                  <option value="BOX">BOX</option>
                  <option value="본">본</option>
                </select>
              </div>
              <div style={formRowStyle}>
                <label style={labelStyle}>환산 수량(본)</label>
                <input type="number" name="bottlesPerBox" value={formData.bottlesPerBox} onChange={handleChange} placeholder="1박스당 본 수량" style={{...inputStyle, flex: 1}} />
              </div>
              <div style={formRowStyle}>
                <label style={labelStyle}>과세여부</label>
                <div style={{ flex: 1, display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <label><input type="radio" name="taxType" value="과세" checked={formData.taxType === '과세'} onChange={handleChange} /> 과세</label>
                  <label><input type="radio" name="taxType" value="면세" checked={formData.taxType === '면세'} onChange={handleChange} /> 면세</label>
                </div>
              </div>
              <div style={formRowStyle}>
                <label style={labelStyle}>부가세율</label>
                <select name="vatRate" value={formData.vatRate} onChange={handleChange} style={{...inputStyle, flex: 1}}>
                  <option value="10">10%</option>
                  <option value="0">0%</option>
                </select>
              </div>
            </div>
          )}

          {activeTab === '금액정보' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              <div style={formRowStyle}>
                <label style={labelStyle}>매입 공급가</label>
                <input type="number" name="purchasePrice" value={formData.purchasePrice} onChange={handleChange} style={{...inputStyle, flex: 1}} />
              </div>
              <div style={formRowStyle}>
                <label style={labelStyle}>매입 부가세</label>
                <input type="number" name="purchaseVat" value={formData.purchaseVat} onChange={handleChange} style={{...inputStyle, flex: 1}} />
              </div>
              <div style={formRowStyle}>
                <label style={labelStyle}>매입 합계</label>
                <input type="number" name="purchaseTotal" value={formData.purchaseTotal} onChange={handleChange} style={{...inputStyle, flex: 1}} />
              </div>
              <div style={formRowStyle}>
                <label style={labelStyle}>매출 공급가</label>
                <input type="number" name="salesPrice" value={formData.salesPrice} onChange={handleChange} style={{...inputStyle, flex: 1}} />
              </div>
              <div style={formRowStyle}>
                <label style={labelStyle}>매출 부가세</label>
                <input type="number" name="salesVat" value={formData.salesVat} onChange={handleChange} style={{...inputStyle, flex: 1}} />
              </div>
              <div style={formRowStyle}>
                <label style={labelStyle}>매출 합계</label>
                <input type="number" name="salesTotal" value={formData.salesTotal} onChange={handleChange} style={{...inputStyle, flex: 1}} />
              </div>
              <div style={formRowStyle}>
                <label style={labelStyle}>공병 보증금</label>
                <input type="number" name="bottleDeposit" value={formData.bottleDeposit} onChange={handleChange} placeholder="1본당 보증금" style={{...inputStyle, flex: 1}} />
              </div>
              <div style={formRowStyle}>
                <label style={labelStyle}>적용 시작일 <span style={{color:'red'}}>*</span></label>
                <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} style={{...inputStyle, flex: 1}} />
              </div>
            </div>
          )}
        </form>
      </div>

    </div>
  );
};

// Styles
const btnStyle = {
  padding: '8px 16px',
  marginLeft: '10px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const inputStyle = {
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

const thStyle = {
  padding: '10px',
  borderBottom: '2px solid #ddd',
};

const tdStyle = {
  padding: '10px',
  borderBottom: '1px solid #eee',
};

const formRowStyle = {
  display: 'flex',
  alignItems: 'center',
};

const labelStyle = {
  width: '120px',
  fontWeight: 'bold',
};

const tabStyle = {
  padding: '10px 20px',
  cursor: 'pointer',
};

export default InfoMng0400;
