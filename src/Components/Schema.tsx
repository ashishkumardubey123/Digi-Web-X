export default function Schema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Digi-WebX",
    url: "https://digiwebx.vercel.app/",
    logo: "https://digiwebx.vercel.app/Nav-logo.png",
    sameAs: [
      "https://www.instagram.com/digi_webx/",
   
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
