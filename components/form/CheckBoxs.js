export default function CheckBoxs() {
  return (
    <>
      <div className="check-box">
        <input type="checkbox" id="check"></input>
        <label htmlFor="check">Default Checkbox</label>
      </div>
      <div className="check-box">
        <input type="checkbox" id="check2"></input>
        <label htmlFor="check2">Default Checkbox</label>
      </div>

      <div className="check-box-group">
        <div className="check-box">
          <input type="checkbox" id="check3"></input>
          <label htmlFor="check3">Default Checkbox</label>
        </div>
        <div className="check-box">
          <input type="checkbox" id="check4"></input>
          <label htmlFor="check4">Default Checkbox</label>
        </div>
        <div className="check-box">
          <input type="checkbox" id="check5"></input>
          <label htmlFor="check5">Default Checkbox</label>
        </div>
        <div className="check-box">
          <input type="checkbox" id="check6"></input>
          <label htmlFor="check6">Default Checkbox</label>
        </div>
      </div>
    </>
  );
}
