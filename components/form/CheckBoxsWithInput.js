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

      <style jsx>{`
        .check-box label::before {
          content:'';
          display:inline-block;
          width:20px;
          height:20px;
          border:1px solid #ccc;
          border-radius:5px;
          vertical-align:middle;
          margin-right:10px;
        }
        .check-box input:checked + label::before {
          background:#424874;
          border-color:#424874;
        }
        .input-box label + input {
          margin-top: 10px;
        }
        .input-box input + .check-box {
          margin-top: 10px;
        }
      `}</style>
    </>
  );
}
