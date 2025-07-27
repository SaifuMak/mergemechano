'use client'

import { useState } from 'react'

//  Input Component
function TextInput({ id, label, name, type = 'text', value, onChange, required = false }) {
  return (
    <div className="space-y-1 w-full">
      <label htmlFor={id} className="block  font-medium text-gray-700">{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full border outline-none border-gray-300 rounded px-2 py-2"
      />
    </div>
  )
}

// Textarea Component
function TextareaInput({ id, label, name, value, onChange, required = false }) {
  return (
    <div className="space-y-1 w-full">
      <label htmlFor={id} className="block  font-medium text-gray-700">{label}</label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows="5"
        className="w-full border border-gray-300 outline-none rounded px-2 py-2"
      />
    </div>
  )
}

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    locationState: '',
    // subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message submitted!')
    setForm({
      name: '',
      email: '',
      phone: '',
      locationState: '',
      // subject: '',
      message: '',
    })
    // Optionally connect to API here
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow border border-gray-200 rounded-xl p-6 space-y-4"
    >
      <h2 className="text-lg font-bold text-gray-900">Send us a message</h2>

      <TextInput
        id="name"
        label="Name"
        name="name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <div className="flex flex-wrap md:flex-nowrap gap-4">
        <TextInput
          id="email"
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <TextInput
          id="phone"
          label="Phone number"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
        />
      </div>

      <TextInput
        id="locationState"
        label="Country "
        name="locationState"
        value={form.locationState}
        onChange={handleChange}
      />

      {/* <TextInput
        id="subject"
        label="Subject"
        name="subject"
        value={form.subject}
        onChange={handleChange}
      /> */}

      <TextareaInput
        id="message"
        label="Message"
        name="message"
        value={form.message}
        onChange={handleChange}
        required
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
