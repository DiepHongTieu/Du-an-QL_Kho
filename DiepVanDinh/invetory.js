
let nhapXuatList = [];

let c=0;


function nhapKho() {

    let tenSanPham = document.getElementById("importProduct").value;
    let soLuong = parseInt(document.getElementById("importQuantity").value);
    let nhaCungCap = document.getElementById("importSupplier").value;
    let donGia = parseFloat(document.getElementById("importPrice").value);
    let ngayNhap = document.getElementById("importDate").value;
    let ghiChu = document.getElementById("importNote").value;
    let loai;
    
    if(tenSanPham && soLuong && nhaCungCap && donGia && ngayNhap) {
        document.getElementById('importForm').reset();
        alert("Nhập thành công ");
        let s = localStorage.getItem('s') ? JSON.parse(localStorage.getItem('s')) : [];
        let z = localStorage.getItem('z') ? JSON.parse(localStorage.getItem('z')) : [];
        s.push(
            {
                loai: "Nhập",
                tenMatHang: tenSanPham,
                soLuong: soLuong,
                nhaCungCap: nhaCungCap,
                donGia: donGia,
                ngayNhap: ngayNhap,
                ghiChu: ghiChu,
            }
        );
        z.push(
            {
                tenMatHang: tenSanPham,
                soLuong: soLuong,
                nhaCungCap: nhaCungCap,
                donGia: donGia,
                ngayNhap: ngayNhap,
                ghiChu: ghiChu,
            }
        )
        localStorage.setItem('s', JSON.stringify(s));
        localStorage.setItem('z', JSON.stringify(z));
        this.renderListProduct();
    } else{
        alert("Không được bỏ trống");
        return;
    }

}
function  renderListProduct() {
    let s = localStorage.getItem('s') ? JSON.parse(localStorage.getItem('s')) : [];
    let z = localStorage.getItem('z') ? JSON.parse(localStorage.getItem('z')) : [];
   

    let tableCotent=`<tr> 
                <th>Loại</th>
                <th>Tên mặt hàng</th>
                <th>Số lượng</th>
                
                <th>Nhà cung cấp/Khách hàng</th>
                <th>Đơn giá</th>

                <th>Ngày</th>
                <th>Ghi chú</th>
            </tr>`;
            s.forEach((s, index) =>{
                index++;
                tableCotent += `<tr>
               <td>${s.loai}</td>
               <td>${s.tenMatHang}</td>
               <td>${s.soLuong}</td>
               <td>${s.nhaCungCap}</td>
               <td>${s.donGia}</td>
               <td>${s.ngayNhap}</td>
               <td>${s.ghiChu}</td>
            </tr>`;
            })
            
            document.getElementById('nhapXuatTable').innerHTML = tableCotent;
            //xuất

            //tồn kho
        let table2=`<tr>
            <th>Tên mặt hàng</th>
            <th>Số lượng</th>
            
            <th>Nhà cung cấp/Khách hàng</th>
            <th>Đơn giá</th>

            <th>Ngày</th>
            <th>Ghi chú</th>
        </tr>`;
        z.forEach((z, index) =>{
            index++;
            table2 += `<tr>

           <td>${z.tenMatHang}</td>
           <td>${z.soLuong}</td>
           <td>${z.nhaCungCap}</td>
           <td>${z.donGia}</td>
           <td>${z.ngayNhap}</td>
           <td>${z.ghiChu}</td>
        </tr>`;
        })
        document.getElementById('inventoryTable').innerHTML = table2;

}
function xuatKho() {
    let tenSanPham = document.getElementById("exportProduct").value;
    let sluong = parseInt(document.getElementById("exportQuantity").value);
    let kHang = document.getElementById("exportSupplier").value;
    let dGia;
    let ngayXuat = document.getElementById("exportDate").value;
    let ghiChu = document.getElementById("exportNote").value;
    let loai;
    let sl;
    let dg;
    let ncc;
    let nn;
    let gc;
    let b=0;
    
    if(tenSanPham && sluong && kHang && ngayXuat && ghiChu) {
        document.getElementById('exportForm').reset();
        
        let s = localStorage.getItem('s') ? JSON.parse(localStorage.getItem('s')) : [];
        let z = localStorage.getItem('z') ? JSON.parse(localStorage.getItem('z')) : [];
        s.forEach((item) => {
            if (item.tenMatHang === tenSanPham) {
                 dGia = (item.donGia / item.soLuong) * sluong;
                 if(item.loai === "Nhập" && c===0) {
                    sl = item.soLuong - sluong;
                    dg = item.donGia - dGia;
                    ncc = item.nhaCungCap;
                    nn = item.ngayNhap;
                    gc = item.ghiChu;
                    c++;
                    b=1;
                 }
            }
        });
        if(b===0) {
            alert("Không có sản phẩm trong kho hàng")
            return;}
        if(ncc<ngayXuat) {
            alert("Không có sản phẩm")
            return;
        }
        if(c!==0) {
            z.forEach((item,index)=> {
                    let id = index;
                    if(item.tenMatHang === tenSanPham ) {
                        sl = item.soLuong - sluong;
                        dg = item.donGia - dGia;
                        ncc = item.nhaCungCap;
                        nn = item.ngayNhap;
                        gc = item.ghiChu;
                        z.splice(id,1);
                    }
                    index++;
                }
            )
        }
        s.push(
            {
                loai: "Xuất",
                tenMatHang: tenSanPham,
                soLuong: sluong,
                nhaCungCap: kHang,
                donGia: dGia,
                ngayNhap: ngayXuat,
                ghiChu: ghiChu,
            }
        );
        if(sl>0) {
            alert("Xuất thành công");
            z.push(
            {
                tenMatHang: tenSanPham,
                soLuong: sl,
                nhaCungCap: ncc,
                donGia: dg,
                ngayNhap: nn,
                ghiChu: gc,
            }
        )
        } else {
            alert("Không đủ hàng hóa")
            return;
        }
        
        localStorage.setItem('s', JSON.stringify(s));
        localStorage.setItem('z', JSON.stringify(z));
        this.renderListProduct();
    } else{
        alert("Không được bỏ trống");
        return;
    }
}