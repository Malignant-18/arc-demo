import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, BookOpen, Medal, ArrowRight } from 'lucide-react';
import Section from '../components/common/Section';
import { Card, CardContent } from '../components/common/Card';
import Button from '../components/common/Button';

const ActivitiesPage: React.FC = () => {
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
              Activities & Events
            </motion.h1>
            <motion.p 
              className="text-lg text-secondary-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Discover our various initiatives and upcoming events designed to strengthen our alumni community.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <Section 
        title="Upcoming Events"
        subtitle="Mark your calendars for these upcoming alumni events and activities."
        className="bg-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[
            {
              title: 'Annual Alumni Meet 2025',
              date: 'March 15, 2025',
              time: '10:00 AM - 5:00 PM',
              location: 'MEC Campus, Thrikkakara',
              description: 'Join us for a day of reconnection, networking, and celebration at our annual alumni gathering.',
              image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            },
            {
              title: 'Career Development Workshop',
              date: 'April 8, 2025',
              time: '2:00 PM - 4:00 PM',
              location: 'Virtual (Zoom)',
              description: 'An interactive workshop focusing on career advancement strategies and industry trends.',
              image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            },
            {
              title: 'Industry-Academia Summit',
              date: 'May 22, 2025',
              time: '9:30 AM - 4:30 PM',
              location: 'Le Meridien, Kochi',
              description: 'A collaborative summit bringing together industry leaders and academic experts to discuss future trends.',
              image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            },
            {
              title: 'Alumni Entrepreneurship Panel',
              date: 'June 10, 2025',
              time: '5:00 PM - 7:00 PM',
              location: 'Virtual (Zoom)',
              description: 'Learn from successful alumni entrepreneurs as they share their journey and insights.',
              image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            },
            {
              title: 'Batch of 2015: 10-Year Reunion',
              date: 'July 18, 2025',
              time: '6:00 PM - 10:00 PM',
              location: 'Crown Plaza, Kochi',
              description: 'A special reunion celebration for the batch that graduated in 2015.',
              image: 'https://images.pexels.com/photos/7648013/pexels-photo-7648013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            },
            {
              title: 'Tech Trends Webinar Series',
              date: 'August 5-7, 2025',
              time: '7:00 PM - 8:30 PM',
              location: 'Virtual (Zoom)',
              description: 'A three-day webinar series exploring the latest technology trends and their implications.',
              image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            },
          ].map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden hover:shadow-md transition-shadow group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent>
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <div className="text-gray-600 mb-4">
                    <p className="mb-1">{event.date}</p>
                    <p className="mb-1">{event.time}</p>
                    <p>{event.location}</p>
                  </div>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="text-primary-600 border-primary-600 hover:bg-primary-50"
                  >
                    Register
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Regular Programs Section */}
      <Section 
        title="Our Programs"
        subtitle="Ongoing initiatives designed to strengthen our alumni community and support current students."
        centered
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {[
            {
              icon: <Medal className="text-primary-600" size={32} />,
              title: 'Mentorship Program',
              description: 'Our structured mentorship program connects experienced alumni with current students and recent graduates. Through this program, mentors provide guidance, share industry insights, and help mentees navigate their early career challenges.',
              features: [
                'One-on-one mentoring sessions',
                'Career guidance and industry insights',
                'Resume and interview preparation',
                'Networking opportunities'
              ],
              cta: 'Become a Mentor'
            },
            {
              icon: <BookOpen className="text-primary-600" size={32} />,
              title: 'Distinguished Alumni Lecture Series',
              description: 'This monthly lecture series features accomplished alumni from various fields who share their expertise, experiences, and insights with the college community. These sessions provide valuable learning opportunities and inspire current students.',
              features: [
                'Expert talks on cutting-edge topics',
                'Industry trends and future outlook',
                'Career journey and lessons learned',
                'Q&A sessions with the speakers'
              ],
              cta: 'Propose a Lecture'
            },
            {
              icon: <Users className="text-primary-600" size={32} />,
              title: 'Alumni Chapters',
              description: 'Our regional and international alumni chapters bring together MEC graduates living in specific geographic areas. These chapters organize local gatherings, networking events, and social activities to strengthen connections among alumni.',
              features: [
                'Regular meetups and social events',
                'Professional networking opportunities',
                'Community service initiatives',
                'Regional cultural celebrations'
              ],
              cta: 'Find Your Chapter'
            },
            {
              icon: <Calendar className="text-primary-600" size={32} />,
              title: 'Industry Connect Program',
              description: 'This program facilitates collaboration between the college and industry through our alumni network. It creates opportunities for internships, projects, and research partnerships that benefit both current students and participating companies.',
              features: [
                'Industry-sponsored projects',
                'Internship opportunities',
                'Campus recruitment drives',
                'Research collaborations'
              ],
              cta: 'Partner With Us'
            }
          ].map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 rounded-full bg-primary-50 flex items-center justify-center mr-4">
                      {program.icon}
                    </div>
                    <h3 className="text-2xl font-semibold">{program.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-6">{program.description}</p>
                  <div className="mb-6">
                    <h4 className="font-medium mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {program.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <ArrowRight size={16} className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button 
                    variant="outline" 
                    className="text-primary-600 border-primary-600 hover:bg-primary-50"
                  >
                    {program.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Past Events Gallery Section */}
      <Section 
        title="Past Events Gallery"
        subtitle="Highlights from our recent alumni events and gatherings."
        className="bg-white"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {[
            {
              title: 'Annual Alumni Meet 2024',
              image: 'https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            },
            {
              title: 'Tech Symposium 2024',
              image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            },
            {
              title: 'Leadership Workshop',
              image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            },
            {
              title: 'Batch of 2014 Reunion',
              image: 'https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            },
            {
              title: 'Alumni Sports Day',
              image: 'https://images.pexels.com/photos/3760524/pexels-photo-3760524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            },
            {
              title: 'Industry Panel Discussion',
              image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            },
            {
              title: 'Career Fair 2024',
              image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            },
            {
              title: 'Global Alumni Summit',
              image: 'https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-square">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4">
                  <h3 className="text-white font-medium">{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View Full Gallery
          </Button>
        </div>
      </Section>

      {/* Get Involved Section */}
      <Section className="bg-primary-700 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Get Involved
          </motion.h2>
          <motion.p
            className="text-lg text-primary-100 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            There are many ways you can contribute to our alumni community. Whether you want to volunteer, share your expertise, or propose an event, we welcome your involvement.
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button 
              variant="secondary" 
              size="lg"
            >
              Volunteer With Us
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              Propose an Event
            </Button>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default ActivitiesPage;