export const HTML = `<div className="input-box">
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
`;

export const CSS = `
.input-box + .input-box {
  margin-top: 10px;
}
label + input {
  margin-top: 5px;
}
label {
  font-size: 15px;
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
`;
