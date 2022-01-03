import React, { useState, useCallback } from "react";
import ChildUseCallBack from "./ChildUseCallBack";

export default function DemoHookUseCallBack(props) {
  let [like, setLike] = useState(1);

  const renderNotify = () => {
    return `Bạn đã thả ${like} ♥!`;
  };

  let callBackRenderNotify = useCallback(renderNotify, []); // muon re render thi them [like], hien tai ko re render

  return (
    <div className="m-5">
      Like: {like} ♥<br></br>
      <span
        style={{ cursor: "pointer", color: "red", fontSize: 35 }}
        onClick={() => {
          setLike(like + 1);
        }}
      >
        ♥
      </span>
      <br></br>
      <br></br>
      <ChildUseCallBack renderNotify={callBackRenderNotify}></ChildUseCallBack>
    </div>
  );
}
