import slugify from 'slugify'


export const slug = (str) => slugify(str, {
    replacement: '-',
    remove: null,
    lower: true
  })
