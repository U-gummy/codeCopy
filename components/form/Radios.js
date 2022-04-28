export default function Radios() {
  return (
    <>
      <div className="check-box">
        <input type="radio" id="radio" name="r1"></input>
        <label htmlFor="radio">Default Radio</label>
      </div>
      <div className="check-box">
        <input type="radio" id="radio2" name="r1"></input>
        <label htmlFor="radio2">Default Radio</label>
      </div>

      <div className="check-box-group">
        <div className="check-box">
          <input type="radio" id="radio3" name="r2"></input>
          <label htmlFor="radio3">Default Radio</label>
        </div>
        <div className="check-box">
          <input type="radio" id="radio4" name="r2"></input>
          <label htmlFor="radio4">Default Radio</label>
        </div>
        <div className="check-box">
          <input type="radio" id="radio5" name="r2"></input>
          <label htmlFor="radio5">Default Radio</label>
        </div>
        <div className="check-box">
          <input type="radio" id="radio6" name="r2"></input>
          <label htmlFor="radio6">Default Radio</label>
        </div>
      </div>

      <style jsx>{`
        .check-box + .check-box {
          margin-top: 10px;
        }
        .check-box input[type="radio"]:checked + label {
          position: relative;
        }

        .check-box input[type="radio"] + label::before {
          content: "";
          display: inline-block;
          width: 20px;
          height: 20px;
          border: 1px solid #ccc;
          border-radius: 50%;
          vertical-align: middle;
          margin-right: 10px;
        }
        .check-box input[type="radio"]:checked + label::before {
          border-color: #424874;
        }

        .check-box input[type="radio"]:checked + label::after {
          content: "";
          display: inline-block;
          position: absolute;
          top: 7px;
          left: 5px;
          width: 10px;
          height: 10px;
          background: #424874;
          border-radius: 50%;
        }

        .check-box-group {
          display: flex;
          margin-top: 30px;
        }

        .check-box-group .check-box + .check-box {
          margin-top: 0;
          margin-left: 30px;
        }

        .input-box label + input[type="radio"] {
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
