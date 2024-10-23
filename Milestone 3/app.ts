// skill buton id contain in a variabel
const skilllbutt = document.getElementById(`skjbutton`) as HTMLButtonElement

// skill textarea id contain in a variabel 
const skilllsec = document.getElementById(`ssk`) as HTMLElement

//  make skill button functionality in fatarrow function using if else conditions
skilllbutt.addEventListener(`click`, (event)=>{
event.preventDefault();
if(skilllsec.style.display === 'none'){
skilllsec.style.display = 'block'
}
else{skilllsec.style.display = 'none'}
});


// form id contain in a varibel
const form = document.getElementById('resume-form') as  HTMLFormElement

// resume display id contain in a varibel
const resumedisplayelement = document.getElementById('resume-display') as HTMLDivElement

// this funtionality waiting user click in button and cannot reload page
form.addEventListener('submit' ,(event) =>{
    event.preventDefault();

    // form elemnts id contains in variabels
    const firstname = (document.getElementById('firstname') as HTMLInputElement).value
    const lastname = (document.getElementById('lastname') as HTMLInputElement).value
    const dateofbirth = (document.getElementById('dateofbirth') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phonenumber = (document.getElementById('phonenumber') as HTMLInputElement).value
    const adress = (document.getElementById('adress') as HTMLInputElement).value
    const skill = (document.getElementById('skill') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experince') as HTMLInputElement).value

    // html code and variabels
    const resumeHTML= `
    <h2 id="res"><b>Resume</b></h2>
    <br>
    <br>
    <br>
    <br>
    <h2 id="submai">Personal Information</h2>
    <br>
    <br>
    <br>
    <p><b><span id="resumeele">First name : </span></b>${firstname}</p>
<br>
    <br>
    <br>
 <p><b><span  id="resumeele">Last name : </span></b>${lastname}</p>
 <br>
 <br>
 <br>
 <p><b> <span  id="resumeele">Date of Birth : </span></b>${dateofbirth}</p>
 <br>
 <br>
 <br>
 <p><b><span  id="resumeele">Email : </b></span>${email}</p>
 <br>
 <br>
 <br>
 <p><b><span  id="resumeele">Phone Number : </span></b>${phonenumber}</p>
 <br>
 <br>
 <br>
 <p><b><span  id="resumeele">Adress : </b></span>${adress}</p>
 <br>
 <br>
 <br>
 <h2 id="submai">SKILL</h2>
 <br>
 <p><b><span  id="resumeele">Skills : </span></b>${skill}</p>
 <br>
 <br>
 <h2 id="submai">EDUCATION</h2>
 <br>
 <br>
 <p><b><span  id="resumeele">Education : </span></b>${education}</p>
 <br>
 <br>
 <h2 id="submai">EXPERIENCE</h2>
 <br>
 <br>
 <p><b><span  id="resumeele">Experience : </span></b>${experience}</p>
 <br>
 <br>
 <br>
 <div id="extraspace">.</div>
    `;

    // genrate resume functionality using if else conditions
    if(resumedisplayelement){
resumedisplayelement.innerHTML = resumeHTML;
    }
    else{
        console.error('your information is missing.')
    }
});