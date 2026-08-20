import React, { useState } from 'react';

const BrdMng0100 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [boardType, setBoardType] = useState('ALL');
  const [searchCondition, setSearchCondition] = useState('TITLE');
  const [searchKeyword, setSearchKeyword] = useState('');

  const [regType, setRegType] = useState('GENERAL');
  const [regTitle, setRegTitle] = useState('');
  const [regContent, setRegContent] = useState('');

  const handleRegisterClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setRegTitle('');
    setRegContent('');
    setRegType('GENERAL');
  };

  const handleSubmit = () => {
    alert('등록되었습니다.');
    handleCloseModal();
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ margin: 0 }}>게시판</h2>
        <button
          onClick={handleRegisterClick}
          style={{ padding: '8px 16px', backgroundColor: '#1976d2', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          등록
        </button>
      </div>

      {/* Search Area */}
      <div style={{ backgroundColor: '#fff', border: '1px solid #ddd', padding: '15px', borderRadius: '8px', marginBottom: '20px', display: 'flex', gap: '15px', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <label style={{ fontWeight: 'bold', fontSize: '14px' }}>구분</label>
          <select value={boardType} onChange={(e) => setBoardType(e.target.value)} style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}>
            <option value="ALL">전체</option>
            <option value="GENERAL">일반</option>
            <option value="NOTICE">공지</option>
          </select>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <label style={{ fontWeight: 'bold', fontSize: '14px' }}>검색조건</label>
          <select value={searchCondition} onChange={(e) => setSearchCondition(e.target.value)} style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}>
            <option value="TITLE">제목</option>
            <option value="CONTENT">내용</option>
            <option value="TITLE_CONTENT">제목+내용</option>
            <option value="REGISTRANT">등록자</option>
          </select>
          <input
            type="text"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            placeholder="검색어 입력"
            style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc', width: '200px' }}
          />
        </div>

        <button style={{ padding: '6px 12px', backgroundColor: '#e0e0e0', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer' }}>조회</button>
      </div>

      {/* Grid Area */}
      <div style={{ backgroundColor: '#fff', border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', fontSize: '14px' }}>
          <thead style={{ backgroundColor: '#f8f9fa' }}>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '10px', width: '60px' }}>번호</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', width: '80px' }}>구분</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>제목</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', width: '100px' }}>등록자</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', width: '120px' }}>등록일자</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>2</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', color: '#d32f2f', fontWeight: 'bold' }}>공지</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>시스템 점검 안내 (금주 일요일 02:00 ~ 04:00)</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>관리자</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>2023-10-25</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>1</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>일반</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>신규 주류 입고 및 단가 안내</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>물류팀장</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>2023-10-24</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Registration Popup Modal */}
      {isModalOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', width: '500px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <h3 style={{ marginTop: 0, marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>게시글 등록</h3>

            <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
              <label style={{ width: '60px', fontWeight: 'bold', fontSize: '14px' }}>구분</label>
              <select value={regType} onChange={(e) => setRegType(e.target.value)} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', flex: 1 }}>
                <option value="GENERAL">일반</option>
                <option value="NOTICE">공지</option>
              </select>
            </div>

            <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
              <label style={{ width: '60px', fontWeight: 'bold', fontSize: '14px' }}>제목</label>
              <input
                type="text"
                value={regTitle}
                onChange={(e) => setRegTitle(e.target.value)}
                placeholder="제목을 입력하세요"
                style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', flex: 1 }}
              />
            </div>

            <div style={{ marginBottom: '20px', display: 'flex' }}>
              <label style={{ width: '60px', fontWeight: 'bold', fontSize: '14px', paddingTop: '8px' }}>내용</label>
              <textarea
                value={regContent}
                onChange={(e) => setRegContent(e.target.value)}
                placeholder="내용을 입력하세요"
                style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', flex: 1, height: '150px', resize: 'vertical' }}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button onClick={handleCloseModal} style={{ padding: '8px 16px', backgroundColor: '#e0e0e0', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>취소</button>
              <button onClick={handleSubmit} style={{ padding: '8px 16px', backgroundColor: '#1976d2', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>저장</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default BrdMng0100;
