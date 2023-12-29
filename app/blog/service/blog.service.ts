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
  try {
    const apiData = await axios.get(
      `${process.env.PETICION_BACK}/news/article/${titleUrl}`
      );
    console.log(apiData.data)
    return apiData.data;
  } catch (error) {
    console.log(error);
  }
};
