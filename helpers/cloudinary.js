

import _get from 'lodash/get'

export const CLOUDINARY_REGEX = /^.+\.cloudinary\.com\/(?:[^\/]+\/)(?:(image|video)\/)?(?:(upload|fetch)\/)?(?:(?:[^_/]+_[^,/]+,?)*\/)?(?:v(\d+|\w{1,2})\/)?([^\.^\s]+)(?:\.(.+))?$/;

export const getCloudinaryAsset = (url, skipVersion = false) => {

    const segments = CLOUDINARY_REGEX.exec(url)

    if(!segments){
        return null;
    }

    return skipVersion ? segments[4] : `v${segments[3]}/${segments[4]}`;
  
} 

export const getPresenterOgImage = (
    participant,
    template = 'template_tehkrk_presenter_pl'
  ) => {
    
    const avatar = getCloudinaryAsset(_get(participant, "avatar"));
    const logotype = getCloudinaryAsset(_get(participant, "logotype"), true)

    const avatarTrans = `c_fit,h_200,q_90,r_max,w_200`;
    const templateTrans = `g_center,u_${template},x_200,y_-25`;
    const logotypeTrans = `c_fit,g_center,l_${logotype},w_300,h_200,x_175,y_25`;

    return `https://res.cloudinary.com/eventjuicer/image/upload/${avatarTrans}/${templateTrans}/${logotypeTrans}/${avatar}.png`;
    
};



export const getPresenterFbAd = (
    participant,
    template = 'template_tehkrk_presenter_pl_square'
  ) => {
    
    const avatar = getCloudinaryAsset(_get(participant, "avatar"));
    const logotype = getCloudinaryAsset(_get(participant, "logotype"), true)

    const avatarTrans = `c_fit,h_500,q_90,r_max,w_500,e_grayscale`;
    const templateTrans = `g_center,u_${template},x_0,y_200`;
    const logotypeTrans = `c_fit,g_center,l_${logotype},w_400,h_250,x_0,y_250`;

    return `https://res.cloudinary.com/eventjuicer/image/upload/${avatarTrans}/${templateTrans}/${logotypeTrans}/${avatar}.png`;
    
};

