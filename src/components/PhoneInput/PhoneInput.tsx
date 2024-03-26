import React, { useState } from "react";
import PhoneInputWithCountrySelect, {
  isValidPhoneNumber,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "./PhoneInput.css";
import { InputLabel, Stack } from "@mantine/core";

interface PhoneNumberInputProps {
  onChange: (phone: string) => void;
  label: string;
  placeholder?: string;
  value?: any;
  defaultCountry?: any;
  name?: string;
}

const PhoneInput: React.FC<PhoneNumberInputProps> = ({
  label,
  value = "",
  defaultCountry = "IN",
  placeholder,
  onChange,
  name,
}) => {
  const handlePhoneChange = (newPhone: string) => {
    onChange(newPhone);
  };

  return (
    <Stack gap={0}>
      <InputLabel required mb={8} size="sm">
        {label}
      </InputLabel>
      <PhoneInputWithCountrySelect
        name={name}
        required
        placeholder={placeholder}
        value={value}
        onChange={handlePhoneChange}
        defaultCountry={defaultCountry}
      />
    </Stack>
  );
};

export default PhoneInput;
