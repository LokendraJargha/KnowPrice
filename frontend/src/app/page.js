import Hero from "@/components/common/Hero";
import WidthWrapper from "@/components/common/WidthWrapper";
import BestDeals from "@/components/section/BestDeals";
import CompareGadget from "@/components/section/CompareGadget";
import GadgetTabs from "@/components/section/GadgetTabs";
import LatestAvailable from "@/components/section/LatestAvailable";
import TechNews from "@/components/section/TechNews";
import TechStories from "@/components/section/TechStories";
import fetchData from "@/service/fetchData";
import {
  bestDealsQuery,
  blogQuery,
  categoryQuery,
  heroProductQuery,
  productsQuery,
} from "@/lib/apiQuery";

export default async function Home() {
  const { blogs, products, heroProducts, bestDeals, categories } =
    await dataFetch();
  return (
    <>
      <WidthWrapper className="flex lg:flex-row flex-col max-w-screen-xl mx-auto w-full py-3">
        <LatestAvailable products={products} />
        <Hero heroProducts={heroProducts} />
      </WidthWrapper>
      <CompareGadget categories={categories} />
      <BestDeals bestDeals={bestDeals} />
      <WidthWrapper className="flex flex-col items-center xl:flex-row max-w-screen-xl mx-auto w-full md:gap-4 py-3">
        <TechNews blogs={blogs} />
        <GadgetTabs categories={categories} />
      </WidthWrapper>
      <TechStories />
    </>
  );
}

const dataFetch = async () => {
  try {
    const blogs = await fetchData("api/blogs", blogQuery);
    const products = await fetchData("api/products", productsQuery);
    const heroProducts = await fetchData("api/products", heroProductQuery);
    const bestDeals = await fetchData("api/products", bestDealsQuery);
    const categories = await fetchData("api/categories", categoryQuery);
    return {
      blogs,
      products,
      heroProducts,
      bestDeals,
      categories,
    };
  } catch (error) {
    return { error: error.message };
  }
};

// "api/products?populate[0]=Price&populate[1]=categories&populate[2]=sub_categories&populate[3]=Specification.SpecificationList&populate[4]=KeySpecification.Displays.Icon&populate[5]=KeySpecification.Cameras.Icon&populate[6]=KeySpecification.Batteries.Icon&populate[7]=KeySpecification.Storages.Icon&populate[8]=ProductInfo&populate[9]=MobileSpecification.BODY&populate[10]=MobileSpecification.DISPLAY&populate[11]=MobileSpecification.PERFORMANCE&populate[12]=MobileSpecification.MEMORY&populate[13]=MobileSpecification.CONNECTIVITY&populate[14]=MobileSpecification.MEDIA&populate[15]=MobileSpecification.SENSORS&populate[16]=MobileSpecification.BATTERY&populate[17]=MobileSpecification.FRONT_CAMERA&populate[18]=MobileSpecification.MAIN_CAMERA&populate[19]=ProductImage&filters%5BProductInfo%5D[Hero]=true"
