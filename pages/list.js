import Section from "../components/shared/Section";
import Title from "../components/shared/Title";
import DotList from "../components/list/DotList";
import ThumbnailListRow from "../components/list/ThumbnailListRow";
import ThumbnailListCol from "../components/list/ThumbnailListCol";

export default function List() {
  return (
    <>
      <Title name="List" />
      <Section title="Dot List">
        <DotList />
      </Section>
      <Section title="Thumbnail List Row">
        <ThumbnailListRow />
      </Section>
      <Section title="Thumbnail List Col">
        <ThumbnailListCol />
      </Section>
    </>
  );
}
