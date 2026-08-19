import React, { useState } from 'react';

const SysMenu0200 = () => {
  // 샘플 메뉴 데이터
  const [menuList] = useState([
    { id: '1', name: '기준정보 관리', depth: 1, children: [
      { id: '1-1', name: '자사정보', depth: 2, children: [
        { id: 'INFO-MNG-0100', name: '자사정보 등록', url: '/info/mng/0100', depth: 3 }
      ]},
      { id: '1-2', name: '매입처', depth: 2, children: [
        { id: 'INFO-MNG-0200', name: '매입처 등록 및 관리', url: '/info/mng/0200', depth: 3 }
      ]},
      { id: '1-3', name: '매출처', depth: 2, children: [
        { id: 'INFO-MNG-0300', name: '매출처 등록 및 관리', url: '/info/mng/0300', depth: 3 }
      ]},
      { id: '1-4', name: '상품', depth: 2, children: [
        { id: 'INFO-MNG-0400', name: '상품 등록 및 관리', url: '/info/mng/0400', depth: 3 }
      ]}
    ]},
    { id: '2', name: '시스템 공통', depth: 1, children: [
      { id: '2-1', name: '메뉴', depth: 2, children: [
        { id: 'SYS-MENU-0200', name: '메뉴 등록 관리', url: '/sys/menu/0200', depth: 3 }
      ]}
    ]}
  ]);

  const [selectedMenu, setSelectedMenu] = useState(null);
  const [formData, setFormData] = useState({
    parentName: '',
    menuId: '',
    menuName: '',
    menuUrl: '',
    sortOrder: '',
    iconClass: '',
    useYn: 'Y'
  });

  const handleMenuClick = (menu, parentName = '') => {
    setSelectedMenu(menu);
    setFormData({
      parentName: parentName,
      menuId: menu.id,
      menuName: menu.name,
      menuUrl: menu.url || '',
      sortOrder: '1', // 임시
      iconClass: '', // 임시
      useYn: 'Y'
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // 재귀적으로 트리를 렌더링하는 함수
  const renderTree = (items, parentName = '') => {
    return (
      <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
        {items.map((item) => (
          <li key={item.id} style={{ margin: '5px 0' }}>
            <div
              style={{
                cursor: 'pointer',
                padding: '5px',
                backgroundColor: selectedMenu?.id === item.id ? '#e3f2fd' : 'transparent',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center'
              }}
              onClick={(e) => {
                e.stopPropagation();
                handleMenuClick(item, parentName);
              }}
            >
              <span style={{ marginRight: '5px' }}>
                {item.children ? '📁' : '📄'}
              </span>
              {item.name}
            </div>
            {item.children && renderTree(item.children, item.name)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2 style={{ marginBottom: '20px' }}>메뉴 등록 관리</h2>

      <div style={{ display: 'flex', gap: '20px', height: '600px' }}>
        {/* 좌측 (메뉴 트리 영역) */}
        <div style={{ flex: 1, border: '1px solid #ccc', borderRadius: '4px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '10px', backgroundColor: '#f5f5f5', borderBottom: '1px solid #ccc', fontWeight: 'bold' }}>
            시스템 메뉴 트리
          </div>
          <div style={{ padding: '10px', overflowY: 'auto', flex: 1 }}>
            {renderTree(menuList)}
          </div>
        </div>

        {/* 우측 (상세 영역) */}
        <div style={{ flex: 2, display: 'flex', flexDirection: 'column' }}>
          {/* 상단 (버튼 영역) */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginBottom: '15px' }}>
            <button style={{ padding: '8px 16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              하위메뉴 추가
            </button>
            <button style={{ padding: '8px 16px', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              저장
            </button>
            <button style={{ padding: '8px 16px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              삭제
            </button>
          </div>

          {/* 폼 영역 */}
          <div style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '20px', flex: 1 }}>
            <h3 style={{ marginTop: 0, marginBottom: '20px', borderBottom: '2px solid #333', paddingBottom: '10px' }}>
              메뉴 상세 정보
            </h3>

            {selectedMenu ? (
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  <tr>
                    <th style={{ width: '150px', textAlign: 'left', padding: '10px', borderBottom: '1px solid #eee', backgroundColor: '#f9f9f9' }}>상위 메뉴명</th>
                    <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
                      <input
                        type="text"
                        name="parentName"
                        value={formData.parentName}
                        readOnly
                        style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', backgroundColor: '#eee' }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #eee', backgroundColor: '#f9f9f9' }}>메뉴 ID</th>
                    <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
                      <input
                        type="text"
                        name="menuId"
                        value={formData.menuId}
                        onChange={handleInputChange}
                        style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #eee', backgroundColor: '#f9f9f9' }}>메뉴명 <span style={{color:'red'}}>*</span></th>
                    <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
                      <input
                        type="text"
                        name="menuName"
                        value={formData.menuName}
                        onChange={handleInputChange}
                        style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #eee', backgroundColor: '#f9f9f9' }}>메뉴 URL</th>
                    <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
                      <input
                        type="text"
                        name="menuUrl"
                        value={formData.menuUrl}
                        onChange={handleInputChange}
                        placeholder="예: /info/mng/0100"
                        style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #eee', backgroundColor: '#f9f9f9' }}>정렬 순서</th>
                    <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
                      <input
                        type="number"
                        name="sortOrder"
                        value={formData.sortOrder}
                        onChange={handleInputChange}
                        style={{ width: '100px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #eee', backgroundColor: '#f9f9f9' }}>아이콘 (클래스명)</th>
                    <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
                      <input
                        type="text"
                        name="iconClass"
                        value={formData.iconClass}
                        onChange={handleInputChange}
                        style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #eee', backgroundColor: '#f9f9f9' }}>사용 여부</th>
                    <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
                      <label style={{ marginRight: '15px' }}>
                        <input
                          type="radio"
                          name="useYn"
                          value="Y"
                          checked={formData.useYn === 'Y'}
                          onChange={handleInputChange}
                          style={{ marginRight: '5px' }}
                        />
                        사용
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="useYn"
                          value="N"
                          checked={formData.useYn === 'N'}
                          onChange={handleInputChange}
                          style={{ marginRight: '5px' }}
                        />
                        미사용
                      </label>
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <div style={{ textAlign: 'center', color: '#888', marginTop: '100px' }}>
                좌측 트리에서 메뉴를 선택해주세요.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SysMenu0200;
