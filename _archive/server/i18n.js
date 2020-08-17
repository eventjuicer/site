const fetch = require('isomorphic-unfetch');
const translationUrl = `https://localise.biz/api/export/all.json?format=multi&pretty&key=SHiwxgKaPMx_KThQH2zcdzwiKEMzuNBm`;
const defaultTranslations = require("./public-bundle.json");


function handleErrors(response) {
  if (!response.ok) {
      throw Error(response.statusText);
  }
  return response;
}


async function getTexts(cache, purge) {
  if (purge) {
    cache.del(translationUrl);
  }

  if (!cache.has(translationUrl)) {
    
    const data = await fetch(translationUrl, {timeout : 2000}).then(handleErrors).then(response => response.json()).catch(error => defaultTranslations);

    cache.set(translationUrl, data);
   // console.log('API/texts not found! Fetching and caching...');
    return data;
  } else {
   //console.log('API/texts resolved from cache!');
    return cache.get(translationUrl);
  }
}

module.exports = { getTexts };

