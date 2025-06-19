import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';
import Section from '../components/common/Section';
import { Card } from '../components/common/Card';
import SEO from '../components/common/SEO';
interface TeamMember {
  name: string;
  role: string;
  image: string;
  email?: string;
  linkedin?: string;
}

const Coordinator: TeamMember = {
  name: 'Dr.Minsfdsdi ',
  role: 'sfgsdfgsfdgsdfgsf',
  image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  email: 'rahul.s2023@mec.ac.in',
  linkedin: '#',
}

const studentCoordinators: TeamMember[] = [
  {
    name: 'Rahul Sharma',
    role: 'Student Coordinator',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    email: 'rahul.s2023@mec.ac.in',
    linkedin: '#',
  },
  {
    name: 'Aiswwha Khan',
    role: 'Student Coordinator',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    email: 'aisha.k2024@mec.ac.in',
    linkedin: '#',
  },
  {
    name: 'Vignesh Menon',
    role: 'Technical Coordinator',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    email: 'vignesh.m2023@mec.ac.in',
    linkedin: '#',
  },
  {
    name: 'Meera Suresh',
    role: 'Creative Coordinator',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    email: 'meera.s2024@mec.ac.in',
    linkedin: '#',
  },
  {
    name: 'Jenssna Khan',
    role: 'Student Coordinator',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    email: 'aisha.k2024@mec.ac.in',
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
      <Card className="h-full overflow-hidden group hover:shadow-md transition-shadow bg-white">
        <div className="aspect-square overflow-hidden">
          <img 
            src={member.image} 
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-1 text-center">{member.name}</h3>
          <p className="text-primary-600 font-medium mb-3 text-center">{member.role}</p>
          <div className="flex justify-center gap-12">
              <a href={member.linkedin} className="p-2 text-gray-600 hover:text-primary-600 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href={member.email} className="p-2 text-gray-600 hover:text-primary-600 transition-colors">
                <Mail size={18} />
              </a>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const TeamPage: React.FC = () => {
  return (
    <>

      <SEO
        title="Alumni Relations Cell, MEC - Our Team"
        description="Meet the dedicated individuals who work behind the scenes to strengthen our alumni community."
        url="https://arc-demo.vercel.app/team"
      />
        {/* Student Coordinators Section */}

      <Section 
        title="OUR TEAM"
        subtitle="Meet the dedicated individuals who work behind the scenes to strengthen our alumni community."
        className="bg-primary-50 text-primary-800 pt-12"
      >
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {studentCoordinators.map((member, index) => (
            <TeamMemberCard key={index} member={member} index={index} />
          ))}
        </div>
      </Section>
      <Section 
        title="FACULTY COORDINATOR"
        subtitle=""
        className="bg-primary-50 text-primary-800 pt-12"
      >
        <div className="flex justify-center">
          <Card className="h-120 w-60 overflow-hidden group hover:shadow-md transition-shadow bg-white">
        <div className="aspect-square overflow-hidden">
          <img 
            src={Coordinator.image} 
            alt={Coordinator.name}
            className="w-60 h-60 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-1 text-center">{Coordinator.name}</h3>
          <p className="text-primary-600 font-medium mb-3 text-center">{Coordinator.role}</p>
          <div className="flex justify-center gap-12">
            <a href={Coordinator.linkedin} className="p-2 text-gray-600 hover:text-primary-600 transition-colors">
          <Linkedin size={18} />
            </a>
            <a href={Coordinator.email} className="p-2 text-gray-600 hover:text-primary-600 transition-colors">
          <Mail size={18} />
            </a>
          </div>
        </div>
          </Card>
          
        </div>
      </Section>
    </>
  );
};

export default TeamPage;
