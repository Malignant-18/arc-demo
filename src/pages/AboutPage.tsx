import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, BookOpen, Globe } from 'lucide-react';
import Section from '../components/common/Section';

const AboutPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-700">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About Alumni Connect Cell
            </motion.h1>
            <motion.p 
              className="text-lg text-primary-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Bridging the gap between past, present, and future generations of Model Engineers.
            </motion.p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Government Model Engineering College"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              The Alumni Connect Cell of Government Model Engineering College, Thrikkakara was established in 2005 with the vision of creating a strong network among the alumni community. Over the years, we have grown into a vibrant community connecting thousands of graduates across the globe.
            </p>
            <p className="text-gray-700 mb-4">
              Our cell acts as a bridge between the institution and its alumni, facilitating communication, collaboration, and mutual growth. We organize various events, workshops, and networking opportunities that benefit both current students and alumni.
            </p>
            <p className="text-gray-700">
              Today, the Alumni Connect Cell continues to strengthen the bond between MEC and its graduates, creating a platform for knowledge sharing, mentorship, and professional development.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Mission & Vision Section */}
      <Section className="bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-soft"
          >
            <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mb-6">
              <Target className="text-primary-600" size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-700">
              To build and nurture a strong, engaged alumni community that supports the growth of the institution and its graduates through networking, knowledge sharing, and collaborative initiatives.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-soft"
          >
            <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mb-6">
              <Globe className="text-primary-600" size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-700">
              To create a global network of Model Engineering College alumni who are empowered to contribute to the development of the institution, support fellow graduates, and make a positive impact on society.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Core Values */}
      <Section 
        title="Our Core Values"
        subtitle="The principles that guide our initiatives and relationships within the alumni community."
        centered
        className="bg-white"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {[
            { 
              icon: <Users className="text-primary-600" size={24} />,
              title: 'Community',
              description: 'Building a supportive and inclusive network that fosters meaningful connections among alumni.',
            },
            { 
              icon: <BookOpen className="text-primary-600" size={24} />,
              title: 'Knowledge Sharing',
              description: 'Facilitating the exchange of ideas, expertise, and experiences to promote continuous learning.',
            },
            { 
              icon: <Target className="text-primary-600" size={24} />,
              title: 'Excellence',
              description: 'Striving for the highest standards in all our initiatives and encouraging alumni to pursue excellence.',
            },
            { 
              icon: <Globe className="text-primary-600" size={24} />,
              title: 'Global Perspective',
              description: 'Embracing diversity and cultivating a global mindset among our alumni community.',
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <div className="w-12 h-12 rounded-full bg-white shadow-soft flex items-center justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-700">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* History Timeline */}
      <Section 
        title="Our Journey"
        subtitle="Key milestones in the development of our alumni network"
        className="bg-gray-50"
      >
        <div className="relative mt-12 ">
        <div className=" inset-0 w-full left-1/2 hidden md:block">
  
          
          {[
  {
    stage: 'I',
    title: 'Community Formation',
    description: 'Laying the foundation of the alumni community and gathering early members.',
  },
  {
    stage: 'II',
    title: 'Growth & Events',
    description: 'Organizing events, reunions, and bringing more alumni on board.',
  },
  {
    stage: 'III',
    title: 'Digital Expansion',
    description: 'Launching the online platform and mentorship programs.',
  },
].map((milestone, index) => (
  <motion.div
    key={index}
    className={`relative md:flex items-center  ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    {/* Desktop View */}
    <div className={`hidden md:block w-1/2 ${index % 2 === 1 ? 'md:pr-8' : 'md:pl-8 md:order-last'}`}>
      <div className={`bg-white p-6 rounded-lg shadow-soft ${index % 2 === 0 ? 'ml-8' : 'mr-8'}`}>
        <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
        <p className="text-gray-700">{milestone.description}</p>
      </div>
    </div>

    {/* Stage Circle in Center Line */}
    <div className="absolute h-8 w-8 rounded-full   bg-primary-600 border-4 border-white left-1/2 transform -translate-x-1/2 md:flex items-center justify-center hidden">
      <span className="text-white font-bold text-xs text-center leading-tight">{milestone.stage}</span>
    </div>

    {/* Mobile View */}
    <div className="md:hidden bg-white p-6 rounded-lg shadow-soft mb-6">
      <div className="flex items-center mb-2">
        <span className="bg-primary-600 text-white text-sm font-bold px-3 py-1 rounded-full mr-3">
          {milestone.stage}
        </span>
        <h3 className="text-xl text-red-400 font-semibold">{milestone.title}</h3>
      </div>
      <p className="text-black-700">{milestone.description}</p>
    </div>
  </motion.div>
))}

        </div></div>
      </Section>
    </>
  );
};

export default AboutPage;