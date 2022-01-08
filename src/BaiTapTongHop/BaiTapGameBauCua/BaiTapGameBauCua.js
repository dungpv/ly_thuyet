import React from "react";
import DanhSachCuoc from "./DanhSachCuoc";
import DanhSachXucXac from "./DanhSachXucXac";
import DiemCuoc from "./DiemCuoc";
import "./BaiTapGameBauCua.css";

export default function BaiTapGameBauCua(props) {
  return (
    <div
      id="BaiTapGameBauCua"
      className="container-fluid"
      style={{ margin: 0 }}
    >
      <DiemCuoc></DiemCuoc>
      <div className="row">
        <div className="col-8">
          <DanhSachCuoc></DanhSachCuoc>
        </div>
        <div className="col-4">
          <DanhSachXucXac></DanhSachXucXac>
        </div>
      </div>
    </div>
  );
}
