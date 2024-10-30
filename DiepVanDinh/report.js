// script.js

let khachHangTrongNuoc = [];
let khachHangNuocNgoai = [];
let khachHangNoiBo = [];

let tonKho = [];

function taoBaoCao() {

    let tongGiaTriTonKho = 0;
    tonKho.forEach(matHang => {
        tongGiaTriTonKho += matHang.soLuong * matHang.donGia;
    });


    const baoCaoTable = document.createElement('table');
    baoCaoTable.classList.add('table', 'table-striped');


    const tbody = baoCaoTable.createTBody();


    // Tổng giá trị tồn kho
    const tongGiaTriRow = tbody.insertRow();
    const tongGiaTriLabelCell = tongGiaTriRow.insertCell();
    tongGiaTriLabelCell.textContent = "Tổng giá trị tồn kho:";
    const tongGiaTriValueCell = tongGiaTriRow.insertCell();
    tongGiaTriValueCell.textContent = tongGiaTriTonKho.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND'
    });

    // Số lượng khách hàng theo loại
    const soLuongKhachHangTrongNuocRow = tbody.insertRow();
    const soLuongKhachHangTrongNuocLabelCell = soLuongKhachHangTrongNuocRow.insertCell();
    soLuongKhachHangTrongNuocLabelCell.textContent = "Số lượng khách hàng trong nước:";
    const soLuongKhachHangTrongNuocValueCell = soLuongKhachHangTrongNuocRow.insertCell();
    soLuongKhachHangTrongNuocValueCell.textContent = khachHangTrongNuoc.length;

    const soLuongKhachHangNuocNgoaiRow = tbody.insertRow();
    const soLuongKhachHangNuocNgoaiLabelCell = soLuongKhachHangNuocNgoaiRow.insertCell();
    soLuongKhachHangNuocNgoaiLabelCell.textContent = "Số lượng khách hàng nước ngoài:";
    const soLuongKhachHangNuocNgoaiValueCell = soLuongKhachHangNuocNgoaiRow.insertCell();
    soLuongKhachHangNuocNgoaiValueCell.textContent = khachHangNuocNgoai.length;

    const soLuongKhachHangNoiBoRow = tbody.insertRow();
    const soLuongKhachHangNoiBoLabelCell = soLuongKhachHangNoiBoRow.insertCell();
    soLuongKhachHangNoiBoLabelCell.textContent = "Số lượng khách hàng nội bộ:";
    const soLuongKhachHangNoiBoValueCell = soLuongKhachHangNoiBoRow.insertCell();
    soLuongKhachHangNoiBoValueCell.textContent = khachHangNoiBo.length;

    const reportSection = document.getElementById("reportSection")

    reportSection.innerHTML = '';
    reportSection.appendChild(baoCaoTable);

}

document.addEventListener('DOMContentLoaded', () => {
    taoBaoCao();
});