import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  MessageCircle,
} from 'lucide-react';

export const ContactView: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'Culinary & Consumer Query',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Contact Inquiry: ${formData.topic} - ${formData.name}`;
    const body = `Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Topic: ${formData.topic}

Message:
${formData.message}
`;

    window.location.href = `mailto:proteinovafoods@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const hubs = [
    {
      region: 'Headquarters (HQ)',
      location: 'Proteinova Food Products Pvt. Ltd.',
      address: '141/40c, Kurinji Tower, Salem Road, Namakkal, Tamil Nadu - 637001',
      phone: '+91 9791220001',
      email: 'connect@proteinova.in',
    },
  ];

  return (
    <div className="w-full bg-[#ffffff] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ecf7e9] text-[#073b2a] text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Corporate &amp; Direct Support</span>
          </div>
          <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-[#002418] font-extrabold tracking-tight mb-4">
            Connect With Our Agronomists &amp; Culinary Team.
          </h1>
          <p className="text-base text-[#414944] leading-relaxed">
            Have questions about farm gate cold-chain, traceability batch codes, nutritional profiles, or wholesale supply? Our dedicated customer care and logistics teams are at your service.
          </p>
        </div>

        {/* 2-Column: Hubs & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Hubs Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-headline text-xl font-bold text-[#002418] mb-4">
              Regional Farm Gates &amp; Logistics Hubs
            </h3>

            {hubs.map((hub, idx) => (
              <div
                key={idx}
                className="bg-[#f6f7f5] p-5 rounded-2xl border border-slate-200/80 space-y-2 hover:border-[#073b2a]/30 transition-colors"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-[#765a00]">
                  {hub.region}
                </span>
                <h4 className="font-headline text-base font-bold text-[#002418]">
                  {hub.location}
                </h4>
                <div className="flex items-start gap-2 text-xs text-[#414944]">
                  <MapPin className="w-4 h-4 text-[#717974] shrink-0 mt-0.5" />
                  <span>{hub.address}</span>
                </div>
                <div className="flex flex-wrap items-center gap-4 pt-1 text-xs font-semibold text-[#073b2a]">
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5" />
                    <span>{hub.phone}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" />
                    <span>{hub.email}</span>
                  </span>
                </div>
              </div>
            ))}

            {/* Quick WhatsApp Support Box */}
            <div className="p-5 rounded-2xl bg-[#073b2a] text-white flex items-center justify-between gap-4 shadow-sm">
              <div>
                <h4 className="font-headline text-sm font-bold text-white mb-0.5">
                  Instant Farm WhatsApp Desk
                </h4>
                <p className="text-xs text-[#bbeed5]">
                  Live representative available Mon–Sat (7 AM to 8 PM IST)
                </p>
              </div>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#fdc826] text-[#002418] rounded-xl text-xs font-bold hover:bg-[#f4bf1b] transition-all shrink-0"
              >
                Open WhatsApp
              </a>
            </div>
          </div>

          {/* Form Right Column */}
          <div className="lg:col-span-6 bg-[#ffffff] p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
            {submitted ? (
              <div className="py-16 text-center flex flex-col items-center justify-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#ecf7e9] text-[#073b2a] flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
                </div>
                <h4 className="font-headline text-2xl font-bold text-[#002418]">
                  Inquiry Dispatched Successfully!
                </h4>
                <p className="text-xs sm:text-sm text-[#414944] max-w-sm leading-relaxed">
                  Thank you, {formData.name || 'valued customer'}. Our regional team will respond to {formData.email || 'your email'} within 4 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 rounded-xl bg-[#002418] text-white text-xs font-bold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="font-headline text-xl font-bold text-[#002418] mb-1">
                    Direct Inquiry Form
                  </h3>
                  <p className="text-xs text-[#717974]">
                    Fill in your details and our team will get in touch promptly.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#002418] uppercase tracking-wider mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ananya Sen"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#f6f7f5] border border-slate-200 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#073b2a]/30"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#002418] uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#f6f7f5] border border-slate-200 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#073b2a]/30"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#002418] uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#f6f7f5] border border-slate-200 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#073b2a]/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#002418] uppercase tracking-wider mb-1">
                    Inquiry Topic
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full bg-[#f6f7f5] border border-slate-200 px-3 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#073b2a]/30"
                  >
                    <option value="Culinary & Consumer Query">Culinary &amp; Consumer Recipe Inquiries</option>
                    <option value="B2B Wholesale / Institutional">B2B Wholesale / HoReCa Consignment</option>
                    <option value="Retail Distribution Stockist">Modern Trade &amp; Retail Stockist</option>
                    <option value="Quality & Traceability Inspection">Quality Assurance &amp; Batch Traceability</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#002418] uppercase tracking-wider mb-1">
                    Your Message / Requirement *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your culinary application, delivery frequency, or feedback..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#f6f7f5] border border-slate-200 p-3 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#073b2a]/30"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl bg-[#002418] hover:bg-[#073b2a] text-white text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md"
                  >
                    <Send className="w-4 h-4 text-[#fdc826]" />
                    <span>Send Inquiry to Proteinova Operations</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
