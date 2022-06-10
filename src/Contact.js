import React from 'react';
import './Contact.css';
import contactImg from "./Assets/images/about-9.jpg";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_76h64l3', 'template_0wfcccj', form.current, 'z_cKfMNWsU4Kmwy9u')
        .then((result) => {
            console.log(result.text);
            toast.success('Email sent successfully');
            e.target.reset();
        }, (error) => {
            console.log(error.text);
            toast.error('Email sent failed');
        });
    };
    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Hire Me.</h1>
                            <p className="hire__text white">I am available for freelance work. Connect with me via phone:</p>
                           <p className="hire__text white"><strong>+8801710786364</strong> or email <strong>sagordevnath44@gmail.com</strong></p>
                        </div>
                        <form ref={form} onSubmit={sendEmail} className="input__box">
                           <input type="text" name="user_name" className="contact name" placeholder="Your name *" />
                           <input type="text" name="user_email" className="contact email" placeholder="Your Email *" />
                           <textarea name="message" id="message" placeholder="Write Your message"></textarea>
                           <button className="btn contact pointer" type="submit" value="Send">Submit</button>
                        </form>
                    </div>
                </div>
                <div className="col__2">
                    <img style={{height: "500px"}} src={contactImg} alt="" className="contact__img" />
                </div>
            </div>
        </div>
    )
}

export default Contact