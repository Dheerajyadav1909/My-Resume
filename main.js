let name = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");

(function() {
  emailjs.init("j5vu2qRA6sVjadX3w");
})();

let templateParams = {
  to_name : "Duck Hunter",
  from_name: name.value,
  from_email:email.value,
  message:message.value
}

function submitMessage() {
  templateParams.to_name = "Duck Hunter";
  templateParams.from_name = name.value;
  templateParams.from_email = email.value;
  templateParams.message = message.value;
  emailjs.send("service_i655qdh","template_u66ell8",templateParams)
  .then(function(){
    showAlert("Message sent successfully!");
    name.value="";
    email.value="";
    message.value="";
  }),function() {
    showAlert("Failed to send message!");
  }
}


 function showAlert(message) {
   const alert = document.getElementById("alert");
   alert.innerHTML = message;
   alert.style.display = "flex";
   setTimeout(function(){
     alert.style.display = "none";
   },3000);
 }
 
