import { ArrowRight, Globe, BarChart3, Rocket, Building2, Phone, Mail, Target, Shield, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import Navigation from '../components/Navigation';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    focus: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1A2F] via-[#1a2a4f] to-[#0A1A2F]">
          <div className="absolute inset-0 opacity-25" style={{ backgroundImage: 'url("https://img.freepik.com/free-photo/dramatic-perspective-with-low-angle-view-skyscrapers-looking-up-sky-dubai-vanishing-point_231208-7546.jpg?t=st=1759431374~exp=1759434974~hmac=b1fa33ff1d2c88f57c09a7d43859ad1918f04c65332f902974f3af7bc8f68411&w=1480")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight playfaire_font">Your Gateway to India's
          <br/><span className="text-[#D4AF37]">$5 Trillion Growth Story</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            We partner with Family Offices, NRIs, and Global Investors to unlock India's fastest-growing opportunities through AIFs, Pre-IPO deals, and GIFT City structures — with clarity, compliance, and zero capital gains tax for eligible investors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-[#D4AF37] text-[#0A1A2F] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#c49d2d] transition-all hover:scale-105 flex items-center justify-center gap-2">
              Schedule a Private Consultation <ArrowRight size={20} />
            </a>
            <a href="#insights" className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#D4AF37] hover:text-[#0A1A2F] transition-all flex items-center justify-center gap-2">
              Download Smart Money 2025 Report
            </a>
          </div>
        </div>
      </section>

      <section id="solutions" className="py-24 bg-gradient-to-br from-[#0A1A2F] to-[#1a2a4f]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-white text-center mb-4 playfaire_font">Tailored India Investment Strategies</h2>
          <p className="text-xl text-gray-300 text-center mb-16">for Global Capital</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-8 hover:bg-white/10 transition-all hover:scale-105">
              <div className="bg-[#D4AF37]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="text-[#D4AF37]" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Alternative Investment Funds (AIFs)</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Gain access to India's fastest-growing private markets — private equity, venture capital, structured credit, and hybrid strategies targeting 15–25% IRR.
              </p>
              <a href="#contact" className="text-[#D4AF37] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <ArrowRight size={16} />
              </a>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-8 hover:bg-white/10 transition-all hover:scale-105">
              <div className="bg-[#D4AF37]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Rocket className="text-[#D4AF37]" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Pre-IPO & Private Deals</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Invest in India's next unicorns before they go public. Through strategic partnerships, we source and evaluate high-quality unlisted opportunities.
              </p>
              <a href="#contact" className="text-[#D4AF37] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <ArrowRight size={16} />
              </a>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-8 hover:bg-white/10 transition-all hover:scale-105">
              <div className="bg-[#D4AF37]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="text-[#D4AF37]" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Mutual Funds & PMS</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Build scalable, regulated portfolios with India's most trusted asset managers. Our strategies focus on consistent alpha generation and risk-managed compounding.
              </p>
              <a href="#contact" className="text-[#D4AF37] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <ArrowRight size={16} />
              </a>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-8 hover:bg-white/10 transition-all hover:scale-105">
              <div className="bg-[#D4AF37]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Globe className="text-[#D4AF37]" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">GIFT City Structures</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Leverage India's international financial hub for tax-neutral allocations. Our structuring expertise ensures zero capital gains tax and regulatory clarity.
              </p>
              <a href="#contact" className="text-[#D4AF37] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK SECTION - ADDED AFTER WHITE GLOVE STRUCTURING */}
      <section id="how-we-work" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#0A1A2F] mb-12 text-center">
            HOW WE WORK: Our mission is to identify investments aligned with values, legacy, and long-term risk tolerance.
          </h2>

          <div className="space-y-20">
            {/* Identify Pain Areas */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-[#0A1A2F] mb-6">Identify Pain Areas:</h3>
                <h4 className="text-xl font-semibold text-[#D4AF37] mb-4">Fragmented India Access:</h4>
                <p className="text-lg text-gray-700 mb-6">
                  The Information available about investments in India is inconsistent, scattered and lacks institutional-grade curation.
                </p>
                <blockquote className="border-l-4 border-[#D4AF37] pl-6 italic text-gray-600 my-6 text-lg">
                  "We're not here to talk about products. We're here to design a India Gateway for Family Office framework that protects your wealth, grows it tax-efficiently, and ensures it lasts generations."
                </blockquote>
              </div>
              <div className="bg-gradient-to-br from-[#0A1A2F] to-[#1a2a4f] rounded-2xl p-8 text-white">
                <h4 className="text-xl font-bold mb-6">The Problem Today:</h4>
                <p className="text-gray-300 mb-6">
                  90% of family wealth globally doesn't survive beyond the third generation — not because of bad markets, but because of leakage and lack of rules.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <Target className="text-[#D4AF37] mt-1 flex-shrink-0" size={16} />
                    <span>90% of family wealth doesn't survive beyond Gen-3 (EY)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="text-[#D4AF37] mt-1 flex-shrink-0" size={16} />
                    <span>GCC families: 15% in real estate vs global avg 10% (UBS 2024)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="text-[#D4AF37] mt-1 flex-shrink-0" size={16} />
                    <span>Incremental income often wasted — no reinvestment policy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="text-[#D4AF37] mt-1 flex-shrink-0" size={16} />
                    <span>No codified access rules → heirs fight, capital erodes</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Incremental Income Leak */}
            <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#0A1A2F]/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#0A1A2F] mb-6 text-center">Incremental Income Leak</h3>
              <blockquote className="text-center text-xl italic text-gray-700 mb-8 max-w-4xl mx-auto">
                "This is where compounding collapses. Every year, profits, dividends, rentals come in — but without a reinvestment policy, 30–40% leaks into lifestyle or ad hoc allocations. My approach is simple: minimum 60–70% reinvested, 30–40% for lifestyle and philanthropy. That discipline alone doubles wealth across generations."
              </blockquote>
              <div className="text-center mb-6">
                <p className="text-lg font-semibold text-[#D4AF37]">"The Real Alpha Is in Capturing Surplus."</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="font-bold text-[#0A1A2F] mb-4">Problem Scenario</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>Annual business profits/dividends = X</li>
                    <li>If 40% leaks to consumption/unplanned investments</li>
                    <li className="text-red-600 font-semibold">→ Compounding collapses</li>
                  </ul>
                </div>
                <div className="bg-[#0A1A2F] rounded-xl p-6 text-white shadow-lg">
                  <h4 className="font-bold text-[#D4AF37] mb-4">Policy Solution</h4>
                  <ul className="space-y-2">
                    <li><strong>70% reinvested</strong></li>
                    <li><strong>30% lifestyle/philanthropy</strong></li>
                    <li className="text-[#D4AF37] font-semibold">→ Wealth doubles across generations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Legacy & Succession Risks */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-bold text-[#0A1A2F] mb-6">Legacy & Succession Risks</h3>
                <blockquote className="border-l-4 border-[#D4AF37] pl-6 italic text-gray-600 mb-6 text-lg">
                  "The bigger risk is succession. Who are beneficiaries? Equal or role-based? How do heirs access wealth — periodic payouts, staged at milestones, or case-by-case approvals? Without rules, legacy collapses. A trust deed and family constitution lock governance, reduce disputes, and institutionalize continuity."
                </blockquote>
                <p className="text-lg font-semibold text-[#D4AF37] mb-6">"Without Governance, Legacy Collapses."</p>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-[#0A1A2F] mb-4">Key Questions:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Who are beneficiaries? Equal vs role-based distribution</li>
                    <li>• Access rules: staged (age 30/40), periodic (annual %), event-based (education, marriage)</li>
                    <li>• Trust/Family Constitution resolves succession disputes</li>
                  </ul>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#0A1A2F] to-[#1a2a4f] rounded-2xl p-8 text-white">
                <h4 className="text-xl font-bold mb-6 text-center">Governance Pyramid</h4>
                <div className="space-y-4">
                  <div className="bg-[#D4AF37]/20 rounded-lg p-4 text-center">
                    <p className="font-bold">Family Council</p>
                  </div>
                  <div className="bg-[#D4AF37]/15 rounded-lg p-4 text-center">
                    <p className="font-bold">Trustees</p>
                  </div>
                  <div className="bg-[#D4AF37]/10 rounded-lg p-4 text-center">
                    <p className="font-bold">Investment Committee</p>
                  </div>
                  <div className="bg-[#D4AF37]/5 rounded-lg p-4 text-center">
                    <p className="font-bold">Advisory Boards</p>
                  </div>
                </div>
              </div>
            </div>

            {/* The Solution */}
            <div className="text-center">
              <h3 className="text-3xl font-bold text-[#0A1A2F] mb-8">The Solution:</h3>
              
              {/* Investment Strategy Protocol - CORRECTED LAYOUT */}
              <div className="bg-gradient-to-br from-[#0A1A2F] to-[#1a2a4f] rounded-2xl p-10 text-white mb-12">
                <h4 className="text-2xl font-bold text-[#D4AF37] mb-6 text-center">Investment Strategy Protocol (ISP) Framework</h4>
                <blockquote className="text-xl italic text-gray-300 mb-8 max-w-3xl mx-auto text-center">
                  "This is the baseline ISP framework: Purpose, Governance, Allocation, Incremental Income Policy, Legacy Rules, Risk & KPIs. It's inspired by EY and UBS global playbooks, but it only works when customized to your family's flows and values. That's the process we co-create."
                </blockquote>
                <p className="text-lg font-semibold text-[#D4AF37] mb-8 text-center">"Your Family Office Blueprint."</p>
                
                {/* Horizontal Flow Layout for Desktop */}
                <div className="hidden md:flex flex-col md:flex-row items-center justify-between gap-4 max-w-5xl mx-auto">
                  {['Purpose', 'Governance', 'Allocation', 'Income Policy', 'Legacy Rules', 'Risk & KPIs'].map((step, index) => (
                    <div key={step} className="flex items-center">
                      <div className="bg-[#D4AF37]/20 rounded-lg p-4 text-center min-w-[120px] hover:bg-[#D4AF37]/30 transition-colors">
                        <p className="font-bold text-sm md:text-base">{step}</p>
                      </div>
                      {index < 5 && (
                        <ArrowRight className="text-[#D4AF37] mx-2" size={20} />
                      )}
                    </div>
                  ))}
                </div>

                {/* Vertical Layout for Mobile */}
                <div className="md:hidden mt-6 space-y-4">
                  {['Purpose', 'Governance', 'Allocation', 'Incremental Income Policy', 'Legacy Rules', 'Risk & KPIs'].map((step) => (
                    <div key={step} className="flex items-center">
                      <ArrowRight className="text-[#D4AF37] mr-3" size={16} />
                      <div className="bg-[#D4AF37]/20 rounded-lg p-3 flex-1 text-center hover:bg-[#D4AF37]/30 transition-colors">
                        <p className="font-bold text-sm">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Execution Architecture */}
              <div className="bg-white border-2 border-[#D4AF37] rounded-2xl p-10">
                <h4 className="text-2xl font-bold text-[#0A1A2F] mb-6">Execution Architecture:</h4>
                <blockquote className="text-xl italic text-gray-600 mb-8 max-w-3xl mx-auto">
                  "Even the best framework fails if execution is wrong. Today, India offers 6.4% GDP growth — but what matters is how you enter. Via GIFT City, we can blend Mutual Funds for stability and AIFs for alpha, targeting 15%+ IRRs, zero tax leakage, fully regulated with Big 4 audits. This is where pilot allocations begin."
                </blockquote>
                <p className="text-lg font-semibold text-[#D4AF37] mb-8">"MF + AIF Blend via GIFT City = Zero-Tax Growth Engine."</p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-left">
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-center gap-3">
                        <TrendingUp className="text-green-600" size={20} />
                        <span>MF CAGR 11.8% (15Y) + AIF IRR 16–20% → blended 15%+ net IRRs</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Shield className="text-green-600" size={20} />
                        <span>GIFT City = 0% gains, no withholding, USD denominated</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Target className="text-green-600" size={20} />
                        <span>Pilot allocation = $5–10M → diversified, tax-efficient, regulated</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h5 className="font-bold text-[#0A1A2F] mb-4 text-center">Performance Comparison</h5>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Old FO Portfolio</span>
                        <span className="text-red-600 font-bold">5% net IRR</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">India Blend Strategy</span>
                        <span className="text-green-600 font-bold">15%+ IRR</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Values Section */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="bg-[#D4AF37]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Shield className="text-[#D4AF37]" size={32} />
                </div>
                <h4 className="text-xl font-bold text-[#0A1A2F] mb-4">Integrity Above All</h4>
                <p className="text-gray-700">
                  Financial wealth is only part of the story. Moral legacy—honesty, transparency, patience—is what defines a family office's true success.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-[#D4AF37]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Target className="text-[#D4AF37]" size={32} />
                </div>
                <h4 className="text-xl font-bold text-[#0A1A2F] mb-4">Preservation of Trust</h4>
                <p className="text-gray-700">
                  Multi-generational confidence grows through prudent stewardship and open communication.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-[#D4AF37]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <TrendingUp className="text-[#D4AF37]" size={32} />
                </div>
                <h4 className="text-xl font-bold text-[#0A1A2F] mb-4">Compounding of Legacy</h4>
                <p className="text-gray-700">
                  Wealth preservation aligned with family values—philanthropy, ethical investing, and impact—extends influence beyond mere financial returns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="insights" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-[#0A1A2F] text-center mb-4">Insights that Drive</h2>
          <p className="text-2xl text-gray-600 text-center mb-16">Smarter Allocations</p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-200">
              <h3 className="text-2xl font-bold text-[#0A1A2F] mb-6">Case Study 1: Hybrid India Growth Portfolio (2020–2025)</h3>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Old Model (Global RE + Bonds)</span>
                  <span className="text-2xl font-bold text-red-600">5.8% IRR</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Hybrid India Allocation (MF + AIF mix)</span>
                  <span className="text-2xl font-bold text-green-600">11.5% IRR</span>
                </div>
                <div className="bg-[#D4AF37]/10 p-4 rounded-lg">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>Outcome:</strong> Sharpe Ratio improved 60%, portfolio volatility reduced, long-term wealth doubled.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-200">
              <h3 className="text-2xl font-bold text-[#0A1A2F] mb-6">Case Study 2: GIFT City Investor (NRI, GCC-based, 2022–2024)</h3>

              <div className="space-y-4 mb-8">
                <div className="pb-3 border-b border-gray-200">
                  <span className="text-gray-600 font-medium block mb-2">Allocation</span>
                  <span className="text-lg text-gray-800">$5M across Category II AIF + Step-up SIP in equity MF</span>
                </div>
                <div className="pb-3 border-b border-gray-200">
                  <span className="text-gray-600 font-medium block mb-2">Outcome</span>
                  <span className="text-2xl font-bold text-green-600">17% Annualized Returns</span>
                  <span className="text-lg text-gray-800 block mt-2">with 0% capital gains tax liability</span>
                </div>
                <div className="bg-[#D4AF37]/10 p-4 rounded-lg">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>Key Benefit:</strong> Seamless repatriation + tax-free growth.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="#contact" className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#0A1A2F] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#c49d2d] transition-all hover:scale-105">
              Download Smart Money 2025 Report <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      <section id="family-offices" className="py-24 bg-gradient-to-br from-[#0A1A2F] to-[#1a2a4f] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1920")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl font-bold text-white mb-6">White-Glove Structuring for Serious Investors</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Managing generational wealth requires more than just market access — it requires trust, precision, and bespoke solutions.
          </p>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Whether you're a $500M Family Office in Dubai seeking diversification, or an NRI building a ₹10 Cr+ India allocation, we provide tailored strategies that align with your legacy goals. From compliance frameworks to sourcing privileged deals, we act as your single point of contact for India entry — ensuring transparency, tax efficiency, and performance.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#0A1A2F] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#c49d2d] transition-all hover:scale-105">
            Request Investor Deck <ArrowRight size={20} />
          </a>
        </div>
      </section>

      <section id="contact" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-[#0A1A2F] text-center mb-4">Let's Build Your</h2>
          <p className="text-2xl text-gray-600 text-center mb-16">India Allocation Strategy</p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Country</label>
                  <input
                    type="text"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Investment Focus</label>
                  <select
                    value={formData.focus}
                    onChange={(e) => setFormData({ ...formData, focus: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="AIF">Alternative Investment Funds (AIFs)</option>
                    <option value="Pre-IPO">Pre-IPO & Private Deals</option>
                    <option value="PMS">Mutual Funds & PMS</option>
                    <option value="GIFT City">GIFT City Structures</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#D4AF37] text-[#0A1A2F] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#c49d2d] transition-all hover:scale-105"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>

            <div className="bg-gradient-to-br from-[#0A1A2F] to-[#1a2a4f] rounded-2xl p-10 text-white">
              <h3 className="text-3xl font-bold mb-8">Direct Contact</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#D4AF37]/20 p-3 rounded-lg">
                    <Mail className="text-[#D4AF37]" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <a href="mailto:ascent.fnl@gmail.com" className="text-lg text-[#D4AF37] hover:underline">
                      ascent.fnl@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#D4AF37]/20 p-3 rounded-lg">
                    <Phone className="text-[#D4AF37]" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Phone</p>
                    <a href="tel:+919769080022" className="text-lg text-[#D4AF37] hover:underline">
                      +91 9769080022
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/20">
                <a href="#contact" className="inline-flex items-center gap-2 text-[#D4AF37] font-semibold text-lg hover:gap-3 transition-all">
                  Schedule a 1:1 Call <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0A1A2F] py-12 border-t border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-[#D4AF37] mb-6">Legacy Guardians</div>
            
            {/* ADDED REQUIRED DISCLAIMER */}
            <p className="text-sm text-gray-400 mb-4 leading-relaxed max-w-4xl mx-auto">
              <em>Advisory/distribution via licensed partners. Not investment advice. Market risk applies. Past performance not indicative of future results.</em>
            </p>
            
            <p className="text-sm text-gray-400 leading-relaxed max-w-4xl mx-auto">
              Legacy Guardians is owned by BP International LLC. All services are facilitated through regulated partners under the oversight of SEBI and IFSCA (India). Investors are responsible for ensuring compliance with their jurisdictional requirements. This website is intended for informational purposes only.
            </p>
            <div className="mt-8 text-sm text-gray-500">
              © 2025 Legacy Guardians. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
