export default function ProductSpecification({ content }) {
  return (
    <section className="mt-16 border-t pt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Product Specifications</h2>

      <p className="text-gray-600 mb-4">{content.paragraph}</p>

      {/* Spec Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-left border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b">Feature</th>
              <th className="py-2 px-4 border-b">Value</th>
            </tr>
          </thead>
          <tbody>
            {content.table.map((row, i) => (
              <tr key={i} className="border-t">
                <td className="py-2 px-4 border-b">{row.feature}</td>
                <td className="py-2 px-4 border-b">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
