// customer.js
let khachHangTrongNuoc = [];
let khachHangNuocNgoai = [];
let khachHangNoiBo = [];

// Hàm tạo form nhập thông tin khách hàng
function taoFormNhapKhachHang(loaiKhachHang) {
    const form = document.createElement('form');
    form.id = 'customerForm'; // Đặt id cho form

    form.innerHTML = `
        <div class="mb-3">
            <label for="customerCode" class="form-label">Mã khách hàng:</label>
            <input type="text" id="customerCode" name="customerCode" class="form-control" required>
        </div>
        <div class="mb-3">
            <label for="fullname" class="form-label">Họ tên:</label>
            <input type="text" id="fullname" name="fullname" class="form-control" required>
        </div>
        <div class="mb-3">
            <label for="contactNumber" class="form-label">Số điện thoại:</label>
            <input type="tel" id="contactNumber" name="contactNumber" class="form-control" required>
        </div>
        <div class="mb-3">
            <label for="gmail" class="form-label">Gmail:</label>
            <input type="email" id="gmail" name="gmail" class="form-control" required>
        </div>
        <div class="mb-3">
            <label for="address" class="form-label">Địa chỉ:</label>
            <textarea id="address" name="address" class="form-control" required></textarea>
        </div>
        <div class="mb-3">
            <label for="deliveryDate" class="form-label">Ngày giao hàng:</label>
            <input type="date" id="deliveryDate" name="deliveryDate" class="form-control" required>
        </div>
        <button type="button" class="btn btn-primary" onclick="themKhachHang('${loaiKhachHang}')">Thêm</button>
    `;


    return form;
}

// Hàm thêm khách hàng mới (giống như trước)
function themKhachHang(loaiKhachHang) {
    // ... (code như trước)
}

// Hàm hiển thị danh sách khách hàng (giống như trước)
function hienThiKhachHang(danhSachKhachHang, tabId) {

    // ... (code như trước)
}



// Thêm form vào mỗi tab khi trang web được tải
document.addEventListener('DOMContentLoaded', () => {

    const tabIds = ['domestic', 'international', 'internal'];
    const loaiKhachHangs = ['trongNuoc', 'nuocNgoai', 'noiBo'];



    tabIds.forEach((tabId, index) => {


        const form = taoFormNhapKhachHang(loaiKhachHangs[index]);
        document.getElementById(tabId).appendChild(form);
        hienThiKhachHang([], tabId)
    });

});