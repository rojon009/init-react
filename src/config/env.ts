export const getEnv = (key: string, defaultValue?: string): string => {
  const value = import.meta.env[key];
  return value || defaultValue || "";
};

export const env = {
  API_BASE_URL: getEnv("VITE_API_BASE_URL", "http://localhost:3000/api"),
  NODE_ENV: getEnv("NODE_ENV", "development"),
} as const;
