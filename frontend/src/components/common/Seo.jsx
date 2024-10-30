import Head from "next/head";
import React from "react";

const Seo = () => {
  //   const { title, description, url, shareImage, keywords, preventIndexing } =
  //     seo;

  return (
    <Head>
      <title>
        Next.js SEO: The Complete Checklist to Boost Your Site Ranking
      </title>
      <meta
        name="description"
        content="Learn how to optimize your Next.js website for SEO by following this complete checklist."
      />
      <meta
        name="keywords"
        content="nextjs seo complete checklist, nextjs seo tutorial"
      />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta property="og:site_name" content="Blog | Minh Vu" />
      <meta property="og:locale" content="en_US" />
      <meta
        property="og:title"
        content="Next.js SEO: The Complete Checklist to Boost Your Site Ranking"
      />
      <meta
        property="og:description"
        content="Learn how to optimize your Next.js website for SEO by following this complete checklist."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://dminhvu.com/nextjs-seo" />
      <meta
        property="og:image"
        content="https://ik.imagekit.io/dminhvu/assets/nextjs-seo/thumbnail.png?tr=f-png"
      />
      <meta property="og:image:alt" content="Next.js SEO" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="article:published_time"
        content="2024-01-11T11:35:00+07:00"
      />
      <meta
        property="article:modified_time"
        content="2024-01-11T11:35:00+07:00"
      />
      <meta
        property="article:author"
        content="https://www.linkedin.com/in/dminhvu02"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@dminhvu02" />
      <meta name="twitter:creator" content="@dminhvu02" />
      <meta
        name="twitter:title"
        content="Next.js SEO: The Complete Checklist to Boost Your Site Ranking"
      />
      <meta
        name="twitter:description"
        content="Learn how to optimize your Next.js website for SEO by following this complete checklist."
      />
      <meta
        name="twitter:image"
        content="https://ik.imagekit.io/dminhvu/assets/nextjs-seo/thumbnail.png?tr=f-png"
      />
    </Head>

    // <Head>
    //   <title>{title}</title>
    //   <meta name="description" content={description} key="description" />
    //   <meta name="keywords" content="{keywords}" />
    //   <meta
    //     name="twitter:card"
    //     content="summary_large_image"
    //     key="twitter:card"
    //   />
    //   <meta property="og:url" content={url} key="og:url" />
    //   <meta property="og:title" content={title} key="og:title" />
    //   <meta
    //     property="og:description"
    //     content={description}
    //     key="og:description"
    //   />
    //   <meta property="og:image" content={shareImage} key="og:image" />
    //   <link rel="canonical" href={url} />

    //   {preventIndexing && (
    //     <>
    //       <meta name="robots" content="noindex"></meta>
    //       <meta name="googlebot" content="noindex"></meta>
    //     </>
    //   )}
    // </Head>
  );
};

export default Seo;
