import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Globe, 
  Send, 
  CheckCircle2, 
  Building2, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Mail, 
  AlertCircle,
  Navigation
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  // Frontend validation
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Frontend-only submission
    setSubmitted(true);
    // Clear form state
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setErrors({});
  };

  return (
    <div className="space-y-0">
      {/* ==================================================
          1. CONTACT HERO SECTION
          ================================================== */}
      <section className="relative bg-slate-950 text-white min-h-[380px] sm:min-h-[420px] flex items-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=2200&q=85"
            alt="Skylight Luminous Engineering Office & Infrastructure"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
          <div className="max-w-3xl space-y-5">
            
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-emerald-400 font-semibold">Contact</span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Get In Touch
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
              Have a project in mind or need more information about our services? Get in touch with Skylight Luminous.
            </p>

            {/* Quick Assurance Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-400 border-t border-slate-800/80">
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Technical Consultation</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Prompt Engineering Response</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          2. CONTACT INFORMATION + FORM SECTION
          ================================================== */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* LEFT SIDE: Contact Information (5 Cols) */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                  Direct Inquiries
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Contact Information
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our engineering management and administration office in Lahore coordinates electrical infrastructure, civil works, and testing operations across the region.
                </p>
              </div>

              {/* Information Cards */}
              <div className="space-y-4">
                
                {/* Office Address Card */}
                <div className="p-6 rounded-2xl border border-[#A8BDB3]/50 bg-[#F7F5EF] hover:bg-white hover:border-[#1F6654] hover:shadow-md transition-all duration-200 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#123C32] text-[#C9A45C] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Office Address
                    </h3>
                    <p className="text-base font-bold text-[#202522] leading-snug">
                      {COMPANY_INFO.address}
                    </p>
                    <p className="text-xs text-slate-500">
                      Corporate Head Office
                    </p>
                  </div>
                </div>

                {/* Landline Card */}
                <div className="p-6 rounded-2xl border border-[#1F6654]/40 bg-white hover:border-[#1F6654] hover:shadow-lg transition-all duration-200 flex items-start gap-4 ring-1 ring-[#1F6654]/20">
                  <div className="w-12 h-12 rounded-xl bg-[#1F6654] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Official Landline
                      </h3>
                      <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-[#F7F5EF] text-[#123C32] rounded">
                        Head Office
                      </span>
                    </div>
                    <p className="text-xl font-bold text-[#123C32] leading-snug">
                      <a 
                        href={`tel:${COMPANY_INFO.phone}`} 
                        id="contact-phone-link"
                        className="hover:text-[#1F6654] transition-colors font-mono tracking-tight"
                      >
                        {COMPANY_INFO.phone}
                      </a>
                    </p>
                    <p className="text-xs text-slate-500">
                      Available Monday to Saturday during regular business hours
                    </p>
                  </div>
                </div>

                {/* Website Card */}
                <div className="p-6 rounded-2xl border border-[#A8BDB3]/50 bg-[#F7F5EF] hover:bg-white hover:border-[#1F6654] hover:shadow-md transition-all duration-200 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#123C32] text-[#C9A45C] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Website
                    </h3>
                    <p className="text-base font-bold text-[#202522] leading-snug">
                      <a 
                        href={`https://${COMPANY_INFO.domain}`} 
                        target="_blank" 
                        rel="noreferrer"
                        id="contact-website-link"
                        className="hover:text-[#1F6654] transition-colors"
                      >
                        {COMPANY_INFO.domain}
                      </a>
                    </p>
                    <p className="text-xs text-slate-500">
                      Official company web portal
                    </p>
                  </div>
                </div>

              </div>

              {/* Consultation Note */}
              <div className="p-5 rounded-xl border border-emerald-200/80 bg-emerald-50/60 text-emerald-950 text-xs leading-relaxed space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                  <span>Technical & Tendering Inquiries</span>
                </div>
                <p className="text-emerald-800">
                  For formal bids, bill of quantities (BOQ) submissions, or site survey requests, you may also use our dedicated quote calculator.
                </p>
              </div>

            </div>

            {/* RIGHT SIDE: Modern Contact Form Card (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-10">
                
                {submitted ? (
                  <div className="text-center py-10 sm:py-14 space-y-5 animate-in fade-in duration-300">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                        Thank you for contacting Skylight Luminous. We have received your message.
                      </h3>
                      <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                        Our engineering and administrative personnel will review your inquiry and follow up shortly.
                      </p>
                    </div>
                    <div className="pt-3">
                      <button
                        type="button"
                        id="send-another-message-btn"
                        onClick={() => setSubmitted(false)}
                        className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs tracking-wide transition-colors"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                        Send Us a Message
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        Please fill out the form below and our team will get in touch with you.
                      </p>
                    </div>

                    {/* Full Name */}
                    <div>
                      <label 
                        htmlFor="full-name" 
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="full-name"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) {
                            setErrors({ ...errors, fullName: '' });
                          }
                        }}
                        placeholder="Enter your full name"
                        className={`w-full px-4 py-3 text-sm rounded-lg border transition-colors focus:outline-hidden focus:ring-2 ${
                          errors.fullName 
                            ? 'border-red-400 focus:ring-red-400 bg-red-50/20' 
                            : 'border-slate-300 focus:ring-emerald-500 focus:border-emerald-500'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Email & Phone Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Email Address */}
                      <div>
                        <label 
                          htmlFor="email-address" 
                          className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                        >
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="email-address"
                          type="email"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) {
                              setErrors({ ...errors, email: '' });
                            }
                          }}
                          placeholder="Enter your email address"
                          className={`w-full px-4 py-3 text-sm rounded-lg border transition-colors focus:outline-hidden focus:ring-2 ${
                            errors.email 
                              ? 'border-red-400 focus:ring-red-400 bg-red-50/20' 
                              : 'border-slate-300 focus:ring-emerald-500 focus:border-emerald-500'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1 font-medium">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.email}
                          </p>
                        )}
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label 
                          htmlFor="phone-number" 
                          className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                        >
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="phone-number"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => {
                            setFormData({ ...formData, phone: e.target.value });
                            if (errors.phone) {
                              setErrors({ ...errors, phone: '' });
                            }
                          }}
                          placeholder="Enter your contact number"
                          className={`w-full px-4 py-3 text-sm rounded-lg border transition-colors focus:outline-hidden focus:ring-2 ${
                            errors.phone 
                              ? 'border-red-400 focus:ring-red-400 bg-red-50/20' 
                              : 'border-slate-300 focus:ring-emerald-500 focus:border-emerald-500'
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1 font-medium">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label 
                        htmlFor="subject" 
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                      >
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => {
                          setFormData({ ...formData, subject: e.target.value });
                          if (errors.subject) {
                            setErrors({ ...errors, subject: '' });
                          }
                        }}
                        placeholder="e.g. Inquiring about Substation Testing & Civil Works"
                        className={`w-full px-4 py-3 text-sm rounded-lg border transition-colors focus:outline-hidden focus:ring-2 ${
                          errors.subject 
                            ? 'border-red-400 focus:ring-red-400 bg-red-50/20' 
                            : 'border-slate-300 focus:ring-emerald-500 focus:border-emerald-500'
                        }`}
                      />
                      {errors.subject && (
                        <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label 
                        htmlFor="message" 
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                      >
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) {
                            setErrors({ ...errors, message: '' });
                          }
                        }}
                        placeholder="Please write your project requirements, scope details, or any questions here..."
                        className={`w-full px-4 py-3 text-sm rounded-lg border transition-colors focus:outline-hidden focus:ring-2 ${
                          errors.message 
                            ? 'border-red-400 focus:ring-red-400 bg-red-50/20' 
                            : 'border-slate-300 focus:ring-emerald-500 focus:border-emerald-500'
                        }`}
                      />
                      {errors.message && (
                        <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div>
                      <button
                        type="submit"
                        id="contact-send-message-btn"
                        className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg hover:shadow-emerald-600/20 active:scale-98 transition-all duration-150 gap-2 cursor-pointer min-h-[44px]"
                      >
                        <span>SEND MESSAGE</span>
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          3. LOCATION / MAP SECTION
          ================================================== */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              Corporate Office
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Location
            </h2>
            <div className="flex items-center gap-2 text-base sm:text-lg text-slate-700 font-semibold">
              <MapPin className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <span>{COMPANY_INFO.address}</span>
            </div>
          </div>

          {/* Professional Map-Style Placeholder Card */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="relative h-[340px] sm:h-[420px] bg-slate-900 flex items-center justify-center overflow-hidden">
              {/* Stylized Architectural / Engineering Grid Background */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, #34d399 1px, transparent 1px),
                    linear-gradient(to bottom, #34d399 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px'
                }}
              />
              
              {/* Subtle Map Contours / Geometry Layers */}
              <div className="absolute inset-0 bg-radial from-slate-900/60 via-slate-950/90 to-slate-950" />
              
              <svg className="absolute inset-0 w-full h-full opacity-15 stroke-emerald-400" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="20%" x2="100%" y2="20%" strokeWidth="1" strokeDasharray="6 6" />
                <line x1="0" y1="50%" x2="100%" y2="50%" strokeWidth="1.5" />
                <line x1="0" y1="80%" x2="100%" y2="80%" strokeWidth="1" strokeDasharray="6 6" />
                <line x1="25%" y1="0" x2="25%" y2="100%" strokeWidth="1" strokeDasharray="6 6" />
                <line x1="50%" y1="0" x2="50%" y2="100%" strokeWidth="1.5" />
                <line x1="75%" y1="0" x2="75%" y2="100%" strokeWidth="1" strokeDasharray="6 6" />
                <circle cx="50%" cy="50%" r="90" fill="none" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="50%" cy="50%" r="140" fill="none" strokeWidth="0.75" />
              </svg>

              {/* Pin & Location Marker */}
              <div className="relative z-10 text-center max-w-md mx-auto p-6 space-y-4">
                <div className="relative inline-flex items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-14 w-14 rounded-full bg-emerald-400 opacity-40" />
                  <div className="relative w-14 h-14 rounded-2xl bg-emerald-600 text-white shadow-xl shadow-emerald-950/60 flex items-center justify-center border-2 border-emerald-300">
                    <Building2 className="w-7 h-7" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {COMPANY_INFO.name}
                  </h3>
                  <p className="text-emerald-400 font-semibold text-sm">
                    {COMPANY_INFO.address}
                  </p>
                  <p className="text-xs text-slate-400 pt-1">
                    Lahore, Punjab, Pakistan
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap justify-center gap-3">
                  <span className="inline-flex items-center gap-1.5 text-xs text-slate-300 bg-slate-800/80 px-3.5 py-1.5 rounded-full border border-slate-700">
                    <Navigation className="w-3.5 h-3.5 text-emerald-400" />
                    Engineering & Project Operations Hub
                  </span>
                </div>
              </div>
            </div>

            {/* Sub-bar showing direct accessibility details */}
            <div className="p-6 bg-white border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-600">
              <div className="flex items-center gap-2.5">
                <Building2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Facility: Headquarters & Technical Office</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Visiting Hours: Mon - Sat (8:30 AM - 6:00 PM)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#1F6654] flex-shrink-0" />
                <span>Call Ahead: <a href={`tel:${COMPANY_INFO.phone}`} className="font-semibold text-[#1F6654] hover:underline">Direct Voice Line</a></span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ==================================================
          4. CTA SECTION
          ================================================== */}
      <section className="bg-slate-950 text-white py-16 lg:py-24 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=2000&q=80"
            alt="Engineering Discussion"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-emerald-950/75 z-0" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 mx-auto">
            <Building2 className="w-6 h-6" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Let's Discuss Your Project
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Whether you need testing and commissioning, installation and erection, civil works, substation construction, or maintenance services, our team is ready to discuss your requirements.
          </p>

          <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
            <Link
              to="/get-a-quote"
              id="contact-cta-quote-btn"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-emerald-950/50 transition-all duration-200"
            >
              <span>GET A QUOTE</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
