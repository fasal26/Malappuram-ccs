// import './style.css'
// import javascriptLogo from "./javascript.svg";
// import viteLogo from "/vite.svg";
// import { setupCounter } from "./counter.js";

// document.querySelector("#app").innerHTML = `
  
// `;

// setupCounter(document.querySelector('#counter'))

let displayFlg = document.getElementById('dlg')
let menu = document.getElementById('burger')
let sbmtBtn = document.getElementById('sbmt-btn')

const brgrHome = document.querySelectorAll('.bgr-home');
const brgrAbt = document.querySelectorAll('.bgr-abt')
const brgrContact = document.querySelectorAll('.bgr-contact')
const brgrSrvc = document.querySelectorAll('.bgr-svc')

brgrHome.forEach(brgr => {
  brgr.addEventListener('click', () => {
    scrollInto('app')
  });
});
brgrAbt.forEach(brgr => {
  console.log(brgr,'bgr')
  brgr.addEventListener('click', () => {
    scrollInto('about-us')
  });
});
brgrContact.forEach(brgr => {
  brgr.addEventListener('click', () => {
    scrollInto('form')
  });
});
brgrSrvc.forEach(brgr => {
  brgr.addEventListener('click', () => {
    scrollInto('services')
  });
});

document.addEventListener("click", (evt) => {
  if(evt.target == menu){
    displayFlg.style.display = 'block'
    document.body.style.overflow = 'hidden'
  }
  if(evt.target.classList.contains('sa-dialog')){
    displayFlg.style.display = 'none'
    document.body.style.overflow = 'auto'
  }
})

function scrollInto(id){
  if(id){
      displayFlg.style.display = 'none'
      document.body.style.overflow = 'auto'
      let element = document.getElementById(id)
      element.scrollIntoView({
          behavior: 'smooth'
      })
  }
}

sbmtBtn.addEventListener("click", () => {
  let firstName = document.getElementById('firstName').value
  let lastName = document.getElementById('LastName').value
  let userPh = document.getElementById('userPh').value
  let userMsg = document.getElementById('userMsg').value
  let emailBody = `
    First Name: ${firstName}
    Last Name: ${lastName}
    Phone Number: ${userPh}

    Message:
    ${userMsg}
  `;
  let encodedBody = encodeURIComponent(emailBody);
  if (screen.width > 1024) {
    // Desktop devices
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=malappuramcancercaresociety@gmail.com&su=Contact&body=${encodedBody}`);
  } else {
    // Mobile and tablet devices
    window.open(`mailto:malappuramcancercaresociety@gmail.com?subject=Contact&body=${encodedBody}`);
  }
})
