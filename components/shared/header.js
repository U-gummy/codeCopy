import Link from "next/link";

export default function Header() {
  return (
    <>
      <header>
        <div className="header-inner">
          <Link href="/" passHref>
            <p className="logo">CODE COPY</p>
          </Link>
        </div>
      </header>

      <style jsx>{`
        header {
          padding: 0 20px;
          background: #a7bbc7;
          border-bottom: 1px solid #faf3f3;
        }
        .header-inner {
          height: 50px;
          margin: 0 auto;
        }
        .logo {
          color: #fff;
          font-size: 30px;
          line-height: 47px;
        }
      `}</style>
    </>
  );
}
