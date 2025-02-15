// src/components/Companies.jsx
export default function Companies() {
    return (
      <section className="py-8 text-center">
        <h3 className="text-lg font-semibold mb-4 text-gray-600">
          Subscribers have been hired by:
        </h3>
        <div className="flex justify-center space-x-6">
          <img src="/images/google.png" alt="Google" className="h-6" />
          <img src="/images/amazon.png" alt="Amazon" className="h-6" />
          <img src="/images/deloitte.png" alt="Deloitte" className="h-6" />
          <img src="/images/jpmorgan.png" alt="JPMorgan" className="h-6" />
          <img src="/images/facebook.png" alt="Facebook" className="h-6" />
        </div>
      </section>
    );
  }
  