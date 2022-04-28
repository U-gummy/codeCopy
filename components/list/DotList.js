export default function DotList() {
  return (
    <>
      <ul className="dot-list">
        <li>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </li>
        <li>
          Lorem Ipsum has been the industrys standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </li>
        <li>
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </li>
      </ul>

      <style jsx>{`
        .dot-list li {
          padding-left: 20px;
          text-indent: -20px;
          font-size: 18px;
          line-height: 1.5;
        }
        .dot-list li:before {
          content: "";
          display: inline-block;
          width: 5px;
          height: 5px;
          margin-right: 15px;
          border-radius: 50%;
          background: #000;
          vertical-align: middle;
        }
        .dot-list li + li {
          margin-top: 8px;
        }
      `}</style>
    </>
  );
}
