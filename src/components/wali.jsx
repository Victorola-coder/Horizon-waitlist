import  { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WaitlistForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!name || !email || !phone) {
      return toast.error('Please fill in all fields');
    }

    // Send form data to your backend or perform any necessary actions
    console.log('Form submitted:', { name, email, phone });
    
    // Show success notification
    toast.success('Thank you for joining the waitlist!');
    
    // Clear form fields
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Join the Waitlist</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block font-medium mb-1">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium mb-1">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block font-medium mb-1">Phone Number</label>
          <PhoneInput
            country={'us'}
            value={phone}
            onChange={(value) => setPhone(value)}
            inputClass="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Join Now
        </button>
      </form>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default WaitlistForm;
