import { motion } from "framer-motion";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Waitlist = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const phoneOnchange = (e) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/\D/g, "");
    setPhone(numericValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!name || !email || !phone) {
      return toast.error("Please fill in all fields");
    }

    // Send form data to your backend or perform any necessary actions
    console.log("Form submitted:", { name, email, phone });

    // Show success notification
    toast.success("Thank you for joining the waitlist!");

    // Clear form fields
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Join the Waitlist
      </h2>
      <form className="space-y-5 mt-[100px] " onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            placeholder="Micheal Jackson"
            onChange={(e) => setName(e.target.value)}
            className="w-full text-black font-medium outline-none border border-gray-300 rounded-md p-2"
            // required
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="michealjackson@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full text-black font-medium outline-none border border-gray-300 rounded-md p-2"
            // required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block font-medium mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="whatsapp number"
            value={phone}
            // onChange={(e) => setPhone(e.target.value)}
            onChange={phoneOnchange}
            className="w-full text-black font-medium outline-none border-gray-300 rounded-md p-2"
          />
        </div>
        <motion.button
          whileTap={{ scale: 1.1 }}
          type="submit"
          className="w-full outline-none bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600"
        >
          Join Now
        </motion.button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Waitlist;
