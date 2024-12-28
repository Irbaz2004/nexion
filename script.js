window.onload = function(){
    setTimeout(function(){
        var loader = document.getElementsByClassName("logo-svg")[0];
        loader.style.display = "none";
        window.location.href = 'index1.html';
    },5000)
}

emailjs.init('S8K3--flBHMyhLpC9'); // Replace with your EmailJS user ID

const btn = document.getElementById('button');
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    btn.value = 'Sending...';

    const serviceID = 'service_qn44n4w'; // Replace with your service ID
    const templateID = 'template_p0qfhrg'; // Replace with your template ID

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Send Email';
            alert('Email sent successfully!');
            this.reset();
        }, (err) => {
            btn.value = 'Send Email';
            alert('Failed to send email: ' + JSON.stringify(err));
        });
});



