import qs from "qs";
import WidthWrapper from "@/components/common/WidthWrapper";
import Blog from "@/components/section/Blog";
import fetchData from "@/service/fetchData";
import React from "react";

export async function generateMetadata({ params }) {
  const { blogs } = await dataFetch(params.Slug);

  if (blogs && blogs.data && blogs.data.length > 0) {
    const seo = blogs.data[0].attributes.seo;

    const facebookMeta = seo?.metaSocial?.find(
      (social) => social.socialNetwork === "Facebook"
    );
    const twitterMeta = seo?.metaSocial?.find(
      (social) => social.socialNetwork === "Twitter"
    );

    return {
      title: seo?.metaTitle || "KnoPrice blogs",
      description: seo?.metaDescription || "This is KnoPrice blogs",
      openGraph: {
        title: facebookMeta?.title || seo?.metaTitle || "KnoPrice blogs",
        description:
          facebookMeta?.description ||
          seo?.metaDescription ||
          "This is KnoPrice blogs",
        type: "website",
        locale: "en_IE",
        url:
          seo?.canonicalURL || `https://www.knoprice.com/blog/${params.Slug}`,
        siteName: "knoprice",
      },
      twitter: {
        title: twitterMeta?.title || seo?.metaTitle || "KnoPrice blogs",
        description:
          twitterMeta?.description ||
          seo?.metaDescription ||
          "This is KnoPrice blogs",
        cardType: "summary_large_image",
      },
      robots: seo?.metaRobots || "index, follow",
      viewport: seo?.metaViewport || "width=device-width, initial-scale=1",
      keywords: seo?.keywords || "",
      canonical: seo?.canonicalURL,
      structuredData: seo?.structuredData
        ? JSON.parse(seo.structuredData)
        : null,
    };
  }

  return {
    title: "KnoPrice blogs",
    description: "This is KnoPrice blogs",
    openGraph: {
      title: "KnoPrice blogs",
      description: "This is KnoPrice blogs",
      type: "website",
      locale: "en_IE",
      url: "https://www.knoprice.com/",
      siteName: "knoprice",
    },
    twitter: {
      handle: "@handle",
      site: "@site",
      cardType: "summary_large_image",
    },
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
    populate: ["seo.metaSocial", "FeaturedImage", "createdBy", "author_infos"],
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
