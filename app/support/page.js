// 'use client';

// import React, { useState } from 'react';

// export default function HelpPage() {
//   const [formData, setFormData] = useState({
//     name: '',
//     mobile: '',
//     email: '',
//     subject: '',
//     otherSubject: '',
//     description: '',
//   });
//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);

//   const subjects = [
//     'Booking Issues',
//     'Payment Problems',
//     'Cabin Amenities Query',
//     'Cancellation Request',
//     'Other',
//   ];

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.name.trim()) newErrors.name = 'Name is required';
//     if (!formData.mobile.match(/^\d{10}$/))
//       newErrors.mobile = 'Enter a valid 10-digit mobile number';
//     if (
//       !formData.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)
//     )
//       newErrors.email = 'Enter a valid email';
//     if (!formData.subject) newErrors.subject = 'Please select a subject';
//     if (formData.subject === 'Other' && !formData.otherSubject.trim())
//       newErrors.otherSubject = 'Please specify the subject';
//     if (!formData.description.trim())
//       newErrors.description = 'Description is required';
//     if (formData.description.length > 500)
//       newErrors.description = 'Description must be 500 characters or less';
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length === 0) {
//       console.log('Form submitted:', formData);
//       setSubmitted(true);
//       setFormData({
//         name: '',
//         mobile: '',
//         email: '',
//         subject: '',
//         otherSubject: '',
//         description: '',
//       });
//     } else {
//       setErrors(validationErrors);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//     setErrors((prev) => ({
//       ...prev,
//       [name]: null,
//     }));
//   };

//   return (
//     <div className="bg-gradient-to-b from-blue-900 to-blue-500 min-h-screen flex items-center justify-center px-4 py-12">
//       <div className="form-container bg-white bg-opacity-95 rounded-2xl shadow-2xl p-8 w-full max-w-2xl transform transition-transform hover:-translate-y-1">
//         <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
//           Help & Support
//         </h1>
//         {submitted && (
//           <div className="bg-green-100 text-green-700 p-4 rounded mb-6">
//             Thank you for contacting us! We'll respond to your query soon.
//           </div>
//         )}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Full Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
//               placeholder="Enter your full name"
//             />
//             {errors.name && (
//               <p className="text-red-500 text-sm mt-1">{errors.name}</p>
//             )}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Mobile Number
//             </label>
//             <input
//               type="tel"
//               name="mobile"
//               value={formData.mobile}
//               onChange={handleChange}
//               className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
//               placeholder="Enter your mobile number"
//             />
//             {errors.mobile && (
//               <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
//             )}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Email Address
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
//               placeholder="Enter your email address"
//             />
//             {errors.email && (
//               <p className="text-red-500 text-sm mt-1">{errors.email}</p>
//             )}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Subject
//             </label>
//             <select
//               name="subject"
//               value={formData.subject}
//               onChange={handleChange}
//               className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
//             >
//               <option value="">Select a subject</option>
//               {subjects.map((subject) => (
//                 <option key={subject} value={subject}>
//                   {subject}
//                 </option>
//               ))}
//             </select>
//             {errors.subject && (
//               <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
//             )}
//           </div>

//           {formData.subject === 'Other' && (
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Specify Other Subject
//               </label>
//               <input
//                 type="text"
//                 name="otherSubject"
//                 value={formData.otherSubject}
//                 onChange={handleChange}
//                 className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
//                 placeholder="Please specify your subject"
//               />
//               {errors.otherSubject && (
//                 <p className="text-red-500 text-sm mt-1">
//                   {errors.otherSubject}
//                 </p>
//               )}
//             </div>
//           )}

//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Description (Max 500 characters)
//             </label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               rows="5"
//               className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
//               placeholder="Describe your issue or query"
//             ></textarea>
//             <p className="text-sm text-gray-500 mt-1">
//               {formData.description.length}/500 characters
//             </p>
//             {errors.description && (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.description}
//               </p>
//             )}
//           </div>

//           <button
//             type="submit"
//             className="w-full py-3 px-4 rounded-md text-white font-semibold shadow hover:shadow-lg bg-blue-900 hover:bg-blue-500 transition-all"
//           >
//             Submit Query
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }


