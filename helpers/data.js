
import _get from 'lodash/get'
import _filter from 'lodash/filter'
import { getUrlParams } from './links'


export const getCompanyProfileInfo = (company, key) => _get(company, `profile.${key}`, "")


export const getCdnResource = (company, key, scale = true) => {
  const cdn = getCompanyProfileInfo(company, `${key}_cdn`)
  if(cdn && /cloudinary/.test(cdn)){
    return !scale ? cdn : cdn.replace(/v[0-9]+/, "w_600,h_600,c_fit");
  }
  return false
}


export const getPresenterOgImage = (participant) => {

  const avatarTrans = `g_west,x_150,y_25,w_220,h_220,l_p_${participant.id}_avatar,c_fit,r_max`
  const logotypeTrans = `g_east,x_150,y_25,w_220,h_220,l_p_${participant.id}_logotype,c_fit`

  return `http://res.cloudinary.com/eventjuicer/image/upload/${avatarTrans}/${logotypeTrans}/template_speaker.png`

}

export const getCompanyAltOgImage = (company, url) => {

  const params = getUrlParams(url)

  if("utm_content" in params && params.utm_content !== "logotype") {
    const cdn = getCdnResource(company, params.utm_content, false)
    if(cdn){
      return wrapImage(`c_${company.id}_${params.utm_content}`, "template_raw", "h_504,w_960")
    }
  }

  return getCompanyOgImage(company)
}

export const getCompanyLogotype = (company, scale = true) => {

  const cdn = getCdnResource(company, "logotype", true)

  if(cdn) return cdn

  const original = getCompanyProfileInfo(company, "logotype")
  if(original && /^http/.test(original)) return original

  return "/static/logo-placeholder.jpg"
}

export const wrapImage = (overlayImage, baseImage, params = `h_220,w_600,y_30`) => {
  return `https://res.cloudinary.com/eventjuicer/image/upload/c_fit,l_${overlayImage},${params}/${baseImage}.png`

}

export const getCompanyOgImage = (company) => {

  const cdn = getCdnResource(company, "logotype", false)

  if(!cdn)
  {
    return getCompanyLogotype(company, true)
  }

  if(getCompanyProfileInfo("countries") !== "national")
  {
    return wrapImage(`c_${company.id}_logotype`, "template_4_en")
  }

  return wrapImage(`c_${company.id}_logotype`, "template_4_pl")

}


export const filterCompanyInstances = (company, eventId) => _filter(company, function(i){
  if(i.event_id == eventId && i.formdata &&  "id" in i.formdata && i.sold)
  {
    return true;
  }

  return false;
});
