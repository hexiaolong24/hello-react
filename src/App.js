import Input from "./components/Input";
import Form from "./components/Form";
import FormItem from "./components/FormItem";
import { useRef } from "react";

function App() {
  const form = useRef(null);
  const submit = () => {
    form.current.submitForm((val) => {
      console.log(val);
    });
  };
  const reset = () => {
    form.current.resetForm();
  };
  return (
    <div className="box">
      <Form ref={form}>
        <FormItem name="name" label="我是">
          <Input />
        </FormItem>
        <FormItem name="mes" label="我想说">
          <Input />
        </FormItem>
        <input></input>
        <Input />
        <button>按钮</button>
      </Form>
      <div>
        <button className="searchbtn" onClick={submit}>
          提交
        </button>
        <button className="searchbtn" onClick={reset}>
          重置
        </button>
      </div>
    </div>
  );
}

export default App;
