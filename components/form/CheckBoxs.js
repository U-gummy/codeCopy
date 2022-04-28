import { HTML } from "../../constants/highlight/CheckBoxs";
import HighlightGroup from "../shared/HighlightGroup";

export default function CheckBoxs() {
  return (
    <>
      <div className="chk-box">
        <input type="checkbox" id="check" defaultChecked></input>
        <label htmlFor="check">Default Checkbox</label>
      </div>
      <div className="chk-box">
        <input type="checkbox" id="check2"></input>
        <label htmlFor="check2">Default Checkbox</label>
      </div>

      {/* checkbox group */}
      <div className="chk-box-group">
        <div className="chk-box">
          <input type="checkbox" id="check3"></input>
          <label htmlFor="check3">Default Checkbox</label>
        </div>
        <div className="chk-box">
          <input type="checkbox" id="check4"></input>
          <label htmlFor="check4">Default Checkbox</label>
        </div>
        <div className="chk-box">
          <input type="checkbox" id="check5"></input>
          <label htmlFor="check5">Default Checkbox</label>
        </div>
        <div className="chk-box">
          <input type="checkbox" id="check6"></input>
          <label htmlFor="check6">Default Checkbox</label>
        </div>
      </div>

      {/* button checkbox */}
      <div className="btn-chk-box-group">
        <div className="chk-box">
          <input type="checkbox" id="check7" defaultChecked></input>
          <label htmlFor="check7">Button Checkbox</label>
        </div>
        <div className="chk-box">
          <input type="checkbox" id="check8"></input>
          <label htmlFor="check8">Button Checkbox</label>
        </div>
        <div className="chk-box">
          <input type="checkbox" id="check9"></input>
          <label htmlFor="check9">Button Checkbox</label>
        </div>
        <div className="chk-box">
          <input type="checkbox" id="check10"></input>
          <label htmlFor="check10">Button Checkbox</label>
        </div>
      </div>
      <HighlightGroup html={HTML} />
    </>
  );
}
