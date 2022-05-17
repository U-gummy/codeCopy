import { HTML } from "../../constants/highlight/form/VerticalInput";
import HighlightGroup from "../shared/HighlightGroup";

export default function VerticalInput() {
  return (
    <>
      <div className="input-box">
        <input type="text" />
      </div>
      <div className="input-box">
        <label>name</label>
        <input type="text" />
      </div>
      <div className="input-group-box">
        <div className="input-box">
          <label>name</label>
          <input type="text" />
        </div>
        <div className="input-box">
          <label>name</label>
          <input type="text" />
        </div>
      </div>
      <div className="input-group-box">
        <div className="input-box">
          <input type="text" />
        </div>
        <div className="input-box">
          <input type="text" />
        </div>
        <div className="input-box">
          <input type="text" />
        </div>
      </div>
      <HighlightGroup html={HTML} />
    </>
  );
}
