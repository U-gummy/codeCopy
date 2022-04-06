export default function InputTypes() {
  return (
    <>
      <div className="input-group-box">
        <div className="input-box">
          <select>
            <option>선택</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div className="input-box">
          <select>
            <option>선택</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
      </div>
      <div className="input-box with-btn">
        <label>with button</label>
        <input type="text" />
        <button type="button">중복체크</button>
      </div>
      <div className="input-box">
        <label>File input</label>
        <div className="input-file">
          <label>File input</label>
          <input type="text" placeholder="첨부파일" readOnly />
          <input
            type="file"
            id="inputFile"
            name="inputFile[]"
            accept=".jpg, .jpeg, .png"
            multiple
          />
          <label htmlFor="inputFile">첨부파일</label>
        </div>
      </div>

      <style jsx>
        {`
          .input-box + .input-box {
            margin-top: 10px;
          }
          .input-box label + input {
            margin-top: 5px;
          }
          .input-box label {
            font-size: 15px;
          }
          .input-group-box {
            display: flex;
          }
          ..input-group-box + .input-group-box {
            margin-top: 10px;
          }
          .input-group-box .input-box {
            flex: 1;
            margin-top: 0;
          }
          .input-group-box .input-box + .input-box {
            margin-left: 10px;
          }
          .input-group-box + .input-box {
            margin-top: 10px;
          }

           {
            /* With button */
          }

          .input-box {
            position: relative;
          }
          .input-box.with-btn input {
            padding-right: 115px;
          }
          .input-box.with-btn button {
            position: absolute;
            bottom: 0;
            right: 0;
            width: 100px;
            height: 50px;
            background: #424874;
            font-size: 15px;
            text-align: center;
            line-height: 50px;
            color: #fff;
          }
           {
            /* File input */
          }
          .input-box .input-file {
            position: relative;
            margin-top: 10px;
          }
          .input-box .input-file label {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            font-size: 0;
            height: 50px;
          }
          .input-box .input-file label:after {
            content: "첨부파일";
            display: inline-block;
            position: absolute;
            right: 0;
            top: 0;
            width: 100px;
            height: 50px;
            background: #424874;
            font-size: 15px;
            text-align: center;
            line-height: 50px;
            color: #fff;
          }
          .input-box .input-file input[type="file"] {
            display: none;
          }
          .input-box .input-file input[type="text"] {
            padding: 0;
            padding-right: 30px;
            margin-top: 0;
          }
        `}
      </style>
    </>
  );
}
