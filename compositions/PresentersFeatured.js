
import _get from 'lodash/get';

import {
    People,
    Wrapper
  } from '../components';

  import {Presenters} from '../datasources'



const PresentersFeatured = ({filter, limit, text, ...wrapperProps}) => (

<Wrapper {...wrapperProps}>
<Presenters  
  filter={filter}
  limit={limit}
  random={false}
>{

  (data) => <People data={data} text={text} />

}</Presenters>
</Wrapper>
)

PresentersFeatured.defaultProps = {
    label : "presenters.list_featured",
    secondaryLabel : "presenters.list_description",
    filter : function(item){ 
      return item.presentation_title.length > 10 && item.bio.length > 10 && item.avatar.length > 10 && item.logotype.length > 10 
    },
    text : (item) => `${_get(item, 'bio', "").substring(0, 250)}...`,
    limit : 8,
    mobile : 4
}

export default PresentersFeatured;