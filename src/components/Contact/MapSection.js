export default function MapSection() {
  return (
    <section className="w-full mt-4">
      <div className="w-full h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.889256952183!2d76.22358327601886!3d10.66570326122433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7e938204689a5%3A0x5171cc72d4ed3484!2sMergemechano%20Private%20Limited!5e0!3m2!1sen!2sin!4v1753355995654!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        ></iframe>
      </div>
    </section>
  )
}
