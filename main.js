// import './style.css'
// import javascriptLogo from "./javascript.svg";
// import viteLogo from "/vite.svg";
// import { setupCounter } from "./counter.js";

// document.querySelector("#app").innerHTML = `
  
// `;

// setupCounter(document.querySelector('#counter'))

let displayFlg = document.getElementById('dlg')
let brgrHome = document.getElementById('bgr-home')
let brgrAbt = document.getElementById('bgr-abt')
let brgrContact = document.getElementById('bgr-contact')
let menu = document.getElementById('burger')
let sbmtBtn = document.getElementById('sbmt-btn')

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

brgrHome.addEventListener("click", () => scrollInto('app'))
brgrAbt.addEventListener("click", () => scrollInto('about-us'))
brgrContact.addEventListener("click", () => scrollInto('form'))

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
