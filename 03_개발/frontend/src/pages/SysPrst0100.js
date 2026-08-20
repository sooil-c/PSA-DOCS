import React from 'react';

const SysPrst0100 = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>대시보드 (SYS-PRST-0100)</h2>

      {/* Notice Section */}
      <div style={{ backgroundColor: '#fff', border: '1px solid #ddd', padding: '15px', borderRadius: '8px', marginBottom: '20px', borderLeft: '5px solid #ff9800' }}>
        <h3 style={{ margin: '0 0 10px 0', color: '#f57c00' }}>📌 공지사항</h3>
        <ul style={{ margin: 0, paddingLeft: '20px', color: '#333' }}>
          <li>[2023-10-25] 시스템 점검 안내 (금주 일요일 02:00 ~ 04:00)</li>
          <li>[2023-10-24] 신규 주류 입고 및 단가 안내</li>
        </ul>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '20px' }}>
        {/* Daily and Monthly Aggregates */}
        <div style={{ backgroundColor: '#e3f2fd', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#1565c0' }}>매입 현황</h3>
          <div style={{ fontSize: '14px', color: '#666' }}>일별: ₩ 12,450,000</div>
          <div style={{ fontSize: '14px', color: '#666', fontWeight: 'bold' }}>월별: ₩ 350,000,000</div>
        </div>
        <div style={{ backgroundColor: '#e8f5e9', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#2e7d32' }}>매출 현황</h3>
          <div style={{ fontSize: '14px', color: '#666' }}>일별: ₩ 18,900,000</div>
          <div style={{ fontSize: '14px', color: '#666', fontWeight: 'bold' }}>월별: ₩ 520,000,000</div>
        </div>
        <div style={{ backgroundColor: '#fff3e0', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#ef6c00' }}>수금 현황</h3>
          <div style={{ fontSize: '14px', color: '#666' }}>일별: ₩ 5,200,000</div>
          <div style={{ fontSize: '14px', color: '#666', fontWeight: 'bold' }}>월별: ₩ 480,000,000</div>
        </div>
        <div style={{ backgroundColor: '#ffebee', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#c62828' }}>미수금 현황</h3>
          <div style={{ fontSize: '14px', color: '#666' }}>금일 발생: ₩ 3,000,000</div>
          <div style={{ fontSize: '14px', color: '#666', fontWeight: 'bold' }}>당월 총 잔액: ₩ 45,000,000</div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <div style={{ flex: 1, backgroundColor: '#fff', border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
          <h3>월별 매출 추이 (최근 1년 및 전년 동기)</h3>
          <div style={{ height: '200px', backgroundColor: '#f9f9f9', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', padding: '10px' }}>
            {/* Mocking a comparison chart */}
            <div style={{ display: 'flex', gap: '5px', alignItems: 'flex-end' }}>
                <div style={{ width: '20px', height: '100px', backgroundColor: '#bdbdbd', title: '전년 동월' }}></div>
                <div style={{ width: '20px', height: '120px', backgroundColor: '#42a5f5', title: '당월' }}></div>
            </div>
            <div style={{ display: 'flex', gap: '5px', alignItems: 'flex-end' }}>
                <div style={{ width: '20px', height: '110px', backgroundColor: '#bdbdbd' }}></div>
                <div style={{ width: '20px', height: '130px', backgroundColor: '#42a5f5' }}></div>
            </div>
            <div style={{ display: 'flex', gap: '5px', alignItems: 'flex-end' }}>
                <div style={{ width: '20px', height: '130px', backgroundColor: '#bdbdbd' }}></div>
                <div style={{ width: '20px', height: '150px', backgroundColor: '#42a5f5' }}></div>
            </div>
            <div style={{ display: 'flex', gap: '5px', alignItems: 'flex-end' }}>
                <div style={{ width: '20px', height: '140px', backgroundColor: '#bdbdbd' }}></div>
                <div style={{ width: '20px', height: '180px', backgroundColor: '#1e88e5' }}></div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px', color: '#666', fontSize: '12px' }}>
            <span>-3개월</span>
            <span>-2개월</span>
            <span>-1개월</span>
            <span>당월</span>
          </div>
          <div style={{ marginTop: '10px', textAlign: 'right', fontSize: '12px' }}>
             <span style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '#bdbdbd', marginRight: '5px'}}></span>전년 동기
             <span style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '#42a5f5', marginLeft: '15px', marginRight: '5px'}}></span>당해 년도
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <div style={{ backgroundColor: '#fff', border: '1px solid #ddd', padding: '15px', borderRadius: '8px', flex: 1 }}>
          <h3 style={{color: '#d32f2f'}}>재고 부족 알림</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px', textAlign: 'center' }}>
            <thead>
              <tr style={{ backgroundColor: '#f5f5f5', borderBottom: '1px solid #ddd' }}>
                <th style={{ padding: '5px' }}>상품코드</th>
                <th style={{ padding: '5px' }}>상품명</th>
                <th style={{ padding: '5px' }}>용량</th>
                <th style={{ padding: '5px' }}>매입처코드</th>
                <th style={{ padding: '5px' }}>매입처명</th>
                <th style={{ padding: '5px' }}>잔여량</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>P001</td><td>참이슬 후레쉬</td><td>360ml</td><td>S001</td><td>하이트진로</td><td style={{color: 'red'}}>45 Box</td></tr>
              <tr><td>P002</td><td>카스</td><td>500ml</td><td>S002</td><td>오비맥주</td><td style={{color: 'red'}}>20 Box</td></tr>
            </tbody>
          </table>
        </div>
        <div style={{ backgroundColor: '#fff', border: '1px solid #ddd', padding: '15px', borderRadius: '8px', flex: 1 }}>
          <h3 style={{color: '#388e3c'}}>인기 판매 주류 (이번주)</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px', textAlign: 'center' }}>
            <thead>
              <tr style={{ backgroundColor: '#f5f5f5', borderBottom: '1px solid #ddd' }}>
                <th style={{ padding: '5px' }}>상품코드</th>
                <th style={{ padding: '5px' }}>상품명</th>
                <th style={{ padding: '5px' }}>용량</th>
                <th style={{ padding: '5px' }}>매입처코드</th>
                <th style={{ padding: '5px' }}>매입처명</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>P001</td><td>참이슬 후레쉬</td><td>360ml</td><td>S001</td><td>하이트진로</td></tr>
              <tr><td>P005</td><td>진로 이즈백</td><td>360ml</td><td>S001</td><td>하이트진로</td></tr>
              <tr><td>P002</td><td>카스</td><td>500ml</td><td>S002</td><td>오비맥주</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ backgroundColor: '#fff', border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
          <h3>매출 상위 매출처 정보 (Top Customers)</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', fontSize: '14px' }}>
            <thead style={{ backgroundColor: '#f8f9fa' }}>
              <tr>
                <th style={{ border: '1px solid #ddd', padding: '10px' }}>매출처 코드</th>
                <th style={{ border: '1px solid #ddd', padding: '10px' }}>매출처명</th>
                <th style={{ border: '1px solid #ddd', padding: '10px' }}>일별 매출금액</th>
                <th style={{ border: '1px solid #ddd', padding: '10px' }}>주간 매출금액</th>
                <th style={{ border: '1px solid #ddd', padding: '10px' }}>월간 매출금액</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>C001</td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>이마트 성수점</td>
                <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>₩ 2,500,000</td>
                <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>₩ 15,000,000</td>
                <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right', fontWeight: 'bold' }}>₩ 65,000,000</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>C045</td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>백종원 프랜차이즈 본사</td>
                <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>₩ 1,800,000</td>
                <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>₩ 12,500,000</td>
                <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right', fontWeight: 'bold' }}>₩ 50,000,000</td>
              </tr>
            </tbody>
          </table>
      </div>

    </div>
  );
};

export default SysPrst0100;
