
function trongnuoc() {

    let mkh= document.getElementById("customerCode").value;
    let ht = document.getElementById("fullname").value;
    let ngh = document.getElementById("deliveryDate").value;
    let sdt = document.getElementById("contactNumber").value;
    let dc = document.getElementById("address").value;
    let em = document.getElementById("gmail").value;
    let loai;
    
    
    document.getElementById('tnuoc').reset();
    
    if(mkh && ht && ngh && sdt && dc && em) {
        alert("Nhập thành công ");
        let y = localStorage.getItem('y') ? JSON.parse(localStorage.getItem('y')) : [];
        
        y.push(
            {
                loai: "Trong nước",
                makhachhang: mkh,
                hoten: ht,
                sodt: sdt,
                gmail: em,
                diachi: dc,
                ngaygh: ngh,
                
            }
        );
        
        localStorage.setItem('y', JSON.stringify(y));
    } else { alert("Nhập không thành công");}

}
function noibo() {

    let mkh= document.getElementById("b1").value;
    let ht = document.getElementById("b2").value;
    let sdt = document.getElementById("b3").value;
    let em = document.getElementById("b4").value;
    let dc = document.getElementById("b5").value;
    let ngh = document.getElementById("b6").value;
    let loai;
    
    
    document.getElementById('nbo').reset();
    
    if(mkh && ht && ngh && sdt && dc && em) {
        alert("Nhập thành công ");
        let y = localStorage.getItem('y') ? JSON.parse(localStorage.getItem('y')) : [];
        
        y.push(
            {
                loai: "Nội bộ",
                makhachhang: mkh,
                hoten: ht,
                sodt: sdt,
                gmail: em,
                diachi: dc,
                ngaygh: ngh,
                
            }
        );
        
        localStorage.setItem('y', JSON.stringify(y));
    } else { alert("Nhập không thành công");}

}
function nuocngoai() {

    let mkh= document.getElementById("n1").value;
    let ht = document.getElementById("n2").value;
    let sdt = document.getElementById("n3").value;
    let em = document.getElementById("n4").value;
    let dc = document.getElementById("n5").value;
    let ngh = document.getElementById("n6").value;
    let loai;
    
    document.getElementById('nngoai').reset();
    
    if(mkh && ht && ngh && sdt && dc && em) {
        alert("Nhập thành công ");
        let y = localStorage.getItem('y') ? JSON.parse(localStorage.getItem('y')) : [];
        y.push(
            {
                loai: "Nước ngoai",
                makhachhang: mkh,
                hoten: ht,
                sodt: sdt,
                gmail: em,
                diachi: dc,
                ngaygh: ngh,
            }
        );
        
        localStorage.setItem('y', JSON.stringify(y));
    } else { alert("Nhập không thành công");}

}
