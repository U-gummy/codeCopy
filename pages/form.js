import HorizontalInput from "../components/form/HorizontalInput";
import InputTypes from "../components/form/InputTypes";
import VerticalInput from "../components/form/VerticalInput";
import Section from "../components/shared/Section";
import Title from "../components/shared/Title";

export default function Form() {
  return (
    <>
      <Title name="Form" />
      <Section title="Vertical Input">
        <VerticalInput />
      </Section>
      <Section title="Horizontal Input">
        <HorizontalInput />
      </Section>
      <Section title="Input Types">
        <InputTypes />
      </Section>

      <style jsx>{``}</style>
    </>
  );
}
