export default function Services() {
    return (
        <section className="bg-white py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-12">Our Services</h1>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Web Development</h2>
            <p className="text-gray-600">
              We build responsive, performant, and beautiful websites using the latest web technologies.
            </p>
          </div>

          {/* Service 2 */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">UI/UX Design</h2>
            <p className="text-gray-600">
              Our team creates user-centric designs that are not only aesthetically pleasing but also functional.
            </p>
          </div>

          {/* Service 3 */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Mobile App Development</h2>
            <p className="text-gray-600">
              We build powerful mobile applications that provide a seamless experience across platforms.
            </p>
          </div>

          {/* Service 4 */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">SEO Optimization</h2>
            <p className="text-gray-600">
              Our SEO services help improve your online presence, driving traffic and increasing visibility.
            </p>
          </div>

          {/* Service 5 */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">E-Commerce Solutions</h2>
            <p className="text-gray-600">
              We provide end-to-end e-commerce solutions that help you build, manage, and grow your online business.
            </p>
          </div>

          {/* Service 6 */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Consultancy</h2>
            <p className="text-gray-600">
              Our expert consultants offer insights and strategies tailored to your specific business needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
