var MonAn = function () {
  this.maMonAn = "";
  this.tenMonAn = "";
  this.giaTien = "";
  this.hinhAnh = "";
  this.soLuong = "";
  this.tinhHoaDon = function () {
    return this.soLuong*this.giaTien;
  }
};

var Menu = function (maMonAn,tenMonAn,giaTien,hinhAnh,soLuong) {
  this.maMonAn = maMonAn;
  this.tenMonAn = tenMonAn;
  this.giaTien = giaTien;
  this.hinhAnh = hinhAnh;
  this.soLuong = soLuong;
  this.tongTien = function () {
    return this.soLuong*this.giaTien;
  }
};
