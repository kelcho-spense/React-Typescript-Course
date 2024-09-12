
export default function About() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between md:gap-10 ">
        {/* Image Section */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="https://placeholder.com/500x400"
            alt="About us"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
          <p className="text-gray-600 text-lg">
            We are a passionate team dedicated to providing top-quality services to our clients.
            Our journey started over a decade ago, and since then, we have worked with numerous
            customers, helping them achieve their goals through innovative solutions.
          </p>
          <p className="text-gray-600 text-lg">
            Our mission is to create impactful experiences through our work, and we strive to deliver
            beyond expectations every single time.
          </p>
        </div>
      </div>
    </section>
  )
}
