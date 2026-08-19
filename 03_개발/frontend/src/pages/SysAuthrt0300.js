import React, { useState } from 'react';

const SysAuthrt0300 = () => {
  // 샘플 데이터
  const groupList = [
    { id: 'G01', name: '영업부' },
    { id: 'G02', name: '회계부' },
    { id: 'G03', name: '물류부' },
    { id: 'G04', name: '시스템관리자' }
  ];

  const menuTree = [
    { id: '1', name: '기준정보 관리', children: [
        { id: 'INFO-MNG-0100', name: '자사정보 등록' },
        { id: 'INFO-MNG-0200', name: '매입처 등록 및 관리' },
        { id: 'INFO-MNG-0300', name: '매출처 등록 및 관리' },
        { id: 'INFO-MNG-0400', name: '상품 등록 및 관리' }
      ]
    },
    { id: '2', name: '시스템 공통', children: [
        { id: 'SYS-MENU-0200', name: '메뉴 등록 관리' },
        { id: 'SYS-AUTHRT-0300', name: '메뉴/버튼 권한 관리' }
      ]
    }
  ];

  const buttonList = [
    { id: 'BTN_SEARCH', name: '조회' },
    { id: 'BTN_NEW', name: '신규' },
    { id: 'BTN_SAVE', name: '저장' },
    { id: 'BTN_DELETE', name: '삭제' },
    { id: 'BTN_PRINT', name: '인쇄' },
    { id: 'BTN_EXCEL', name: '엑셀다운로드' }
  ];

  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState(null);

  // 권한 상태 (임시 구조: groupId -> menuId -> true/false, groupId -> menuId -> buttonId -> true/false)
  const [menuAuth, setMenuAuth] = useState({});
  const [btnAuth, setBtnAuth] = useState({});

  const handleGroupSelect = (group) => {
    setSelectedGroup(group);
    setSelectedMenu(null); // 그룹 변경 시 메뉴 선택 초기화
  };

  const handleMenuSelect = (menu) => {
    if (!selectedGroup) {
        alert('사용자 그룹을 먼저 선택해주세요.');
        return;
    }
    setSelectedMenu(menu);
  };

  const toggleMenuAuth = (menuId) => {
    if (!selectedGroup) return;
    setMenuAuth(prev => ({
        ...prev,
        [selectedGroup.id]: {
            ...(prev[selectedGroup.id] || {}),
            [menuId]: !(prev[selectedGroup.id]?.[menuId])
        }
    }));
  };

  const toggleBtnAuth = (btnId) => {
    if (!selectedGroup || !selectedMenu) return;
    setBtnAuth(prev => {
        const groupAuth = prev[selectedGroup.id] || {};
        const menuBtnAuth = groupAuth[selectedMenu.id] || {};
        return {
            ...prev,
            [selectedGroup.id]: {
                ...groupAuth,
                [selectedMenu.id]: {
                    ...menuBtnAuth,
                    [btnId]: !menuBtnAuth[btnId]
                }
            }
        };
    });
  };

  const handleSave = () => {
    alert('권한 정보가 저장되었습니다.');
    console.log('Saved Menu Auth:', menuAuth);
    console.log('Saved Btn Auth:', btnAuth);
  };

  const handleReset = () => {
    if(window.confirm('저장되지 않은 권한 설정이 초기화됩니다. 계속하시겠습니까?')) {
        setMenuAuth({});
        setBtnAuth({});
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ margin: 0 }}>메뉴 및 버튼 권한 관리 (SYS-AUTHRT-0300)</h2>
        <div>
          <button onClick={handleReset} style={{ padding: '8px 16px', marginRight: '10px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            초기화
          </button>
          <button onClick={handleSave} style={{ padding: '8px 16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            저장
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '20px', flex: 1, minHeight: '500px' }}>
        {/* 좌측: 그룹/사용자 영역 */}
        <div style={{ flex: 1, border: '1px solid #ccc', borderRadius: '4px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '10px', backgroundColor: '#f5f5f5', borderBottom: '1px solid #ccc', fontWeight: 'bold' }}>
            사용자 그룹 목록
          </div>
          <div style={{ padding: '10px', overflowY: 'auto' }}>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
              {groupList.map(group => (
                <li
                  key={group.id}
                  onClick={() => handleGroupSelect(group)}
                  style={{
                    padding: '10px',
                    borderBottom: '1px solid #eee',
                    cursor: 'pointer',
                    backgroundColor: selectedGroup?.id === group.id ? '#e3f2fd' : 'transparent',
                    fontWeight: selectedGroup?.id === group.id ? 'bold' : 'normal'
                  }}
                >
                  {group.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 우측 영역 */}
        <div style={{ flex: 2, display: 'flex', flexDirection: 'column', gap: '20px' }}>

          {/* 우측 상단: 메뉴 권한 영역 */}
          <div style={{ flex: 1, border: '1px solid #ccc', borderRadius: '4px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '10px', backgroundColor: '#f5f5f5', borderBottom: '1px solid #ccc', fontWeight: 'bold' }}>
              메뉴 접근 권한 {selectedGroup && `(${selectedGroup.name})`}
            </div>
            <div style={{ padding: '20px', overflowY: 'auto', flex: 1 }}>
              {!selectedGroup ? (
                <div style={{ color: '#888', textAlign: 'center', marginTop: '50px' }}>좌측에서 사용자 그룹을 선택해주세요.</div>
              ) : (
                <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                  {menuTree.map(parent => (
                    <li key={parent.id} style={{ marginBottom: '15px' }}>
                      <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>📁 {parent.name}</div>
                      <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
                        {parent.children.map(child => (
                          <li key={child.id} style={{ display: 'flex', alignItems: 'center', margin: '5px 0' }}>
                            <input
                              type="checkbox"
                              id={`menu_${child.id}`}
                              checked={!!menuAuth[selectedGroup.id]?.[child.id]}
                              onChange={() => toggleMenuAuth(child.id)}
                              style={{ marginRight: '8px' }}
                            />
                            <label
                              htmlFor={`menu_${child.id}`}
                              style={{
                                cursor: 'pointer',
                                padding: '4px',
                                borderRadius: '4px',
                                backgroundColor: selectedMenu?.id === child.id ? '#fff9c4' : 'transparent'
                              }}
                              onClick={(e) => {
                                e.preventDefault();
                                handleMenuSelect(child);
                              }}
                            >
                              📄 {child.name}
                            </label>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* 우측 하단: 버튼 권한 영역 */}
          <div style={{ flex: 1, border: '1px solid #ccc', borderRadius: '4px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '10px', backgroundColor: '#f5f5f5', borderBottom: '1px solid #ccc', fontWeight: 'bold' }}>
              버튼 권한 {selectedMenu && `(${selectedMenu.name})`}
            </div>
            <div style={{ padding: '20px', overflowY: 'auto', flex: 1 }}>
              {!selectedMenu ? (
                <div style={{ color: '#888', textAlign: 'center', marginTop: '50px' }}>위에서 메뉴를 선택하여 버튼 권한을 설정하세요.</div>
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
                  {buttonList.map(btn => (
                    <div key={btn.id} style={{ display: 'flex', alignItems: 'center' }}>
                      <input
                        type="checkbox"
                        id={`btn_${btn.id}`}
                        checked={!!btnAuth[selectedGroup.id]?.[selectedMenu.id]?.[btn.id]}
                        onChange={() => toggleBtnAuth(btn.id)}
                        style={{ marginRight: '8px' }}
                      />
                      <label htmlFor={`btn_${btn.id}`} style={{ cursor: 'pointer' }}>
                        {btn.name}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SysAuthrt0300;
