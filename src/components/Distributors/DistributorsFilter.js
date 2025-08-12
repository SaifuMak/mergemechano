export default function DistributorsFilter({ search, setSearch, location, setLocation, locations }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-10">
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 flex-1"
      />

      <select
        value={location}
        onChange={e => setLocation(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2"
      >
        
        {locations.map((loc, i) => (
          <option key={i} value={loc}>
            {loc}
          </option>
        ))}
      </select>
    </div>
  )
}
