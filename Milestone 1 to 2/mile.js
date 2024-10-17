//  Skill Hide/Show button id contain in a variabel
var skilllbutt = document.getElementById("skjbutton");
// skill textarea id contain in a variabel
var skilllsec = document.getElementById("ssk");
// skill button functionality in fatarrow function using if else conditions
skilllbutt.addEventListener("click", function (event) {
    event.preventDefault();
    if (skilllsec.style.display === 'none') {
        skilllsec.style.display = 'block';
    }
    else {
        skilllsec.style.display = 'none';
    }
});
