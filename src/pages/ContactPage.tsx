import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import Section from '../components/common/Section';
import Button from '../components/common/Button';

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server here
    console.log('Form data submitted:', formState);
    setFormSubmitted(true);
    setFormState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    // Reset form submission status after 5 seconds
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary-700">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Contact Us
            </motion.h1>
            <motion.p 
              className="text-lg text-secondary-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Have questions or suggestions? We'd love to hear from you.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Details & Form Section */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-700 mb-8">
              Whether you have a question about our programs, want to volunteer, or need assistance with your alumni account, our team is here to help. Reach out to us using any of the contact methods below.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-secondary-50 flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="text-secondary-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
                  <p className="text-gray-700">
                    Alumni Connect Cell<br />
                    Govt. Model Engineering College<br />
                    Thrikkakara, Kochi - 682021<br />
                    Kerala, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-secondary-50 flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="text-secondary-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                  <p className="text-gray-700">
                    General Inquiries: <a href="mailto:alumni@mec.ac.in" className="text-secondary-600 hover:text-secondary-700">alumni@mec.ac.in</a><br />
                    Support: <a href="mailto:alumni.support@mec.ac.in" className="text-secondary-600 hover:text-secondary-700">alumni.support@mec.ac.in</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-secondary-50 flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="text-secondary-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                  <p className="text-gray-700">
                    Office: <a href="tel:+91-484-2575370" className="text-secondary-600 hover:text-secondary-700">+91-484-2575370</a><br />
                    Helpline: <a href="tel:+91-484-2577030" className="text-secondary-600 hover:text-secondary-700">+91-484-2577030</a>
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-3">Office Hours</h3>
              <p className="text-gray-700 mb-1">Monday to Friday: 9:00 AM - 5:00 PM</p>
              <p className="text-gray-700">Saturday: 9:00 AM - 1:00 PM (By appointment only)</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              {formSubmitted ? (
                <motion.div 
                  className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 flex items-start gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Message Sent!</h3>
                    <p>Thank you for reaching out. We'll get back to you shortly.</p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Membership">Membership</option>
                      <option value="Events">Events</option>
                      <option value="Volunteering">Volunteering</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:border-transparent"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="secondary" 
                    size="lg"
                    className="w-full flex items-center justify-center"
                  >
                    <Send size={18} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Map Section */}
      <Section className="bg-gray-50 py-12">
        <div className="rounded-xl overflow-hidden shadow-md">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.0456135318118!2d76.32748711481262!3d10.031995692830621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c5006493d51%3A0x150ceb58255ae812!2sModel%20Engineering%20College!5e0!3m2!1sen!2sin!4v1664276515419!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="MEC Map Location"
          />
        </div>
      </Section>

      {/* FAQ Section */}
      <Section 
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our alumni network and services."
        className="bg-white"
      >
        <div className="max-w-3xl mx-auto mt-8">
          <div className="space-y-6">
            {[
              {
                question: "How do I update my alumni profile?",
                answer: "You can update your profile by logging into your account on the alumni portal. Navigate to the profile section and click on 'Edit Profile' to make changes to your information."
              },
              {
                question: "I've forgotten my login credentials. What should I do?",
                answer: "On the login page, click on the 'Forgot Password' link. Enter your registered email address, and we'll send you instructions to reset your password."
              },
              {
                question: "How can I connect with other alumni from my batch?",
                answer: "Our alumni directory allows you to search for and connect with fellow alumni. You can filter by batch, department, location, and other criteria to find specific individuals."
              },
              {
                question: "I want to organize a batch reunion. Can the Alumni Cell help?",
                answer: "Yes, we provide support for batch reunions. Please contact us with details about your plan, and our team will assist you with coordination, venue arrangements, and communication."
              },
              {
                question: "How can I contribute to the alumni community?",
                answer: "There are many ways to contribute: volunteer for alumni initiatives, participate in mentorship programs, share job opportunities, donate to scholarship funds, or speak at events. Contact us to discuss how you can get involved."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default ContactPage;