export default function CheckBoxsWithInput() {
  return (
    <>
      <div className="input-box">
        <label>with input</label>
        <input type="text" />
        <div className="chk-box">
          <input type="checkbox" id="check11"></input>
          <label htmlFor="check11">Default Checkbox</label>
        </div>
      </div>

      <div className="input-box">
        <label>with input</label>
        <div className="with-chk-box-row">
          <input type="text" />
          <div className="chk-box">
            <input type="checkbox" id="check12"></input>
            <label htmlFor="check12">Default Checkbox</label>
          </div>
        </div>
      </div>
    </>
  );
}
