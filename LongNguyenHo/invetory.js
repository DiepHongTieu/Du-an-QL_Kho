let tonKho = [];
let nhapXuatList = [];

function capNhatBangTonKho() {
    // ... (giống như code trước đó)
}

function capNhatBangNhapXuat() {
    // ... (giống như code trước đó)
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
    capNhatBangNhapXuat();

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
        alert("Sản phẩm không tồn tại")
        return;
    }

    if (tonKho[index].soLuong < soLuong) {
        alert("Số lượng sản phẩm trong kho không đủ")
        return;
    }
    tonKho[index].soLuong -= soLuong;

    if (tonKho[index].soLuong === 0) {
        tonKho.splice(index, 1);
    }




    nhapXuatList.push({
        loai: "Xuất",
        tenMatHang: tenSanPham,
        soLuong: soLuong,
        nhaCungCap_KhachHang: "Khách hàng A", // Thay bằng khách hàng nếu có
        donGia: tonKho[index].donGia,
        ngay: ngayXuat,
        ghiChu: ghiChu
    });


    capNhatBangTonKho();
    capNhatBangNhapXuat();
    document.getElementById("exportForm").reset();

}


capNhatBangNhapXuat();
capNhatBangTonKho();
