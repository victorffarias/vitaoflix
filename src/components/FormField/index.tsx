import React, { ChangeEvent } from 'react';

interface Props {
    label : string;
    type : string;
    name : string;
    value ?: string;
    onChange ?: ((event: ChangeEvent<HTMLInputElement>) => void)
};

const FormField: React.FC<Props> = ({ label, type, name, value, onChange }) => {
    return (
        <>
          <label>
            {label}: 
            <input
              type={type}
              value={value}
              name={name}
              onChange={onChange}
            />
          </label>
        </>
      )
}

export default FormField;