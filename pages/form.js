import CheckBoxs from "../components/form/CheckBoxs";
import CheckBoxsWithInput from "../components/form/CheckBoxsWithInput";
import HorizontalInput from "../components/form/HorizontalInput";
import InputTypes from "../components/form/InputTypes";
import Radios from "../components/form/Radios";
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
      <Section title="CheckBoxs">
        <CheckBoxs />
      </Section>
      <Section title="Radios">
        <Radios />
      </Section>
      <Section title="CheckBoxs With Input">
        <CheckBoxsWithInput />
      </Section>
    </>
  );
}
