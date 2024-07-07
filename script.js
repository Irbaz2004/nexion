window.onload = function(){
    setTimeout(function(){
        var loader = document.getElementsByClassName("wave")[0];
        loader.style.display = "none";
        window.location.href = 'index1.html';
    },5000)
}


const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_cxk6ryf';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});