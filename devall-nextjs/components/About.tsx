import { Leaf } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Subtle maple pattern background */}
      <div className="absolute inset-0 maple-pattern opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-12">
            <div className="flex justify-center mb-4">
              <Leaf className="w-16 h-16 text-gray-800 opacity-80" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-poppins)] text-gray-900">
              About <span className="bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">DevAll</span>
            </h2>
            <p className="text-xl text-gray-600 flex items-center justify-center gap-2">
              Your Trusted Technology Partner <Leaf className="w-5 h-5 text-gray-800 inline-block" />
            </p>
          </div>

          {/* Content */}
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p className="text-xl font-medium">
              <span className="text-gray-800 font-bold">DevAll Digitalise Solutions</span> is a pioneering provider 
              of comprehensive digital transformation solutions with international-grade quality, 
              embodying Canadian professionalism and reliability.
            </p>
            
            <p>
              With our team of experienced experts and cutting-edge technology, we are committed to delivering 
              the highest quality products and services, helping your business optimize processes, 
              increase productivity, and lead in a competitive market.
            </p>

            <p className="text-gray-900 font-medium italic">
              "We don't just develop software - we build your digital future"
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { number: '50+', label: 'Successful Projects' },
              { number: '30+', label: 'Satisfied Clients' },
              { number: '10+', label: 'Years Experience' },
              { number: '100%', label: 'Quality Commitment' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
