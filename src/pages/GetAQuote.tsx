import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  ArrowRight, 
  Phone, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Target, 
  Users2, 
  ShieldCheck, 
  Clock, 
  Building2,
  FileText
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const GetAQuote: React.FC = () => {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('service') || '';

  // Map URL param if present to matching dropdown value
  const getInitialProjectType = (slug: string) => {
    switch (slug) {
      case 'testing-commissioning':
        return 'Testing & Commissioning Services';
      case 'installation-erection':
        return 'Installation & Erection Services';
      case 'civil-works':
        return 'Civil Works';
      case 'substation-construction':
        return 'Substation Construction';
      case 'maintenance':
        return 'Maintenance Services';
      default:
        return '';
    }
  };

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    projectType: getInitialProjectType(serviceParam),
    projectLocation: '',
    estimatedBudget: '',
    projectDescription: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (serviceParam) {
      const mapped = getInitialProjectType(serviceParam);
      if (mapped) {
        setFormData((prev) => ({ ...prev, projectType: mapped }));
      }
    }
  }, [serviceParam]);

  // Frontend-only validation
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

    if (!formData.projectType.trim()) {
      newErrors.projectType = 'Please select a project type';
    }

    if (!formData.projectLocation.trim()) {
      newErrors.projectLocation = 'Project Location is required';
    }

    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = 'Project Description is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Frontend demo submission
    setSubmitted(true);
    // Clear form
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      projectType: '',
      projectLocation: '',
      estimatedBudget: '',
      projectDescription: ''
    });
    setErrors({});
  };

  return (
    <div className="space-y-0">
      {/* ==================================================
          1. HERO SECTION
          ================================================== */}
      <section className="relative bg-slate-950 text-white min-h-[380px] sm:min-h-[420px] flex items-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2200&q=85"
            alt="Skylight Luminous Engineering and Substation Infrastructure"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
          <div className="max-w-3xl space-y-5">
            
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-emerald-400 font-semibold">Get a Quote</span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Get a Quote
            </h1>

            {/* Supporting text */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
              Tell us about your project and requirements. Our team will review your information and get in touch with you.
            </p>

            {/* Primary Button */}
            <div className="pt-2">
              <Link
                to="/contact"
                id="quote-hero-contact-btn"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm tracking-wide shadow-md transition-all duration-200"
              >
                <span>CONTACT US</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          2. INTRODUCTION SECTION
          ================================================== */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            Project Consultation
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Let's Build Your Project Together
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Whether you require testing and commissioning, installation and erection, civil works, substation construction, or maintenance services, Skylight Luminous is ready to understand your requirements.
          </p>
          <p className="text-sm font-semibold text-emerald-700">
            Provide the details below so we can better understand your project.
          </p>
        </div>
      </section>

      {/* ==================================================
          3. QUOTE REQUEST FORM SECTION
          ================================================== */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-10 lg:p-12">
            
            {/* Form Header */}
            <div className="border-b border-slate-100 pb-6 mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Request a Quote
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fields marked with an asterisk (<span className="text-red-500 font-bold">*</span>) are required.
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                <FileText className="w-4 h-4 text-emerald-600" />
                <span>Lahore Office Evaluation</span>
              </div>
            </div>

            {submitted ? (
              /* Success Message Card */
              <div className="text-center py-10 sm:py-14 space-y-5 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <div className="space-y-2 max-w-lg mx-auto">
                  <h4 className="text-2xl font-bold text-slate-900 tracking-tight">
                    Thank you for your quote request.
                  </h4>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Your project details have been received successfully. Our team will review your requirements.
                  </p>
                </div>
                <div className="pt-4 flex flex-wrap justify-center gap-3">
                  <button
                    type="button"
                    id="submit-another-quote-btn"
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs tracking-wide shadow-md transition-colors"
                  >
                    Submit Another Request
                  </button>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs tracking-wide transition-colors"
                  >
                    Contact Engineering Office
                  </Link>
                </div>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                
                {/* Row 1: Full Name & Company Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* 1. Full Name */}
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
                        if (errors.fullName) setErrors({ ...errors, fullName: '' });
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

                  {/* 2. Company Name */}
                  <div>
                    <label 
                      htmlFor="company-name" 
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      Company Name
                    </label>
                    <input
                      id="company-name"
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="Enter your company name"
                      className="w-full px-4 py-3 text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                </div>

                {/* Row 2: Email Address & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* 3. Email Address */}
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
                        if (errors.email) setErrors({ ...errors, email: '' });
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

                  {/* 4. Phone Number */}
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
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      placeholder="Enter your phone number"
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

                {/* Row 3: Project Type & Project Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* 5. Project Type Dropdown */}
                  <div>
                    <label 
                      htmlFor="project-type" 
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      Project Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="project-type"
                      value={formData.projectType}
                      onChange={(e) => {
                        setFormData({ ...formData, projectType: e.target.value });
                        if (errors.projectType) setErrors({ ...errors, projectType: '' });
                      }}
                      className={`w-full px-4 py-3 text-sm rounded-lg border bg-white transition-colors focus:outline-hidden focus:ring-2 ${
                        errors.projectType 
                          ? 'border-red-400 focus:ring-red-400 bg-red-50/20' 
                          : 'border-slate-300 focus:ring-emerald-500 focus:border-emerald-500'
                      }`}
                    >
                      <option value="">Select Project Type</option>
                      <option value="Testing & Commissioning Services">Testing & Commissioning Services</option>
                      <option value="Installation & Erection Services">Installation & Erection Services</option>
                      <option value="Civil Works">Civil Works</option>
                      <option value="Substation Construction">Substation Construction</option>
                      <option value="Maintenance Services">Maintenance Services</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.projectType && (
                      <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.projectType}
                      </p>
                    )}
                  </div>

                  {/* 6. Project Location */}
                  <div>
                    <label 
                      htmlFor="project-location" 
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      Project Location <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="project-location"
                      type="text"
                      value={formData.projectLocation}
                      onChange={(e) => {
                        setFormData({ ...formData, projectLocation: e.target.value });
                        if (errors.projectLocation) setErrors({ ...errors, projectLocation: '' });
                      }}
                      placeholder="Enter project location"
                      className={`w-full px-4 py-3 text-sm rounded-lg border transition-colors focus:outline-hidden focus:ring-2 ${
                        errors.projectLocation 
                          ? 'border-red-400 focus:ring-red-400 bg-red-50/20' 
                          : 'border-slate-300 focus:ring-emerald-500 focus:border-emerald-500'
                      }`}
                    />
                    {errors.projectLocation && (
                      <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.projectLocation}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 4: Estimated Budget */}
                <div>
                  <label 
                    htmlFor="estimated-budget" 
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    Estimated Budget
                  </label>
                  <input
                    id="estimated-budget"
                    type="text"
                    value={formData.estimatedBudget}
                    onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                    placeholder="Enter estimated budget"
                    className="w-full px-4 py-3 text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                {/* Row 5: 8. Project Description */}
                <div>
                  <label 
                    htmlFor="project-description" 
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    Project Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="project-description"
                    rows={5}
                    value={formData.projectDescription}
                    onChange={(e) => {
                      setFormData({ ...formData, projectDescription: e.target.value });
                      if (errors.projectDescription) setErrors({ ...errors, projectDescription: '' });
                    }}
                    placeholder="Briefly describe your project requirements..."
                    className={`w-full px-4 py-3 text-sm rounded-lg border transition-colors focus:outline-hidden focus:ring-2 ${
                      errors.projectDescription 
                        ? 'border-red-400 focus:ring-red-400 bg-red-50/20' 
                        : 'border-slate-300 focus:ring-emerald-500 focus:border-emerald-500'
                    }`}
                  />
                  {errors.projectDescription && (
                    <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.projectDescription}
                    </p>
                  )}
                </div>

                {/* 9. Request a Quote button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    id="request-quote-submit-btn"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg hover:shadow-emerald-600/20 active:scale-98 transition-all duration-150 gap-2 cursor-pointer min-h-[44px]"
                  >
                    <span>REQUEST A QUOTE</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>
      </section>

      {/* ==================================================
          6. WHY REQUEST A QUOTE SECTION
          ================================================== */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
              Our Commitment
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Why Get in Touch With Us?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-emerald-300 hover:shadow-md transition-all duration-200 space-y-3">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Project-Focused Approach
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dedicated engineering assessment tailored directly to your technical specifications, site conditions, and electrical load requirements.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-emerald-300 hover:shadow-md transition-all duration-200 space-y-3">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Users2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Professional Coordination
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Seamless communication between civil foundations, electrical erection teams, and client management throughout every phase.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-emerald-300 hover:shadow-md transition-all duration-200 space-y-3">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Quality-Conscious Execution
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Adherence to rigorous testing procedures, structural standards, and industry safety protocols for dependable energization.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-emerald-300 hover:shadow-md transition-all duration-200 space-y-3">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Reliable Project Support
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ongoing technical advisory and responsive support from our central office in Lahore during planning, execution, and handover.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ==================================================
          7. CONTACT CTA SECTION
          ================================================== */}
      <section className="bg-slate-950 text-white py-16 lg:py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=2000&q=80"
            alt="Engineering Operations"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-emerald-950/75 z-0" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 mx-auto">
            <Building2 className="w-6 h-6" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Have Questions Before Starting?
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Our team is available to discuss your project requirements and help you choose the right service.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4">
            <Link
              to="/contact"
              id="cta-contact-us-btn"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm tracking-wide shadow-md transition-all duration-200 w-full sm:w-auto min-h-[44px]"
            >
              <span>CONTACT US</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              id="cta-call-phone-btn"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm tracking-wide border border-slate-700 transition-all duration-200 gap-2 w-full sm:w-auto min-h-[44px]"
            >
              <Phone className="w-4 h-4 text-[#C9A45C]" />
              <span>CALL HEAD OFFICE</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
