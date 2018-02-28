

import React from 'react'
import Link from 'next/link'
import get from 'lodash/get'
import {slug} from '../helpers';

const Item = ({data}) => (
  <li>
   <Link  as={`/e,${1},${ slug(data.fields.cname2) }`} href={`/exhibitor?id=${ 1 }`}>
     <a>{data.fields.cname2}</a>

   </Link>  {get(data.fields, "booth")}
 </li>
)



class Avatarlist extends React.Component {


render()
{

  const { data } = this.props;

  return (<ul>

    {data && data.map(row => <Item data={row} />)}

  </ul>)
}

}
export default Avatarlist;
