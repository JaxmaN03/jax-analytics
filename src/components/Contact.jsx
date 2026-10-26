import React, { useState, useEffect } from 'react';
import {
  Mail,
  Send,
  Copy,
  Check,
  Clock,
  MapPin,
  Sparkles,
  Info,
  ExternalLink,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react';
import { SITE_CONFIG, SERVICES, PRESENTATION_ADDONS } from '../config.js';

export default function Contact({ preselectedService, presentationRequest }) {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    service: 'excel',
    timeline: '1-2 weeks',
    description: '',
    presentation: '',
    exclusiveCode: false,
    extendedRetention: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Update selected service if parent changes it
  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  useEffect(() => {
    if (presentationRequest) {
      setFormData((prev) => ({ ...prev, presentation: presentationRequest.id }));
    }
  }, [presentationRequest]);

  const presentation = PRESENTATION_ADDONS.find((addon) => addon.id === formData.presentation);

  const serviceNames = {
    excel: 'Excel & Spreadsheet Solutions',
    analysis: 'Data Analysis & Visualization',
    python: 'Python Automation',
    other: 'General Data Consulting / Other',
  };

  const generateEmailBody = () => {
    return `Hello Jackson,

I would like to request a quote for data analytics services through Jax's Analytics.

--- PROJECT DETAILS ---
Name: ${formData.name || 'Not specified'}
Business Name: ${formData.businessName || 'None provided'}
Contact Email: ${formData.email || 'Not specified'}
Service Needed: ${serviceNames[formData.service] || formData.service}
Desired Timeline: ${formData.timeline}
Presentation Add-on: ${presentation ? `${presentation.name} (+$${presentation.price} USD, up to 10 slides, one revision round; additional slides $${presentation.extraSlidePrice} each)` : 'None requested'}
Exclusive Project Code: ${formData.exclusiveCode ? 'Requested; separate quote and signed agreement required' : 'Not requested'}
Extended File Retention: ${formData.extendedRetention ? 'Requested for future work; retention period to be agreed in writing' : 'Default: delete working copies of client data 30 days after project completion'}

--- PROJECT DESCRIPTION ---
${formData.description || 'No description provided.'}

Looking forward to your reply.
`;
  };

  const getMailtoUrl = () => {
    const serviceName = serviceNames[formData.service] || 'Data Project';
    const clientName = formData.name ? ` - ${formData.name}` : '';
    const subject = encodeURIComponent(`[Jax's Analytics Quote Request] ${serviceName}${clientName}`);
    const body = encodeURIComponent(generateEmailBody());
    return `mailto:${SITE_CONFIG.contactEmail}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

  };

  const handleCopyBrief = () => {
    navigator.clipboard.writeText(generateEmailBody());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SITE_CONFIG.contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#112033] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B263B] border border-[#D4AF37]/20 text-xs font-mono text-[#D4AF37] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Client Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let&apos;s Make Your Data Work for You.
          </h2>
          <p className="text-base sm:text-lg text-[#BDB8AE] leading-relaxed mb-3">
            Have a spreadsheet problem, reporting challenge, or automation idea? Tell me about your project and let&apos;s explore a solution.
          </p>
          <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-medium text-emerald-400">
            Free initial project consultations available.
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Consultation Highlights */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Card */}
            <div className="rounded-2xl bg-[#1B263B] border border-slate-800 p-6 sm:p-7 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#D4AF37]" />
                <span>Direct Contact Options</span>
              </h3>
              <p className="text-xs text-[#BDB8AE] mb-6 leading-relaxed">
                Email Jackson directly, or use the form to prepare a project brief you can send.
              </p>

              {/* Email Address Display */}
              <div className="p-4 rounded-xl bg-[#0D1B2A] border border-slate-800 mb-6 space-y-2">
                <div className="flex items-center justify-between text-xs text-[#BDB8AE]">
                  <span className="font-mono uppercase tracking-wider text-[10px]">Contact Email</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-mono text-white break-all">
                    {SITE_CONFIG.contactEmail}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-[#D4AF37] hover:text-white transition-colors shrink-0"
                    title="Copy Email Address"
                    aria-label="Copy Email Address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Direct Mailto Button */}
              <a
                href={`mailto:${SITE_CONFIG.contactEmail}?subject=Project%20Inquiry%20-%20Jax's%20Analytics`}
                className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-[#0D1B2A] border border-slate-700 hover:border-[#D4AF37] text-xs font-semibold text-[#D4AF37] hover:text-white transition-all mb-4"
              >
                <span>Email Jackson</span>
                <ExternalLink className="w-3.5 h-3.5 ml-2" />
              </a>

              {/* Consultation Details */}
              <div className="space-y-3 pt-4 border-t border-slate-800/80 text-xs text-slate-300">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Tulsa, Oklahoma, USA (Central Time)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#91A4BC] shrink-0" />
                  <span>Typically responds within 24 business hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Confidentiality & non-disclosure respected</span>
                </div>
              </div>
            </div>

            {/* Why Reach Out */}
            <div className="rounded-2xl bg-[#1B263B]/50 border border-slate-800 p-6 space-y-3">
              <h4 className="text-sm font-semibold text-white">What Happens Next?</h4>
              <ol className="space-y-2 text-xs text-[#BDB8AE] list-decimal list-inside">
                <li>I review your requirements, data formats, and goals.</li>
                <li>We correspond by email or arrange a phone call by email.</li>
                <li>We agree on a written scope and quote. Fixed-price projects are 50% upfront and 50% on delivery.</li>
                <li>You receive your files and written instructions, with one revision round included within the agreed scope.</li>
              </ol>
            </div>

          </div>

          {/* Right Column: Interactive Contact & Quote Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#1B263B] border border-slate-800 p-6 sm:p-8 shadow-2xl relative">
              
              {submitted ? (
                /* Post-Submission State */
                <div className="py-6 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center mx-auto text-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                    <Check className="w-8 h-8" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Project Brief Prepared!
                    </h3>
                    <p className="text-sm text-[#BDB8AE] max-w-md mx-auto">
                      Your inquiry has not been sent. Open your email app and press Send, or copy the brief into an email addressed to Jackson.
                    </p>
                  </div>

                  {/* Formatted Brief Preview */}
                  <div className="text-left bg-[#0D1B2A] rounded-xl border border-slate-800 p-4 font-mono text-xs text-slate-300 max-h-48 overflow-y-auto whitespace-pre-wrap">
                    {generateEmailBody()}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={getMailtoUrl()}
                      className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#D4AF37] text-black font-semibold text-sm hover:bg-[#E2C568] shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      <span>Open in Email App</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyBrief}
                      className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm border border-slate-700 transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 mr-2 text-emerald-400" />
                          <span>Brief Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 mr-2" />
                          <span>Copy Brief to Clipboard</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-[#D4AF37] hover:underline"
                    >
                      &larr; Edit Your Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Your Name <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jane Doe"
                        className="w-full px-4 py-3 rounded-xl bg-[#0D1B2A] border border-slate-700 text-white placeholder-slate-500 text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Business Name (Optional) */}
                    <div>
                      <label htmlFor="businessName" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Business Name <span className="text-slate-500 font-normal lowercase">(optional)</span>
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="Company or Practice LLC"
                        className="w-full px-4 py-3 rounded-xl bg-[#0D1B2A] border border-slate-700 text-white placeholder-slate-500 text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"
                      />
                    </div>

                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Email Address <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jane@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#0D1B2A] border border-slate-700 text-white placeholder-slate-500 text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Service Needed Dropdown */}
                    <div>
                      <label htmlFor="service" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Service Needed <span className="text-[#D4AF37]">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#0D1B2A] border border-slate-700 text-white text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"
                      >
                        <option value="excel">Excel &amp; Spreadsheet Solutions (From $100)</option>
                        <option value="analysis">Data Analysis &amp; Visualization (From $250)</option>
                        <option value="python">Python Automation (Custom Quote)</option>
                        <option value="other">General Consulting / Other</option>
                      </select>
                    </div>

                  </div>

                  <div>
                    <label htmlFor="presentation" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Optional PowerPoint add-on</label>
                    <select id="presentation" name="presentation" value={formData.presentation} onChange={handleChange} aria-describedby="presentation-scope" className="w-full px-4 py-3 rounded-xl bg-[#0D1B2A] border border-slate-700 text-white text-sm focus:border-[#D4AF37] focus:outline-none">
                      <option value="">No presentation add-on</option>
                      {PRESENTATION_ADDONS.map((addon) => <option key={addon.id} value={addon.id}>{addon.name} (+${addon.price} USD)</option>)}
                    </select>
                    <p id="presentation-scope" className="text-xs text-[#BDB8AE] mt-2 leading-relaxed">Available with any service. Up to 10 slides, editable PowerPoint and PDF, and one revision round. Added to the main project price. {presentation ? `Additional slides: $${presentation.extraSlidePrice} each. ` : ''}Final scope and total confirmed before work begins.</p>
                  </div>

                  <details className="rounded-xl border border-slate-700 p-4">
                    <summary className="cursor-pointer text-sm font-semibold text-slate-200">Optional project arrangements</summary>
                    <div className="space-y-4 mt-4 text-sm text-slate-300">
                      <label className="flex items-start gap-3"><input type="checkbox" name="exclusiveCode" checked={formData.exclusiveCode} onChange={handleChange} className="mt-1 accent-cyan-400" /><span>Request exclusive rights to newly written project code <span className="block text-xs text-[#BDB8AE] mt-1">Separate quote and signed agreement. We define the code covered before work begins.</span></span></label>
                      <label className="flex items-start gap-3"><input type="checkbox" name="extendedRetention" checked={formData.extendedRetention} onChange={handleChange} className="mt-1 accent-cyan-400" /><span>Request longer file retention for future work <span className="block text-xs text-[#BDB8AE] mt-1">Default deletion is 30 days after completion. A longer period must be agreed in writing.</span></span></label>
                      <a href="#data-handling" className="inline-flex min-h-11 items-center text-xs text-[#D4AF37] hover:underline">Read about file handling and code exclusivity</a>
                    </div>
                  </details>

                  {/* Desired Timeline */}
                  <div>
                    <label htmlFor="timeline" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Desired Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#0D1B2A] border border-slate-700 text-white text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"
                    >
                      <option value="Immediate / Within 1 week">Immediate / Within 1 week</option>
                      <option value="1-2 weeks">1-2 weeks</option>
                      <option value="2-4 weeks">2-4 weeks</option>
                      <option value="Flexible / Exploring options">Flexible / Exploring options</option>
                    </select>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label htmlFor="description" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Project Description <span className="text-[#D4AF37]">*</span>
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      required
                      rows={4}
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Describe your current spreadsheets, reporting challenges, data volume, or desired automation outcomes..."
                      className="w-full px-4 py-3 rounded-xl bg-[#0D1B2A] border border-slate-700 text-white placeholder-slate-500 text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl text-base font-bold text-black bg-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:bg-[#E2C568] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] active:scale-98 transition-all duration-200"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      <span>Prepare Inquiry Email</span>
                    </button>
                  </div>

                  {/* Note on Static Form Processing & Privacy */}
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#0D1B2A]/60 border border-slate-800 text-[11px] text-[#BDB8AE]">
                    <Info className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>
                      This form prepares an email; it does not send your inquiry. On the next screen, open your email app or copy the brief, then send it to Jackson.
                    </span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
