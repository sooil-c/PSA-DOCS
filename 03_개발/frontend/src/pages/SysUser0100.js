import React, { useState } from 'react';

const SysUser0100 = () => {
  const [userList, setUserList] = useState([
    { userId: 'admin', userName: '시스템관리자', group: 'G04', status: '사용', email: 'admin@psa.com' },
    { userId: 'sales01', userName: '김영업', group: 'G01', status: '사용', email: 'sales01@psa.com' },
    { userId: 'acc01', userName: '박회계', group: 'G02', status: '사용', email: 'acc01@psa.com' },
    { userId: 'logis01', userName: '이물류', group: 'G03', status: '중지', email: 'logis01@psa.com' },
  ]);

  const groupList = [
    { id: 'G01', name: '영업부' },
    { id: 'G02', name: '회계부' },
    { id: 'G03', name: '물류부' },
    { id: 'G04', name: '시스템관리자' }
  ];

  const [selectedUser, setSelectedUser] = useState(null);
  const [formData, setFormData] = useState({
    userId: '',
    userName: '',
    password: '',
    passwordConfirm: '',
    group: '',
    email: '',
    status: '사용'
  });

  const handleSelectUser = (user) => {
    setSelectedUser(user);
    setFormData({
      userId: user.userId,
      userName: user.userName,
      password: '',
      passwordConfirm: '',
      group: user.group,
      email: user.email,
      status: user.status
    });
  };

  const handleNewUser = () => {
    setSelectedUser(null);
    setFormData({
      userId: '',
      userName: '',
      password: '',
      passwordConfirm: '',
      group: '',
      email: '',
      status: '사용'
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (!formData.userId || !formData.userName) {
      alert('아이디와 이름은 필수 입력 항목입니다.');
      return;
    }
    if (!selectedUser && formData.password !== formData.passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    alert('사용자 정보가 저장되었습니다.');
  };

  const handleResetPassword = () => {
    if (!selectedUser) return;
    const newPw = prompt('새로운 비밀번호를 입력하세요.');
    if (newPw) {
      alert('비밀번호가 초기화되었습니다.');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ margin: 0 }}>사용자 관리 (SYS-USER-0100)</h2>
        <div>
          <button onClick={handleNewUser} style={{ padding: '8px 16px', marginRight: '10px', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>신규</button>
          <button onClick={handleSave} style={{ padding: '8px 16px', marginRight: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>저장</button>
          <button style={{ padding: '8px 16px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>삭제</button>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '20px', flex: 1, minHeight: '500px' }}>
        {/* 좌측 사용자 목록 */}
        <div style={{ flex: 1, border: '1px solid #ccc', borderRadius: '4px', display: 'flex', flexDirection: 'column', backgroundColor: '#fff' }}>
          <div style={{ padding: '15px', borderBottom: '1px solid #ccc', backgroundColor: '#f9f9f9' }}>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
              <select style={{ padding: '6px', border: '1px solid #ccc', borderRadius: '4px', width: '120px' }}>
                <option value="">전체 그룹</option>
                {groupList.map(g => <option key={g.id} value={g.id}>{g.name}</option>)}
              </select>
              <input type="text" placeholder="아이디/이름 검색" style={{ padding: '6px', border: '1px solid #ccc', borderRadius: '4px', flex: 1 }} />
              <button style={{ padding: '6px 12px', cursor: 'pointer' }}>조회</button>
            </div>
          </div>
          <div style={{ flex: 1, overflowY: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
              <thead style={{ backgroundColor: '#f5f5f5', position: 'sticky', top: 0 }}>
                <tr>
                  <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>사용자 ID</th>
                  <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>사용자명</th>
                  <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>그룹</th>
                  <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>상태</th>
                </tr>
              </thead>
              <tbody>
                {userList.map((user) => (
                  <tr
                    key={user.userId}
                    onClick={() => handleSelectUser(user)}
                    style={{
                      cursor: 'pointer',
                      backgroundColor: selectedUser?.userId === user.userId ? '#e3f2fd' : 'transparent',
                      borderBottom: '1px solid #eee'
                    }}
                  >
                    <td style={{ padding: '10px' }}>{user.userId}</td>
                    <td style={{ padding: '10px' }}>{user.userName}</td>
                    <td style={{ padding: '10px' }}>{groupList.find(g => g.id === user.group)?.name || user.group}</td>
                    <td style={{ padding: '10px' }}>
                      <span style={{ color: user.status === '사용' ? '#4CAF50' : '#f44336', fontWeight: 'bold' }}>{user.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 우측 사용자 상세 */}
        <div style={{ flex: 1, border: '1px solid #ccc', borderRadius: '4px', backgroundColor: '#fff', padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #333', paddingBottom: '10px', marginBottom: '20px' }}>
            <h3 style={{ margin: 0 }}>사용자 상세 정보</h3>
            {selectedUser && (
              <button onClick={handleResetPassword} style={{ padding: '6px 12px', backgroundColor: '#FF9800', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>비밀번호 초기화</button>
            )}
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              <tr>
                <th style={{ width: '120px', textAlign: 'left', padding: '12px', backgroundColor: '#f9f9f9', borderBottom: '1px solid #eee' }}>사용자 ID <span style={{color: 'red'}}>*</span></th>
                <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                  <input type="text" name="userId" value={formData.userId} onChange={handleChange} readOnly={!!selectedUser} style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px', backgroundColor: selectedUser ? '#eee' : '#fff' }} />
                </td>
              </tr>
              <tr>
                <th style={{ textAlign: 'left', padding: '12px', backgroundColor: '#f9f9f9', borderBottom: '1px solid #eee' }}>사용자명 <span style={{color: 'red'}}>*</span></th>
                <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                  <input type="text" name="userName" value={formData.userName} onChange={handleChange} style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
                </td>
              </tr>

              {!selectedUser && (
                <>
                  <tr>
                    <th style={{ textAlign: 'left', padding: '12px', backgroundColor: '#f9f9f9', borderBottom: '1px solid #eee' }}>비밀번호 <span style={{color: 'red'}}>*</span></th>
                    <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                      <input type="password" name="password" value={formData.password} onChange={handleChange} style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
                    </td>
                  </tr>
                  <tr>
                    <th style={{ textAlign: 'left', padding: '12px', backgroundColor: '#f9f9f9', borderBottom: '1px solid #eee' }}>비밀번호 확인 <span style={{color: 'red'}}>*</span></th>
                    <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                      <input type="password" name="passwordConfirm" value={formData.passwordConfirm} onChange={handleChange} style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
                    </td>
                  </tr>
                </>
              )}

              <tr>
                <th style={{ textAlign: 'left', padding: '12px', backgroundColor: '#f9f9f9', borderBottom: '1px solid #eee' }}>사용자 그룹 <span style={{color: 'red'}}>*</span></th>
                <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                  <select name="group" value={formData.group} onChange={handleChange} style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px', width: '200px' }}>
                    <option value="">그룹 선택</option>
                    {groupList.map(g => <option key={g.id} value={g.id}>{g.name}</option>)}
                  </select>
                </td>
              </tr>
              <tr>
                <th style={{ textAlign: 'left', padding: '12px', backgroundColor: '#f9f9f9', borderBottom: '1px solid #eee' }}>이메일</th>
                <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px', width: '100%' }} />
                </td>
              </tr>
              <tr>
                <th style={{ textAlign: 'left', padding: '12px', backgroundColor: '#f9f9f9', borderBottom: '1px solid #eee' }}>상태</th>
                <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                  <label style={{ marginRight: '15px' }}>
                    <input type="radio" name="status" value="사용" checked={formData.status === '사용'} onChange={handleChange} /> 사용
                  </label>
                  <label>
                    <input type="radio" name="status" value="중지" checked={formData.status === '중지'} onChange={handleChange} /> 중지
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SysUser0100;
