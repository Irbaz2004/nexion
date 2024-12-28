window.onload = function(){
    setTimeout(function(){
        var loader = document.getElementsByClassName("wave")[0];
        loader.style.display = "none";
        window.location.href = 'index1.html';
    },3000)
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


// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);


// Animation for the content section (heading and paragraph)
gsap.from(".content h1, .content .about", {
  opacity: 0, 
  y: 50, 
  duration: 1, 
  stagger: 0.3,  // Stagger the animations for multiple elements
  scrollTrigger: {
    trigger: ".content", // Trigger when the entire content section comes into view
    start: "top 75%", // When top of content reaches 75% of viewport
    end: "top 0%",   // End animation when top of content reaches 30% of viewport
    scrub: true,      // Smooth animation when scrolling
  }
});

// Animation for contact section (fade-in effect)
gsap.from(".contact-info", {
  opacity: 0, 
  x: -100, 
  duration: 1.5, 
  scrollTrigger: {
    trigger: ".contact-info", // Trigger the animation when the contact section comes into view
    start: "top 80%", // Start when the top of the contact section reaches 80% of the viewport
    end: "top 30%",   // End when the top of the contact section reaches 30% of the viewport
    scrub: true,      // Smooth scrolling
  }
});
