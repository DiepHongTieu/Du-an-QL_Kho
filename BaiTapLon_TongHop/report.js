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
function renderChart() {
    
    let z = localStorage.getItem('z') ? JSON.parse(localStorage.getItem('z')) : [];

    let labels = z.map(item => item.tenMatHang);
    let data = z.map(item => item.soLuong);

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar', 
        data: {
            labels: labels, 
            datasets: [{
                label: 'Số lượng nhập kho',
                data: data, 
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    let y = localStorage.getItem('y') ? JSON.parse(localStorage.getItem('y')) : [];
    
    let trongNuocCount = 0;
let ngoaiNuocCount = 0;
let noiBoCount = 0;


y.forEach(item => {
    if (item.loai === "Trong nước") {
        trongNuocCount += 1;
    } else if (item.loai === "Nước ngoai") {
        ngoaiNuocCount += 1;
    } else {
        noiBoCount += 1;
    }
});


let label = ["Trong nước", "Nước ngoài", "Nội bộ"];
let dataa = [trongNuocCount, ngoaiNuocCount, noiBoCount];

    // Tạo biểu đồ với Chart.js
    var abc = document.getElementById('khach').getContext('2d');
    var khach = new Chart(abc, {
        type: 'bar', // Loại biểu đồ: cột
        data: {
            labels: label, // Tên các mặt hàng
            datasets: [{
                label: 'Số lượng khách hàng',
                data: dataa, // Số lượng tương ứng với từng mặt hàng
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
document.addEventListener('DOMContentLoaded', () => {
    taoBaoCao();
});
