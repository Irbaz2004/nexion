const boxes = document.querySelectorAll('.box');

        boxes.forEach(box => {
            box.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.2)';
            });

            box.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        });


        let email=document.getElementById('email');


        function mail(){
            if (email.value !=='') {
                alert('Thank for Contact')
            }else{
                alert('Enter the Email !')
            }
        }





 
 
