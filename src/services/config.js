import axios from "axios";

export const http = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn/api",
  timeout: 30000,
  headers: {
    TokenCyberSoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3NiIsIkhldEhhblN0cmluZyI6IjIyLzA0LzIwMjYiLCJIZXRIYW5UaW1lIjoiMTc0NTI4MDAwMDAwMCIsIm5iZiI6MTcxNzA4ODQwMCwiZXhwIjoxNzQ1NDI3NjAwfQ.Iie9ShKU1rDaiIMI3GWj3tVS2uHXQmVigj41m9N7KbQ",
  },
});
