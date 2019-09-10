import fetch from 'isomorphic-unfetch'
import cache from "../../../server/cache";

const apiUrl = 'https://api.eventjuicer.com/v1/public/hosts/targiehandlu.pl/'

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
  }
  
  
async function getData(req, res) {

    const {endpoint, purge} = req.query;

    const fullApiUrl = `${apiUrl}${endpoint}`

    if (purge) {
      console.log("Destroying cache...")
      cache.del(fullApiUrl);
    }
  
    if (!cache.has(fullApiUrl)) {
      
      const data = await fetch(fullApiUrl, {timeout : 2000})
      .then(handleErrors)
      .then(response => response.json())
      .catch(error => {

      });
      
      if(data && "data" in data){
        cache.set(fullApiUrl, data);
      }

      res.setHeader('x-cache', 'MISS');

      return data;

    } else {
      
      res.setHeader('x-cache', 'HIT');
      
      return cache.get(fullApiUrl);
    }
}



export default async (req, res) => {

  const data = await getData(req, res);
  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate');
  res.status(200).json(data)
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '5mb',
    },
  },
}