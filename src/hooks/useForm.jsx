import { useState } from "react";

const useForm = () => {
  const [formVal, setFormVal] = useState({
    title: "",
    description: "",
    priority: "High",
    dueDate: "",
  });

  return { formVal, setFormVal };
};

export default useForm;
