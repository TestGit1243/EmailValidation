
$(() => {
    $("#EmailValidation").on('submit', function () {
        var email = $.trim($("#email").val());
        if (!ValidateEmailAddress(email)) {
            alert("Invalid Email");
        } else {
            alert("Successfully Validate Email  " +email+"");
        }
    });
});
let ValidateEmailAddress = (email) => {
    var countAt = 0;
    for (let i = 0; i < email.length; i++) {
        if (email[i] == '@')
            countAt++;
        if (!CheckAllowedString(email[i])) {
            return false;
        }
    }
    if (countAt > 1 || countAt == 0 || IsAllowedCharacter(email.charAt(0)) == false)
        return false

    var emailParts = email.split('@');
    if (emailParts[0].length < 1 || emailParts[1] < 4 || emailParts[1].lastIndexOf(".") == -1) {
        return false
    }

    var length = emailParts[1].length;
    var lastIndex = emailParts[1].lastIndexOf(".");
    if (length - lastIndex <= 2) return false;
    //check for -,.,_ double accurance
    for (let i = 0; i < email.length; i++) {
        if (!IsAllowedCharacter(email[i]) && !IsAllowedCharacter(email[i + 1])) return false;
    }
    for (let i = lastIndex + 1; i < length; i++) {
        if (!IsCharacterString(emailParts[1][i])) return false;
    }
    return true
}
let IsAllowedCharacter = (val) => {
    if (typeof val === 'undefined') return true;
    if (isCharacterNumeric(val) || IsCharacterString(val)) return true;
    return false
}
let isCharacterNumeric = (character) => {
    return $.isNumeric(character);
}
let IsCharacterString = (character) => {
    var characterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
        "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    if (characterArray.indexOf(character.toLowerCase()) != -1) return true;
    return false
}
let CheckAllowedString = (chr) => {
    if (chr == '@') {
        return true
    } else if (chr == '-') {
        return true
    } else if (chr == '.') {
        return true
    } else if (chr == '_') {
        return true
    } else if (IsAllowedCharacter(chr)) {
        return true
    } else {
        return false
    }
}




//let countAt(str, find) {
//    return (str.split(find)).length - 1;
//}

//let abc = (chr) => {
//    if (chr == '@') {
//        return true
//    } else if (chr == '-') {
//        return true
//    } else if (chr == '.') {
//        return true
//    }else if (chr == '_') {
//        return true
//    } else if (checkCharacter(chr)) {
//        return true
//    } else {
//        return false
//    }
//}
//let validateEmail = (email) => {
//    //if (!/^[a-zA-Z0-9.@_-]+$/.test(email)) {
//    //    return false
//    //}
//    var countAt = 0;
//    for (let i = 0; i < email.length; i++) {
//        if (email[i] == '@')
//            countAt++;
//        if (!abc(email[i])) {
//            return false;
//        }
//    }
//    if (countAt > 1 || countAt == 0 || checkCharacter(email.charAt(0)) == false)
//        return false

//    //var countAt = (email.match(/@/g) || []).length;
//    //if (countAt > 1 || countAt == 0) {
//    //    return false
//    //}
//    var emailParts = email.split('@');
//    if (emailParts[0].length < 2 || emailParts[1] < 4 || emailParts[1].lastIndexOf(".") == -1) {
//        return false
//    }

//    var length = emailParts[1].length;
//    var lastIndex = emailParts[1].lastIndexOf(".");
//    if (length - lastIndex <= 2) {
//        return false
//    }
//    //check for -,.,_ double accurance
//    for (var i = 0; i < email.length; i++) {
//        if (!checkCharacter(email[i]) && !checkCharacter(email[i + 1])) {
//            return false
//        }
//    }
//    for (i = lastIndex+1; i < length; i++) {
//            if (!IsString(emailParts[1][i])) {
//                return false
//            }
//        }
//    return true

//}

//let checkCharacter = (val) => {
//    if (typeof val === 'undefined') {
//        return true
//    }
//    if (isNumeric(val) || IsString(val)) {
//        return true
//    }
//    return false
//}

//let isNumeric = (val) => {
//    /* var numeric = /^\d+$/.test(val);*/
//    var numeric = $.isNumeric(val);
//    return numeric;
//}
//let IsString = (str) => {
//    /* /^[a-zA-Z()]+$/.test(str); ->we can also use this for string*/
//    var strArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
//        "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//    if (strArr.indexOf(str.toLowerCase()) != -1) {
//        return true
//    }
//    return false
//}
//let checkFirstCharacter = (val) => {
//    if (isNumeric(val) || IsString(val)) {
//        return true
//    }
//    return false
//}

//let validDomin = (val1, val2) => {
//    if (!IsString(val1) || !IsString(val2)) {
//        return false
//    }
//    return true
//}


//const validateEmailAddress = (email) => {
//    var countAt = (email.match(/@/g) || []).length;
//    var emailParts = email.split('@');
//    if (countAt > 1 || !email.match("@") || !checkFirstCharacter(emailParts[0][0]) || emailParts[0].length == 0 || email[email.indexOf('@') + 1] == ".") {
//        return false
//    }

//    var arr = [];
//    for (var i = 0; i < email.length; i++) {
//        if (email[i] == ".") {
//            arr.push(i)
//        } else if (email[i] == "_") {
//            arr.push(i);
//        } else if (email[i] == "-") {
//            arr.push(i);
//        }
//    }
//    //check for regular expression 
//    for (var i = 0; i < arr.length; i++) {
//        if (arr[i + 1] - arr[i] == 1) {
//            return false
//        }
//    }
//    //check domain
//    var length = emailParts[1].length - 1;
//    var dot = emailParts[1].indexOf(".");
//    var lastindex = emailParts[1].lastIndexOf(".");

//    if (dot != lastindex) {
//        if (length - lastindex > 2 || lastindex - dot <= 2) {
//            return false
//        }
//        if (!validDomin(emailParts[1][lastindex + 1], emailParts[1][lastindex + 2])) {
//          return false;
//        }
      
//    } else {
//            if (length - dot < 2) {
//            return false;
//        } 
//    }
//    return true;
//}
