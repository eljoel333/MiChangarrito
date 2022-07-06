import { createContext, useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

const Notification = ({ message, severety }) => {
  toast("Wow so easy!");
};

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [msgConfig, setMsgConfig] = useState({
    severity: "success",
    message: "",
  });


  const setNotification = (sev, msg, timeout=3) => {
    setMsgConfig({severity: sev,message: msg,});

    setTimeout(() => {
        setMsgConfig({...msgConfig, message:''});
    }, timeout*1000);
  };
  
  
  return (
    <NotificationContext.Provider value={setNotification}>
        <ToastContainer theme="dark"/>
      {children}
    </NotificationContext.Provider>
  );
};


export const useNotification= ()=>{
    return useContext(NotificationContext)
}
