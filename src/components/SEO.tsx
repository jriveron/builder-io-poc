import Head from 'next/head';
import React from 'react';

type SEOProps = {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
};

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  ogImage = '/images/og-image.jpg',
}) => {
  const siteTitle = title ? `${title} | TheFork` : 'TheFork';

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />

      {canonical && <link rel="canonical" href={canonical} />}

      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
};

export default SEO;
