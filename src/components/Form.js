import { Component, Children, cloneElement } from "react";
export default class Form extends Component {
  state = {
    formData: {},
  };
  // 提交
  submitForm = (cb) => {
    cb({ ...this.state.formData });
  };
  // 重置
  resetForm = () => {
    const { formData } = this.state;
    Object.keys(formData).forEach((item) => {
      formData[item] = "";
    });
    this.setState({ formData });
  };
  // 设置
  setValue = (name, value) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [name]: value,
      },
    });
  };
  render() {
    const { children } = this.props;
    const renderChildren = [];
    Children.forEach(children, (child) => {
      if (child.type.displayName === "formItem") {
        const { name } = child.props;
        /* 克隆`FormItem`节点，混入改变表单单元项的方法 */
        const Children = cloneElement(
          child,
          {
            key: name /* 加入key 提升渲染效果 */,
            handleChange: this.setValue /* 用于改变 value */,
            value: this.state.formData[name] || "" /* value 值 */,
          },
          child.props.children
        );
        renderChildren.push(Children);
      }
    });
    return renderChildren;
  }
}
Form.displayName = "form";
