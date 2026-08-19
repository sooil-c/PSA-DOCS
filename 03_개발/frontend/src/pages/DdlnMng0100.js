import React, { useState } from 'react';

const DdlnMng0100 = () => {
  const [activeTab, setActiveTab] = useState('일마감');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);

  // 가상의 마감 데이터 (실제로는 서버에서 가져와야 함)
  const [closedDates, setClosedDates] = useState(['2024-03-01', '2024-03-02', '2024-03-03']);
  const [closedMonths, setClosedMonths] = useState(['2024-01', '2024-02']);

  const generateDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  };

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const daysInCurrentMonth = generateDaysInMonth(currentYear, currentMonth);

  const handleDayClick = (day) => {
    const formattedDate = `${currentYear}-${String(currentMonth).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    setSelectedDate(formattedDate);
  };

  const handleMonthClick = (month) => {
    const formattedMonth = `${currentYear}-${String(month).padStart(2, '0')}`;
    setSelectedMonth(formattedMonth);
  };

  const handleClose = () => {
    if (activeTab === '일마감') {
      if (!selectedDate) return alert('마감할 일자를 선택해주세요.');
      if (closedDates.includes(selectedDate)) return alert('이미 마감된 일자입니다.');
      setClosedDates(prev => [...prev, selectedDate]);
      alert(`${selectedDate} 일마감이 완료되었습니다.`);
    } else {
      if (!selectedMonth) return alert('마감할 월을 선택해주세요.');
      if (closedMonths.includes(selectedMonth)) return alert('이미 마감된 월입니다.');
      setClosedMonths(prev => [...prev, selectedMonth]);
      alert(`${selectedMonth} 월마감이 완료되었습니다.`);
    }
  };

  const handleCancelClose = () => {
    if (activeTab === '일마감') {
      if (!selectedDate) return alert('마감 취소할 일자를 선택해주세요.');
      if (!closedDates.includes(selectedDate)) return alert('마감되지 않은 일자입니다.');
      setClosedDates(prev => prev.filter(d => d !== selectedDate));
      alert(`${selectedDate} 일마감이 취소되었습니다.`);
    } else {
      if (!selectedMonth) return alert('마감 취소할 월을 선택해주세요.');
      if (!closedMonths.includes(selectedMonth)) return alert('마감되지 않은 월입니다.');
      setClosedMonths(prev => prev.filter(m => m !== selectedMonth));
      alert(`${selectedMonth} 월마감이 취소되었습니다.`);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '15px' }}>
      <h2>일/월 마감 관리</h2>

      {/* 상단 탭 영역 */}
      <div style={{ display: 'flex', borderBottom: '1px solid #ccc', backgroundColor: '#fff', padding: '0 20px', borderRadius: '8px 8px 0 0' }}>
        <div
          style={{ ...tabStyle, borderBottom: activeTab === '일마감' ? '3px solid #007bff' : 'none', fontWeight: activeTab === '일마감' ? 'bold' : 'normal', color: activeTab === '일마감' ? '#007bff' : '#333' }}
          onClick={() => { setActiveTab('일마감'); setSelectedMonth(null); }}
        >
          일마감
        </div>
        <div
          style={{ ...tabStyle, borderBottom: activeTab === '월마감' ? '3px solid #007bff' : 'none', fontWeight: activeTab === '월마감' ? 'bold' : 'normal', color: activeTab === '월마감' ? '#007bff' : '#333' }}
          onClick={() => { setActiveTab('월마감'); setSelectedDate(null); }}
        >
          월마감
        </div>
      </div>

      <div style={{ display: 'flex', flex: 1, gap: '20px' }}>
        {/* 중앙: 달력 및 현황 영역 */}
        <div style={{ flex: 2, backgroundColor: '#fff', padding: '20px', borderRadius: '0 0 8px 8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <h3>{currentYear}년 {activeTab === '일마감' ? `${currentMonth}월` : ''}</h3>
          </div>

          {activeTab === '일마감' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '10px' }}>
              {['일', '월', '화', '수', '목', '금', '토'].map(day => (
                <div key={day} style={{ textAlign: 'center', fontWeight: 'bold', padding: '10px' }}>{day}</div>
              ))}
              {Array.from({ length: daysInCurrentMonth }, (_, i) => i + 1).map(day => {
                const formattedDate = `${currentYear}-${String(currentMonth).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                const isClosed = closedDates.includes(formattedDate);
                const isSelected = selectedDate === formattedDate;
                return (
                  <div
                    key={day}
                    onClick={() => handleDayClick(day)}
                    style={{
                      ...calendarCell,
                      backgroundColor: isSelected ? '#e6f2ff' : (isClosed ? '#f8d7da' : '#fff'),
                      borderColor: isSelected ? '#007bff' : '#ddd',
                      color: isClosed ? '#721c24' : '#333'
                    }}
                  >
                    <div>{day}</div>
                    {isClosed && <div style={{ fontSize: '10px', fontWeight: 'bold', marginTop: '5px' }}>마감완료</div>}
                  </div>
                );
              })}
            </div>
          )}

          {activeTab === '월마감' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px' }}>
              {Array.from({ length: 12 }, (_, i) => i + 1).map(month => {
                const formattedMonth = `${currentYear}-${String(month).padStart(2, '0')}`;
                const isClosed = closedMonths.includes(formattedMonth);
                const isSelected = selectedMonth === formattedMonth;
                return (
                  <div
                    key={month}
                    onClick={() => handleMonthClick(month)}
                    style={{
                      ...calendarCell,
                      height: '100px',
                      backgroundColor: isSelected ? '#e6f2ff' : (isClosed ? '#f8d7da' : '#fff'),
                      borderColor: isSelected ? '#007bff' : '#ddd',
                      color: isClosed ? '#721c24' : '#333'
                    }}
                  >
                    <div style={{ fontSize: '18px', fontWeight: 'bold' }}>{month}월</div>
                    {isClosed && <div style={{ fontSize: '12px', fontWeight: 'bold', marginTop: '10px' }}>마감완료</div>}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* 우측: 요약 및 버튼 영역 */}
        <div style={{ flex: 1, backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column' }}>
          <h3>현황 정보</h3>
          <div style={{ flex: 1 }}>
            <p><strong>선택된 날짜/월:</strong> {activeTab === '일마감' ? (selectedDate || '미선택') : (selectedMonth || '미선택')}</p>
            <div style={{ backgroundColor: '#f4f4f9', padding: '15px', borderRadius: '8px', marginTop: '15px' }}>
              <p style={{ margin: '5px 0' }}>총 매입건수: 0건 (0원)</p>
              <p style={{ margin: '5px 0' }}>총 매출건수: 0건 (0원)</p>
              <p style={{ margin: '5px 0' }}>지급/수금: 0건 (0원)</p>
              <p style={{ margin: '15px 0 5px 0', fontSize: '12px', color: '#666' }}>※ 무결성 검증 완료</p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
            <button style={{ ...btnStyle, padding: '15px', fontSize: '16px', backgroundColor: '#28a745' }} onClick={handleClose}>
              마감 처리
            </button>
            <button style={{ ...btnStyle, padding: '15px', fontSize: '16px', backgroundColor: '#dc3545' }} onClick={handleCancelClose}>
              마감 취소
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Styles
const tabStyle = {
  padding: '15px 30px',
  cursor: 'pointer',
  fontSize: '16px',
};

const calendarCell = {
  height: '80px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'all 0.2s',
};

const btnStyle = {
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontWeight: 'bold',
};

export default DdlnMng0100;
