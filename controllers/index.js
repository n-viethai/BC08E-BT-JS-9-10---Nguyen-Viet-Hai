//  bài tập 1

var arrMonAn = [];

document.querySelector("#themMonAn").onclick = function () {
  var monAn = new MonAn();
  monAn.maMonAn = document.querySelector("#maMonAn").value;
  monAn.tenMonAn = document.querySelector("#tenMonAn").value;
  monAn.giaTien = document.querySelector("#giaTien").value;
  monAn.hinhAnh = document.querySelector("#hinhAnh").value;

  // kiểm tra input

  var kiemTra = new Validation ();

  var valid = true;

  valid &= kiemTra.kiemTraInput(monAn.maMonAn,'#inputError_maMonAn','Mã món ăn')
  &kiemTra.kiemTraInput(monAn.giaTien,'#inputError_giaTien','Giá tiền')
  &kiemTra.kiemTraInput(monAn.tenMonAn,'#inputError_tenMonAn','Tên món ăn')
  &kiemTra.kiemTraInput(monAn.hinhAnh,'#inputError_linkHinhAnh','Link hình ảnh');

  if(!valid) {
    return;
  }

  arrMonAn.push(monAn);

  // console.log(arrMonAn);

  renderTableMonAn(arrMonAn);
};

function renderTableMonAn(arrDish) {
  var content = "";
  for (var index = 0; index < arrDish.length; index++) {
    var monAn = arrDish[index];

    var trMonAn = `
        <tr>
            <td>${monAn.maMonAn}</td>
            <td>${monAn.tenMonAn}</td>
            <td>${monAn.giaTien}</td>
            <td> 
                <img src="${monAn.hinhAnh}" style="width: 100px; height: 100px; object-fit: cover; object-position: center;">
            </td>
            <td><button onclick="xoaMonAn('${monAn.maMonAn}')" class="btn btn-danger">Xóa</button></td>
        </tr>
        `;

    content += trMonAn;
  }
  // console.log(content);

  document.querySelector("#tbodyTable").innerHTML = content;
}

function xoaMonAn(maMonAn) {
  for (var index = arrMonAn.length - 1; index >= 0 ; index--) {
    var monAn = arrMonAn[index];
    if (maMonAn === monAn.maMonAn) {
      arrMonAn.splice(index, 1);
    }
  }

  renderTableMonAn(arrMonAn);
}

// -------------------------------------------------------------------------------------------------------------------

//  bài tập 2

var arrMenu = [
  {
    maMonAn: "1",
    tenMonAn: "Cua thịt khủng",
    soLuong: "0",
    giaTien: "1250",
    tongTien() {
      return this.soLuong * this.giaTien;
    },
    hinhAnh: "./assets/img/mon1.jpeg",
  },
  {
    maMonAn: "2",
    tenMonAn: "Cua thịt cỡ nhỏ",
    soLuong: "0",
    giaTien: "350",
    tongTien() {
      return this.soLuong * this.giaTien;
    },
    hinhAnh: "./assets/img/mon2.jpeg",
  },
  {
    maMonAn: "3",
    tenMonAn: "Combo cua-vẹm-tôm",
    soLuong: "0",
    giaTien: "610",
    tongTien() {
      return this.soLuong * this.giaTien;
    },
    hinhAnh: "./assets/img/mon3.jpeg",
  },
  {
    maMonAn: "4",
    tenMonAn: "Cua gạch",
    soLuong: "0",
    giaTien: "950",
    tongTien() {
      return this.soLuong * this.giaTien;
    },
    hinhAnh: "./assets/img/mon4.jpeg",
  },
  {
    maMonAn: "5",
    tenMonAn: "King crab",
    soLuong: "0",
    giaTien: "2950",
    tongTien() {
      return this.soLuong * this.giaTien;
    },
    hinhAnh: "./assets/img/mon5.jpeg",
  },
];

renderMenuTable(arrMenu);

function renderMenuTable(arrMenu) {
  var content = "";
  for (var index = 0; index < arrMenu.length; index++) {
    var monAn = arrMenu[index];
    var trMenuTable = `
    <tr>
      <td>${monAn.maMonAn}</td>
      <td>${monAn.tenMonAn}</td>
      <td>${monAn.giaTien}</td>
      <td>
          <img src="${monAn.hinhAnh}" style="width: 100px; height: 100px;" alt="món ăn"/>
      </td>
      <td>
          <button class="btn btn-danger" onclick="themMon('${monAn.maMonAn}')">+</button>
          <button class="btn btn-danger" onclick="giamMon('${monAn.maMonAn}')">-</button>
      </td>
    </tr>
    `;
    content += trMenuTable;
  }
  document.querySelector("#menuTable").innerHTML = content;
}

// thêm món vào menu

function themMon(num) {
  for (var index = 0; index < arrMenu.length; index++) {
    var monAn = arrMenu[index];
    if (num === monAn.maMonAn) {
      monAn.soLuong++;
    }
    // monAn.soLuong = String(monAn.soLuong);
  }
  renderBillTable(arrMenu);
}

//  giảm món trên menu

function giamMon(num) {
  for (var index = 0; index < arrMenu.length; index++) {
    var monAn = arrMenu[index];
    if (num === monAn.maMonAn) {
      monAn.soLuong--;
      if (monAn.soLuong < 0) {
        monAn.soLuong = 0;
      }
      // monAn.soLuong = String(monAn.soLuong);
    }
  }

  renderBillTable(arrMenu);
}

// xóa món trên menu

function xoaMon (maMonAn) {

  for(var index = 0; index< arrMenu.length;index++){
    var monAn = arrMenu[index];

    if(monAn.maMonAn === maMonAn){
      monAn.soLuong = 0;
    }
  }
  renderBillTable(arrMenu);
  
}

//  xuất các món được chọn ra bill

function renderBillTable(arrThucDon) {
  var content = '';
  var trBill = '';
  for (var index = 0; index < arrThucDon.length; index++) {
    var monAn = arrThucDon[index];
    if (Number(monAn.soLuong) > 0) {
      var tr = `
      <tr>
        <td>${monAn.maMonAn}</td>
        <td>${monAn.tenMonAn}</td>
        <td>${monAn.giaTien}</td>
        <td>${monAn.soLuong}</td>
        <td>${monAn.tongTien().toLocaleString()}</td>
        <td>
          <button class="btn btn-secondary " onclick="xoaMon('${monAn.maMonAn}')">Xóa</button>
        </td>
      </tr>
      `;
      trBill += tr;
  }

  var tongTienHoaDon = tongTienBill(arrMenu).toLocaleString();

  content = trBill + `
  <tr>
    <td colspan = "3"></td>
    <td class = "fw-bold">Thành tiền</td>
    <td class = "fw-bold">${tongTienHoaDon}</td>
    <td></td>
  </tr>
  `;
}

  document.querySelector("#tbodyBill").innerHTML = content;
}

//  tính tổng bill

function tongTienBill (arrMenu) {
  var sum = 0;
  for(var index = 0; index < arrMenu.length; index++){
    var monAn = arrMenu[index];
    sum += monAn.soLuong*monAn.giaTien; 
  }
  return sum;
}
