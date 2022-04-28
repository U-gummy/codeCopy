import { CSS, HTML } from "../../constants/highlight/HorizontalInput";
import HighlightGroup from "../shared/HighlightGroup";

export default function HorizontalInput() {
  return (
    <>
      <div className="input-box horizon">
        <label>name</label>
        <input type="text"></input>
      </div>
      <div className="input-group-box">
        <div className="input-box horizon">
          <label>name</label>
          <input type="text"></input>
        </div>
        <div className="input-box horizon">
          <label>name</label>
          <input type="text"></input>
        </div>
      </div>
      <div className="input-group-box">
        <div className="input-box horizon">
          <label>name</label>
          <input type="text"></input>
        </div>
        <div className="input-box">
          <input type="text"></input>
        </div>
        <div className="input-box">
          <input type="text"></input>
        </div>
      </div>
      <HighlightGroup html={HTML} />
    </>
  );
}
