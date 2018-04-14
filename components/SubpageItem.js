
import React from 'react';
import MyTypography from './MyTypography';
import SubPageLink from './SubPageLink'


const SubPageItem = (props) => {

  const {src, name, id, subpage} = props;

  if(!src)
  {
    return (
      <MyTypography template="LIH3" >
        <SubPageLink {...props} />
      </MyTypography>
    )
  }

  return (

    <h3>
        <SubPageLink {...props}  />
    </h3>

  )
}

export default SubPageItem
