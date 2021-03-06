export const CSS = `
.input-group-box { display: flex; } 
.input-group-box .input-box { flex: 1; } 
.input-group-box .input-box + .input-box { margin-left: 10px; } 
.input-box { position: relative; align-self: end; margin-top: 15px; } 
.input-box label + input { margin-top: 8px; } 
.input-box label { font-size: 15px; } 

/* with button */
.input-box.with-btn input { padding-right: 115px; } 
.input-box.with-btn button { position: absolute; bottom: 0; right: 0; width: 100px; height: 48px; background: #424874; font-size: 15px; text-align: center; line-height: 48px; color: #fff; } 

/* file input */
.input-box .input-file { position: relative; margin-top: 10px; } 
.input-box .input-file label { position: absolute; top: 0; right: 0; bottom: 0; left: 0; font-size: 0; height: 48px; } 
.input-box .input-file label:after { content: "첨부파일"; display: inline-block; position: absolute; right: 0; top: 0; width: 100px; height: 48px; background: #424874; font-size: 15px; text-align: center; line-height: 48px; color: #fff; } 
.input-box .input-file input[type="file"] { display: none; } 
.input-box .input-file input[type="text"] { padding: 0; padding-right: 30px; margin-top: 0; } 

/* chack box */
.chk-box + .chk-box { margin-top: 15px; } 
.chk-box label::before { content: ""; display: inline-block; width: 20px; height: 20px; border: 1px solid #ccc; border-radius: 5px; vertical-align: middle; margin-right: 10px; } 
.chk-box input[type="checkbox"]:checked + label::before { background: #424874; border-color: #424874; } 
.chk-box-group { display: flex; margin-top: 30px; } 
.chk-box-group .chk-box + .chk-box { margin-top: 0; margin-left: 30px; } 
/* btn checkbox */
.btn-chk-box-group .chk-box label { position:relative; display:inline-block; width:200px; height:40px; text-align:center; line-height:40px; z-index:10; border-radius: 5px; } 
.btn-chk-box-group .chk-box label::before { content: ""; display: inline-block; position: absolute; left:0; top:0; width: 100%; height: 100%; border: 1px solid #ccc; border-radius: 5px; margin-right: 10px; } 
.btn-chk-box-group .chk-box input[type="checkbox"]:checked + label { color:#fff; background: #424874; } 
.btn-chk-box-group .chk-box input[type="checkbox"]:checked + label::before { background: none; border-color: #424874; } 
.btn-chk-box-group { display: flex; margin-top: 30px; } 
.btn-chk-box-group .chk-box + .chk-box { margin-top:0; margin-left: 30px; } 

/* radio box */
.radio-box + .radio-box { margin-top: 15px; } 
.radio-box input[type="radio"] + label::before { content: ""; display: inline-block; width: 20px; height: 20px; border: 1px solid #ccc; border-radius: 50%; vertical-align: middle; margin-right: 10px; } 
.radio-box input[type="radio"]:checked + label { position: relative; } 
.radio-box input[type="radio"]:checked + label::before { border-color: #424874; } 
.radio-box input[type="radio"]:checked + label::after { content: ""; display: inline-block; position: absolute; top: 7px; left: 5px; width: 10px; height: 10px; background: #424874; border-radius: 50%; } 
.radio-box-group { display: flex; margin-top: 30px; } 
.radio-box-group .radio-box + .radio-box { margin-top: 0; margin-left: 30px; } 
/* btn radio */ /*TODO: btn checkbox 와 코드 같음. 개선 필요 */
.btn-radio-box-group .radio-box input[type="radio"] + label { position:relative; display:inline-block; width:200px; height:40px; text-align:center; line-height:40px; z-index:10; border-radius: 5px; } 
.btn-radio-box-group .radio-box input[type="radio"] + label::before { content: ""; display: inline-block; position: absolute; left:0; top:0; width: 100%; height: 100%; border: 1px solid #ccc; border-radius: 5px; margin-right: 10px; } 
.btn-radio-box-group .radio-box input[type="radio"]:checked + label { color:#fff; background: #424874; } 
.btn-radio-box-group .radio-box input[type="radio"]:checked + label::before { background: none; border-color: #424874; } 
.btn-radio-box-group .radio-box input[type="radio"]:checked + label::after { display: none; } 
.btn-radio-box-group { display: flex; margin-top: 30px; } 
.btn-radio-box-group .radio-box + .radio-box { margin-top: 0; margin-left: 30px; } 

/* check box with input */
.input-box input + .chk-box { margin-top: 10px; } 
.with-chk-box-row {display: flex;align-items:center; margin-top:8px;}
.with-chk-box-row input[type="text"] {flex:1;}
.with-chk-box-row input + .chk-box {margin-left:10px; margin-top:0;}

`;
