export default function HorizontalInput() {
  return (
    <>
      <div className="input-box">
        <input type="text"></input>
      </div>
      <div className="input-box">
        <label>name</label>
        <input type="text"></input>
      </div>
      <div className="input-group-box">
        <div className="input-box">
          <label>name</label>
          <input type="text"></input>
        </div>
        <div className="input-box">
          <label>name</label>
          <input type="text"></input>
        </div>
      </div>
      <div className="input-group-box">
        <div className="input-box">
          <input type="text"></input>
        </div>
        <div className="input-box">
          <input type="text"></input>
        </div>
        <div className="input-box">
          <input type="text"></input>
        </div>
      </div>

      <style jsx>{`
        .input-box {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .input-box + .input-box {
          margin-top: 10px;
        }
        label + input {
          margin-left: 8px;
        }
        label {
          font-size: 15px;
          min-width: 100px;
        }
        .input-group-box {
          display: flex;
          margin-top: 10px;
        }
        .input-group-box .input-box {
          flex: 1;
          margin-top: 0;
        }
        .input-group-box .input-box + .input-box {
          margin-left: 10px;
        }
      `}</style>
    </>
  );
}
