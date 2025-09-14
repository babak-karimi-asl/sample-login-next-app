import { TypesValidationResult } from "@/types/validate";

const validate = {

    iranMobileNumber(mobile:string):TypesValidationResult{

        if(mobile?.length===0){
            return 'please enter a phone number.'
        }

        if(mobile?.[0]!=='+' && (!mobile || typeof(mobile)!=='string' || isNaN(+mobile)) ){
            return 'please use digits.'
        }

        /* regex to test against three valid formats:
           09xxxxxxxxx   +989xxxxxxxxx   00989xxxxxxxxx
           starts with 09 , or +989, or 00989 , and has another 9 digits */
        const regex = /^(09\d{9}|\+989\d{9}|00989\d{9})$/;
        const isValid = regex.test(mobile);
        if(isValid) return true;

        else if(mobile.startsWith('09')){
            return 'there must be exactly 9 digits after 09.'
        }else if(mobile.startsWith('+989')){
            return 'there must be exactly 9 digits after +989.'
        }else if(mobile.startsWith('00989')){
            return 'there must be exactly 9 digits after 00989.'
        }else if(!mobile.startsWith('09') || !mobile.startsWith('+989') || !mobile.startsWith('00989')){
            return 'iranian mobile numbers start with one of these three shapes: 09 or +989 or 00989.'
        }

        return 'invalid mobile number.'
    }
}

export default validate;