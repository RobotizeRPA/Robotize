import axios from "axios";

export const getBlog = async (number: number) => {
  try {
    const apiData = await axios.get(
      `https://robotizeweb-production.up.railway.app/news/rpa/${number}`
    );
    return apiData.data;
  } catch (error) {
    console.log("Error");
  }
};

export const getBlogNote = async (title: string, section: string) => {
  let titleUrl = title.replace(/-/g, " ");
  titleUrl = titleUrl.replace(/%E2%80%9C/g, '“')
  titleUrl = titleUrl.replace(/%E2%80%9D/g, '“')
  titleUrl = titleUrl.replace(/%C3%B1/g, 'ñ')
  titleUrl = titleUrl.replace(/%3A/g, ':')
  titleUrl = titleUrl.replace(/%C2%A1/g, '¡')
  titleUrl = titleUrl.replace(/%C3%B3/g, 'ó')
  titleUrl = titleUrl.replace(/%F0%9F%9A%80/g, '🚀')
  
  try {
    const apiData = await axios.get(
      `https://robotizeweb-production.up.railway.app/news/article/${titleUrl}`
      );
    return apiData.data;
  } catch (error) {
    console.log(error);
  }
};
