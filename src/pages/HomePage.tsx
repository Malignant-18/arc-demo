import React from 'react';
import { ArrowRight, Calendar, Users, BookOpen, Award, ChevronRight, Globe, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../components/common/Section';
import { Card, CardContent } from '../components/common/Card';
import Button from '../components/common/Button';

const HomePage: React.FC = () => {
  return (
    <>      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden mt-0">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 to-primary-900/80" />
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Connect with Your <span className="text-primary-400">MEC</span> Community
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join thousands of Model Engineering College alumni in a vibrant network of professionals, 
                innovators, and leaders shaping the future across the globe.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="primary" 
                  size="lg"
                  className="group"
                  onClick={() => window.location.href = '/auth'}
                >
                  Join the Network
                  <ChevronRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button 
                  variant="outline"
                  size="lg" 
                  className="border-white text-white hover:bg-white/10"
                  onClick={() => window.location.href = '/about'}
                >
                  Learn More
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12">
                <div>
                  <h3 className="text-4xl font-bold text-white mb-2">10K+</h3>
                  <p className="text-gray-400">Alumni Network</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-white mb-2">50+</h3>
                  <p className="text-gray-400">Countries</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-white mb-2">500+</h3>
                  <p className="text-gray-400">Companies</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-primary-500/20 rounded-lg blur-lg"></div>
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Alumni Network"
                  className="relative rounded-lg shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ 
                y: [0, 15, 0],
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <Section 
        className="bg-white py-24"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6">Why Join Our Network?</h2>
            <p className="text-lg text-gray-600">
              Discover the benefits of being part of the MEC alumni community and how it can help advance your career.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="text-primary-600" size={32} />,
                title: 'Network',
                description: 'Connect with former classmates and expand your professional network globally.',
              },
              {
                icon: <Calendar className="text-primary-600" size={32} />,
                title: 'Events',
                description: 'Participate in exclusive alumni events, workshops, and networking sessions.',
              },
              {
                icon: <BookOpen className="text-primary-600" size={32} />,
                title: 'Mentorship',
                description: 'Get guidance from industry experts or become a mentor to help others grow.',
              },
              {
                icon: <Award className="text-primary-600" size={32} />,
                title: 'Recognition',
                description: 'Celebrate achievements and get recognized in our alumni community.',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center mb-6">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Latest Events Section */}
      <Section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
              <p className="text-lg text-gray-600">
                Don't miss out on these exciting opportunities to connect and grow with fellow alumni.
              </p>
            </div>
            <Link to="/activities" className="hidden md:flex items-center text-primary-600 hover:text-primary-700 font-medium">
              View All Events
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Annual Alumni Meet 2025',
                date: 'March 15, 2025',
                location: 'MEC Campus',
                image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                category: 'Networking'
              },
              {
                title: 'Tech Leadership Summit',
                date: 'April 8, 2025',
                location: 'Virtual Event',
                image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                category: 'Workshop'
              },
              {
                title: 'Global Alumni Day',
                date: 'May 22, 2025',
                location: 'Multiple Locations',
                image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                category: 'Celebration'
              }
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 rounded-full text-sm font-medium">
                        {event.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <div className="space-y-2 text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <Globe size={16} className="mr-2" />
                        {event.location}
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link to="/activities" className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
              View All Events
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Newsletter Section */}
      <Section className="bg-primary-900 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold mb-6">Stay Connected</h2>
              <p className="text-xl text-primary-200 mb-8">
                Subscribe to our newsletter and stay updated with the latest news, events, and opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-6 py-3 rounded-lg bg-white/10 border border-primary-700 text-white placeholder-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-500 min-w-[300px]"
                />
                <Button variant="secondary" size="lg" className="whitespace-nowrap">
                  <Mail size={18} className="mr-2" />
                  Subscribe Now
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
              <p className="text-xl mb-8 text-primary-100">
                Become part of a growing network of successful professionals and make meaningful connections.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="min-w-[200px]"
                  onClick={() => window.location.href = '/auth'}
                >
                  Join Now
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="min-w-[200px] border-white text-white hover:bg-white/10"
                  onClick={() => window.location.href = '/contact'}
                >
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;