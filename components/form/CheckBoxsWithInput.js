export default function CheckBoxsWithInput() {
  return (
    <>
      <div className="input-box">
        <label>with input</label>
        <input type="text" />
        <div className="check-box">
          <input type="checkbox" id="check7"></input>
          <label htmlFor="check7">Default Checkbox</label>
        </div>
      </div>
    </>
  );
}
