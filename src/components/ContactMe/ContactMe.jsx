// import React, { useState } from 'react';
// import 'boxicons/css/boxicons.min.css';
// import './ContactMe.css';
// import Swal from 'sweetalert2';

// const ContactMe = () => {
//   const [result, setResult] = useState(""); // State for form submission status

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending...");

//     const formData = new FormData(event.target);
//     const email = formData.get("email");

//     // Validate email before submission
//     if (!validateEmail(email)) {
//       Swal.fire({
//         title: "Invalid Email!",
//         text: "Please enter a valid email address.",
//         icon: "error",
//       });
//       setResult(""); // Reset submission status
//       return;
//     }

//     formData.append("access_key", "011963cb-1798-479b-8a83-a1d520e48f01");

//     try {
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formData,
//       });

//       const data = await response.json();

//       if (data.success) {
//         Swal.fire({
//           title: "Success!",
//           text: "Message sent successfully!",
//           icon: "success",
//         });
//         event.target.reset(); // Clear the form fields
//         setResult(""); // Reset submission status
//       } else {
//         Swal.fire({
//           title: "Error!",
//           text: data.message || "Something went wrong!",
//           icon: "error",
//         });
//         setResult(""); // Reset submission status on error
//       }
//     } catch (error) {
//       Swal.fire({
//         title: "Error!",
//         text: "Failed to send. Please try again.",
//         icon: "error",
//       });
//       setResult(""); // Reset submission status on fetch error
//     }
//   };

//   return (
//     <section className="contact" id="contact">
//       <div className="contact-text">
//         <h2>Contact <span>Me</span></h2>
//         <h4>Let's work Together</h4>
//         <p>
//         I am passionate about creating innovative, user-friendly, and efficient web applications that make a difference. With experience in web development, programming, and problem-solving, I aim to collaborate on exciting projects and bring ideas to life. Whether you’re a business owner or an individual with a vision, I’d love to connect and help you achieve your goals.
//         </p>

//         <div className="contact-list">
//           <li><i className='bx bxs-send'></i> aswinraj2002.as@gmail.com</li>
//           <li><i className="bx bxs-phone" style={{ color: '#00eeff' }}></i> 9940524855</li>
//         </div>

//         <div className="contact-icon">
//           <a href="#"><i className="bx bxl-facebook-circle"></i></a>
//           <a href="https://x.com/Aswin_soundaraj"><i className="bx bxl-twitter"></i></a>
//           <a href="https://www.instagram.com/aswin_unofficial_"><i className="bx bxl-instagram"></i></a>
//           <a href="https://www.linkedin.com/in/aswinraj-s-264395264"><i className="bx bxl-linkedin"></i></a>
//         </div>
//       </div>

//       <div className="contact-form">
//         <form onSubmit={onSubmit}>
//           <input name="name" type="text" placeholder="Name" required />
//           <input name="email" type="email" placeholder="Enter your Email" required />
//           <textarea name="message" cols="40" rows="10" placeholder="Enter your message" required></textarea>
//           <input type="submit" value="Submit" className="send" />
//         </form>
//       </div>
//     </section>
//   );
// };

// export default ContactMe;


import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';
import './ContactMe.css';
import Swal from 'sweetalert2';

const ContactMe = () => {
  const [result, setResult] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10,15}$/;
    return phoneRegex.test(phone);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    const email = formData.get("email");
    const phone = formData.get("phone");

    if (!validateEmail(email)) {
      Swal.fire({
        title: "Invalid Email!",
        text: "Please enter a valid email address.",
        icon: "error",
      });
      setResult("");
      return;
    }

    if (!validatePhone(phone)) {
      Swal.fire({
        title: "Invalid Phone Number!",
        text: "Please enter a valid phone number (10-15 digits).",
        icon: "error",
      });
      setResult("");
      return;
    }

    formData.append("access_key", "011963cb-1798-479b-8a83-a1d520e48f01");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success",
        });
        event.target.reset();
        setResult("");
      } else {
        Swal.fire({
          title: "Error!",
          text: data.message || "Something went wrong!",
          icon: "error",
        });
        setResult("");
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Failed to send. Please try again.",
        icon: "error",
      });
      setResult("");
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-text">
        <h2>Contact <span>Me</span></h2>
        <h4>Let's work Together</h4>
        <p>
          I am passionate about creating innovative, user-friendly, and efficient web applications that make a difference. 
          Whether you’re a business owner or an individual with a vision, I’d love to connect and help you achieve your goals.
        </p>

        <div className="contact-list">
          <li><i className='bx bxs-send'></i> aswinraj2002.as@gmail.com</li>
          <li><i className="bx bxs-phone" style={{ color: '#00eeff' }}></i> 9940524855</li>
        </div>

        <div className="contact-icon">
          <a href="#"><i className="bx bxl-facebook-circle"></i></a>
          <a href="https://x.com/Aswin_soundaraj"><i className="bx bxl-twitter"></i></a>
          <a href="https://www.instagram.com/aswin_unofficial_"><i className="bx bxl-instagram"></i></a>
          <a href="https://www.linkedin.com/in/aswinraj-s-264395264"><i className="bx bxl-linkedin"></i></a>
        </div>
      </div>

      <div className="contact-form">
        <form onSubmit={onSubmit}>
          <input name="name" type="text" placeholder="Name" required />
          <input name="email" type="email" placeholder="Enter your Email" required />
          <input name="phone" type="text" placeholder="Enter your Phone Number"  />
          <input name="subject" type="text" placeholder="Enter Subject"  />
          <textarea name="message" cols="40" rows="10" placeholder="Enter your message" required></textarea>
          <input type="submit" value="Submit" className="send" />
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
