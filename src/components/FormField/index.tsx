import React, { ChangeEvent } from 'react';
import {
  Input, Container, Label, LabelText,
} from './style';

declare interface Props {
    label : string;
    type : string;
    name : string;
    value ?: string | '';
    onChange ?: ((event: ChangeEvent<HTMLInputElement>) => void) | undefined
}

const FormField: React.FC<Props> = ({
  label, type, name, value, onChange,
} : Props) => {
  const fieldId = `id_${name}`;
  const isTypeTextArea = type === 'textarea';
  const tag = isTypeTextArea ? 'textarea' : 'input';
  return (
    <Container>
      <Label htmlFor={fieldId}>
        <Input
          id={fieldId}
          value={value}
          name={name}
          onChange={onChange}
          as={tag}
        />
        <LabelText>
          {label}
          :
        </LabelText>
      </Label>
    </Container>
  );
};

FormField.defaultProps = {
  value: '',
  onChange: undefined,
};

export default FormField;
