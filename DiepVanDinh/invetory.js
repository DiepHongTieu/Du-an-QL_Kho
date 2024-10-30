let tonKho = [];
let nhapXuatList = [];

function capNhatBangTonKho() {
    const tonKhoTableBody = document.getElementById("inventoryTable").getElementsByTagName("tbody")[0];
    tonKhoTableBody.innerHTML = ""; // Xóa nội dung hiện tại

    tonKho.forEach(matHang => {
        const row = tonKhoTableBody.insertRow();
        row.insertCell(0).innerText = matHang.tenMatHang;
        row.insertCell(1).innerText = matHang.soLuong;
        row.insertCell(2).innerText = matHang.nhaCungCap;
        row.insertCell(3).innerText = matHang.donGia;
        row.insertCell(4).innerText = matHang.ngayNhap;
        row.insertCell(5).innerText = matHang.ghiChu;
    });
}

function capNhatBangNhapXuat() {
    const nhapXuatTableBody = document.getElementById("nhapXuatTable").getElementsByTagName("tbody")[0];
    nhapXuatTableBody.innerHTML = ""; // Xóa nội dung hiện tại

    nhapXuatList.forEach(record => {
        const row = nhapXuatTableBody.insertRow();
        row.insertCell(0).innerText = record.loai;
        row.insertCell(1).innerText = record.tenMatHang;
        row.insertCell(2).innerText = record.soLuong;
        row.insertCell(3).innerText = record.nhaCungCap_KhachHang;
        row.insertCell(4).innerText = record.donGia;
        row.insertCell(5).innerText = record.ngay;
        row.insertCell(6).innerText = record.ghiChu;
    });
}

function nhapKho() {
    const tenSanPham = document.getElementById("importProduct").value;
    const soLuong = parseInt(document.getElementById("importQuantity").value);
    const nhaCungCap = document.getElementById("importSupplier").value;
    const donGia = parseFloat(document.getElementById("importPrice").value);
    const ngayNhap = document.getElementById("importDate").value;
    const ghiChu = document.getElementById("importNote").value;

    const matHangMoi = {
        tenMatHang: tenSanPham,
        soLuong: soLuong,
        nhaCungCap: nhaCungCap,
        donGia: donGia,
        ngayNhap: ngayNhap,
        ghiChu: ghiChu
    };

    tonKho.push(matHangMoi);

    nhapXuatList.push({
        loai: "Nhập",
        tenMatHang: tenSanPham,
        soLuong: soLuong,
        nhaCungCap_KhachHang: nhaCungCap,
        donGia: donGia,
        ngay: ngayNhap,
        ghiChu: ghiChu
    });

    capNhatBangTonKho(); // Cập nhật bảng tồn kho sau khi nhập
    capNhatBangNhapXuat(); // Cập nhật bảng nhập/xuất sau khi nhập

    document.getElementById("importForm").reset();
}

function xuatKho() {
    const tenSanPham = document.getElementById("exportProduct").value;
    const soLuong = parseInt(document.getElementById("exportQuantity").value);
    const ngayXuat = document.getElementById("exportDate").value;
    const ghiChu = document.getElementById("exportNote").value;
    

    let index = -1;

    for (let i = 0; i < tonKho.length; i++) {
        if (tonKho[i].tenMatHang === tenSanPham) {
            index = i;
            break;
        }
    }

    if (index === -1) {
        alert("Sản phẩm không tồn tại");
        return;
    }

    if (tonKho[index].soLuong < soLuong) {
        alert("Số lượng sản phẩm trong kho không đủ");
        return;
    }

    const donGia = tonKho[index].donGia;

    tonKho[index].soLuong -= soLuong;

    if (tonKho[index].soLuong === 0) {
        tonKho.splice(index, 1);
    }

    nhapXuatList.push({
        loai: "Xuất",
        tenMatHang: tenSanPham,
        soLuong: soLuong,
        nhaCungCap_KhachHang: "Khách hàng A", // Điều chỉnh thông tin khách hàng nếu cần
        donGia: donGia,
        ngay: ngayXuat,
        ghiChu: ghiChu
    });

    capNhatBangTonKho();
    capNhatBangNhapXuat();
    document.getElementById("exportForm").reset();
}

// Khởi tạo bảng nhập/xuất và tồn kho khi trang tải
capNhatBangNhapXuat();
capNhatBangTonKho();
