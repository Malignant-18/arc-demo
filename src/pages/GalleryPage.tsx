import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import Section from '../components/common/Section';
import Button from '../components/common/Button';

type GalleryCategory = 'all' | 'events' | 'reunions' | 'campus' | 'awards';

const galleryItems = [
  {
    id: 1,
    title: 'Annual Alumni Meet 2024',
    category: 'events',
    image: 'https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    title: 'Tech Symposium 2024',
    category: 'events',
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    title: 'Leadership Workshop',
    category: 'events',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    title: 'Batch of 2014 Reunion',
    category: 'reunions',
    image: 'https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 5,
    title: 'Alumni Sports Day',
    category: 'events',
    image: 'https://images.pexels.com/photos/3760524/pexels-photo-3760524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 6,
    title: 'Industry Panel Discussion',
    category: 'events',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 7,
    title: 'Career Fair 2024',
    category: 'events',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 8,
    title: 'Global Alumni Summit',
    category: 'events',
    image: 'https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 9,
    title: 'Campus Innovation Hub',
    category: 'campus',
    image: 'https://images.pexels.com/photos/256520/pexels-photo-256520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 10,
    title: 'Distinguished Alumni Awards 2023',
    category: 'awards',
    image: 'https://images.pexels.com/photos/7034639/pexels-photo-7034639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 11,
    title: 'Alumni Entrepreneurship Meet',
    category: 'events',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 12,
    title: 'Batch of 2010 Reunion',
    category: 'reunions',
    image: 'https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 13,
    title: 'MEC Campus Central Plaza',
    category: 'campus',
    image: 'https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 14,
    title: 'Innovation Challenge Winners',
    category: 'awards',
    image: 'https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 15,
    title: 'Alumni Mentorship Program Launch',
    category: 'events',
    image: 'https://images.pexels.com/photos/3184314/pexels-photo-3184314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 16,
    title: 'Batch of 2005 Silver Jubilee',
    category: 'reunions',
    image: 'https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const getSelectedImage = () => {
    if (selectedImage === null) return null;
    return galleryItems.find(item => item.id === selectedImage);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-accent-700">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Alumni Gallery
            </motion.h1>
            <motion.p 
              className="text-lg text-accent-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              A visual journey through our alumni events, gatherings, and celebrations.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Section className="bg-white">
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
            {[
              { value: 'all', label: 'All' },
              { value: 'events', label: 'Events' },
              { value: 'reunions', label: 'Reunions' },
              { value: 'campus', label: 'Campus' },
              { value: 'awards', label: 'Awards' },
            ].map((category) => (
              <Button
                key={category.value}
                variant={activeCategory === category.value ? 'primary' : 'outline'}
                onClick={() => setActiveCategory(category.value as GalleryCategory)}
                className="min-w-[90px]"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              className="group relative cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(item.id)}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
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
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No images found in this category.</p>
          </div>
        )}
      </Section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-gray-800/50 hover:bg-gray-800"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} />
          </button>
          
          <div className="max-w-4xl w-full max-h-[80vh] relative" onClick={(e) => e.stopPropagation()}>
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              src={getSelectedImage()?.image}
              alt={getSelectedImage()?.title}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4">
              <h3 className="text-white text-xl font-medium">{getSelectedImage()?.title}</h3>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default GalleryPage;