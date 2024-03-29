import Fetch from "@lib/fetcher";

const url = "http://localhost:3000/api";

const clientAxios = new Fetch(url, { revalidation: 60 * 15 }); // 15 minutes

export default clientAxios;
