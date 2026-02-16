import { Helmet } from "@dr.pogodin/react-helmet";
import { SITE_URL } from "../../utils/constants";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Utkarsh",
  description = "Full Stack Developer from Chennai, India. Building web applications with React, Node.js, and modern technologies.",
  keywords = "utkarsh, Full Stack Developer, React, Node.js, Web Developer, Portfolio",
  image = "/PfLogo.png",
  url = SITE_URL,
}) => {
  // Structured data for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Utkarsh",
    jobTitle: "Full Stack Developer",
    description: description,
    url: url,
    image: image,
    sameAs: [
      "https://github.com/not-utkarsh201",
      "https://www.linkedin.com/in/not-utkarsh201/",
      "hhttps://x.com/not_utkarsh_",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressCountry: "India",
    },
    knowsAbout: [
      "React",
      "TypeScript",
      "Node.js",
      "Full Stack Development",
      "Web Development",
      "JavaScript",
      "Data Structures",
      "Algorithms",
      "Software Engineering",
      "Competitive Coding",
    ],
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
