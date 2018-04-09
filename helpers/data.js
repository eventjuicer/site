
import _get from 'lodash/get'
import _filter from 'lodash/filter'


export const fullUrl = (subpage) => {

  const prefix = 'https://targiehandlu.pl';
  if (subpage.substr(0, prefix.length) !== prefix)
  {
    return prefix + subpage;
  }

  return subpage;
}


export const getCompanyProfileInfo = (company, key) => _get(company, `profile.${key}`, "")


export const getCompanyLogotype = (company, scale = true) => {
  const cdn = getCompanyProfileInfo(company, "logotype_cdn")
  if(cdn && /cloudinary/.test(cdn)){
    return !scale ? cdn : cdn.replace(/v[0-9]+/, "w_600,c_limit");
  }
  const original = getCompanyProfileInfo(company, "logotype")
  if(original && /^http/.test(original)) return original
  return "/static/logo-placeholder.jpg"
}


export const getCompanyOgImage = (company) => {
  const baseImage = getCompanyLogotype(company, false)
  return getCompanyOgImage;
}


export const filterCompanyInstances = (company, eventId) => _filter(company, function(i){
  if(i.event_id == eventId && i.formdata &&  "id" in i.formdata && i.sold)
  {
    return true;
  }

  return false;
});
