import { useState } from "react";
import useFormData from "../hooks/useFormData";

export default function RepoForm(props) {
  const initialValues = {
    repo: "",
    owner: "",
  };

  const { formData, handleChange, handleSubmit } = useFormData(
    initialValues,
    props.onSubmit
  );
  const { repo, owner } = formData;

  // const [formData, setFormData] = useState(initialValues);
  // const { repo, owner } = formData;

  // const handleChange = (event) => {
  //   console.log(event.target);
  //   const { value, name } = event.target;

  //   // const newFormData = {...formData}
  //   // newFormData[name] = value
  //   // setFormData(newFormData)

  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   props.onSubmit(formData);

  //   setFormData(initialValues);
  // };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="owner"
        placeholder="Enter repo owner"
        onChange={handleChange}
        value={owner}
      />
      <input
        type="text"
        name="repo"
        placeholder="Enter repo name"
        onChange={handleChange}
        value={repo}
      />
      <button>Fetch commits!</button>
    </form>
  );
}
