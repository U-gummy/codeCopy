import HalfFade from "../components/scroll/HalfFade";
import HalfSticky from "../components/scroll/HalfSticky";
import TranslateXText from "../components/scroll/TranslateXText";
import TranslateXSlide from "../components/scroll/TranslateXSlide";
import Section from "../components/shared/Section";
import Title from "../components/shared/Title";

export default function Scroll() {
  const HalfFadeEvent = ({ scrollTop }) => {
    const contentHeight = document.querySelector(".con").offsetHeight;
    const el_images = document.querySelectorAll(".img-con");
    const yOffset = scrollTop / (contentHeight + contentHeight / 2);
    const chageIndex = Math.floor(yOffset);

    el_images.forEach(
      (item, i) => (item.style.opacity = i === chageIndex ? 1 : 0)
    );
  };

  const translateXTextEvent = ({ scrollTop }) => {
    const el = document.querySelector(".translate-box .txt");
    el.style.transform = `translateX(-${scrollTop / 1.5}px)`;
  };

  // TODO: 코드 개선
  const translateXSlideEvent = ({ scrollTop }) => {
    const el = document.querySelector(".translate-slide-box");
    const box = document.querySelector(".box");
    const bg02 = document.querySelector(".box.bg02");
    const bg03 = document.querySelector(".box.bg03");

    if (scrollTop >= el.offsetTop) {
      const 지나온거리 = scrollTop - el.offsetTop;
      const 지나온거리백분율 = Math.round(
        (지나온거리 / box.offsetHeight) * 100
      );

      bg03.style.width = `${100 - 지나온거리백분율}%`;
    }

    if (scrollTop >= el.offsetTop + box.offsetHeight) {
      const 지나온거리_02 = scrollTop - (el.offsetTop + box.offsetHeight);
      const 지나온거리백분율_02 = Math.round(
        (지나온거리_02 / box.offsetHeight) * 100
      );

      bg02.style.width = `${100 - 지나온거리백분율_02}%`;
    }
  };

  const handleScroll = ({ target }) => {
    HalfFadeEvent(target);
    translateXTextEvent(target);
    translateXSlideEvent(target);
  };
  return (
    <div className="content" onScroll={handleScroll}>
      <Title name="Scroll" />

      <Section title="Half Sticky">
        <HalfSticky />
      </Section>

      <Section title="Half Fade">
        <HalfFade />
      </Section>

      <TranslateXText />

      <Section title="Translate X Slide">
        <TranslateXSlide />
      </Section>
    </div>
  );
}
