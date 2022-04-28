import { HTML } from "../../constants/highlight/Radios";
import HighlightGroup from "../shared/HighlightGroup";

export default function Radios() {
  return (
    <>
      <div className="radio-box">
        <input type="radio" id="radio" name="r1" defaultChecked></input>
        <label htmlFor="radio">Default Radio</label>
      </div>
      <div className="radio-box">
        <input type="radio" id="radio2" name="r1"></input>
        <label htmlFor="radio2">Default Radio</label>
      </div>

      {/* radio group */}
      <div className="radio-box-group">
        <div className="radio-box">
          <input type="radio" id="radio3" name="r2"></input>
          <label htmlFor="radio3">Default Radio</label>
        </div>
        <div className="radio-box">
          <input type="radio" id="radio4" name="r2"></input>
          <label htmlFor="radio4">Default Radio</label>
        </div>
        <div className="radio-box">
          <input type="radio" id="radio5" name="r2"></input>
          <label htmlFor="radio5">Default Radio</label>
        </div>
        <div className="radio-box">
          <input type="radio" id="radio6" name="r2"></input>
          <label htmlFor="radio6">Default Radio</label>
        </div>
      </div>

      {/* button radio */}
      <div className="btn-radio-box-group">
        <div className="radio-box">
          <input type="radio" id="radio7" name="r3" defaultChecked></input>
          <label htmlFor="radio7">Button Radio</label>
        </div>
        <div className="radio-box">
          <input type="radio" id="radio8" name="r3"></input>
          <label htmlFor="radio8">Button Radio</label>
        </div>
        <div className="radio-box">
          <input type="radio" id="radio9" name="r3"></input>
          <label htmlFor="radio9">Button Radio</label>
        </div>
        <div className="radio-box">
          <input type="radio" id="radio10" name="r3"></input>
          <label htmlFor="radio10">Button Radio</label>
        </div>
      </div>
      <HighlightGroup html={HTML} />
    </>
  );
}
