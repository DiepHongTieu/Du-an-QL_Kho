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
        alert(f.fullname.name + " must be not null");
        f.fullname.focus();
        isValid = false;
    }

    if (checknull(f.age)) {
        alert(f.age.name + " must be not null");
        f.age.focus();
        isValid = false;
    }

    if (isNaN(f.age.value)) {
        alert(f.age.name + " must be a number");
        f.age.value = "";
        f.age.focus();
        isValid = false;
    }

    if (!isInteger(f.age)) {
        alert(f.age.name + " must be an integer number");
        f.age.value = "";
        f.age.focus();
        isValid = false;
    }

    if (parseInt(f.age.value) <= 0 || parseInt(f.age.value) >= 200) {
        alert(f.age.name + " must be in (0-200)");
        f.age.value = "";
        f.age.focus();
        isValid = false;
    }

    if (notCheck(f.gender)) {
        alert("gender must be chosen");
        isValid = false;
    }

    if (!StringMatch(f.phone, /^\(\d{2,4}\)[\s.-]\d{3}[\s.-]\d{3}$/)) {
        alert("Invalid phone number format");
        isValid = false;
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
            break; // Exit loop once a checked radio is found
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