import React, { useState } from 'react';

const InfoMng0100 = () => {
  const [formData, setFormData] = useState({
    companyCode: 'COMP-0001',
    companyName: '(주)PSA주류 유통',
    ceoName: '홍길동',
    businessRegNumber: '123-45-67890',
    corporateRegNumber: '110111-1234567',
    licenseNumber: '가-1234-5678',
    businessType: '도매 및 상품 중개업',
    businessItem: '주류',
    zipCode: '04524',
    address: '서울특별시 중구 세종대로 110',
    addressDetail: '시청빌딩 5층',
    tel: '02-123-4567',
    fax: '02-123-4568',
    email: 'admin@psa-liquor.com',
    establishmentDate: '2010-05-15',
    useYn: 'Y'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    alert('자사정보가 저장되었습니다.');
    console.log('Saved Info:', formData);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ margin: 0 }}>자사정보 등록 (INFO-MNG-0100)</h2>
        <div>
          <button style={{ padding: '8px 16px', marginRight: '10px', backgroundColor: '#607D8B', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>변경이력 조회</button>
          <button onClick={handleSave} style={{ padding: '8px 16px', marginRight: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>저장</button>
        </div>
      </div>

      <div style={{ flex: 1, backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '4px', padding: '20px', overflowY: 'auto' }}>
        <h3 style={{ borderBottom: '2px solid #333', paddingBottom: '10px', marginTop: 0 }}>기본 정보</h3>

        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '30px' }}>
          <tbody>
            <tr>
              <th style={{ width: '150px', textAlign: 'left', padding: '12px', backgroundColor: '#f9f9f9', borderBottom: '1px solid #eee' }}>회사코드</th>
              <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                <input type="text" name="companyCode" value={formData.companyCode} readOnly style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px', backgroundColor: '#f0f0f0' }} />
              </td>
              <th style={{ width: '150px', textAlign: 'left', padding: '12px', backgroundColor: '#f9f9f9', borderBottom: '1px solid #eee' }}>회사명(상호) <span style={{color: 'red'}}>*</span></th>
              <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px', width: '200px' }} />
              </td>
            </tr>
            <tr>
              <th style={{ textAlign: 'left', padding: '12px', backgroundColor: '#f9f9f9', borderBottom: '1px solid #eee' }}>대표자명 <span style={{color: 'red'}}>*</span></th>
              <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                <input type="text" name="ceoName" value={formData.ceoName} onChange={handleChange} style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
              </td>
              <th style={{ textAlign: 'left', padding: '12px', backgroundColor: '#f9f9f9', borderBottom: '1px solid #eee' }}>설립일자</th>
              <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                <input type="date" name="establishmentDate" value={formData.establishmentDate} onChange={handleChange} style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
              </td>
            </tr>
            <tr>
              <th style={{ textAlign: 'left', padding: '12px', backgroundColor: '#f9f9f9', borderBottom: '1px solid #eee' }}>사업자등록번호 <span style={{color: 'red'}}>*</span></th>
              <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                <input type="text" name="businessRegNumber" value={formData.businessRegNumber} onChange={handleChange} placeholder="000-00-00000" style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
              </td>
              <th style={{ textAlign: 'left', padding: '12px', backgroundColor: '#f9f9f9', borderBottom: '1px solid #eee' }}>법인등록번호</th>
              <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                <input type="text" name="corporateRegNumber" value={formData.corporateRegNumber} onChange={handleChange} placeholder="000000-0000000" style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
              </td>
            </tr>
            <tr>
              <th style={{ textAlign: 'left', padding: '12px', backgroundColor: '#f9f9f9', borderBottom: '1px solid #eee' }}>주류도매업 면허번호 <span style={{color: 'red'}}>*</span></th>
              <td colSpan="3" style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                <input type="text" name="licenseNumber" value={formData.licenseNumber} onChange={handleChange} style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px', width: '300px' }} />
              </td>
            </tr>
            <tr>
              <th style={{ textAlign: 'left', padding: '12px', backgroundColor: '#f9f9f9', borderBottom: '1px solid #eee' }}>업태</th>
              <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                <input type="text" name="businessType" value={formData.businessType} onChange={handleChange} style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
              </td>
              <th style={{ textAlign: 'left', padding: '12px', backgroundColor: '#f9f9f9', borderBottom: '1px solid #eee' }}>종목</th>
              <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                <input type="text" name="businessItem" value={formData.businessItem} onChange={handleChange} style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
              </td>
            </tr>
          </tbody>
        </table>

        <h3 style={{ borderBottom: '2px solid #333', paddingBottom: '10px', marginTop: '20px' }}>연락처 및 주소</h3>

        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '30px' }}>
          <tbody>
            <tr>
              <th style={{ width: '150px', textAlign: 'left', padding: '12px', backgroundColor: '#f9f9f9', borderBottom: '1px solid #eee' }}>전화번호 <span style={{color: 'red'}}>*</span></th>
              <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                <input type="text" name="tel" value={formData.tel} onChange={handleChange} style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
              </td>
              <th style={{ width: '150px', textAlign: 'left', padding: '12px', backgroundColor: '#f9f9f9', borderBottom: '1px solid #eee' }}>팩스번호</th>
              <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                <input type="text" name="fax" value={formData.fax} onChange={handleChange} style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
              </td>
            </tr>
            <tr>
              <th style={{ textAlign: 'left', padding: '12px', backgroundColor: '#f9f9f9', borderBottom: '1px solid #eee' }}>이메일</th>
              <td colSpan="3" style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                <input type="email" name="email" value={formData.email} onChange={handleChange} style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px', width: '300px' }} />
              </td>
            </tr>
            <tr>
              <th style={{ textAlign: 'left', padding: '12px', backgroundColor: '#f9f9f9', borderBottom: '1px solid #eee' }}>사업장 주소 <span style={{color: 'red'}}>*</span></th>
              <td colSpan="3" style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                <div style={{ marginBottom: '5px' }}>
                  <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} placeholder="우편번호" style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px', width: '100px', marginRight: '5px' }} />
                  <button style={{ padding: '8px 12px', cursor: 'pointer' }}>우편번호 찾기</button>
                </div>
                <div style={{ marginBottom: '5px' }}>
                  <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="기본주소" style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px', width: '400px' }} />
                </div>
                <div>
                  <input type="text" name="addressDetail" value={formData.addressDetail} onChange={handleChange} placeholder="상세주소" style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px', width: '400px' }} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <h3 style={{ borderBottom: '2px solid #333', paddingBottom: '10px', marginTop: '20px' }}>관리 정보</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            <tr>
              <th style={{ width: '150px', textAlign: 'left', padding: '12px', backgroundColor: '#f9f9f9', borderBottom: '1px solid #eee' }}>사용여부</th>
              <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                <label style={{ marginRight: '15px' }}>
                  <input type="radio" name="useYn" value="Y" checked={formData.useYn === 'Y'} onChange={handleChange} style={{ marginRight: '5px' }} /> 사용
                </label>
                <label>
                  <input type="radio" name="useYn" value="N" checked={formData.useYn === 'N'} onChange={handleChange} style={{ marginRight: '5px' }} /> 미사용
                </label>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default InfoMng0100;
