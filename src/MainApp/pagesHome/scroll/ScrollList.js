import React from 'react';
import { FixedSizeList } from 'react-window';

function ScrollableList() {
  const itemCount = 1000; // จำนวนรายการในรายการแบบเลื่อน

  // ฟังก์ชันนี้ใช้ในการแสดงข้อมูลในแต่ละรายการ
  const Row = ({ index, style }) => (
    <div style={style}>Item {index}</div>
  );

  return (
    <div style={{ height: 300, width: 200 }}>
      {/* ใช้ FixedSizeList จาก react-window */}
      <FixedSizeList
        height={300} // ความสูงของรายการแบบเลื่อน
        width={200} // ความกว้างของรายการแบบเลื่อน
        itemCount={itemCount}
        itemSize={30} // ความสูงของแต่ละรายการ
      >
        {Row}
      </FixedSizeList>
    </div>
  );
}

export default ScrollableList;
