import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Twitter } from 'lucide-react';
import Section from '../components/common/Section';
import { Card } from '../components/common/Card';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  email?: string;
  linkedin?: string;
  twitter?: string;
}


const studentCoordinators: TeamMember[] = [
  {
    name: 'Rahul Sharma',
    role: 'Student Coordinator',
    bio: 'Final year Computer Science student who liaises between the alumni cell and current students, coordinating campus events.',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    email: 'rahul.s2023@mec.ac.in',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Aisha Khan',
    role: 'Student Coordinator',
    bio: 'Third-year Electrical Engineering student who manages social media channels and assists in organizing alumni-student interaction programs.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    email: 'aisha.k2024@mec.ac.in',
    linkedin: '#',
  },
  {
    name: 'Vignesh Menon',
    role: 'Technical Coordinator',
    bio: 'Final year IT student who manages the technical aspects of alumni events, including webinars and virtual reunions.',
    image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    email: 'vignesh.m2023@mec.ac.in',
    twitter: '#',
  },
  {
    name: 'Meera Suresh',
    role: 'Creative Coordinator',
    bio: 'Third-year Electronics student who handles design and creative aspects for alumni events and publications.',
    image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    email: 'meera.s2024@mec.ac.in',
    linkedin: '#',
  },
];


const TeamMemberCard: React.FC<{ member: TeamMember; index: number }> = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full overflow-hidden group hover:shadow-md transition-shadow">
        <div className="aspect-square overflow-hidden">
          <img 
            src={member.image} 
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
          <p className="text-primary-600 font-medium mb-3">{member.role}</p>
          <p className="text-gray-700 mb-4 text-sm">{member.bio}</p>
          <div className="flex gap-2">
            {member.email && (
              <a href={`mailto:${member.email}`} className="p-2 text-gray-600 hover:text-primary-600 transition-colors">
                <Mail size={18} />
              </a>
            )}
            {member.linkedin && (
              <a href={member.linkedin} className="p-2 text-gray-600 hover:text-primary-600 transition-colors">
                <Linkedin size={18} />
              </a>
            )}
            {member.twitter && (
              <a href={member.twitter} className="p-2 text-gray-600 hover:text-primary-600 transition-colors">
                <Twitter size={18} />
              </a>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const TeamPage: React.FC = () => {
  return (
    <>
      {/* Student Coordinators Section */}
      <Section 
        title="Our Team"
        subtitle="Meet the dedicated individuals who work behind the scenes to strengthen our alumni community."
        className="bg-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {studentCoordinators.map((member, index) => (
            <TeamMemberCard key={index} member={member} index={index} />
          ))}
        </div>
      </Section>

      {/* Join the Team Section */}
      <section className="bg-primary-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Team</h2>
            <p className="text-primary-100 mb-8 text-lg">
              We're always looking for passionate alumni volunteers to help strengthen our community. If you're interested in contributing your time and skills, we'd love to hear from you.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center rounded-md font-medium transition-colors h-12 px-6 text-base bg-white text-primary-700 hover:bg-primary-50"
            >
              Get Involved
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TeamPage;