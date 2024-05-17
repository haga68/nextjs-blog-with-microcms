import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: "blog-nextjs-gaah",
    apiKey: process.env.API_KEY,
});