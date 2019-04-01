const fetch = require('isomorphic-unfetch');
const slugify = require('slugify');

function slug(str = '', replacement = '-'){
  return slugify(str, {
    replacement: replacement,
    remove: null,
    lower: true
  })
}

async function companies() {

    const data = await fetch("https://api.eventjuicer.com/v1/public/hosts/targiehandlu.pl/exhibitors").then(response => response.json());
    
    if("data" in data && Array.isArray(data.data)){

      return data.data.map(item => {

        const name = item.profile.name.length > 2 ? item.profile.name : item.slug

        return `/${slug(name)},c,${item.id}`

      })

    }

    return [];
}

module.exports = companies