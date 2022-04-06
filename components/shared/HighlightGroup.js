import Highlight from "react-highlight";
import { useState } from "react";

export default function HighlightGroup(props) {
  const [mode, setMode] = useState("html");
  const [codeMode, setCodeMode] = useState(false);

  const copy = () => {
    const textField = document.createElement("textarea");
    textField.innerText = props[mode];
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  return (
    <>
      <div className="btn-area">
        <button
          type="button"
          className="btn-code"
          onClick={() => setCodeMode(!codeMode)}
        >
          code
        </button>
      </div>
      {codeMode && (
        <div className="Highlight-area">
          <button type="button" className="btn-copy" onClick={() => copy()}>
            copy
          </button>
          <div className="button-top">
            <button type="button" onClick={() => setMode("html")}>
              html
            </button>
            <button type="button" onClick={() => setMode("css")}>
              css
            </button>
            {props.js && (
              <button type="button" onClick={() => setMode("js")}>
                js
              </button>
            )}
          </div>
          <div className="highlight-group">
            {mode === "html" && (
              <Highlight language="html">{props.html}</Highlight>
            )}
            {mode === "css" && (
              <Highlight language="css">{props.css}</Highlight>
            )}

            {props.js && mode === "css" && (
              <Highlight language="javascript">{props.js}</Highlight>
            )}
          </div>
        </div>
      )}
      <style jsx>
        {`
          .btn-area {
            padding:20px 0;
            text-align:right;
          }
          .btn-code {
            width:80px;
            height:40px;
            background:#424874;
            border-radius:25px;
            font-size:16px;
            color:#fff;
          }
          .Highlight-area {
            position: relative;
            display:flex;
            background:#282c34;
            border-radius:10px;
            overflow: hidden;
          }
          .btn-copy {
            position: absolute;
            top:10px;
            right:30px;
            width:40px;
            height:40px;
            background:#F4EEFF;
            border-radius:50%;
            font-size:13px;
            line-height:38px;
          }
          .button-top {
            display:flex;
            flex-direction:column;
            padding:20px;
            margin-right:40px;
          }
          .button-top button {
            width:100px;
            height:30px;
            font-size:20px;
            color:#fff;
            border:1px solid #fff;
            border-radius:10px;
          }
          .button-top button + button{
            margin-top:15px;
          }
          .highlight-group {
            width:100%;
            height:200px;
            overflow: auto;
            font-size:13px;
            }
          }
        `}
      </style>
    </>
  );
}
