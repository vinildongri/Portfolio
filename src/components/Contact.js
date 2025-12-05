import { useState } from "react";

// import RevealOnScroll from "../components/RevealOnScroll"; // adjust path if needed

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     mobile: "",
//     subject: "",
//     message: ""
//   });

//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     setIsSubmitted(true);

//     setFormData({
//       fullName: "",
//       email: "",
//       mobile: "",
//       subject: "",
//       message: ""
//     });
//   };

//   return (
//     <section
//       id="contact"
//       className="py-20 px-6 md:px-16 bg-white dark:bg-gray-900 transition-colors"
//     >
//       <RevealOnScroll y={30}>
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white text-center mb-12">
//           Contact <span className="text-blue-500">Me!</span>
//         </h2>
//       </RevealOnScroll>

//       <RevealOnScroll delay={0.2} y={30}>
//         {/* <form
//           onSubmit={handleSubmit}
//           className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
//         > */}
//         <form
//           action="https://formsubmit.co/YOUR_EMAIL_HERE"
//           method="POST"
//           className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
//         >
//         <input type="hidden" name="_captcha" value="false" />
//         <input type="hidden" name="_subject" value="New Contact Form Message!" />

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
//             <div className="input-box">
//               <input
//                 type="text"
//                 name="fullName"
//                 placeholder="Full Name"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div className="input-box">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
//             <div className="input-box">
//               <input
//                 type="number"
//                 name="mobile"
//                 placeholder="Mobile Number"
//                 value={formData.mobile}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div className="input-box">
//               <input
//                 type="text"
//                 name="subject"
//                 placeholder="Email Subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//           </div>

//           <div className="mb-6">
//             <textarea
//               name="message"
//               rows="6"
//               placeholder="Your Message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//               className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//             ></textarea>
//           </div>

//           <div className="flex justify-center">
//             {/* <button
//               type="submit"
//               className="bg-blue-500 text-white px-6 py-3 rounded-lg text-xl transition-transform transform hover:scale-105"
//             >
//               Send Message
//             </button> */}

//             <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg text-xl transition-transform transform hover:scale-105">
//               Send Message
//             </button>
//           </div>

//           {isSubmitted && (
//             <div className="mt-6 text-center text-green-500">
//               <p>Thank you for your message! I will get back to you soon.</p>
//             </div>
//           )}
//         </form>
//       </RevealOnScroll>
//     </section>
//   );
// };

// export default Contact;



import RevealOnScroll from "../components/RevealOnScroll"; // adjust path if needed

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-16 bg-white dark:bg-gray-900 transition-colors"
    >
      {/* Section title */}
      <RevealOnScroll y={30}>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white text-center mb-12">
          Contact <span className="text-blue-500">Me!</span>
        </h2>
      </RevealOnScroll>

      {/* Contact form */}
      <RevealOnScroll delay={0.2} y={30}>
        <form
          action="https://formsubmit.co/dongrivinil@gamil.com" // <-- Replace with your email
          method="POST"
          className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
        >
          {/* FormSubmit required hidden inputs */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New Contact Form Message!" />
          {/* Optional: redirect after submission */}
          <input type="hidden" name="_next" value="https://portfolio-bay-phi-hojhzpleqf.vercel.app/thank-you" />

          {/* Name and Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
              className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Mobile and Subject */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <input
              type="number"
              name="mobile"
              placeholder="Mobile Number"
              required
              className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="subject"
              placeholder="Email Subject"
              required
              className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
            className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
          ></textarea>

          {/* Submit button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg text-xl transition-transform transform hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </form>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
