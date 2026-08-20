import React, { useState } from 'react';

const InfoMng0300 = () => {
  const [formData, setFormData] = useState({
    code: '',
    name: '',
    businessNumber: '',
    branchCode: '',
    licenseNumber: '',
    representative: '',
    salesManager: '',
    contact: '',
    email: '',
    address: '',
    startDate: '',
    status: '사용',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (!formData.name) {
      alert('매출처명을 입력해주세요.');
      return;
    }
    if (!formData.businessNumber) {
      alert('사업자번호를 입력해주세요.');
      return;
    }
    if (!formData.startDate) {
      alert('적용 시작일을 입력해주세요.');
      return;
    }
    alert('저장되었습니다.');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>매출처 등록 및 관리</h2>
        <div>
          <button style={{ padding: '8px 16px', marginRight: '10px', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>신규</button>
          <button onClick={handleSave} style={{ padding: '8px 16px', marginRight: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>저장</button>
          <button style={{ padding: '8px 16px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>삭제</button>
          <button style={btnStyle}>변경이력 조회</button>
        </div>
      </div>

      <div style={{ display: 'flex', flex: 1, gap: '20px' }}>
        {/* 좌측: 목록 영역 */}
        <div style={{ flex: 1, backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h3>검색 조건</h3>
          <div style={{ marginBottom: '10px' }}>
            <input type="text" placeholder="검색어" style={inputStyle} />
            <select style={{ ...inputStyle, marginLeft: '10px' }}>
              <option value="">사용여부 전체</option>
              <option value="사용">사용</option>
              <option value="중지">중지</option>
            </select>
            <button style={{ ...btnStyle, marginLeft: '10px' }}>검색</button>
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
            <thead>
              <tr style={{ backgroundColor: '#f0f0f0', textAlign: 'left' }}>
                <th style={thStyle}>매출처코드</th>
                <th style={thStyle}>매출처명</th>
                <th style={thStyle}>사업자번호</th>
                <th style={thStyle}>상태</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="4" style={{ ...tdStyle, textAlign: 'center', padding: '20px', color: '#888' }}>
                  검색 결과가 없습니다.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 우측: 상세 영역 */}
        <div style={{ flex: 1, backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h3>상세 정보</h3>
          <form>
            <h4>기본 정보</h4>
            <div style={formRowStyle}>
              <label style={labelStyle}>매출처코드</label>
              <input type="text" name="code" value={formData.code} onChange={handleChange} disabled placeholder="자동생성" style={inputStyle} />
            </div>
            <div style={formRowStyle}>
              <label style={labelStyle}>매출처명 <span style={{color:'red'}}>*</span></label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} style={inputStyle} />
            </div>
            <div style={formRowStyle}>
              <label style={labelStyle}>사업자번호 <span style={{color:'red'}}>*</span></label>
              <input type="text" name="businessNumber" value={formData.businessNumber} onChange={handleChange} style={inputStyle} />
            </div>
            <div style={formRowStyle}>
              <label style={labelStyle}>지점코드</label>
              <input type="text" name="branchCode" value={formData.branchCode} onChange={handleChange} placeholder="4자리 숫자" style={inputStyle} />
            </div>
            <div style={formRowStyle}>
              <label style={labelStyle}>면허번호</label>
              <input type="text" name="licenseNumber" value={formData.licenseNumber} onChange={handleChange} style={inputStyle} />
            </div>

            <h4>연락 정보</h4>
            <div style={formRowStyle}>
              <label style={labelStyle}>대표자명</label>
              <input type="text" name="representative" value={formData.representative} onChange={handleChange} style={inputStyle} />
            </div>
            <div style={formRowStyle}>
              <label style={labelStyle}>영업담당자</label>
              <select name="salesManager" value={formData.salesManager} onChange={handleChange} style={inputStyle}>
                <option value="">담당자 선택</option>
                <option value="김영업">김영업</option>
                <option value="이영업">이영업</option>
                <option value="박영업">박영업</option>
              </select>
            </div>
            <div style={formRowStyle}>
              <label style={labelStyle}>연락처</label>
              <input type="text" name="contact" value={formData.contact} onChange={handleChange} style={inputStyle} />
            </div>
            <div style={formRowStyle}>
              <label style={labelStyle}>이메일</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} style={inputStyle} />
            </div>
            <div style={formRowStyle}>
              <label style={labelStyle}>주소</label>
              <input type="text" name="address" value={formData.address} onChange={handleChange} style={{ ...inputStyle, width: '100%' }} />
            </div>

            <h4>적용 정보 및 상태</h4>
            <div style={formRowStyle}>
              <label style={labelStyle}>적용 시작일 <span style={{color:'red'}}>*</span></label>
              <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} style={inputStyle} />
            </div>
            <div style={formRowStyle}>
              <label style={labelStyle}>상태</label>
              <select name="status" value={formData.status} onChange={handleChange} style={inputStyle}>
                <option value="사용">사용</option>
                <option value="중지">중지</option>
              </select>
            </div>
          </form>
        </div>
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
  marginBottom: '10px',
};

const labelStyle = {
  width: '100px',
  fontWeight: 'bold',
};

export default InfoMng0300;
