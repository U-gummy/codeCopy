export default function Title({ name, children }) {
  return (
    <div className="title-box">
      <h2>{name}</h2>
      <div className="code-wrap">{children}</div>
      <style jsx>{`
        .title-box {
          display: flex;
          justify-content: space-between;
          align-items: start;
        }
        .code-wrap {
          width: calc(100% - 200px);
        }
        h2 {
          font-size: 40px;
          color: #000;
          letter-spacing: 5px;
        }
      `}</style>
    </div>
  );
}
