import Section from "../components/shared/Section";
import Title from "../components/shared/Title";
import DotList from "../components/list/DotList";
import ThumbnailList from "../components/list/ThumbnailList";

export default function List() {
  return (
    <>
      <Title name="List" />
      <Section title="Dot List">
        <DotList />
      </Section>
      <Section title="Thumbnail List">
        <ThumbnailList />
      </Section>
    </>
  );
}
