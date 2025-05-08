'use client';

import React, { useState } from 'react';

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
    if (
      !formData.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)
    )
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
    <div className="bg-gradient-to-b from-blue-900 to-blue-500 min-h-screen flex items-center justify-center px-4 py-12">
      <div className="form-container bg-white bg-opacity-95 rounded-2xl shadow-2xl p-8 w-full max-w-2xl transform transition-transform hover:-translate-y-1">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Help & Support
        </h1>
        {submitted && (
          <div className="bg-green-100 text-green-700 p-4 rounded mb-6">
            Thank you for contacting us! We'll respond to your query soon.
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mobile Number
            </label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              placeholder="Enter your mobile number"
            />
            {errors.mobile && (
              <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              placeholder="Enter your email address"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Subject
            </label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            >
              <option value="">Select a subject</option>
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
            )}
          </div>

          {formData.subject === 'Other' && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Specify Other Subject
              </label>
              <input
                type="text"
                name="otherSubject"
                value={formData.otherSubject}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                placeholder="Please specify your subject"
              />
              {errors.otherSubject && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.otherSubject}
                </p>
              )}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description (Max 500 characters)
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="5"
              className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              placeholder="Describe your issue or query"
            ></textarea>
            <p className="text-sm text-gray-500 mt-1">
              {formData.description.length}/500 characters
            </p>
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 rounded-md text-white font-semibold shadow hover:shadow-lg bg-blue-900 hover:bg-blue-500 transition-all"
          >
            Submit Query
          </button>
        </form>
      </div>
    </div>
  );
}
