import "./styles.css";
import React, { Component } from "react";
import { Car } from "./Car";

export default function App() {
  const [cars, setCars] = React.useState([
    { name: "Opel", year: 2018 },
    { name: "VAZ", year: 2015 },
    { name: "Audi", year: 2012 }
  ]);
  React.useEffect(() => {
    input.current.focus();
  }, []);

  const input = React.useRef(null);
  const [pageTitle, setPageTitle] = React.useState("React component");
  return (
    <div style={divStyle}>
      <h1>{pageTitle}</h1>
      <button onClick={() => setPageTitle("Todo")}>Change title</button>
      <button onClick={() => setCars([cars[0], { name: "VAZ", year: 2028 }, cars[2]])}>VAZ</button>
      <input ref={input} onChange={(e) => setPageTitle(e.target.value)} />
      {cars.map((e, ind) => {
        return <Car key={ind} name={e.name} year={e.year} />;
      })}
    </div>
  );
}

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cars: [
//         { name: "Opel", year: 2018 },
//         { name: "VAZ", year: 2015 },
//         { name: "Audi", year: 2012 }
//       ],
//       pageTitle: "React component"
//     };
//     this.changeTitleHandler = this.changeTitleHandler.bind(this);
//     this.handlerInput = this.handlerInput.bind(this);
//     this.input = React.createRef();
//   }

//   componentDidMount() {
//     this.input.current.focus();
//   }

//   changeTitleHandler() {
//     this.setState({ pageTitle: "Todo" });
//   }

//   handlerInput(e) {
//     this.setState({ pageTitle: e.target.value });
//   }

//   render() {
//     return (
//       <div style={divStyle}>
//         <h1>{this.state.pageTitle}</h1>
//         <button onClick={this.changeTitleHandler}>Change title</button>
//         <input ref={this.input} onChange={this.handlerInput} />
//         {this.state.cars.map((e, ind) => {
//           return <Car key={ind} name={e.name} year={e.year} />;
//         })}
//       </div>
//     );
//   }
// }

// export default App;

const divStyle = {
  textAlign: "center"
};
