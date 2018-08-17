


import React from 'react'
import PropTypes from 'prop-types'
import {MyLink as Link} from '../next'
import { withStyles } from '@material-ui/core/styles';

const styles = {

  spacer : {
    marginRight : 10,
    marginBottom : 10
  }

}

const KeywordSelect = ({ keywords, selected, classes }) => keywords && keywords.map(keyword =>

  <Link
    key={keyword}
    href={`/exhibitors/${keyword}`}
    label={`common.tags.${keyword}`}
    variant={keyword === selected ? "contained" : "outlined"}
    color={keyword === selected ? "primary" : "secondary"}
    className={classes.spacer}
    //disabled={keyword === selected}

  />

);

KeywordSelect.defaultProps = {
  keywords : []
}

KeywordSelect.propTypes = {
  keywords: PropTypes.array.isRequired,
  selected: PropTypes.string

};

export default withStyles(styles)(KeywordSelect);
