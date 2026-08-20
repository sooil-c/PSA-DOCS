import React, { useState } from 'react';

const NtcReg0100 = () => {
  const [notices, setNotices] = useState([
    { id: 1, title: '시스템 점검 안내', content: '이번 주말 시스템 점검이 있습니다.', date: '2023-10-25', author: '관리자' },
    { id: 2, title: '신규 주류 입고', content: '새로운 와인이 입고되었습니다.', date: '2023-10-24', author: '물류팀' },
  ]);

  const [newNotice, setNewNotice] = useState({ title: '', content: '' });

  const handleRegister = () => {
    if (!newNotice.title || !newNotice.content) {
      alert('제목과 내용을 모두 입력해주세요.');
      return;
    }
    const newId = notices.length > 0 ? notices[notices.length - 1].id + 1 : 1;
    const date = new Date().toISOString().split('T')[0];
    setNotices([...notices, { id: newId, title: newNotice.title, content: newNotice.content, date: date, author: '관리자' }]);
    setNewNotice({ title: '', content: '' });
    alert('공지사항이 등록되었습니다.');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>공지사항 등록 (NTC-REG-0100)</h2>
      <p style={{ color: '#666' }}>대시보드에 표시될 공지사항을 등록하고 관리합니다.</p>

      <div style={{ backgroundColor: '#fff', padding: '20px', border: '1px solid #ddd', borderRadius: '4px', marginBottom: '20px' }}>
        <h3>신규 공지사항 등록</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px' }}>제목:</label>
            <input
              type="text"
              value={newNotice.title}
              onChange={e => setNewNotice({...newNotice, title: e.target.value})}
              style={{ padding: '8px', width: '100%', boxSizing: 'border-box' }}
              placeholder="공지사항 제목을 입력하세요"
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '5px' }}>내용:</label>
            <textarea
              value={newNotice.content}
              onChange={e => setNewNotice({...newNotice, content: e.target.value})}
              style={{ padding: '8px', width: '100%', height: '100px', boxSizing: 'border-box' }}
              placeholder="공지사항 내용을 입력하세요"
            />
          </div>
          <button onClick={handleRegister} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', alignSelf: 'flex-end' }}>등록</button>
        </div>
      </div>

      <div style={{ backgroundColor: '#fff', padding: '20px', border: '1px solid #ddd', borderRadius: '4px' }}>
        <h3 style={{ marginBottom: '15px' }}>등록된 공지사항 목록</h3>

        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
          <thead style={{ backgroundColor: '#f8f9fa' }}>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '10px', width: '10%' }}>번호</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', width: '50%' }}>제목</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', width: '20%' }}>등록일자</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', width: '20%' }}>작성자</th>
            </tr>
          </thead>
          <tbody>
            {notices.map((notice, index) => (
              <tr key={notice.id}>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{index + 1}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>{notice.title}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{notice.date}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{notice.author}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NtcReg0100;
