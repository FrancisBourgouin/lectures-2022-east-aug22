import { useState } from "react";

export default function useFormData(originalData, onSubmit) {
  const [formData, setFormData] = useState(originalData);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(formData);

    setFormData(originalData);
  };

  return { formData, handleChange, handleSubmit };
}
