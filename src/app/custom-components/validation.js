export function formatDateDB(dateTime){
    let date = new Date(dateTime);
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    return year + "-" + month + "-" + day;
  }
export function hasValidationError(errors, field){
    if(errors.hasOwnProperty(field)){
        return errors[field] ? true : false;
    }
    return null;
  }
  export function validationError(errors,field,Name = null){
    if(errors.hasOwnProperty(field)){
        if(!Array.isArray(errors[field])){
            return errors[field];
        }else{
            return errors[field].toString();
        }
    }
    return null;
  }
 export const focusOnFeild = (name) => {
    if(document.getElementsByName(name)){
        let textbox = document.getElementsByName(name)[0];
        if(textbox){
            textbox.focus();
        }
    }
  }