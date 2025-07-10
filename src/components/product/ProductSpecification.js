export default function ProductSpecification({ content }) {
  return (
   <section className="mt-16 border-t border-gray-200 pt-10">
  <div className="max-w-2xl mx-auto px-4">
    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Product Specifications</h2>



    {/* Spec Table */}
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
  <tbody>
    {content.table.map((row, i) => (
      <tr key={i} className="hover:bg-gray-50">
        <td className="py-2 px-3 border-b border-gray-200 font-semibold text-gray-900">
          {row.feature}
        </td>
        <td className="py-2 px-3 border-b border-gray-200 text-gray-700">
          {row.value}
        </td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
  </div>
</section>

  )
}
