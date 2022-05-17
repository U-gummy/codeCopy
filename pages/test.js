/* eslint-disable @next/next/no-img-element */
import { bitmap2vector } from 'bitmap2vector';

export default function Test() {
  const  imgRender = async()  => {
    const out = await bitmap2vector({
      input: '/sample01.jpeg'
    })
    document.querySelector(".ttttt").innerHTML = out.content;
  }
  imgRender();
  return (
    <div style={{display:'flex'}}>
      <div className="ttttt" style={{marginRight:20}}></div>
      <img src='/sample01.jpeg' alt="!!"></img>
    </div>
  );
}
