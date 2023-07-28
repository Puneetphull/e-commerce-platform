import {notification} from 'antd';
import '../../../node_modules/antd/dist/antd';
export  const  Notification = (type,message) => {
          notification[type]({
            message: message,
            duration :3,
           
          })
  };

