import CheckBoxs from "../components/form/CheckBoxs";
import CheckBoxsWithInput from "../components/form/CheckBoxsWithInput";
import HorizontalInput from "../components/form/HorizontalInput";
import InputTypes from "../components/form/InputTypes";
import Radios from "../components/form/Radios";
import VerticalInput from "../components/form/VerticalInput";
import HighlightGroup from "../components/shared/HighlightGroup";
import Section from "../components/shared/Section";
import Title from "../components/shared/Title";
import { CSS } from "../constants/highlight/form/Form";

export default function Form() {
  return (
    <div className="content">
      <Title name="Form">
        <HighlightGroup css={CSS} btnText="form all css" />
      </Title>
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
    </div>
  );
}
