/* eslint-disable @next/next/no-img-element */
export default function HalfFade() {
  return (
    <>
      <div className="fix-scroll">
        <div className="con inner">
          <div className="text-box">
            <span className="s-tit">Lorem Ipsum</span>
            <h2 className="tit">Why do we use it?</h2>
            <p className="txt">
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="change-img-box">
            <div className="img-con img01">img01</div>
            <div className="img-con img02">img02</div>
            <div className="img-con img03">img03</div>
            <div className="img-con img04">img04</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .fix-scroll {
          height: calc(90vh * 4);
        }
        .fix-scroll .con {
          position: sticky;
          top: 0;
          display: flex;
          height: 90vh;
          align-items: center;
        }
        .fix-scroll .text-box {
          flex: 1;
        }
        .fix-scroll .text-box .s-tit {
          font-size: 20px;
        }
        .fix-scroll .text-box .tit {
          margin-top: 10px;
          font-size: 48px;
          line-height: 60px;
          font-weight: 600;
        }
        .fix-scroll .text-box .txt {
          margin-top: 28px;
          font-size: 24px;
          line-height: 36px;
        }
        .fix-scroll .change-img-box {
          position: relative;
          flex: 1;
          width: 500px;
          height: 500px;
          margin-left: 50px;
        }
        .fix-scroll .change-img-box .img-con {
          position: absolute;
          right: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          font-size: 30px;
          font-weight: 700;
          color: #fff;
          text-align: center;
          transition: opacity 0.6s;
          opacity: 0;
        }
        .fix-scroll .change-img-box .img-con.img01 {
          background-image: url("/sample03.jpeg");
          opacity: 1;
        }
        .fix-scroll .change-img-box .img-con.img02 {
          background-image: url("/sample04.jpeg");
        }
        .fix-scroll .change-img-box .img-con.img03 {
          background-image: url("/sample01.jpeg");
        }
        .fix-scroll .change-img-box .img-con.img04 {
          background-image: url("/sample02.jpeg");
        }
      `}</style>
    </>
  );
}
