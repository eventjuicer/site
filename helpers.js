import slugify from 'slugify'
import _chunk from 'lodash/chunk'
import _shuffle from 'lodash/shuffle'
import _filter from 'lodash/filter';


export const escapeHtml = (text) => {
  var map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };

  return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

export const stripTags = (html) => {

  var html = "<p>Some HTML</p>";
  var div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";

}


export const validateToken = token => {
  return /^[a-z0-9]{32,40}$/.test(token);
};

export const lsGet = key => JSON.parse(localStorage.getItem(key))

export const lsSet = (key, value) => localStorage.setItem(key, JSON.stringify(value))

export const addToken = (token) => {

  const tokens = lsGet("tokens") || []

  if(tokens.indexOf(token) === -1)
  {
    tokens.push(token)
    lsSet("tokens", tokens)
  }
}

export const slug = (str = "") => slugify(str, {
    replacement: '-',
    remove: null,
    lower: true
  })

export const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
}


export const isBigScreen = (width) => {
  return width === "xl" || width === "lg"
}

export const processArrayData = (data = [], {filter = null, limit = null, random = null}) => {

  if(!Array.isArray(data) || !data.length)
  {
      return [];
  }

  if(filter)
  {
    data = data.filter(row => filter(row));
  }

  if(random)
  {
    data = _shuffle(data);
  }



  if(limit && data.length > limit)
  {
    data = data.slice(0, limit);
  }



  return data;
}

export const chunkArrayData = (data = [], width = "md", params) => {

  data = processArrayData(data, params);

  let chunks;

  switch(width)
  {
      case "xs":
        chunks = 1
      break

      case "sm":
        chunks = 2
      break

      case "md":
        chunks = 3
      break

      case "lg":
        chunks = 4
      break

      case "xl":
        chunks = 4
      break

      default:
        chunks = 2
  }

  const chunkSize = Math.round(data.length / chunks );

  data  = chunkSize ? _chunk(data, chunkSize) : data;

  return data;

}


export const filterCompanyInstances = (company, eventId) => _filter(company, function(i){
  if(i.event_id == eventId && i.formdata &&  "id" in i.formdata && i.sold)
  {
    return true;
  }

  return false;
});

export const prepareForTranslate = (src) => {

  let str = src
  let params = {}

  if(Array.isArray(src) && src.length)
  {
      str = src[0]

      if (typeof src[1] !== 'undefined')
      {
        params = src[1]
      }
  }

  return {str, params}
}

export const fullUrl = (subpage) => {

  const prefix = 'https://targiehandlu.pl';
  if (subpage.substr(0, prefix.length) !== prefix)
  {
    return prefix + subpage;
  }

  return subpage;
}
