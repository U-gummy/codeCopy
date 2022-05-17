/* eslint-disable @next/next/no-img-element */
import { HTML, CSS } from "../../constants/highlight/list/ThumbnailListRow";
import HighlightGroup from "../shared/HighlightGroup";

export default function ThumbnailListRow() {
  return (
    <>
      <ul className="thumbnail-list">
        <li>
          <div className="img-box">
            <img src="/sample01.jpeg" alt="sample"></img>
          </div>
          <div className="text-box">
            <h3 className="tit">What is Lorem Ipsum?</h3>
            <p className="desc multi-ellipsis">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </li>
        <li>
          <div className="img-box">
            <img src="/sample02.jpeg" alt="sample"></img>
          </div>
          <div className="text-box">
            <h3 className="tit">Why do we use it?</h3>
            <p className="desc multi-ellipsis">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </li>
        <li>
          <div className="img-box">
            <img src="/sample04.jpeg" alt="sample"></img>
          </div>
          <div className="text-box">
            <h3 className="tit">Where does it come from?</h3>
            <p className="desc multi-ellipsis">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source.
            </p>
          </div>
        </li>
        <li>
          <div className="img-box">
            <img src="/sample05.jpeg" alt="sample"></img>
          </div>
          <div className="text-box">
            <h3 className="tit">Where does it come from?</h3>
            <p className="desc multi-ellipsis">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source.
            </p>
          </div>
        </li>
        <li>
          <div className="img-box">
            <img src="/sample03.jpeg" alt="sample"></img>
          </div>
          <div className="text-box">
            <h3 className="tit">Where does it come from?</h3>
            <p className="desc multi-ellipsis">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source.
            </p>
          </div>
        </li>
        <li>
          <div className="img-box">
            <img src="/sample06.jpeg" alt="sample"></img>
          </div>
          <div className="text-box">
            <h3 className="tit">What is Lorem Ipsum?</h3>
            <p className="desc multi-ellipsis">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </li>
        <li>
          <div className="img-box">
            <img src="/sample01.jpeg" alt="sample"></img>
          </div>
          <div className="text-box">
            <h3 className="tit">Why do we use it?</h3>
            <p className="desc multi-ellipsis">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </li>
        <li>
          <div className="img-box">
            <img src="/sample02.jpeg" alt="sample"></img>
          </div>
          <div className="text-box">
            <h3 className="tit">Where does it come from?</h3>
            <p className="desc multi-ellipsis">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source.
            </p>
          </div>
        </li>
      </ul>
      <HighlightGroup html={HTML} css={CSS} />

      <style jsx>{`
        .thumbnail-list {
          display: flex;
          flex-wrap: wrap;
        }
        .thumbnail-list li {
          width: calc(25% - 15px);
          margin-top: 20px;
        }
        .thumbnail-list li + li {
          margin-left: 20px;
        }
        .thumbnail-list li + li:nth-child(4n + 1) {
          margin-left: 0;
        }
        .thumbnail-list .img-box {
          width: 100%;
          height: 300px;
          border-radius: 10px;
          overflow: hidden;
        }
        .thumbnail-list .img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .thumbnail-list .text-box {
          margin-top: 15px;
          padding: 0 15px;
        }
        .thumbnail-list .tit {
          font-size: 18px;
          font-weight: 600;
        }
        .thumbnail-list .desc {
          margin-top: 10px;
          font-size: 16px;
          font-weight: 300;
          line-height: 1.4;
        }
        .multi-ellipsis {
          display: -webkit-box;
          display: -ms-flexbox;
          display: box;
          overflow: hidden;
          vertical-align: top;
          text-overflow: ellipsis;
          word-break: break-all;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 4;
        }
      `}</style>
    </>
  );
}
