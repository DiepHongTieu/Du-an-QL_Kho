function checknull(txt) {
    if (txt.value.length === 0) {
        return true;
    } else {
        return false;
    }
}

function validform(f) {
    let isValid = true;

    if (checknull(f.fullname)) {
        alert("Tên không được để trống");
        f.fullname.focus();
        isValid = false;
    }

    if (checknull(f.age)) {
        alert("Tuổi không được để trống");
        f.age.focus();
        isValid = false;
    }

    if (isNaN(f.age.value)) {
        alert("Tuổi phải là một số");
        f.age.value = "";
        f.age.focus();
        isValid = false;
    }

    if (!isInteger(f.age)) {
        alert("Tuổi phải là một số nguyên");
        f.age.value = "";
        f.age.focus();
        isValid = false;
    }

    if (parseInt(f.age.value) <= 0 || parseInt(f.age.value) >= 200) {
        alert("Tuổi phải nằm trong khoảng từ 1 đến 199");
        f.age.value = "";
        f.age.focus();
        isValid = false;
    }

    if (notCheck(f.gender)) {
        alert("Giới tính phải được chọn");
        isValid = false;
    }

    if (!StringMatch(f.email, /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
        alert("Địa chỉ email không hợp lệ");
        f.email.focus();
        isValid = false;
    }

    if (!StringMatch(f.phone, /^\d{10,11}$/)) {
        alert("Số điện thoại phải bao gồm 10-11 chữ số");
        f.phone.focus();
        isValid = false;
    }

    if (checknull(f.password)) {
        alert("Mật khẩu không được để trống");
        f.password.focus();
        isValid = false;
    }

    if (f.password.value !== f.confirmPassword.value) {
        alert("Mật khẩu xác nhận không khớp");
        f.confirmPassword.focus();
        isValid = false;
    }
    if (isValid==true) {
        alert("Đăng ký thành công");
    }
    return isValid;
}

function StringMatch(txt, reg) {
    return reg.test(txt.value);
}

function notCheck(radio) {
    let rt = true;
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            rt = false;
            break;
        }
    }
    return rt;
}

function isInteger(txt) {
    if (!isNaN(txt.value) && parseInt(txt.value) === parseFloat(txt.value)) {
        return true;
    } else {
        return false;
    }
}
function checknull(txt) {
    return txt.value.length === 0;
}

function validLogin(f) {
    let isValid = true;

    if (!StringMatch(f["email-phone"], /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/) &&
        !StringMatch(f["email-phone"], /^\d{10,11}$/)) {
        alert("Vui lòng nhập email, số điện thoại hợp lệ");
        f["email-phone"].focus();
        isValid = false;
    }
    if (checknull(f.password)) {
        alert("Mật khẩu không được để trống");
        f.password.focus();
        isValid = false;
    }
    if (isValid) {
        alert("Đăng nhập thành công");
    }

    return isValid;
}

function StringMatch(txt, reg) {
    return reg.test(txt.value);
}
