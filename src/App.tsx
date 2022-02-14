import React from "react";
import logo from "./assets/icons/logo.svg";
import robots from "./mockdata/robot.json";
import Robot from "./components/Robot";
import styles from "./App.module.css";
import ShoppingCart from "./components/ShoppingCart";

interface Props {}

interface State {
  robotGallery: any[];
  count: number;
}
class App extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      robotGallery: [],
      count: 0,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((data) => this.setState({ robotGallery: data }));
  }

  render(): React.ReactNode {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} alt="logo" className={styles.appLogo} />
          <h1>罗伯特机器人选课吊炸天online购物平台我好长啊啊啊啊啊</h1>
        </div>
        <button
          onClick={() => {
            this.setState((preState, preProps) => {
              return { count: preState.count + 1 };
            });
          }}
        >
          {this.state.count}
        </button>
        <ShoppingCart />
        <div className={styles.robotList}>
          {this.state.robotGallery.map((r) => (
            <Robot id={r.id} email={r.email} name={r.name} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
