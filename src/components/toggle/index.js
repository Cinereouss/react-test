import "./index.scss";
import {useState} from "react";

export function ToggleBtn({changeCheckedCallback, defaultChecked = false}){
  const [checked, setChecked] = useState(defaultChecked);

  const handleChecked = () => {
    changeCheckedCallback(!checked);
    setChecked(!checked);
  }

  return (
    console.log("Render toggle button with checked status: ", checked),
      <>
        <div className='switch'>
          <input type="checkbox" checked={checked}/>
          <span className="slider round" onClick={handleChecked}></span>
        </div>
      </>);
}
