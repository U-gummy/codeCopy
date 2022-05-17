export const HTML = `{/* select */}
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

{/* with button */}
<div className="input-box with-btn">
  <label>with button</label>
  <input type="text" />
  <button type="button">중복체크</button>
</div>

{/* input file */}
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
`;
