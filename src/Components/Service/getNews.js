import axios from "axios";

export function getNews(category = 'general'){
  const API_Key = `62084cc56bc346969dcda4e649f53862`;
  const API_Endpoint = `https://newsapi.org/v2/top-headlines?country=us&category=${category}`
  
  return axios.get(`${API_Endpoint}&apiKey=${API_Key}`)
    
}

