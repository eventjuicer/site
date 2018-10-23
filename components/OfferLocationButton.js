import {connect} from 'react-redux'
import { dialogShow } from './redux/actions';
import Button from '@material-ui/core/Button';
import {translate} from '../i18n'
import compose from 'recompose/compose'
import Link from 'next/link';
import { generateLinkParams } from '../helpers';

/*
onClick={() => dialogShow({
        title : "asd",
        content : "dsa",
        buttons : []
    })}
*/

const OfferLocationButton = ({dialogShow, translate, name, subpage, id}) => (
    <Link { ...generateLinkParams(name, subpage, id) }>
     <Button size="small" color="primary">{translate("common.details")}</Button>
    </Link>
   
)

OfferLocationButton.defaultProps = {
    subpage : "company"
}

const enhance = compose(
    connect(null, {dialogShow}),
    translate
)

export default enhance(OfferLocationButton)