// skill buton id contain in a variabel
var skilllbutt = document.getElementById("skjbutton");
// skill textarea id contain in a variabel 
var skilllsec = document.getElementById("ssk");
//  make skill button functionality in fatarrow function using if else conditions
skilllbutt.addEventListener("click", function (event) {
    event.preventDefault();
    if (skilllsec.style.display === 'none') {
        skilllsec.style.display = 'block';
    }
    else {
        skilllsec.style.display = 'none';
    }
});
// form id contain in a varibel
var form = document.getElementById('resume-form');
// resume display id contain in a varibel
var resumedisplayelement = document.getElementById('resume-display');
// this funtionality waiting user click in button and cannot reload page
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // form elemnts id contains in variabels
    var username = document.getElementById('username').value;
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var dateofbirth = document.getElementById('dateofbirth').value;
    var email = document.getElementById('email').value;
    var phonenumber = document.getElementById('phonenumber').value;
    var adress = document.getElementById('adress').value;
    var skill = document.getElementById('skill').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experince').value;
    // html code and variabels
    var resumeHTML = "\n    <h2 id=\"res\"><b>Resume</b></h2>\n    <br>\n    <br>\n    <br>\n    <br>\n    <h2 id=\"submai\">Personal Information</h2>\n        <br>\n    <br>\n    <br>\n    <p><b><span id=\"resumeele\">User name : </span></b><span contenteditabel=\"true\">".concat(username, "</span></p>\n<br>\n    <br>\n    <br>\n    <p><b><span id=\"resumeele\">First name : </span></b><span contenteditabel=\"true\">").concat(firstname, "</span></p>\n<br>\n    <br>\n    <br>\n <p><b><span  id=\"resumeele\">Last name : </span></b> <span contenteditabel=\"true\">").concat(lastname, "</span></p>\n <br>\n <br>\n <br>\n <p><b> <span  id=\"resumeele\">Date of Birth : </span></b><span contenteditabel=\"true\"> ").concat(dateofbirth, "</span></p>\n <br>\n <br>\n <br>\n <p><b><span  id=\"resumeele\">Email : </span></b><span contenteditabel=\"true\"> ").concat(email, "</span></p>\n <br>\n <br>\n <br>\n <p><b><span  id=\"resumeele\">Phone Number : </span></b><span contenteditabel=\"true\"> ").concat(phonenumber, "</span></p>\n <br>\n <br>\n <br>\n <p><b><span  id=\"resumeele\">Adress : </span> </b><span contenteditabel=\"true\"> ").concat(adress, "</span></p>\n <br>\n <br>\n <br>\n <h2 id=\"submai\">SKILL</h2>\n <br>\n <p><b><span  id=\"resumeele\">Skills : </span></b><span contenteditabel=\"true\"> ").concat(skill, "</span></p>\n <br>\n <br>\n <h2 id=\"submai\">EDUCATION</h2>\n <br>\n <br>\n <p><b><span  id=\"resumeele\">Education : </span></b> <span contenteditabel=\"true\">").concat(education, "</span></p>\n <br>\n <br>\n <h2 id=\"submai\">EXPERIENCE</h2>\n <br>\n <br>\n <p><b><span  id=\"resumeele\">Experience : </span></b><span contenteditabel=\"true\"> ").concat(experience, "</span></p>\n <br>\n <br>\n <br>\n <div id=\"extraspace\">.</div>\n    ");
    // genrate resume functionality using if else conditions
    if (resumedisplayelement) {
        resumedisplayelement.innerHTML = resumeHTML;
    }
    else {
        console.error('your information is missing.');
    }
});
var shareablefuntionality = document.getElementById('Shareable');
shareablefuntionality === null || shareablefuntionality === void 0 ? void 0 : shareablefuntionality.addEventListener('click', function () {
});
var downloadbutton = document.getElementById('downloadbutton');
downloadbutton === null || downloadbutton === void 0 ? void 0 : downloadbutton.addEventListener('click', function () {
    window.print();
});
