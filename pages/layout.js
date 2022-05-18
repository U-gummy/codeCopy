import Nav from "../components/shared/Nav";

export default function Layout({ children }) {
  return (
    <>
      <div id="wrapper">
        <div className="container">
          <Nav />
          {children}
        </div>
      </div>
    </>
  );
}
