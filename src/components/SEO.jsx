import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "OakInfra Construction & Infrastructure | Arif Kapshikar Civil Engineer | Best Architect in Sangli Miraj Maharashtra",
  description = "OakInfra Construction & Infrastructure led by Arif Kapshikar - Premier civil engineering and architecture services in Sangli, Miraj, Maharashtra. Expert in residential, commercial, hospital construction, interior design, and structural engineering.",
  keywords = "Arif Kapshikar, civil engineer in Sangli, best architect in Maharashtra, architect in Sangli, architect in Miraj, OakInfra, oakinfra construction, construction company Sangli, building contractor Sangli, residential construction Sangli, commercial construction Miraj, hospital construction Maharashtra, interior designer Sangli, structural engineer Miraj, construction services Maharashtra, best builder in Sangli, top architect Miraj, civil engineering services Sangli, architectural design Maharashtra, construction contractor Sangli Miraj, building design Sangli, modern architecture Maharashtra, luxury construction Sangli, premium builder Miraj, construction company Maharashtra, infrastructure development Sangli",
  canonical = "https://oakconstructions.vercel.app"
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "OakInfra Construction & Infrastructure",
    "image": "https://oakconstructions.vercel.app/oakinfra-logo.jpeg",
    "description": description,
    "founder": {
      "@type": "Person",
      "name": "Arif Kapshikar",
      "jobTitle": "Civil Engineer & Architect"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Sangli",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "16.8524",
      "longitude": "74.5815"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Sangli"
      },
      {
        "@type": "City",
        "name": "Miraj"
      },
      {
        "@type": "State",
        "name": "Maharashtra"
      }
    ],
    "priceRange": "$$",
    "telephone": "+91-XXXXXXXXXX",
    "url": canonical,
    "sameAs": [
      "https://www.facebook.com/oakconstructions",
      "https://www.instagram.com/oakconstructions"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Construction Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Construction",
            "description": "Premium residential building construction services in Sangli and Miraj"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Construction",
            "description": "Expert commercial building and office construction services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hospital Construction",
            "description": "Specialized hospital and healthcare facility construction"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Interior Design",
            "description": "Modern interior design and space planning services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Architectural Design",
            "description": "Innovative architectural design and planning services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Structural Engineering",
            "description": "Professional structural engineering and consultation"
          }
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      {/* Hidden SEO Content for Search Engines */}
      <div className="sr-only" aria-hidden="true">
        <h1>Arif Kapshikar - Civil Engineer and Best Architect in Sangli Miraj Maharashtra</h1>
        <p>OakInfra Construction & Infrastructure is the leading construction company in Sangli and Miraj, Maharashtra, founded by renowned civil engineer Arif Kapshikar. We specialize in residential construction, commercial buildings, hospital construction, interior design, and architectural services.</p>
        <h2>Our Services in Sangli and Miraj</h2>
        <ul>
          <li>Civil Engineering Services in Sangli</li>
          <li>Best Architect in Maharashtra</li>
          <li>Residential Construction in Sangli Miraj</li>
          <li>Commercial Building Construction</li>
          <li>Hospital and Healthcare Facility Construction</li>
          <li>Interior Design Services in Sangli</li>
          <li>Structural Engineering Consultation</li>
          <li>Architectural Design and Planning</li>
          <li>Building Contractor Services in Maharashtra</li>
          <li>Premium Construction Company in Sangli</li>
          <li>Infrastructure Development in Sangli Miraj</li>
        </ul>
        <h2>Why Choose OakInfra Construction & Infrastructure?</h2>
        <p>As the top-rated construction company in Sangli and Miraj, we bring over 15 years of experience in delivering exceptional construction projects. Our founder, Arif Kapshikar, is a certified civil engineer and architect with expertise in modern construction techniques and sustainable building practices.</p>
        <h3>Service Areas</h3>
        <p>We proudly serve Sangli, Miraj, and surrounding areas in Maharashtra with comprehensive construction and architectural services. Our team of expert engineers, architects, and builders ensures quality construction that stands the test of time.</p>
      </div>
    </>
  );
};

export default SEO;
