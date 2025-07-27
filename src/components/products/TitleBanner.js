export default function TitleBanner({title='Our Products', description='Explore our full range of service tools'}) {
  return (
    <div className=" bg-red-900 py-10 text-center mb-10">
      <h1 className="text-3xl font-bold text-white">{title}</h1>
      <p className="text-white text-sm mt-2">{description}</p>
    </div>
  )
}
