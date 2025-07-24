'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    locationState: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message submitted!')
    // Optionally connect to API here
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow border border-gray-200 rounded-xl p-6 space-y-4"
    >
      <h2 className="text-lg font-bold text-gray-900">Send us a message</h2>

      {/* Name */}
      <input
        name="name"
        placeholder="Your Name"
        required
        value={form.name}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded px-4 py-2"
      />

      {/* Email + Phone - Responsive Two Column Layout */}
<div className="flex flex-wrap md:flex-nowrap gap-4">
  <input
    name="email"
    type="email"
    placeholder="Your Email"
    required
    value={form.email}
    onChange={handleChange}
    className="w-full md:w-1/2 border border-gray-300 rounded px-4 py-2"
  />
  <input
    name="phone"
    type="tel"
    placeholder="Your Phone"
    value={form.phone}
    onChange={handleChange}
    className="w-full md:w-1/2 border border-gray-300 rounded px-4 py-2"
  />
</div>


      {/* Location + State Combined */}
      <input
        name="locationState"
        placeholder="Your Location & State"
        value={form.locationState}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded px-4 py-2"
      />

      {/* Subject */}
      <input
        name="subject"
        placeholder="Subject"
        value={form.subject}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded px-4 py-2"
      />

      {/* Message */}
      <textarea
        name="message"
        placeholder="Your Message"
        required
        rows="5"
        value={form.message}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded px-4 py-2"
      />

      <button
        type="submit"
        className="bg-red-700 text-white px-6 py-2 rounded hover:bg-red-800 transition"
      >
        Send Message
      </button>
    </form>
  )
}
