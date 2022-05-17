export const HTML = `<ul className="arrow-list">
<li>
  <a href=""></a>
  <div className="img-box">
    <img src="/sample06.jpeg" alt="sample"></img>
  </div>
  <div className="text-box">
    <p className="tit">
      It has survived not only five centuries, but also the leap into
      electronic typesetting, remaining essentially unchanged. It was
      popularised in the 1960s with the release of Letraset sheets
      containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of
      Lorem Ipsum.
    </p>
    <span className="date">2021.02.12</span>
  </div>
</li>
<li>
  <a href=""></a>
  <div className="img-box">
    <img src="/sample05.jpeg" alt="sample"></img>
  </div>
  <div className="text-box">
    <p className="tit">
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry.
    </p>
    <span className="date">2021.02.12</span>
  </div>
</li>
<li>
  <a href=""></a>
  <div className="text-box">
    <p className="tit">
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry.
    </p>
    <span className="date">2021.02.12</span>
  </div>
</li>
<li>
  <a href=""></a>
  <div className="text-box">
    <p className="tit">
      It has survived not only five centuries, but also the leap into
      electronic typesetting, remaining essentially unchanged. It was
      popularised in the 1960s with the release of Letraset sheets
      containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of
      Lorem Ipsum.
    </p>
    <span className="date">2021.02.12</span>
  </div>
</li>
</ul>
`;

export const CSS = `.arrow-list {
  border-top: 1px solid #222;
  border-bottom: 1px solid #222;
}
.arrow-list li {
  display: flex;
  position: relative;
  padding: 15px 30px 15px 0;
  border-bottom: 1px solid #d9d9d9;
  background: url("/btn_arrow.svg") no-repeat center right / 15px 30px;
}
.arrow-list li a {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}
.arrow-list li .img-box {
  width: 150px;
  height: 100px;
  margin-right: 20px;
  border-radius: 10px;
  overflow: hidden;
}
.arrow-list li .img-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.arrow-list li .text-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  width: calc(100% - 170px);
}
.arrow-list li .tit {
  display: block;
  width: 100%;
  font-size: 20px;
  line-height: 30px;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.arrow-list li .date {
  display: block;
  margin-top: 13px;
  font-size: 18px;
  line-height: 27px;
  color: #b9b9b9;
}
`;
