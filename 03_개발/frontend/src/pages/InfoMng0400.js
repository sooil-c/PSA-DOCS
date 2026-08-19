import React, { useState } from 'react';

const InfoMng0400 = () => {
  const [activeTab, setActiveTab] = useState('basic'); // basic, price
  const [products] = useState([
    { code: 'P0001', name: '참이슬 후레쉬', type: '소주', capacity: 360, unit: 'BOX', tax: '과세' },
    { code: 'P0002', name: '카스 프레시', type: '맥주', capacity: 500, unit: 'BOX', tax: '과세' }
  ]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [formData, setFormData] = useState({
    code: '', barcode: '', name: '', type: '소주', capacity: '', alcohol: '',
    unit: 'BOX', convertQty: '', taxType: '과세', vatRate: '10%',
    applyDate: '',
    buyPrice: '', buyVat: '', buyTotal: '',
    sellPrice: '', sellVat: '', sellTotal: '',
    bottleDeposit: ''
  });

  const handleRowClick = (product) => {
    setSelectedProduct(product);
    setFormData({
      ...formData,
      ...product
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', padding: '15px', borderRadius: '5px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <h2 style={{ margin: 0 }}>상품 등록 및 관리 (INFO-MNG-0400)</h2>
        <div>
          <button style={btnStyle}>[신규]</button>
          <button style={{...btnStyle, backgroundColor: '#4caf50', color: 'white'}}>[저장]</button>
          <button style={{...btnStyle, backgroundColor: '#f44336', color: 'white'}}>[삭제]</button>
          <button style={btnStyle}>[변경이력 조회]</button>
        </div>
      </div>

      <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '5px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', display: 'flex', gap: '20px' }}>
        <div>
          <label>분류: </label>
          <select style={inputStyle}>
            <option>전체</option>
            <option>소주</option>
            <option>맥주</option>
          </select>
        </div>
        <div><label>상품명: </label><input type="text" style={inputStyle} /></div>
        <div><label>바코드: </label><input type="text" style={inputStyle} /></div>
        <div>
          <label>과세여부: </label>
          <select style={inputStyle}>
            <option>전체</option>
            <option>과세</option>
            <option>면세</option>
          </select>
        </div>
        <button style={btnStyle}>검색</button>
      </div>

      <div style={{ display: 'flex', flex: 1, gap: '20px', minHeight: 0 }}>
        {/* Left Grid */}
        <div style={{ flex: 1, backgroundColor: 'white', borderRadius: '5px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f9f9f9', fontWeight: 'bold' }}>
            상품 목록
          </div>
          <div style={{ flex: 1, overflowY: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead style={{ backgroundColor: '#f5f5f5', position: 'sticky', top: 0 }}>
                <tr>
                  <th style={thStyle}>상품코드</th>
                  <th style={thStyle}>상품명</th>
                  <th style={thStyle}>주종</th>
                  <th style={thStyle}>단위</th>
                  <th style={thStyle}>과세여부</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr key={p.code} onClick={() => handleRowClick(p)} style={{ cursor: 'pointer', backgroundColor: selectedProduct?.code === p.code ? '#e3f2fd' : 'white' }}>
                    <td style={tdStyle}>{p.code}</td>
                    <td style={tdStyle}>{p.name}</td>
                    <td style={tdStyle}>{p.type}</td>
                    <td style={tdStyle}>{p.unit}</td>
                    <td style={tdStyle}>{p.tax}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Detail */}
        <div style={{ flex: 1, backgroundColor: 'white', borderRadius: '5px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', borderBottom: '1px solid #ddd' }}>
            <div
              style={{ ...tabStyle, borderBottom: activeTab === 'basic' ? '2px solid #2196f3' : 'none', fontWeight: activeTab === 'basic' ? 'bold' : 'normal' }}
              onClick={() => setActiveTab('basic')}
            >
              기본 정보
            </div>
            <div
              style={{ ...tabStyle, borderBottom: activeTab === 'price' ? '2px solid #2196f3' : 'none', fontWeight: activeTab === 'price' ? 'bold' : 'normal' }}
              onClick={() => setActiveTab('price')}
            >
              금액 정보
            </div>
          </div>

          <div style={{ padding: '20px', flex: 1, overflowY: 'auto' }}>
            {activeTab === 'basic' && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div><label style={labelStyle}>상품코드</label><input type="text" name="code" value={formData.code} onChange={handleInputChange} style={fullInputStyle} disabled /></div>
                <div><label style={labelStyle}>바코드</label><input type="text" name="barcode" value={formData.barcode} onChange={handleInputChange} style={fullInputStyle} /></div>
                <div style={{ gridColumn: '1 / span 2' }}><label style={labelStyle}>상품명 *</label><input type="text" name="name" value={formData.name} onChange={handleInputChange} style={fullInputStyle} /></div>
                <div>
                  <label style={labelStyle}>주종 *</label>
                  <select name="type" value={formData.type} onChange={handleInputChange} style={fullInputStyle}>
                    <option value="소주">소주</option>
                    <option value="맥주">맥주</option>
                    <option value="양주">양주</option>
                    <option value="와인">와인</option>
                    <option value="비주류">비주류</option>
                  </select>
                </div>
                <div><label style={labelStyle}>용량(ml)</label><input type="text" name="capacity" value={formData.capacity} onChange={handleInputChange} style={fullInputStyle} /></div>
                <div><label style={labelStyle}>알코올 도수(%)</label><input type="text" name="alcohol" value={formData.alcohol} onChange={handleInputChange} style={fullInputStyle} /></div>
                <div>
                  <label style={labelStyle}>단위</label>
                  <select name="unit" value={formData.unit} onChange={handleInputChange} style={fullInputStyle}>
                    <option value="BOX">BOX</option>
                    <option value="본">본</option>
                  </select>
                </div>
                <div><label style={labelStyle}>환산 수량 (본/BOX)</label><input type="text" name="convertQty" value={formData.convertQty} onChange={handleInputChange} style={fullInputStyle} /></div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <label style={labelStyle}>세무 속성</label>
                  <div>
                    <label><input type="radio" name="taxType" value="과세" checked={formData.taxType === '과세'} onChange={handleInputChange} /> 과세</label>
                    <label style={{ marginLeft: '15px' }}><input type="radio" name="taxType" value="면세" checked={formData.taxType === '면세'} onChange={handleInputChange} /> 면세</label>
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>부가세율</label>
                  <select name="vatRate" value={formData.vatRate} onChange={handleInputChange} style={fullInputStyle}>
                    <option value="10%">10%</option>
                    <option value="0%">0%</option>
                  </select>
                </div>
              </div>
            )}

            {activeTab === 'price' && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
                <div><label style={{...labelStyle, color: 'blue', fontWeight: 'bold'}}>적용 시작일 *</label><input type="date" name="applyDate" value={formData.applyDate} onChange={handleInputChange} style={{...fullInputStyle, borderColor: 'blue'}} /></div>

                <div style={{ border: '1px solid #eee', padding: '15px', borderRadius: '5px' }}>
                  <h4 style={{ margin: '0 0 10px 0', color: '#555' }}>매입 단가</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
                    <div><label style={labelStyle}>공급가</label><input type="text" name="buyPrice" value={formData.buyPrice} onChange={handleInputChange} style={fullInputStyle} /></div>
                    <div><label style={labelStyle}>부가세</label><input type="text" name="buyVat" value={formData.buyVat} onChange={handleInputChange} style={fullInputStyle} /></div>
                    <div><label style={labelStyle}>합계</label><input type="text" name="buyTotal" value={formData.buyTotal} onChange={handleInputChange} style={fullInputStyle} /></div>
                  </div>
                </div>

                <div style={{ border: '1px solid #eee', padding: '15px', borderRadius: '5px' }}>
                  <h4 style={{ margin: '0 0 10px 0', color: '#555' }}>매출 단가</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
                    <div><label style={labelStyle}>공급가</label><input type="text" name="sellPrice" value={formData.sellPrice} onChange={handleInputChange} style={fullInputStyle} /></div>
                    <div><label style={labelStyle}>부가세</label><input type="text" name="sellVat" value={formData.sellVat} onChange={handleInputChange} style={fullInputStyle} /></div>
                    <div><label style={labelStyle}>합계</label><input type="text" name="sellTotal" value={formData.sellTotal} onChange={handleInputChange} style={fullInputStyle} /></div>
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>공병 보증금 (1본당)</label>
                  <input type="text" name="bottleDeposit" value={formData.bottleDeposit} onChange={handleInputChange} style={fullInputStyle} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Styles
const btnStyle = { padding: '8px 12px', marginLeft: '5px', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer', backgroundColor: '#f0f0f0' };
const inputStyle = { padding: '5px', borderRadius: '3px', border: '1px solid #ccc' };
const fullInputStyle = { width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ccc', boxSizing: 'border-box' };
const thStyle = { padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'left' };
const tdStyle = { padding: '10px', borderBottom: '1px solid #eee' };
const tabStyle = { padding: '15px 20px', cursor: 'pointer', color: '#333' };
const labelStyle = { display: 'block', marginBottom: '5px', fontSize: '13px', color: '#666' };

export default InfoMng0400;
