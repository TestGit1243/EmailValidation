


$(() => {
    $("#EmailValidation").on('submit', function () {
        var email = $.trim($("#email").val());
        //if (!validateEmail(email)) {
        //    alert("validation failed");
        //}
        if (!email.match("@")) {
            alert("@ is missing");
            return false
        }
        if (email[email.indexOf('@') + 1] == ".") {
            alert("Dot Is Present After @");
            return false
        }
        var emailParts = email.split('@');
        if (emailParts[0] == "") {
            alert("Invalid Email address")
            return false;
        }
        //var checkFirstValue = checkFirstCharacter(ab[0][0]);

        //if (/*checkFirstValue == true &&*/ ValidateEmail(email) == true *//*checkDomain(emailParts[1]) == true*//*) {
        //    alert("Successfull valid email address!");
        //} else {
        //    alert("Invalid email address!");
        //    return
        //}
        if (ValidateEmail(email) == true) {
            alert("Successfull valid email address!");
        } else {
            alert("Invalid email address!");
        }
    });

});
let checkCountryDomin = (val1, val2) => {
    debugger
    if (!checkStringvalue(val1) || !checkStringvalue(val2)) {
        return false
    }
    return true
}
let checkDomain = (email) => {
    var length = email.length - 1;
    var dot = email.indexOf(".");
    var lastindex = email.lastIndexOf(".");
    if (dot != lastindex) {
        if (length - lastindex == 2) {
            if (!checkStringvalue(email[lastindex + 1] + email[lastindex + 2])) {
                return false
            }
        }
    } else {
        if (length - lastindex < 2) {
            return false;
        }
    }
    return true
}
let checkStringvalue = (str) => {
    debugger
    return /^[a-zA-Z()]+$/.test(str);
}
let checkFirstCharacter = (inputVal) => {
    var abc = /^[A-Za-z][A-Za-z0-9 -]*$/.test(inputVal);
    return abc;
}

const ValidateEmail = (email) => {
    var emailParts = email.split('@');
    var arr = [];
    if (!checkFirstCharacter(email.split("@")[0][0])) {
        return false
    }
    debugger
    var dbdss = /^[\w@\-]*\.?[\w@\-]*$/.test(emailParts[0]);
    var abcd = /^([a-zA-Z0-9_*\.+-])+$/.test(emailParts[0]);
    alert(abcd);
    return
    //for (var i = 0; i < email.length; i++) {
    //    if (email[i] == ".") {
    //        arr.push(i)
    //    } else if (email[i] == "_") {
    //        arr.push(i);
    //    } else if (email[i] == "-") {
    //        arr.push(i);
    //    }
    //}
    ////check for regular expression 
    //for (var i = 0; i < arr.length; i++) {
    //    if (arr[i + 1] - arr[i] == 1) {
    //        alert("double expression found!");
    //        return false
    //    }
    //}

    debugger
    //check domain
   
    var length = emailParts[1].length - 1;
    var dot = emailParts[1].indexOf(".");
    var lastindex = emailParts[1].lastIndexOf(".");
    if (dot != lastindex) {
        if (length - lastindex == 2) {
            if (!checkStringvalue(emailParts[1][lastindex + 1] + emailParts[1][lastindex + 2])) {
                return false
            }
        }
    } else {
        if (length - lastindex < 2) {
            return false;
        }
    }
    return true;
}
