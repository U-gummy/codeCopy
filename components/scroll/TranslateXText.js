/* eslint-disable @next/next/no-img-element */
export default function TranslateXText() {
  return (
    <>
      <div className="translate-box">
        <p className="txt">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      <style jsx>{`
        .translate-box {
          overflow: hidden;
        }
        .translate-box .txt {
          padding: 120px 0 90px;
          font-size: 110px;
          color: #ccc;
          white-space: nowrap;
        }
      `}</style>
    </>
  );
}
