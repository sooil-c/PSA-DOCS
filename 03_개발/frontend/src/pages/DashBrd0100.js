import React from 'react';

const DashBrd0100 = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>대시보드 (DASH-BRD-0100)</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '20px' }}>
        <div style={{ backgroundColor: '#e3f2fd', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#1565c0' }}>금일 매입</h3>
          <div style={{ fontSize: '24px', fontWeight: 'bold' }}>₩ 12,450,000</div>
        </div>
        <div style={{ backgroundColor: '#e8f5e9', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#2e7d32' }}>금일 매출</h3>
          <div style={{ fontSize: '24px', fontWeight: 'bold' }}>₩ 18,900,000</div>
        </div>
        <div style={{ backgroundColor: '#fff3e0', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#ef6c00' }}>금일 수금</h3>
          <div style={{ fontSize: '24px', fontWeight: 'bold' }}>₩ 5,200,000</div>
        </div>
        <div style={{ backgroundColor: '#ffebee', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#c62828' }}>주요 미수금</h3>
          <div style={{ fontSize: '24px', fontWeight: 'bold' }}>₩ 45,000,000</div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ flex: 2, backgroundColor: '#fff', border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
          <h3>월별 매출 추이 (목업)</h3>
          <div style={{ height: '200px', backgroundColor: '#f9f9f9', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', padding: '10px' }}>
            <div style={{ width: '40px', height: '100px', backgroundColor: '#90caf9' }}></div>
            <div style={{ width: '40px', height: '120px', backgroundColor: '#90caf9' }}></div>
            <div style={{ width: '40px', height: '150px', backgroundColor: '#90caf9' }}></div>
            <div style={{ width: '40px', height: '180px', backgroundColor: '#42a5f5' }}></div>
            <div style={{ width: '40px', height: '140px', backgroundColor: '#90caf9' }}></div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px', color: '#666' }}>
            <span>4월</span>
            <span>5월</span>
            <span>6월</span>
            <span>7월</span>
            <span>8월</span>
          </div>
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ backgroundColor: '#fff', border: '1px solid #ddd', padding: '20px', borderRadius: '8px', flex: 1 }}>
            <h3>재고 부족 알림</h3>
            <ul style={{ paddingLeft: '20px', margin: 0, color: '#d32f2f' }}>
              <li>참이슬 후레쉬 - 50 Box 미만</li>
              <li>카스 500ml - 30 Box 미만</li>
              <li>테라 500ml - 40 Box 미만</li>
            </ul>
          </div>
          <div style={{ backgroundColor: '#fff', border: '1px solid #ddd', padding: '20px', borderRadius: '8px', flex: 1 }}>
            <h3>인기 판매 주류 (이번주)</h3>
            <ol style={{ paddingLeft: '20px', margin: 0 }}>
              <li>참이슬 후레쉬</li>
              <li>카스 500ml</li>
              <li>진로 이즈백</li>
              <li>처음처럼</li>
              <li>테라 500ml</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBrd0100;
