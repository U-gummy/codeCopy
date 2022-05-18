/* eslint-disable @next/next/no-img-element */
export default function TranslateXSlide() {
  return (
    <>
      <div className="translate-slide-box">
        <div className="a">
          <div className="box bg01">
            <p>
              Lorem Ipsum is
              <br /> simply dummy
              <br /> text 111
            </p>
          </div>
          <div className="box bg02">
            <p>
              Lorem Ipsum is
              <br /> simply dummy
              <br /> text 222
            </p>
          </div>
          <div className="box bg03">
            <p>
              Lorem Ipsum is
              <br /> simply dummy
              <br /> text 333
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .translate-slide-box {
          height: calc(100vh * 3);
        }
        .translate-slide-box .a {
          position: sticky;
          top: 0;
          height: 100vh;
        }
        .translate-slide-box .box {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          border: 1px solid #000;
          color: #000;
          overflow: hidden;
          white-space: nowrap;
        }
        .translate-slide-box .box p {
          position: absolute;
          font-size: 90px;
        }
        .translate-slide-box .box.bg01 {
          background: rgb(255, 224, 224);
        }
        .translate-slide-box .box.bg02 {
          background: rgb(251, 255, 212);
          color: #999;
        }
        .translate-slide-box .box.bg03 {
          background: rgb(223, 230, 255);
        }
      `}</style>
    </>
  );
}
