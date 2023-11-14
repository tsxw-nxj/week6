import React from 'react';
import { useState } from "react";
import * as F from "./Ad.style.jsx";
import 다운로드 from "/Users/jangjunseo/Desktop/umc_workbook/umc_workbook/src/Ad.svg"



export default function Ad() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      {visible && <F.Ad_img src={다운로드} alt ="광고"/>}
      <button
        onClick={() => {
          setVisible(!visible);
        }}
        >
          {visible ? "광고닫기" : "광고열기"}
        </button>
    </div>
  )
}
