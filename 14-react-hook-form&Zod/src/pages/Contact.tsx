import React, { useState } from 'react';
import TextInput from '../components/TextInput';
import Textarea from '../components/Textarea';
import Button from '../components/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-12">Contact Us</h1>

        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
          <form onSubmit={handleSubmit}>
            <TextInput
              id="name"
              label="Name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            <TextInput
              id="email"
              label="Email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
            <Textarea
              id="message"
              label="Message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            />
            <div className="text-center">
              <Button text="Send Message" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};


