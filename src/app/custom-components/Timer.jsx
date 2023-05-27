import React, { useState, useEffect } from "react";

export default function Timer(props) {
  let { initialSecond = 0, initialMinutes = 0 } = props;
  const [seconds, setSeconds] = useState(initialSecond);
  const [minutes, setMinutes] = useState(initialMinutes);
  const [showResend,setResend] = useState(false);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
        
          clearInterval(myInterval);
          setResend(true);

        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  const resendOtp = ()=>{
    setMinutes(0);
    setSeconds(59);
    setResend(false);
  }

  return (
    <div className="d-flex justify-content-between align-items-center" >
      {minutes === 0 && seconds === 0 ? <p>{minutes}:0{seconds}</p> : (
        <p>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </p>
      )}
      {showResend ? <p onClick={resendOtp} role="button" disabled={true} >Resend Otp</p> : 
      <></>}
    </div>
  );
}
