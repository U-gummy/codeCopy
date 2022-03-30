import Header from "../components/shared/header";
import Nav from "../components/shared/Nav";

export default function Layout({ children }) {
  return (
    <>
      <div id="wrapper">
        <Header />
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
        }
        .content {
          flex: 1;
          overflow: auto;
        }
      `}</style>
    </>
  );
}
