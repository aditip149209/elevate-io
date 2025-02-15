// src/components/Hero.jsx
export default function Hero() {
    return (
      <section className="flex flex-col lg:flex-row items-center justify-between py-16 px-8">
        {/* Left Section */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-5xl font-extrabold leading-tight text-gray-900">
            The Best Online <span className="text-orange-500">Resume Builder</span>
          </h1>
          <p className="text-lg text-gray-600">
            Easily create a resume for any job using our best-in-class resume builder platform.
          </p>
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
              Create My Resume Now
            </button>
            <button className="px-6 py-3 border border-orange-400 text-orange-500 rounded-lg hover:bg-orange-50 transition">
              Import Resume
            </button>
          </div>
        </div>
  
        {/* Right Section (Image) */}
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <img
            src="/images/resume-template.png"
            alt="Resume Template"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </section>
    );
  }