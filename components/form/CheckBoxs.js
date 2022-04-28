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

      <style jsx>{`
        .check-box + .check-box {
          margin-top: 10px;
        }
        .check-box label::before {
          content: "";
          display: inline-block;
          width: 20px;
          height: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
          vertical-align: middle;
          margin-right: 10px;
        }
        .check-box input[type="checkbox"]:checked + label::before {
          background: #424874;
          border-color: #424874;
        }
        .check-box-group {
          display: flex;
          margin-top: 30px;
        }
        .check-box-group .check-box + .check-box {
          margin-top: 0;
          margin-left: 30px;
        }
        .input-box label + input[type="checkbox"] {
          margin-top: 10px;
        }
        .input-box {
          margin-top: 10px;
        }
        .input-box input + .check-box {
          margin-top: 5px;
        }
      `}</style>
    </>
  );
}
