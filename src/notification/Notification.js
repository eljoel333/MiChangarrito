import { createContext, useContext, useState } from "react";

const Notification = ({ message, severety }) => {
  const NotifiStyle = {
    position: "absolute",
    top: 100,
    right: 5,
    width: "auto",
    height: "auto",
    backgroundColor: severety==='error' ?'red':"green",
    color: "white",
    padding: "10px 20px 10px 20px",
    borderRadius: "10px",
  };
  return <div style={NotifiStyle}>{message}</div>;
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
        {msgConfig.message !==''&& <Notification message={msgConfig.message} severety={msgConfig.severity}></Notification>}
      {children}
    </NotificationContext.Provider>
  );
};


export const useNotification= ()=>{
    return useContext(NotificationContext)
}
