import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();
  const activeLink = (href) => (router.pathname === href ? "active" : "");

  return (
    <>
      <nav>
        <Link href="/" passHref>
          <h1 className="logo">CODE COPY</h1>
        </Link>
        <ul>
          <li>
            <Link href="/">
              <a className={activeLink("/")}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/list">
              <a className={activeLink("/list")}>List</a>
            </Link>
          </li>
          <li>
            <Link href="/tables">
              <a className={activeLink("/tables")}>Tables</a>
            </Link>
          </li>
          <li>
            <Link href="/form">
              <a className={activeLink("/form")}>Form</a>
            </Link>
          </li>
          <li>
            <Link href="/slider">
              <a className={activeLink("/slider")}>Slider</a>
            </Link>
          </li>
        </ul>
      </nav>

      <style jsx>{`
        h1 {
          padding: 28px 30px;
          font-size: 28px;
          font-weight: 900;
          color: #333;
        }
        nav {
          width: 230px;
          background: #d3e4cd;
        }
        nav ul {
          margin-top: 20px;
        }
        a {
          display: inline-block;
          width: 100%;
          height: 50px;
          padding-left: 30px;
          line-height: 50px;
          color: #999;
          font-size: 18px;
        }
        a.active {
          color: #333;
          font-size: 21px;
          font-weight: 700;
        }
      `}</style>
    </>
  );
}
