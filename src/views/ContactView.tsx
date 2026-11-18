import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, CheckCircle2, ArrowRight } from 'lucide-react';

interface ContactViewProps {
  onSuccess: (details: any) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    subject: 'Product Information',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [sentMethod, setSentMethod] = useState<'email' | 'whatsapp' | null>(null);

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(`[${formData.subject}] Enquiry from ${formData.fullName || 'Customer'}`);
    const body = encodeURIComponent(
      `Hello ProteinOva Team,\n\n` +
      `Name: ${formData.fullName}\n` +
      `Mobile: ${formData.mobile}\n` +
      `Email: ${formData.email}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `---\nSent via ProteinOva Official Website`
    );
    return `mailto:connect@proteinova.in?subject=${subject}&body=${body}`;
  };

  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `*New Enquiry for ProteinOva*\n\n` +
      `*Name:* ${formData.fullName}\n` +
      `*Mobile:* ${formData.mobile}\n` +
      `*Email:* ${formData.email}\n` +
      `*Subject:* ${formData.subject}\n` +
      `*Message:* ${formData.message}`
    );
    return `https://wa.me/919791220001?text=${text}`;
  };

  // Submit via Email
  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSentMethod('email');

    // Trigger mailto link directly
    const mailtoUrl = getMailtoUrl();
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setSubmitting(false);
      onSuccess({
        refNumber: `POV-MSG-${Math.floor(100000 + Math.random() * 900000)}`,
        type: 'General Enquiry & Support',
        sentVia: 'Email (connect@proteinova.in)',
        ...formData,
      });
    }, 600);
  };

  // Submit via WhatsApp
  const handleWhatsAppSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.mobile || !formData.message) {
      alert('Please fill in your Name, Mobile Number, and Message before opening WhatsApp.');
      return;
    }
    setSubmitting(true);
    setSentMethod('whatsapp');

    // Open WhatsApp
    const waUrl = getWhatsAppUrl();
    window.open(waUrl, '_blank');

    setTimeout(() => {
      setSubmitting(false);
      onSuccess({
        refNumber: `POV-WA-${Math.floor(100000 + Math.random() * 900000)}`,
        type: 'WhatsApp Direct Enquiry',
        sentVia: 'WhatsApp (+91 9791220001)',
        ...formData,
      });
    }, 600);
  };

  return (
    <div className="pt-28 sm:pt-36 pb-28 space-y-16 max-w-7xl mx-auto px-6 sm:px-8">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#E5A900] font-semibold block">
          REACH OUR TEAM • FAST & DIRECT
        </span>
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-[-0.035em] text-[#26362C] leading-tight">
          We'd Love to <br />
          <span className="text-[#E5A900]">Hear From You.</span>
        </h1>
        <p className="text-sm sm:text-base text-[#717B74] font-normal leading-relaxed">
          Have a question about our egg varieties, wholesale supply, or retail partnerships? Send a message to <strong className="text-[#26362C]">connect@proteinova.in</strong> or chat directly with our desk on WhatsApp at <strong className="text-[#26362C]">+91 9791220001</strong>.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Contact Info Left */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-8 rounded-3xl border border-[#26362C]/10 shadow-xs space-y-6">
            <div>
              <span className="text-[11px] uppercase tracking-[0.16em] text-[#E5A900] font-bold block mb-1">
                HEADQUARTERS (HQ)
              </span>
              <h3 className="text-xl font-semibold text-[#26362C] tracking-tight">
                Proteinova Food Products Pvt. Ltd.
              </h3>
            </div>

            <div className="space-y-4 text-xs text-[#26362C]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#E5A900] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#26362C] block">Corporate Office</span>
                  <span className="text-[#546258] leading-relaxed block">
                    141/40c, Kurinji Tower, Salem Road, Namakkal, Tamil Nadu - 637001
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#E5A900] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#26362C] block">Direct Phone</span>
                  <a href="tel:+919791220001" className="text-[#546258] hover:text-[#E5A900] transition-colors font-medium">
                    +91 9791220001
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#E5A900] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#26362C] block">Official Email</span>
                  <a href="mailto:connect@proteinova.in" className="text-[#546258] hover:text-[#E5A900] transition-colors font-medium">
                    connect@proteinova.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#E5A900] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#26362C] block">Desk Hours</span>
                  <span className="text-[#546258]">Monday – Saturday: 8:00 AM – 7:00 PM IST</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#26362C]/08">
              <a
                href="https://wa.me/919791220001?text=Hello%20ProteinOva,%20I%20have%20an%20enquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Instantly on WhatsApp (+91 9791220001)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Right */}
        <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-[#26362C]/10 shadow-xs">
          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <div className="space-y-1 mb-4">
              <h3 className="text-2xl font-semibold text-[#26362C] tracking-tight">
                Send a Message
              </h3>
              <p className="text-xs text-[#717B74]">
                Choose to dispatch your message via email to <strong className="text-[#26362C]">connect@proteinova.in</strong> or directly via <strong className="text-[#26362C]">WhatsApp</strong>.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#26362C] mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Your Name"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#26362C]/10 text-xs text-[#26362C] focus:outline-none focus:border-[#E5A900]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#26362C] mb-1.5">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#26362C]/10 text-xs text-[#26362C] focus:outline-none focus:border-[#E5A900]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#26362C] mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@email.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#26362C]/10 text-xs text-[#26362C] focus:outline-none focus:border-[#E5A900]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#26362C] mb-1.5">
                  Enquiry Subject
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#26362C]/10 text-xs text-[#26362C] focus:outline-none focus:border-[#E5A900]"
                >
                  <option value="Product Information">Product Information</option>
                  <option value="Wholesale & Bulk Supply">Wholesale & Bulk Supply</option>
                  <option value="Retail Partnership">Retail Partnership</option>
                  <option value="Recipes & Feedback">Recipes & Feedback</option>
                  <option value="Other Business Enquiry">Other Business Enquiry</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#26362C] mb-1.5">
                Message *
              </label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="How can our team help you? Please share your question or requirement..."
                className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#26362C]/10 text-xs text-[#26362C] focus:outline-none focus:border-[#E5A900]"
              />
            </div>

            {/* Action Buttons: Email and WhatsApp */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                disabled={submitting}
                className="flex-1 py-3.5 rounded-full bg-[#26362C] hover:bg-[#E5A900] hover:text-[#26362C] text-white text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 shadow-xs disabled:opacity-50"
              >
                <Mail className="w-4 h-4 text-[#F4C430]" />
                <span>{submitting && sentMethod === 'email' ? 'Opening Mail Client...' : 'Send to connect@proteinova.in'}</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsAppSubmit}
                disabled={submitting}
                className="flex-1 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 shadow-xs disabled:opacity-50"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{submitting && sentMethod === 'whatsapp' ? 'Opening WhatsApp...' : 'Send via WhatsApp'}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
