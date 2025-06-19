import React from 'react';
import {Helmet} from 'react-helmet';

interface HelmetProps {
    title:string , 
    description : string ,
    keywords?: string,
    image?: string, 
    url : string 
}

const SEO : React.FC<HelmetProps> = ({ 
    title, 
    description,
    keywords = 'MEC, Alumni, Model Engineering College, Student Cell',
    image = 'https://placehold.co/1200x630.png?text=OG+Preview+Test',
    url
        }) => {
            return (
                <Helmet>
                  <title>{title}</title>
                  <meta name="description" content={description} />
                  <meta name="keywords" content={keywords} />
                  <meta name="author" content="Alumni Relations Cell, MEC" />
                  <link rel="canonical" href={url} />
            
                  {/* Open Graph */}
                  <meta property="og:title" content={title} />
                  <meta property="og:description" content={description} />
                  <meta property="og:image" content={image} />
                  <meta property="og:url" content={url} />
                  <meta property="og:type" content="website" />
                  <meta property="og:site_name" content="Model Engineering College" />
            
                  {/* Twitter */}
                  <meta name="twitter:card" content="summary_large_image" />
                  <meta name="twitter:title" content={title} />
                  <meta name="twitter:description" content={description} />
                  <meta name="twitter:image" content={image} />
                </Helmet>
            )};


            export default SEO;