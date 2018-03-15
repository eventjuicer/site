import slugify from 'slugify'


export const slug = (str = "") => slugify(str, {
    replacement: '-',
    remove: null,
    lower: true
  })

export const isBigScreen = (width) => {
  return width === "xl" || width === "lg"
}
