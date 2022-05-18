/* eslint-disable @next/next/no-img-element */
export default function HalfSticky() {
  return (
    <>
      <div className="half-sticky">
        <div className="text-box">
          <h3 className="tit">Lorem Ipsum</h3>
          <p className="txt">
            Lorem Ipsum has been the industrys standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="scroll-img-box">
          <div className="left">
            <div className="img-box">
              <img src="/sample06.jpeg" alt="" />
            </div>
            <div className="img-box">
              <img src="/sample05.jpeg" alt="" />
            </div>
            <div className="img-box">
              <img src="/sample04.jpeg" alt="" />
            </div>
          </div>
          <div className="right">
            <div className="img-box">
              <img src="/sample01.jpeg" alt="" />
            </div>
            <div className="img-box">
              <img src="/sample02.jpeg" alt="" />
            </div>
            <div className="img-box">
              <img src="/sample03.jpeg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .half-sticky {
          position: relative;
          display: flex;
          align-items: start;
          justify-content: space-between;
        }
        .text-box {
          position: sticky;
          top: 0;
          width: 40%;
        }
        .text-box .tit {
          font-size: 48px;
          line-height: 60px;
          font-weight: 600;
        }
        .text-box .txt {
          margin-top: 28px;
          font-size: 24px;
          line-height: 36px;
        }
        .scroll-img-box {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
        .scroll-img-box .img-box {
          width: 300px;
          height: 300px;
          overflow: hidden;
          border-radius: 50%;
        }
        .scroll-img-box .img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .scroll-img-box .img-box + .img-box {
          margin-top: 40px;
        }
        .scroll-img-box .right {
          margin-left: 40px;
        }
        .scroll-img-box .right .img-box:first-child {
          margin-top: 120px;
        }

        @media screen and (max-width: 1400px) {
          .text-box {
            position: relative;
            top: 0;
            float: none;
            width: 100%;
            padding-top: 80px;
            text-align: center;
          }
          .scroll-img-box {
            flex-direction: column;
            float: none;
            width: 100%;
            padding-top: 60px;
          }
          .scroll-img-box .img-box {
            width: 250px;
            height: 250px;
            border-radius: 4px;
          }
          .scroll-img-box .img-box + .img-box {
            margin-top: 0px;
            margin-left: 10px;
          }
          .scroll-img-box .left {
            display: flex;
            justify-content: end;
            transform: translateX(20%);
            animation: visualAnimation 25s linear 2s infinite normal;
          }
          .scroll-img-box .right {
            display: flex;
            margin-left: 0;
            margin-top: 10px;
            transform: translateX(-20%);
            animation: visualAnimation02 25s linear 2s infinite normal;
          }
          .scroll-img-box .right .img-box:first-child {
            margin-top: 0;
          }
        }
      `}</style>
    </>
  );
}
