import { createClient } from "pexels";

const { REACT_APP_PEXELS_API_KEY } = process.env;

export default async function pexelsApi(page = 1, query = "animals") {
  const client = createClient(REACT_APP_PEXELS_API_KEY);

  if (query === "") {
    query = "animals";
  }

  try {
    const photos = await client.photos.search({ query, page, per_page: 20 });
    return photos;
  } catch (error) {
    console.log(error);
  }
}
