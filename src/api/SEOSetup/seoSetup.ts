// "use client";

import { StaticImageData } from "next/image";
import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { IRootState } from "@/store";
// import { addSeoData } from "@/store/store";

interface SeoData {
  title?: string;
  name?: string;
  keywords?: string;

  description?: string;
  icon?: string | StaticImageData;
  url?: string;
  image?: string | StaticImageData;
  short_description?: string;
}

export async function seoData({alias, title, description}: {alias?: string; title?: string; description?: string}): Promise<SeoData | null> {
  //   const dispatch = useDispatch();
  //   const SEOData = useSelector((state: IRootState) => state.themeConfig.SeoData);

  if (!alias) {
    return {
      title: title || "Ensurekar",
      description: description || "Ensurekar",
    };
  }
// return null
  try {
    const URL = '/';//process.env.NEXT_PUBLIC_API_URL;
    const response = await axios.get(`${URL}/api/v1/page/${alias}/`);
    const data = response.data.meta;
console.log("seoData",data)
    const seoData: SeoData = {
      name: data.name,
      title: data.title,
      description: data.description,
      url: data.url,
      short_description: data.short_description,
      image: data.image,
      keywords: data.keywords,
    };
 
    // console.log(seoData);
    // dispatch(addSeoData(seoData));
    // return seoData || SEOData;
    return seoData;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Axios error occurred:",
        error.response?.data || error.message
      );
      return {
        title: error.response?.data.meta?.name,
        description:
          error.response?.data.meta?.description ||
          error.response?.data.meta?.short_description,
      };
    } else {
      console.error("Unknown error occurred:", error);
    }
    return null;
  }
}

 