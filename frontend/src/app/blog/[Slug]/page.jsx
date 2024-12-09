import qs from "qs";
import WidthWrapper from "@/components/common/WidthWrapper";
import Blog from "@/components/section/Blog";
import fetchData from "@/service/fetchData";
import React from "react";

export async function generateMetadata({ params }) {
  try {
    const { blogs } = await dataFetch(params?.Slug);

    const defaultTitle = blogs.data[0]?.attributes?.Title || "KnoPrice Blogs";
    const defaultDescription =
      "Discover in-depth reviews, guides, and the latest updates on gadgets, laptops, and more.";
    const defaultUrl = `https://www.knoprice.com/blog/${params?.Slug}`;
    const defaultImage = "https://www.knoprice.com/default-image.png";
    const defaultSiteName = "KnoPrice";
    const defaultKeywords =
      "KnoPrice, blogs, gadgets, reviews, Price in Nepal, Mobile price in Nepal";
    const defaultRobots = "index, follow";

    if (blogs?.data?.length > 0) {
      const attributes = blogs.data[0]?.attributes || {};
      const seo = attributes?.seo || {};
      const metaSocial = seo.metaSocial || [];

      const facebookMeta =
        metaSocial.find((social) => social.socialNetwork === "Facebook") || {};
      const twitterMeta =
        metaSocial.find((social) => social.socialNetwork === "Twitter") || {};

      const metaImageUrl =
        seo?.metaImage?.data?.attributes?.url ||
        facebookMeta?.image?.data?.attributes?.url ||
        twitterMeta?.image?.data?.attributes?.url ||
        defaultImage;

      return {
        title: seo.metaTitle || attributes?.Title || defaultTitle,
        description: seo.metaDescription || defaultDescription,
        openGraph: {
          title: facebookMeta.title || seo.metaTitle || defaultTitle,
          description:
            facebookMeta.description ||
            seo.metaDescription ||
            defaultDescription,
          type: "website",
          locale: "en_IE",
          url: seo.canonicalURL || defaultUrl,
          siteName: defaultSiteName,
          images: [
            {
              url: metaImageUrl,
              width: seo?.metaImage?.data?.attributes?.width || 1366,
              height: seo?.metaImage?.data?.attributes?.height || 768,
              alt:
                seo?.metaImage?.data?.attributes?.alternativeText ||
                "Blog Featured Image",
            },
          ],
        },
        twitter: {
          title: twitterMeta.title || seo.metaTitle || defaultTitle,
          description:
            twitterMeta.description ||
            seo.metaDescription ||
            defaultDescription,
          cardType: "summary_large_image",
          images: [
            {
              url: metaImageUrl,
              alt:
                seo?.metaImage?.data?.attributes?.alternativeText ||
                "Blog Featured Image",
            },
          ],
        },
        robots: seo.metaRobots || defaultRobots,
        viewport: seo.metaViewport || "width=device-width, initial-scale=1",
        keywords: seo.keywords || defaultKeywords,
        canonical: seo.canonicalURL || defaultUrl,
        structuredData: seo.structuredData
          ? JSON.parse(seo.structuredData)
          : {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: seo.metaTitle || attributes?.Title || defaultTitle,
              description: seo.metaDescription || defaultDescription,
              image: metaImageUrl,
              url: seo.canonicalURL || defaultUrl,
              author: {
                "@type": "Person",
                name:
                  attributes?.author_infos?.data?.attributes?.Name ||
                  "KnoPrice",
              },
              publisher: {
                "@type": "Organization",
                name: defaultSiteName,
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.knoprice.com/logo.png",
                },
              },
              datePublished:
                attributes?.publishedAt || new Date().toISOString(),
            },
      };
    }
  } catch (error) {
    console.error("Error generating metadata:", error);
  }

  // Default metadata if no blog data is found or on error
  return {
    title: defaultTitle,
    description: defaultDescription,
    openGraph: {
      title: defaultTitle,
      description: defaultDescription,
      type: "website",
      locale: "en_IE",
      url: "https://www.knoprice.com/",
      siteName: defaultSiteName,
      images: [
        {
          url: defaultImage,
          width: 1366,
          height: 768,
          alt: "Default Blog Image",
        },
      ],
    },
    twitter: {
      title: defaultTitle,
      description: defaultDescription,
      cardType: "summary_large_image",
      images: [
        {
          url: defaultImage,
          alt: "Default Blog Image",
        },
      ],
    },
    robots: defaultRobots,
    viewport: "width=device-width, initial-scale=1",
    keywords: defaultKeywords,
  };
}

const page = async ({ params }) => {
  const { blogs } = await dataFetch(params.Slug);

  return (
    <WidthWrapper>
      <Blog blogs={blogs} />
    </WidthWrapper>
  );
};

export default page;

const dataFetch = async (slug) => {
  const blogQuery = qs.stringify({
    populate: [
      "seo.metaSocial.image",
      "FeaturedImage",
      "createdBy",
      "author_infos",
    ],
    filters: {
      Slug: slug,
    },
  });
  try {
    const blogs = await fetchData(`api/blogs`, blogQuery);
    return { blogs };
  } catch (error) {
    return { error: error.message };
  }
};
