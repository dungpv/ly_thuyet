const initialState = {
  danhSachCuoc: [
    { ma: "ga", hinhAnh: "./img/BaiTapGameBauCua/ga.png", diemCuoc: 0 },
    { ma: "bau", hinhAnh: "./img/BaiTapGameBauCua/bau.png", diemCuoc: 0 },
    { ma: "ca", hinhAnh: "./img/BaiTapGameBauCua/ca.png", diemCuoc: 0 },
    { ma: "nai", hinhAnh: "./img/BaiTapGameBauCua/nai.png", diemCuoc: 0 },
    { ma: "cua", hinhAnh: "./img/BaiTapGameBauCua/cua.png", diemCuoc: 0 },
    { ma: "tom", hinhAnh: "./img/BaiTapGameBauCua/tom.png", diemCuoc: 0 },
  ],
  tongDiem: 1000,
  mangXucXac: [
    { ma: "nai", hinhAnh: "./img/BaiTapGameBauCua/nai.png" },
    { ma: "cua", hinhAnh: "./img/BaiTapGameBauCua/cua.png" },
    { ma: "tom", hinhAnh: "./img/BaiTapGameBauCua/tom.png" },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "DAT_CUOC_BAU_CUA": {
      // tim trong danhSachCuoc => quan cuoc nao duoc click se tang hoac giam diem
      const danhSachCuocUpdate = [...state.danhSachCuoc];
      const index = danhSachCuocUpdate.findIndex(
        (qc) => qc.ma === action.quanCuoc.ma
      );
      if (index != -1) {
        if (action.tangGiam && state.tongDiem > 0) {
          danhSachCuocUpdate[index].diemCuoc += 100;
          state.tongDiem -= 100;
        } else {
          if (danhSachCuocUpdate[index].diemCuoc > 0) {
            danhSachCuocUpdate[index].diemCuoc -= 100;
            state.tongDiem += 100;
          }
        }
      }

      state.danhSachCuoc = danhSachCuocUpdate;
      return { ...state };
    }
    case "PLAY_GAME_BAU_CUA": {
      const mangXucXacNgauNhien = [];
      for (let i = 0; i < 3; i++) {
        let soNgauNhien = Math.floor(Math.random() * 6);
        const xucXacNgauNhien = state.danhSachCuoc[soNgauNhien];
        mangXucXacNgauNhien.push(xucXacNgauNhien);
      }

      // Cap nhat lai mang xuc xac state.mangXucXac = mangXucXacNgauNhien
      state.mangXucXac = mangXucXacNgauNhien;

      return { ...state };
    }

    default:
      return { ...state };
  }
};