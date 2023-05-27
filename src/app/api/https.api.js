import axios from 'axios';
const processResponse = true;
  //Request Method
function  request(name, postData, method, queryString, authusertoken) {
    //Check Internet connection is in working mode
    const connection = navigator.onLine ? true : false;
    if (!connection) {
      Notification(
        "error",
        "Please check your Internet connection and try again",
        ""
      );
      return false;
    }
    if (queryString === undefined) {
      queryString = '';
    }
    //Get token value from cookie
    let authtoken = '';
    const BaseUrl = process.env.NODE_ENV === "development" ? process.env.REACT_APP_API_BASE_URL_DEVELOPMENT : process.env.REACT_APP_API_BASE_URL;
    const token = authusertoken;
    authtoken = `${token}`;
    return new Promise(function (resolve, reject) {
      var url = BaseUrl+name;
      if (method === undefined) {
        method = "post";
      }
      axios
        .request({
          method: method,
          url: url,
          data: postData,
          headers: { "Content-Type": "application/json", 'authorization': authtoken}
        })
        .then(async response => {
          if (processResponse) {
            resolve(response);
          } else {
            resolve(response);
          }
        })
        .catch(function (err) {
          resolve(err.response);
        });
    });
  }


export default request;
