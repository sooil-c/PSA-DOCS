import React, { useState } from 'react';

const SlsSlip0100 = () => {
  const [masterData, setMasterData] = useState({
    slipDate: new Date().toISOString().split('T')[0],
    transactionType: '', // 공통 코드로 관리됨 (일반매출, 자사소비 등)
    customer: '',
    salesManager: '',
    remark: '',
  });

  const [quickInput, setQuickInput] = useState({
    productCode: '',
    qtyBox: '',
    qtyBon: '',
    unitPrice: '', // 매출단가
  });

  const [slipLines, setSlipLines] = useState([]);

  const handleMasterChange = (e) => {
    const { name, value } = e.target;
    setMasterData((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuickInputChange = (e) => {
    const { name, value } = e.target;
    setQuickInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddLine = () => {
    if (!quickInput.productCode) {
      alert('상품코드를 입력해주세요.');
      return;
    }

    // 계산을 위해 숫자로 변환
    const qtyBox = parseInt(quickInput.qtyBox) || 0;
    const qtyBon = parseInt(quickInput.qtyBon) || 0;
    const price = parseInt(quickInput.unitPrice) || 0;

    // 환산 수량 계산 (1박스 = 20본으로 임시 설정)
    const totalBonQty = (qtyBox * 20) + qtyBon;

    let supplyPrice = 0;
    let vat = 0;
    let totalAmount = 0;

    // 자사소비 등 특정 거래 유형일 경우 미수금이 발생하지 않게 처리하는 로직을 나중에 추가 가능
    if (masterData.transactionType !== '자사소비') {
      supplyPrice = totalBonQty * price;
      vat = Math.floor(supplyPrice * 0.1);
      totalAmount = supplyPrice + vat;
    }

    const newLine = {
      id: Date.now(),
      productCode: quickInput.productCode,
      productName: `상품_${quickInput.productCode}`,
      qtyBox: qtyBox,
      qtyBon: qtyBon,
      unitPrice: price,
      supplyPrice: supplyPrice,
      vat: vat,
      totalAmount: totalAmount,
    };

    setSlipLines((prev) => [...prev, newLine]);
    setQuickInput({
      productCode: '',
      qtyBox: '',
      qtyBon: '',
      unitPrice: '',
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddLine();
    }
  };

  const handleDeleteLine = (id) => {
    setSlipLines((prev) => prev.filter(line => line.id !== id));
  };

  const handlePrint = () => {
    alert('명세서 인쇄 기능이 실행됩니다.');
  };

  // Calculate totals
  const totalSupply = slipLines.reduce((acc, line) => acc + line.supplyPrice, 0);
  const totalVat = slipLines.reduce((acc, line) => acc + line.vat, 0);
  const grandTotal = slipLines.reduce((acc, line) => acc + line.totalAmount, 0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '15px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>매출전표등록</h2>
        <div>
          <button style={btnStyle}>초기화</button>
        </div>
      </div>

      {/* 상단: 마스터 영역 */}
      <div style={cardStyle}>
        <h3 style={{ marginTop: 0 }}>전표 기본 정보</h3>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <div style={formRowStyle}>
            <label style={labelStyle}>전표일자 <span style={{color:'red'}}>*</span></label>
            <input type="date" name="slipDate" value={masterData.slipDate} onChange={handleMasterChange} style={inputStyle} />
          </div>
          <div style={formRowStyle}>
            <label style={labelStyle}>거래유형 <span style={{color:'red'}}>*</span></label>
            <select name="transactionType" value={masterData.transactionType} onChange={handleMasterChange} style={inputStyle}>
              <option value="">유형 선택</option>
              <option value="일반매출">일반매출</option>
              <option value="자사소비">자사소비</option>
            </select>
          </div>
          <div style={formRowStyle}>
            <label style={labelStyle}>매출처</label>
            <select name="customer" value={masterData.customer} onChange={handleMasterChange} style={inputStyle}>
              <option value="">매출처 선택</option>
              <option value="custA">A도매상</option>
              <option value="custB">B유흥업소</option>
            </select>
          </div>
          <div style={formRowStyle}>
            <label style={labelStyle}>영업담당자</label>
            <input type="text" name="salesManager" value={masterData.salesManager} onChange={handleMasterChange} style={inputStyle} />
          </div>
          <div style={formRowStyle}>
            <label style={labelStyle}>비고</label>
            <input type="text" name="remark" value={masterData.remark} onChange={handleMasterChange} style={{ ...inputStyle, width: '300px' }} />
          </div>
        </div>
      </div>

      {/* 중단: 빠른 입력 영역 */}
      <div style={{ ...cardStyle, backgroundColor: '#e9ecef' }}>
        <h3 style={{ marginTop: 0 }}>빠른 출고 내역 입력</h3>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <input
            type="text"
            name="productCode"
            value={quickInput.productCode}
            onChange={handleQuickInputChange}
            onKeyDown={handleKeyDown}
            placeholder="상품코드 스캔/입력"
            style={inputStyle}
          />
          <input
            type="number"
            name="qtyBox"
            value={quickInput.qtyBox}
            onChange={handleQuickInputChange}
            onKeyDown={handleKeyDown}
            placeholder="수량(BOX)"
            style={{ ...inputStyle, width: '100px' }}
          />
          <input
            type="number"
            name="qtyBon"
            value={quickInput.qtyBon}
            onChange={handleQuickInputChange}
            onKeyDown={handleKeyDown}
            placeholder="수량(본)"
            style={{ ...inputStyle, width: '100px' }}
          />
          <input
            type="number"
            name="unitPrice"
            value={quickInput.unitPrice}
            onChange={handleQuickInputChange}
            onKeyDown={handleKeyDown}
            placeholder="매출단가(본당)"
            style={{ ...inputStyle, width: '130px' }}
          />
          <button style={btnStyle} onClick={handleAddLine}>출고 리스트에 추가 (Enter)</button>
        </div>
      </div>

      {/* 하단: 전표 그리드 영역 */}
      <div style={{ ...cardStyle, flex: 1, overflowY: 'auto' }}>
        <h3 style={{ marginTop: 0 }}>출고 상세 리스트</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f0f0f0', textAlign: 'center' }}>
              <th style={thStyle}>상품코드</th>
              <th style={thStyle}>상품명</th>
              <th style={thStyle}>수량(BOX)</th>
              <th style={thStyle}>수량(본)</th>
              <th style={thStyle}>매출단가</th>
              <th style={thStyle}>공급가액</th>
              <th style={thStyle}>부가세</th>
              <th style={thStyle}>합계</th>
              <th style={thStyle}>관리</th>
            </tr>
          </thead>
          <tbody>
            {slipLines.length === 0 ? (
              <tr>
                <td colSpan="9" style={{ ...tdStyle, textAlign: 'center', padding: '30px', color: '#888' }}>
                  빠른 입력을 통해 출고 라인을 추가해주세요.
                </td>
              </tr>
            ) : (
              slipLines.map((line) => (
                <tr key={line.id} style={{ textAlign: 'center' }}>
                  <td style={tdStyle}>{line.productCode}</td>
                  <td style={tdStyle}>{line.productName}</td>
                  <td style={tdStyle}>{line.qtyBox}</td>
                  <td style={tdStyle}>{line.qtyBon}</td>
                  <td style={{ ...tdStyle, textAlign: 'right' }}>{line.unitPrice.toLocaleString()}</td>
                  <td style={{ ...tdStyle, textAlign: 'right' }}>{line.supplyPrice.toLocaleString()}</td>
                  <td style={{ ...tdStyle, textAlign: 'right' }}>{line.vat.toLocaleString()}</td>
                  <td style={{ ...tdStyle, textAlign: 'right', fontWeight: 'bold' }}>{line.totalAmount.toLocaleString()}</td>
                  <td style={tdStyle}>
                    <button
                      style={{ ...btnStyle, backgroundColor: '#dc3545', padding: '4px 8px', fontSize: '12px' }}
                      onClick={() => handleDeleteLine(line.id)}
                    >
                      삭제
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* 최하단: 합계 및 인쇄 영역 */}
      <div style={{ ...cardStyle, display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#e2e3e5' }}>
        <button style={{ ...btnStyle, backgroundColor: '#28a745' }} onClick={handlePrint}>명세서 인쇄</button>
        <div style={{ display: 'flex', gap: '30px' }}>
          <div style={{ fontSize: '18px' }}>
            <strong>총 매출 공급가:</strong> {totalSupply.toLocaleString()} 원
          </div>
          <div style={{ fontSize: '18px' }}>
            <strong>총 부가세:</strong> {totalVat.toLocaleString()} 원
          </div>
          <div style={{ fontSize: '20px', color: '#007bff' }}>
            <strong>총 합계:</strong> {grandTotal.toLocaleString()} 원
          </div>
        </div>
      </div>

    </div>
  );
};

// Styles
const btnStyle = {
  padding: '8px 16px',
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
};

const labelStyle = {
  width: '80px',
  fontWeight: 'bold',
};

const cardStyle = {
  backgroundColor: '#fff',
  padding: '15px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
};

export default SlsSlip0100;
