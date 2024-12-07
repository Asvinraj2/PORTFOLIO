
import React from 'react';
import 'boxicons/css/boxicons.min.css';
import './ContactMe.css';

const ContactMe = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-text">
        <h2>Contact <span>Me</span></h2>
        <h4>Let's work Together</h4>
        <p>
  I am passionate about creating innovative, user-friendly, and efficient web applications that make a difference. With experience in web development, programming, and problem-solving, I aim to collaborate on exciting projects and bring ideas to life. Whether you’re a business owner or an individual with a vision, I’d love to connect and help you achieve your goals.
</p>

        <div className="contact-list">
          <li><i className='bx bxs-send'></i>aswinraj2002.as@gmail.com</li>
          <li><i className="bx bxs-phone" style={{ color: '#00eeff' }}></i></li>
        </div>
        <div className="contact-icon">
          <a href="#"><i className="bx bxl-facebook-circle"></i></a>
          <a href="https://x.com/Aswin_soundaraj?t=cuDG8ZwiA3TEsmx0g_lsBQ&s=08"><i className="bx bxl-twitter"></i></a>
          <a href="https://www.instagram.com/aswin_unofficial_?igsh=N2pxdXhvOWVzZmd0"><i className="bx bxl-instagram"></i></a>
          <a href="https://www.linkedin.com/in/aswinraj-s-264395264"><i className="bx bxl-linkedin"></i></a>
        </div>
      </div>

      <div className="contact-form">
        <form action="">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Enter your Email" required />
          <input type="text" placeholder="Enter your subject" />
          <textarea name="" id="" cols="40" rows="10" placeholder="Enter your message" required></textarea>
          <input type="submit" value="Submit" className="send" />
        </form>
      </div>
    </section>
  );
};

export default ContactMe;














// import React, { useState } from 'react';
// import 'boxicons/css/boxicons.min.css';
// import './ContactMe.css';

// const ContactMe = () => {
//   // State to store the form inputs
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });

//   const [submittedMessage, setSubmittedMessage] = useState(null); // To store the submitted message

//   // Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevents page reload
//     setSubmittedMessage(formData.message); // Save the message
//     console.log('Form submitted:', formData); // Log the form data
//     alert('Your message has been sent successfully!'); // Feedback to the user
//     setFormData({ name: '', email: '', subject: '', message: '' }); // Clear the form
//   };

//   return (
//     <section className="contact" id="contact">
//       <div className="contact-text">
//         <h2>Contact <span>Me</span></h2>
//         <h4>Let's work Together</h4>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit.
//           Numquam, officia quos perferendis aliquam cum, alias repellat
//           itaque corporis debitis dolore odio sit quaerat necessitatibus
//           delectus harum excepturi, facilis possimus sunt.
//         </p>
//         <div className="contact-list">
//           <li><i className='bx bxs-send'></i>aswinraj2002.as@gmail.com</li>
//           <li><i className="bx bxs-phone" style={{ color: '#00eeff' }}></i></li>
//         </div>
//         <div className="contact-icon">
//           <a href=""><i className="bx bxl-facebook-circle"></i></a>
//           <a href=""><i className="bx bxl-twitter"></i></a>
//           <a href=""><i className="bx bxl-instagram"></i></a>
//           <a href=""><i className="bx bxl-linkedin"></i></a>
//         </div>
//       </div>

//       <div className="contact-form">
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="email"
//             placeholder="Enter your Email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="text"
//             placeholder="Enter your subject"
//             name="subject"
//             value={formData.subject}
//             onChange={handleChange}
//           />
//           <textarea
//             name="message"
//             cols="40"
//             rows="10"
//             placeholder="Enter your message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           ></textarea>
//           <input type="submit" value="Submit" className="send" />
//         </form>
//       </div>

//       {/* Display the submitted message */}
//       {submittedMessage && (
//         <div className="submitted-message">
//           <h4>Submitted Message:</h4>
//           <p>{submittedMessage}</p>
//         </div>
//       )}
//     </section>
//   );
// };

// export default ContactMe;