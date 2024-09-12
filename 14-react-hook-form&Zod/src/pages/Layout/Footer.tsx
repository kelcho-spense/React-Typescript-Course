
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Column 1 */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold">About Us</h4>
          <p className="text-gray-300">
            We are committed to providing high-quality content and resources for
            web developers and designers.
          </p>
        </div>

        {/* Column 2 */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold">Contact</h4>
          <p className="text-gray-300">Email: contact@example.com</p>
          <p className="text-gray-300">Phone: +123-456-7890</p>
        </div>
      </div>
    </footer>
  )
}

