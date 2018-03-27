import slugify from 'slugify'
import _chunk from 'lodash/chunk'
import _shuffle from 'lodash/shuffle'

export const slug = (str = "") => slugify(str, {
    replacement: '-',
    remove: null,
    lower: true
  })

export const isBigScreen = (width) => {
  return width === "xl" || width === "lg"
}

export const processArrayData = (data = [], {filter = null, limit = null, random = null}) => {

  if(!Array.isArray(data) || !data.length)
  {
      console.log("provided data is not an array or array is empty")
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
