'use client'

import { useState } from 'react'
import axios from "axios";
import { toast } from 'sonner'
import { FaSpinner } from "react-icons/fa";

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

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true);
    try {

    const response =   await axios.post(
        // "http://127.0.0.1:8000/services/send-email/",
        // "https://mechano.makseotools.com/services/send-email/",
        "https://startup.sembytes.com/email-service/mergemechano-contact/",
        
        form,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setForm({
        name: '',
        email: '',
        phone: '',
        locationState: '',
        // subject: '',
        message: '',
      })
      toast.success(response.data.message)
    } catch (error) {
      toast.error('Something went wrong')
    }
    finally {
      setLoading(false)
    }

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
          required
        />
      </div>

      <TextInput
        id="locationState"
        label="Country "
        name="locationState"
        value={form.locationState}
        onChange={handleChange}
        required
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
        disabled={loading}
        className="bg-red-700 text-white px-6 cursor-pointer  text-nowrap  py-2 h-10 rounded hover:bg-red-800 transition flex items-center justify-center w-40" // fixed width
      >
        {loading ? (
          <FaSpinner className="animate-spin text-white text-lg" />
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  )
}
