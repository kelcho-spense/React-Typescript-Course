import { Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="text-center text-white space-y-6">
        <h1 className="text-5xl font-extrabold">Welcome to Tailwind CSS</h1>
        <p className="text-lg">
          Build responsive and beautiful layouts easily with utility-first CSS.
        </p>
        <a
          href="#"
          className="inline-flex gap-2 bg-white text-blue-500 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100"
        >
          <Play /> Get Started
        </a>
      </div>
    </section>
  );
};
