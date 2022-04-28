export default function Radios() {
  return (
    <>
      <div className="radio-box">
        <input type="radio" id="radio" name="r1"></input>
        <label htmlFor="radio">Default Radio</label>
      </div>
      <div className="radio-box">
        <input type="radio" id="radio2" name="r1"></input>
        <label htmlFor="radio2">Default Radio</label>
      </div>

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
    </>
  );
}
