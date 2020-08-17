



//npm install accept-language-parser

import fetch from 'isomorphic-unfetch'
import defaultTranslations from "../../../server/public-bundle.json";
import cache from "../../../server/cache";

const translationUrl = `https://localise.biz/api/export/all.json?format=multi&pretty&key=SHiwxgKaPMx_KThQH2zcdzwiKEMzuNBm`;


function handleErrors(response) {
  if (!response.ok) {
      throw Error(response.statusText);
  }
  return response;
}


async function getTexts(purge) {


  if (purge) {
    console.log("Destroying cache...")
    cache.del(translationUrl);
  }

  if (!cache.has(translationUrl)) {
    
    const data = await fetch(translationUrl, {timeout : 2000})
    .then(handleErrors)
    .then(response => response.json())
    .catch(error => defaultTranslations);
    
    cache.set(translationUrl, data);

    return data;
  } else {

    return cache.get(translationUrl);
  }
}

export default async (req, res) => {

    const {purge} = req.query

    const texts = await getTexts(purge);

    res.status(200).json(texts)
}


