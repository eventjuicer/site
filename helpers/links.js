
import {slug} from './text'


export const generateLinkParams = (name, subpage, id) => ({

  as : `/${ slug(name) },${ subpage.charAt(0) },${ id }`,
  href : `/${ subpage }?id=${ id }`

})
