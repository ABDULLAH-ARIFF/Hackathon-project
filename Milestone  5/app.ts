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
    const username = (document.getElementById('username') as HTMLInputElement).value
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
    <p><b><span id="resumeele">User name : </span></b><span contenteditabel="true">${username}</span></p>
<br>
    <br>
    <br>
    <p><b><span id="resumeele">First name : </span></b><span contenteditabel="true">${firstname}</span></p>
<br>
    <br>
    <br>
 <p><b><span  id="resumeele">Last name : </span></b> <span contenteditabel="true">${lastname}</span></p>
 <br>
 <br>
 <br>
 <p><b> <span  id="resumeele">Date of Birth : </span></b><span contenteditabel="true"> ${dateofbirth}</span></p>
 <br>
 <br>
 <br>
 <p><b><span  id="resumeele">Email : </span></b><span contenteditabel="true"> ${email}</span></p>
 <br>
 <br>
 <br>
 <p><b><span  id="resumeele">Phone Number : </span></b><span contenteditabel="true"> ${phonenumber}</span></p>
 <br>
 <br>
 <br>
 <p><b><span  id="resumeele">Adress : </span> </b><span contenteditabel="true"> ${adress}</span></p>
 <br>
 <br>
 <br>
 <h2 id="submai">SKILL</h2>
 <br>
 <p><b><span  id="resumeele">Skills : </span></b><span contenteditabel="true"> ${skill}</span></p>
 <br>
 <br>
 <h2 id="submai">EDUCATION</h2>
 <br>
 <br>
 <p><b><span  id="resumeele">Education : </span></b> <span contenteditabel="true">${education}</span></p>
 <br>
 <br>
 <h2 id="submai">EXPERIENCE</h2>
 <br>
 <br>
 <p><b><span  id="resumeele">Experience : </span></b><span contenteditabel="true"> ${experience}</span></p>
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

const shareablefuntionality= document.getElementById('Shareable') as HTMLAnchorElement
shareablefuntionality?.addEventListener('click' ,() =>{
});
const downloadbutton= document.getElementById('downloadbutton') as HTMLButtonElement 
downloadbutton?.addEventListener('click' ,() =>{
    window.print()
});