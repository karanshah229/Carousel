export const isClient = typeof window !== "undefined";

export const isServer = !isClient;

export const isDev = process.env.NODE_ENV === "development";
