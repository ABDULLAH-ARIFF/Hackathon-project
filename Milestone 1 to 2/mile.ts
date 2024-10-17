//  Skill Hide/Show button id contain in a variabel
const skilllbutt = document.getElementById(`skjbutton`) as HTMLButtonElement

// skill textarea id contain in a variabel
const skilllsec = document.getElementById(`ssk`) as HTMLElement

// skill button functionality in fatarrow function using if else conditions
skilllbutt.addEventListener(`click`, (event)=>{
event.preventDefault();
if(skilllsec.style.display === 'none'){
skilllsec.style.display = 'block'
}
else{skilllsec.style.display = 'none'}
});
