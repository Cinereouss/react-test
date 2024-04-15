import {ToggleBtn} from "../components/toggle";
import {useState} from "react";

export function TestPage(){
  const [checkStatus, setCheckStatus] = useState(false);
  const [checkStatus2, setCheckStatus2] = useState(false);

  const handleChangeCheckedStatus = (status) => {
    setCheckStatus(status);
  }

  const handleChangeCheckedStatus2 = (status) => {
    setCheckStatus2(status);
  }

  return (
    console.log("Render test page"),
      <>
        <h1>Status toggle is: {checkStatus ? "True" : "False"}</h1>

        <h1>Status toggle 2 is: {checkStatus2 ? "True" : "False"}</h1>

        <ToggleBtn changeCheckedCallback={handleChangeCheckedStatus} defaultChecked={checkStatus}/>

        <ToggleBtn changeCheckedCallback={handleChangeCheckedStatus2} defaultChecked={checkStatus2}/>
      </>
  );
}
