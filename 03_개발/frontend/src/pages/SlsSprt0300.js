import React, { useState } from 'react';

const SlsSprt0300 = () => {
  const [activeTab, setActiveTab] = useState('BASIC'); // 'BASIC' or 'DETAIL'

  // Dummy data
  const supportList = [
    { id: 'SP2023001', customerName: '대한상사', type: '물품', status: '진행중', startDate: '2023-01-01', endDate: '2023-12-31' },
    { id: 'SP2023002', customerName: '민국유통', type: '현금', status: '완료', startDate: '2023-03-01', endDate: '2023-08-31' },
  ];

  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ margin: 0 }}>매출처 지원품 관리 (SLS-SPRT-0300)</h2>
        <div>
          <button style={{ padding: '8px 16px', marginRight: '10px', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>신규</button>
          <button style={{ padding: '8px 16px', marginRight: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>저장</button>
          <button style={{ padding: '8px 16px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>삭제</button>
        </div>
      </div>

      {/* 상단: 검색 영역 */}
      <div style={{ padding: '15px', backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '4px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <div>
            <label style={{ fontWeight: 'bold', marginRight: '10px' }}>지원 기간:</label>
            <input type="date" style={{ padding: '6px', border: '1px solid #ccc', borderRadius: '4px' }} />
            {' ~ '}
            <input type="date" style={{ padding: '6px', border: '1px solid #ccc', borderRadius: '4px' }} />
          </div>
          <div>
            <label style={{ fontWeight: 'bold', marginRight: '10px' }}>매출처:</label>
            <input type="text" placeholder="매출처명 검색" style={{ padding: '6px', border: '1px solid #ccc', borderRadius: '4px' }} />
          </div>
          <div>
            <label style={{ fontWeight: 'bold', marginRight: '10px' }}>지원 구분:</label>
            <select style={{ padding: '6px', border: '1px solid #ccc', borderRadius: '4px' }}>
              <option value="ALL">전체</option>
              <option value="GOODS">물품</option>
              <option value="CASH">현금</option>
            </select>
          </div>
          <div>
            <label style={{ fontWeight: 'bold', marginRight: '10px' }}>진행 상태:</label>
            <select style={{ padding: '6px', border: '1px solid #ccc', borderRadius: '4px' }}>
              <option value="ALL">전체</option>
              <option value="ING">진행중</option>
              <option value="DONE">완료</option>
            </select>
          </div>
          <button style={{ padding: '6px 20px', backgroundColor: '#607D8B', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>조회</button>
        </div>
      </div>

      {/* 중단: 목록 영역 */}
      <div style={{ flex: 1, backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '4px', marginBottom: '20px', overflowY: 'auto', minHeight: '200px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
          <thead style={{ backgroundColor: '#f5f5f5', position: 'sticky', top: 0 }}>
            <tr>
              <th style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>관리번호</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>매출처명</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>지원유형</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>상태</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>약정 시작일</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>약정 종료일</th>
            </tr>
          </thead>
          <tbody>
            {supportList.map(item => (
              <tr
                key={item.id}
                onClick={() => handleSelect(item)}
                style={{
                  cursor: 'pointer',
                  backgroundColor: selectedItem?.id === item.id ? '#e3f2fd' : 'transparent',
                  borderBottom: '1px solid #eee'
                }}
              >
                <td style={{ padding: '12px' }}>{item.id}</td>
                <td style={{ padding: '12px' }}>{item.customerName}</td>
                <td style={{ padding: '12px' }}>{item.type}</td>
                <td style={{ padding: '12px' }}>
                  <span style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    backgroundColor: item.status === '진행중' ? '#e8f5e9' : '#eceff1',
                    color: item.status === '진행중' ? '#2e7d32' : '#546e7a'
                  }}>
                    {item.status}
                  </span>
                </td>
                <td style={{ padding: '12px' }}>{item.startDate}</td>
                <td style={{ padding: '12px' }}>{item.endDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 하단: 상세 영역 */}
      <div style={{ flex: 1, backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '4px', display: 'flex', flexDirection: 'column' }}>
        {/* 탭 헤더 */}
        <div style={{ display: 'flex', borderBottom: '1px solid #ddd', backgroundColor: '#f9f9f9' }}>
          <div
            onClick={() => setActiveTab('BASIC')}
            style={{
              padding: '12px 24px',
              cursor: 'pointer',
              fontWeight: 'bold',
              backgroundColor: activeTab === 'BASIC' ? '#fff' : 'transparent',
              borderBottom: activeTab === 'BASIC' ? '2px solid #2196F3' : 'none',
              color: activeTab === 'BASIC' ? '#2196F3' : '#666'
            }}
          >
            기본 약정 정보
          </div>
          <div
            onClick={() => setActiveTab('DETAIL')}
            style={{
              padding: '12px 24px',
              cursor: 'pointer',
              fontWeight: 'bold',
              backgroundColor: activeTab === 'DETAIL' ? '#fff' : 'transparent',
              borderBottom: activeTab === 'DETAIL' ? '2px solid #2196F3' : 'none',
              color: activeTab === 'DETAIL' ? '#2196F3' : '#666'
            }}
          >
            상세(물품/현금) 내역 및 이력
          </div>
        </div>

        {/* 탭 컨텐츠 */}
        <div style={{ padding: '20px', overflowY: 'auto' }}>
          {activeTab === 'BASIC' && (
            <div>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  <tr>
                    <th style={{ width: '150px', textAlign: 'left', padding: '10px', backgroundColor: '#f5f5f5', borderBottom: '1px solid #eee' }}>매출처 선택</th>
                    <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <input type="text" value={selectedItem ? selectedItem.customerName : ''} readOnly style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px', backgroundColor: '#f9f9f9' }} />
                        <button style={{ padding: '6px 12px', cursor: 'pointer' }}>검색</button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th style={{ textAlign: 'left', padding: '10px', backgroundColor: '#f5f5f5', borderBottom: '1px solid #eee' }}>지원 유형</th>
                    <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
                      <label style={{ marginRight: '15px' }}><input type="radio" name="supportType" defaultChecked={selectedItem?.type === '물품' || !selectedItem} /> 물품 지원</label>
                      <label><input type="radio" name="supportType" defaultChecked={selectedItem?.type === '현금'} /> 현금성 지원</label>
                    </td>
                  </tr>
                  <tr>
                    <th style={{ textAlign: 'left', padding: '10px', backgroundColor: '#f5f5f5', borderBottom: '1px solid #eee' }}>약정 기간</th>
                    <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
                      <input type="date" defaultValue={selectedItem?.startDate || ''} style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
                      {' ~ '}
                      <input type="date" defaultValue={selectedItem?.endDate || ''} style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
                    </td>
                  </tr>
                  <tr>
                    <th style={{ textAlign: 'left', padding: '10px', backgroundColor: '#f5f5f5', borderBottom: '1px solid #eee' }}>약정 조건(목표매출)</th>
                    <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
                      <input type="text" placeholder="예: 10,000,000 원" style={{ width: '200px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', textAlign: 'right' }} />
                    </td>
                  </tr>
                  <tr>
                    <th style={{ textAlign: 'left', padding: '10px', backgroundColor: '#f5f5f5', borderBottom: '1px solid #eee' }}>진행 상태</th>
                    <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
                      <select style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} defaultValue={selectedItem?.status === '완료' ? 'DONE' : 'ING'}>
                        <option value="ING">진행중</option>
                        <option value="DONE">완료(조건달성/회수완료)</option>
                        <option value="CANCEL">중도해지</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'DETAIL' && (
            <div>
              {/* 물품 지원 상세 UI 예시 (단순화) */}
              <div style={{ marginBottom: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ margin: 0 }}>물품 지원 및 회수 내역</h4>
                <button style={{ padding: '6px 12px', cursor: 'pointer' }}>+ 행 추가</button>
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
                <thead style={{ backgroundColor: '#f5f5f5' }}>
                  <tr>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>구분</th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>품목</th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>수량</th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>단가</th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>지급/발생일</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                      <select style={{ padding: '4px' }}>
                        <option value="지원">지원</option>
                        <option value="회수">회수</option>
                        <option value="망실">망실</option>
                        <option value="소모품">소모품</option>
                      </select>
                    </td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><input type="text" defaultValue="냉장고(대)" style={{ width: '90%', padding: '4px' }}/></td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><input type="number" defaultValue="2" style={{ width: '90%', padding: '4px', textAlign: 'right' }}/></td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><input type="number" defaultValue="500000" style={{ width: '90%', padding: '4px', textAlign: 'right' }}/></td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><input type="date" defaultValue="2023-01-05" style={{ padding: '4px' }}/></td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default SlsSprt0300;
