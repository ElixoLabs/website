'use client';
import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { BsEnvelope, BsBuilding, BsPerson, BsChatDots } from 'react-icons/bs';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionBadge from '@/components/ui/SectionBadge';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const CornerDot = ({ className }: { className: string }) => (
  <div className={`absolute w-2 h-2 bg-white rounded-[1px] shadow-dot z-50 pointer-events-none ${className}`} />
);

const projectTypeOptions = [
  { value: '', label: 'Select a project type' },
  { value: 'agent', label: 'AI Agent Development' },
  { value: 'platform', label: 'Operational Platform' },
  { value: 'automation', label: 'Workflow Automation' },
  { value: 'product', label: 'Product Engineering (V1)' },
  { value: 'architecture', label: 'Architecture & Strategy' },
  { value: 'other', label: 'Other / Not Sure' },
];

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <section className="relative flex flex-col items-center justify-center px-5 md:px-10 pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden w-full">
        <motion.div
          className="flex flex-col items-center gap-16 max-w-sm md:max-w-5xl w-full relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col items-center gap-4 w-full text-center">
            <motion.div variants={itemVariants}>
              <SectionBadge icon={BsEnvelope} label="Contact" />
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl font-semibold tracking-tight text-dark-200"
            >
              Start a Project
            </motion.h1>

            <motion.p variants={itemVariants} className="text-base text-base-900 max-w-lg">
              Tell us about the system you need. We&apos;ll respond within 24 hours with an honest assessment of whether we can help - and if we can, a brief overview of how we&apos;d approach it.
            </motion.p>
          </div>

          <motion.div
            variants={itemVariants}
            className="relative w-full border border-base-400 bg-white"
          >
            <CornerDot className="-top-1 -left-1" />
            <CornerDot className="-top-1 -right-1" />
            <CornerDot className="-bottom-1 -left-1" />
            <CornerDot className="-bottom-1 -right-1" />

            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="#14e38c"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-dark-200">Thank you!</h3>
                <p className="text-base text-base-900 max-w-sm">
                  Your message has been received. We&apos;ll respond within 24 hours with an honest assessment.
                </p>
                <Button href="/" variant="primary" className="mt-4">
                  Back to Home
                </Button>
              </div>
            ) : (
              <div className="flex flex-col lg:flex-row">
                <div className="flex flex-col gap-6 p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-base-400 lg:w-80 shrink-0">
                  <div className="flex items-center gap-2">
                    <BsEnvelope className="w-4 h-4 text-dark-200" />
                    <h3 className="text-base font-semibold text-dark-200">Email Us</h3>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-sm text-base-900">We respond within 24 hours.</p>
                    <a
                      href="mailto:hello@elixolabs.com"
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      hello@elixolabs.com
                    </a>
                  </div>

                  <div className="w-full h-px bg-base-400" />

                  <div className="flex items-center gap-2">
                    <BsChatDots className="w-4 h-4 text-dark-200" />
                    <h3 className="text-base font-semibold text-dark-200">Response Time</h3>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-sm text-base-900">Fast, substantive responses.</p>
                    <span className="text-sm font-medium text-dark-200">Within 24 hours</span>
                  </div>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="flex-1 flex flex-col gap-5 p-8 lg:p-10"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Input
                      type="text"
                      name="name"
                      label="Name"
                      icon={BsPerson}
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />

                    <Input
                      type="email"
                      name="email"
                      label="Email"
                      icon={BsEnvelope}
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Input
                      type="text"
                      name="company"
                      label="Company"
                      icon={BsBuilding}
                      value={formData.company}
                      onChange={handleChange}
                    />

                    <Select
                      name="subject"
                      label="Project Type"
                      required
                      value={formData.subject}
                      onChange={(e: any) => handleChange(e)}
                      options={projectTypeOptions}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-dark-200">
                      Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-base-400 bg-base-50 text-sm text-dark-200 placeholder:text-base-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors resize-none"
                    />
                  </div>

                  <Button type="submit" variant="primary" icon={false} className="w-full sm:w-auto sm:self-end">
                    Send Message
                  </Button>
                </form>
              </div>
            )}
          </motion.div>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;
