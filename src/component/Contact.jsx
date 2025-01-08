import React, { useState } from 'react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: '6e277c9c-f45f-46d8-bc20-5bab1d177e7d',
        subject: 'New Submission from Web3Forms',
        botcheck: '',
        ...formState,
      }),
    });
    const data = await response.json();
    if (data.success) {
      setResult('Message sent successfully!');
      setFormState({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } else {
      setResult('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="flex items-center min-h-screen bg-gray-50 dark:bg-gray-900" id='Contact'>
      <div className="container mx-auto">
        <div className="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
          <div className="text-center">
            <h1 className="my-3 text-3xl font-semibold text-black ">
              Contact Me
            </h1>
            <p className="text-gray-400 dark:text-gray-400">
              Fill up the form below to send Me a message.
            </p>
          </div>
          <div className="m-7">
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
              <input type="hidden" name="subject" value="New Submission from Web3Forms" />
              <input type="checkbox" name="botcheck" id="" style={{ display: 'none' }} />

              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Full Name</label>
                <input 
                  type="text"
                  name="name"
                  id="name"
                  placeholder="John Doe"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 placeholder-gray-400 border  rounded-md border-[3px] border-black text-black bg-white"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                <input 
                  type="email"
                  name="email"
                  id="email"
                  placeholder="you@company.com"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 placeholder-gray-400 border  rounded-md border-[3px] border-black text-black bg-white"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="phone" className="text-sm text-gray-600 dark:text-gray-400">Phone Number (Optional)</label>
                <input 
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="+91 (984) 1234-567"
                  
                  value={formState.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 placeholder-gray-400 rounded-md border border-[3px] border-black text-black bg-white"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Your Message</label>
                <textarea 
                  rows="5"
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  required
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 placeholder-gray-400 border border-black-300 rounded-md border-[3px] border-black text-black bg-white"
                ></textarea>
              </div>
              <div className="mb-6">
                <button type="submit" className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">
                  Send Message
                </button>
              </div>
              {result && <p className="text-base text-center text-gray-400" id="result">{result}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
