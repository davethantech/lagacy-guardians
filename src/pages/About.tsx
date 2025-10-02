import { TrendingUp, Globe, Shield, Target } from 'lucide-react';
import Navigation from '../components/Navigation';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Professional Finance" className="rounded-2xl shadow-2xl" />
            </div>
            <div>
              <h2 className="text-5xl font-bold text-[#0A1A2F] mb-6">Bridging Global Capital with India's Growth</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At Legacy Guardians, we specialize in connecting international investors with India's most promising investment opportunities.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our founder, <strong>Satyajeet Bhosale</strong>, brings over 15 years of leadership experience across premier global institutions including HDFC Bank, HSBC, Standard Chartered, JM Financial, and Alchemy Capital. Having managed and advised on portfolios exceeding ₹17,000 crores, Satyajeet understands the complexities of high-value investing and the need for trusted, institutional-grade execution.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="bg-[#D4AF37]/10 p-3 rounded-lg">
                    <Target className="text-[#D4AF37]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A1A2F] mb-1">Privileged Access</h3>
                    <p className="text-sm text-gray-600">Top-performing AIFs, Pre-IPO allocations, and private credit opportunities</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-[#D4AF37]/10 p-3 rounded-lg">
                    <Shield className="text-[#D4AF37]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A1A2F] mb-1">Tax Efficiency</h3>
                    <p className="text-sm text-gray-600">Structuring via GIFT City for 0% capital gains tax</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-[#D4AF37]/10 p-3 rounded-lg">
                    <TrendingUp className="text-[#D4AF37]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A1A2F] mb-1">Proven Track Record</h3>
                    <p className="text-sm text-gray-600">Deep expertise in building ₹10 Cr+ portfolios for UHNWIs</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-[#D4AF37]/10 p-3 rounded-lg">
                    <Globe className="text-[#D4AF37]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A1A2F] mb-1">Global-Local Bridge</h3>
                    <p className="text-sm text-gray-600">Decades of cross-border wealth management experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-[#0A1A2F] to-[#1a2a4f]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Our Expertise</h2>
          <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto">
            With decades of experience in wealth management and a deep understanding of both global and Indian markets, we provide unparalleled guidance for sophisticated investors.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-8">
              <div className="text-[#D4AF37] text-5xl font-bold mb-4">15+</div>
              <h3 className="text-2xl font-bold text-white mb-3">Years of Experience</h3>
              <p className="text-gray-300">
                Deep expertise across premier global financial institutions
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-8">
              <div className="text-[#D4AF37] text-5xl font-bold mb-4">₹17,000+</div>
              <h3 className="text-2xl font-bold text-white mb-3">Crores Managed</h3>
              <p className="text-gray-300">
                Successfully managed and advised on high-value portfolios
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-8">
              <div className="text-[#D4AF37] text-5xl font-bold mb-4">100+</div>
              <h3 className="text-2xl font-bold text-white mb-3">UHNWI Clients</h3>
              <p className="text-gray-300">
                Trusted partner for Family Offices and ultra-high-net-worth individuals
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0A1A2F] py-12 border-t border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-[#D4AF37] mb-6">InvestWithSatyajeet</div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-4xl mx-auto">
              InvestWithSatyajeet does not solicit or distribute securities in the UAE. All services are facilitated through regulated partners under the oversight of SEBI and IFSCA (India). Investors are responsible for ensuring compliance with their jurisdictional requirements. This website is intended for informational purposes only.
            </p>
            <div className="mt-8 text-sm text-gray-500">
              © 2025 InvestWithSatyajeet. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
