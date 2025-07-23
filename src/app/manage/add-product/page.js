'use client'

import { useState } from 'react'

const categories = ['Welding', 'Cutting', 'Automation', 'Accessories']

export default function AddProductPage() {
  const [specs, setSpecs] = useState([{ name: '', value: '' }])
  const [formData, setFormData] = useState({
    name: '',
    series: '',
    voltage: '',
    power: '',
    description: '',
    catalogLink: '',
    slug: '',
    categories: [],
  })

  const handleSpecChange = (index, key, value) => {
    const updated = [...specs]
    updated[index][key] = value
    setSpecs(updated)
  }

  const addSpec = () => {
    setSpecs([...specs, { name: '', value: '' }])
  }

  const removeSpec = (index) => {
    const updated = specs.filter((_, i) => i !== index)
    setSpecs(updated)
  }

  const toggleCategory = (category) => {
    setFormData((prev) => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category],
    }))
  }

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }))
  }

 

  const handleSubmit = async (e) => {
  e.preventDefault()

  const payload = {
    name: formData.name,
    series: formData.series,
    voltage: formData.voltage,
    power: formData.power,
    description: formData.description,
    catalogLink: formData.catalogLink,
    slug: formData.slug,
    categories: formData.categories,
    specs: specs
  }
  console.log('Submitting product:', payload)

  try {
    const response = await fetch('https://merge.makseotools.com/api/products/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const error = await response.json()
      console.error('Server error:', error)
      throw new Error('Failed to save product')
    }

    const result = await response.json()
    console.log('✅ Product saved:', result)
    alert('Product added successfully!')
    // Optionally reset form here
  } catch (err) {
    console.error('❌ Submission error:', err)
    alert('Error submitting product')
  }
}


  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">Add New Product</h1>
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Text Inputs */}
        {[
          ['Product Name', 'name'],
          ['Series Name', 'series'],
          ['Voltage', 'voltage'],
          ['Power Output', 'power'],
          ['Catalog PDF Link', 'catalogLink'],
          ['Product Slug', 'slug'],
        ].map(([label, key]) => (
          <div key={key}>
            <label className="block font-medium mb-1">{label}</label>
            <input
              type="text"
              value={formData[key]}
              onChange={(e) => handleChange(key, e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
        ))}

        {/* Description */}
        <div>
          <label className="block font-medium mb-1">Small Description & Bullet Points (HTML allowed)</label>
          <textarea
            value={formData.description}
            onChange={(e) => handleChange('description', e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 h-32"
          />
        </div>

        {/* Specifications */}
        <div>
          <label className="block font-medium mb-1">Specifications</label>
          {specs.map((spec, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                placeholder="Spec Name"
                value={spec.name}
                onChange={(e) => handleSpecChange(index, 'name', e.target.value)}
                className="w-1/2 border border-gray-300 rounded px-3 py-1"
              />
              <input
                type="text"
                placeholder="Value"
                value={spec.value}
                onChange={(e) => handleSpecChange(index, 'value', e.target.value)}
                className="w-1/2 border border-gray-300 rounded px-3 py-1"
              />
              <button
                type="button"
                onClick={() => removeSpec(index)}
                className="text-red-600 px-2"
              >
                ✕
              </button>
            </div>
          ))}
          <button type="button" onClick={addSpec} className="text-blue-600 text-sm underline">
            + Add Spec
          </button>
        </div>

        {/* Categories */}
        <div>
          <label className="block font-medium mb-1">Category</label>
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <label key={cat} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.categories.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                />
                {cat}
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700"
        >
          Submit Product
        </button>
      </form>
    </div>
  )
}
