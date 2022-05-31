import { createClient } from "pexels";

// TODO: Remove this after testing
const REACT_APP_PEXELS_API_KEY = "563492ad6f917000010000019d58ba3eb0634945adfb4704f73c4255";

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
