/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    emailjs.sendForm('service_bfye39z', 'template_6ugw5nh', '#contact-form', 'PyKDUXzUUEzMMcNfl')
        .then(()=>{
            contactMessage.textContent = 'Message Sent!'
            setTimeout(()=>{
                contactMessage.textContent = ''
            }, 5000)

            contactForm.reset()
        }, () =>{
            contactMessage.textContent = 'Message not sent (service error)!'
        })
}

contactForm.addEventListener('submit', sendEmail)