'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HelpPage() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    subject: '',
    otherSubject: '',
    description: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const subjects = [
    'Booking Issues',
    'Payment Problems',
    'Cabin Amenities Query',
    'Cancellation Request',
    'Other',
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.mobile.match(/^\d{10}$/))
      newErrors.mobile = 'Enter a valid 10-digit mobile number';
    if (!formData.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/))
      newErrors.email = 'Enter a valid email';
    if (!formData.subject) newErrors.subject = 'Please select a subject';
    if (formData.subject === 'Other' && !formData.otherSubject.trim())
      newErrors.otherSubject = 'Please specify the subject';
    if (!formData.description.trim())
      newErrors.description = 'Description is required';
    if (formData.description.length > 500)
      newErrors.description = 'Description must be 500 characters or less';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({
        name: '',
        mobile: '',
        email: '',
        subject: '',
        otherSubject: '',
        description: '',
      });
      setTimeout(() => setSubmitted(false), 5000); // Hide success message after 5s
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: null,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-600 to-gray-400 flex items-center justify-center px-4 py-12 overflow-hidden">
      <motion.div
        className="form-container bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-2xl border border-white border-opacity-20"
        initial={{ opacity: 0, y: 50, rotateX: -10 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        whileHover={{ scale: 1.02, rotateX: 2, rotateY: 2 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-center text-white mb-6 drop-shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Help & Support
        </motion.h1>
        <AnimatePresence>
          {submitted && (
            <motion.div
              className="bg-green-500 bg-opacity-90 text-white p-4 rounded-xl mb-6 flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Thank you for contacting us! We'll respond soon.
            </motion.div>
          )}
        </AnimatePresence>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-white mb-1">Full Name</label>
            <motion.input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white bg-opacity-20 text-white border border-white border-opacity-30 focus:border-purple-400 focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 placeholder-gray-300"
              placeholder="Enter your full name"
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
            <AnimatePresence>
              {errors.name && (
                <motion.p
                  className="text-red-300 text-sm mt-1"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {errors.name}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">Mobile Number</label>
            <motion.input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white bg-opacity-20 text-white border border-white border-opacity-30 focus:border-purple-400 focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 placeholder-gray-300"
              placeholder="Enter your mobile number"
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
            <AnimatePresence>
              {errors.mobile && (
                <motion.p
                  className="text-red-300 text-sm mt-1"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {errors.mobile}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">Email Address</label>
            <motion.input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white bg-opacity-20 text-white border border-white border-opacity-30 focus:border-purple-400 focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 placeholder-gray-300"
              placeholder="Enter your email address"
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
            <AnimatePresence>
              {errors.email && (
                <motion.p
                  className="text-red-300 text-sm mt-1"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {errors.email}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">Subject</label>
            <motion.select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white bg-opacity-20 text-white border border-white border-opacity-30 focus:border-purple-400 focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50"
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <option value="" className="text-gray-800">Select a subject</option>
              {subjects.map((subject) => (
                <option key={subject} value={subject} className="text-gray-800">
                  {subject}
                </option>
              ))}
            </motion.select>
            <AnimatePresence>
              {errors.subject && (
                <motion.p
                  className="text-red-300 text-sm mt-1"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {errors.subject}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <AnimatePresence>
            {formData.subject === 'Other' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <label className="block text-sm font-medium text-white mb-1">
                  Specify Other Subject
                </label>
                <motion.input
                  type="text"
                  name="otherSubject"
                  value={formData.otherSubject}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-white bg-opacity-20 text-white border border-white border-opacity-30 focus:border-purple-400 focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 placeholder-gray-300"
                  placeholder="Please specify your subject"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
                {errors.otherSubject && (
                  <motion.p
                    className="text-red-300 text-sm mt-1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {errors.otherSubject}
                  </motion.p>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Description (Max 500 characters)
            </label>
            <motion.textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="5"
              className="w-full p-3 rounded-lg bg-white bg-opacity-20 text-white border border-white border-opacity-30 focus:border-purple-400 focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 placeholder-gray-300"
              placeholder="Describe your issue or query"
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
            <motion.p
              className="text-sm text-gray-300 mt-1"
              animate={{ color: formData.description.length > 500 ? '#FCA5A5' : '#D1D5DB' }}
              transition={{ duration: 0.2 }}
            >
              {formData.description.length}/500 characters
            </motion.p>
            <AnimatePresence>
              {errors.description && (
                <motion.p
                  className="text-red-300 text-sm mt-1"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {errors.description}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <motion.button
            type="submit"
            className="w-full py-3 px-4 rounded-lg text-white font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg transition-all"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Submit Query
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
