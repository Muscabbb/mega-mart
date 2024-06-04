import { createClient } from "pexels";

const apiKey = "unzvGqCIVMio7YXOdaf6Jc0KyXY416M0HUs5s9QpzIqdtGzdDD5asKX3";

const client = createClient(apiKey);
const query = "Product";

export const result = client.photos
  .search({ query, per_page: 50 })
  .then((photos) => photos);
