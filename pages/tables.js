import Section from "../components/shared/Section";
import Title from "../components/shared/Title";
import FixTable from "../components/table/FixTable";
import Table from "../components/table/Table";

export default function Tables() {
  return (
    <>
      <Title name="Table" />
      <Section title="Table">
        <Table />
      </Section>
      <Section title="Fiexed Table">
        <FixTable />
      </Section>
    </>
  );
}
