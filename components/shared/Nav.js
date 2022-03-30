import Link from "next/link";

export default function Nav() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/list">
              <a>Slide</a>
            </Link>
          </li>
          <li>
            <Link href="/list">
              <a>List</a>
            </Link>
          </li>
        </ul>
      </nav>

      <style jsx>{`
        nav {
          width: 300px;
          background: #a7bbc7;
        }
        a {
          display: inline-block;
          width: 100%;
          height: 50px;
          padding-left: 20px;
          line-height: 50px;
          color: #fff;
        }
      `}</style>
    </>
  );
}
