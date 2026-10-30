import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
  schemaJson?: string;
}

export function SEOHead({
  title,
  description,
  canonical,
  ogImage = "https://vibe.filesafe.space/1782851734624712581/assets/8c9c5c40-8ac3-4037-9c86-6c7dfbc4de24.png",
  noIndex = false,
  schemaJson,
}: SEOHeadProps) {
  const baseUrl = "https://thetowingcompanyllc.com";
  
  let absoluteCanonical = canonical;
  if (canonical && canonical.startsWith("/")) {
    absoluteCanonical = `${baseUrl}${canonical}`;
  } else if (canonical && !canonical.startsWith("http")) {
    absoluteCanonical = `${baseUrl}/${canonical}`;
  }

  const currentUrl = absoluteCanonical || (typeof window !== "undefined" ? window.location.href : "");

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {absoluteCanonical && <link rel="canonical" href={absoluteCanonical} />}
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={currentUrl} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {schemaJson && (
        <script type="application/ld+json">{schemaJson}</script>
      )}
    </Helmet>
  );
}
