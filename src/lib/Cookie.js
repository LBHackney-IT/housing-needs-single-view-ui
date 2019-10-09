import Cookies from 'js-cookie'
import jwt from 'jsonwebtoken';

export const isLoggedIn = function(){
    const hackneyToken = Cookies.get('hackneyToken')
    if(hackneyToken){
        let payload = jwt.decode(hackneyToken);
        if(payload.iss === 'Hackney'){
            return true
        }
    }
    return false;
}

export const saveToken = function(token){
    Cookies.set('hackneyToken', token, { expires: 7 })
}

export const hackneyToken = function(token){
    return Cookies.get('hackneyToken');
}
