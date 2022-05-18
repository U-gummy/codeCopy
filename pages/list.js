import Section from "../components/shared/Section";
import Title from "../components/shared/Title";
import DotList from "../components/list/DotList";
import ArrowList from "../components/list/ArrowList";
import ThumbnailListRow from "../components/list/ThumbnailListRow";
import ThumbnailListCol from "../components/list/ThumbnailListCol";

export default function List() {
  return (
    <div className="content">
      <Title name="List" />
      <Section title="Dot List">
        <DotList />
      </Section>
      <Section title="Arrow List">
        <ArrowList />
      </Section>
      <Section title="Thumbnail List Row">
        <ThumbnailListRow />
      </Section>
      <Section title="Thumbnail List Col">
        <ThumbnailListCol />
      </Section>
    </div>
  );
}
