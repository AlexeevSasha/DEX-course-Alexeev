import React, { FC, ReactNode, ComponentType } from "react";
import { GoogleLogoComponent } from "./components";

//TODO: Создайте классовый компонент ClassComponent
// который отрисует div с текстом ClassComponent

class ClassComponent extends React.Component<{ text: string }> {
  render() {
    return <div>{this.props.text}</div>;
  }
}

//TODO: Создайте функциональный компонент FuncComponent
// который отрисует div с текстом FuncComponent

const FuncComponent: FC<{ text: string }> = ({ text }) => {
  return <div>{text}</div>;
};

//TODO: Перепешите компоненты выше на prop text
// в text передайте старые значения

//TODO: Создайте компонент ConditionalComponent
// который показыать GoogleLogoComponent по значению prop'a flag

const ConditionalComponent: FC<{ flag: boolean }> = ({ flag }) => {
  return flag ? <GoogleLogoComponent /> : null;
};

//TODO: Создайте компонент ComponentWithFunction
// который будет принимать prop func и отправлять в div onClick
const ComponentWithFunction: FC<{ func: () => void }> = ({ func }) => {
  return <div onClick={func}>ComponentWithFunction</div>;
};

//TODO: Создайте компонент ComponentWithChild
// который будет принимать потомков и отображать внутри div

const ComponentWithChild: FC<object> = (props) => {
  return <div>{props.children}</div>;
};

//TODO: Создайте компонент ComponentWithRenders
// который будет принимать renderFunc и RenderComponent

const ComponentWithRenders: FC<{
  renderFunc: () => ReactNode;
  TestComponent: ComponentType;
}> = ({ renderFunc, TestComponent }) => {
  return (
    <div>
      {renderFunc()}
      <TestComponent />
    </div>
  );
};

const func = () => alert("pressed");
const renderFunc = () => <div>renderFunc</div>;
class TestComponent extends React.Component {
  render() {
    return "123";
  }
}

export function RenderAll() {
  return (
    <div>
      <ClassComponent text="ClassComponent" />
      <FuncComponent text="FuncComponent" />
      <ConditionalComponent flag={true} />
      <ComponentWithFunction func={func} />
      <ComponentWithChild>
        <h1>Заголовок</h1>
        <p>Текст</p>
        <button>Кнопка</button>
      </ComponentWithChild>
      <ComponentWithRenders
        renderFunc={renderFunc}
        TestComponent={TestComponent}
      />
    </div>
  );
}

// Добавьте prop timer и выведите его
