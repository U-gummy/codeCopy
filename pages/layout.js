import Nav from "../components/shared/Nav";

export default function Layout({ children }) {
  return (
    <>
      <div id="wrapper">
        <div className="container">
          <Nav />
          <div className="content">{children}</div>
        </div>
      </div>

      <style jsx>{`
        #wrapper {
          height: 100%;
          background-color: #fff;
        }
        .container {
          display: flex;
          height: 100%;
          padding: 15px 15px 15px 0;
          background: #a6b1e1;
        }
        .content {
          flex: 1;
          overflow: auto;
          padding: 20px;
          background: #fff;
          border-radius: 20px;
          overflow: auto;
        }
      `}</style>
    </>
  );
}
