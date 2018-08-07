import React from "react";
import Heading from "./heading";
import Button from "./button";
import Screen from "./screen";
import rows from "../rows";
import "./frame.css";

class Frame extends React.Component {
  constructor() {
    super();
    this.state = {
      eq: null,
      result: null,
      resulted: true
    };
  }

  handleClick = value => {
    let eq0 = this.state.eq;
    let result0 = this.state.result;
    switch (value) {
      case "=": {
        let firstSpace = parseInt(eq0.charAt(0), 10);
        if (eq0.charAt(0) === "." || isNaN(firstSpace) === false) {
          try {
            // eslint-disable-next-line
            if (isNaN(eval(eq0))) {
              this.setState({ eq: "Syntax Error" });
            } else {
              // eslint-disable-next-line
              this.setState({ result: eval(eq0).toString() });
            }
          } catch (error) {
            this.setState({ eq: "Syntax Error" });
          }
        } else {
          try {
            // eslint-disable-next-line
            if (isNaN(eval(result0 + eq0))) {
              this.setState({ eq: "Syntax Error" });
            } else {
              // eslint-disable-next-line
              this.setState({ result: eval(result0 + eq0).toString() });
            }
          } catch (error) {
            this.setState({ eq: "Syntax Error" });
          }
        }
        this.setState({ resulted: true });
        break;
      }
      case "C": {
        if (eq0 !== null) {
          this.setState({ eq: null });
        } else {
          this.setState({ result: null });
        }
        this.setState({ resulted: false });
        break;
      }
      default: {
        if (eq0 !== null) {
          if (
            value === "(" &&
            eq0.length > 0 &&
            (parseInt(eq0.charAt(eq0.length - 1), 10) < 10 ||
              eq0.charAt(eq0.length - 1) === ")")
          ) {
            if (this.state.resulted === true) {
              this.setState({ eq: "*" + value });
            } else {
              this.setState({ eq: eq0 + "*" + value });
            }
          } else if (this.state.resulted === true) {
            this.setState({ eq: value });
          } else {
            this.setState({ eq: eq0 + value });
          }
        } else {
          this.setState({
            eq: value
          });
        }
        this.setState({ resulted: false });
        break;
      }
    }
  };

  render() {
    return (
      <div>
        <Heading />
        <div className="calculator">
          <div className="calculatorBox">
            <Screen eq={this.state.eq} result={this.state.result} />
            {rows.map((row, index) => {
              return (
                <div key={`row-${index}`} className="row">
                  {row.map(button => {
                    return (
                      <Button
                        type={button.type}
                        key={button.label}
                        label={button.label}
                        handleClick={() => {
                          this.handleClick(button.label);
                        }}
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Frame;
