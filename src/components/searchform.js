import { useContext, useRef, useEffect } from "react";

import { General } from "../context/generalcontext";

const Form = () => {
  const manipulate = useRef(null);

  const { isloading, cocktale, inYur } = useContext(General);

  useEffect(() => {
    manipulate.current.focus();
  }, []);

  const submit = (e) => {
    e.preventDefault();
    console.log("i was jus submitted");
  };

  const chain = (e) => {
    let val = manipulate.current.value;

    inYur(val);
  };

  return (
    <>
      <form
        onSubmit={submit}
        action="#
      "
      >
        <label>search your favourite cocktale</label>
        <input onChange={chain} ref={manipulate} type="text" />
      </form>
    </>
  );
};

export default Form;
