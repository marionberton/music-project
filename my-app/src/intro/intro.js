import React, { useState, useEffect } from "react";
import "./intro.css";
/*export const Intro = () => {
	
	const text = [{title:'passionate', color:'#C56BD6'},
								{title:'beginner', color:'#44D7B6'}, 
								{title: 'fun', color:'#e9425e'},
								{title: 'selftaught', color:'#fbc531'}
							]
	const [number, setNumber] = useState(0);

	useEffect(() => {
		const numberInterval = setInterval(() => {
			if (
				number === text.length - 1
			) {
				setNumber(0)
			} else {
				setNumber(number + 1)
			}
		}, 5000);

		return () => {
			clearInterval(numberInterval);
		}
	}, [number]);


	return (
		<div className="intro">
				<h1>I am a <span style={{
					color: text[number].color
				}}>{text[number].title}</span> <br/> Frontend Developer</h1>
		</div>
	);
}*/
const text = [
  { title: "passionate", color: "#C56BD6" },
  { title: "beginner", color: "#44D7B6" },
  { title: "fun", color: "#e9425e" },
  { title: "selftaught", color: "#fbc531" }
];

export class Intro extends React.Component {
  constructor() {
    super();
    this.state = { number: 0 };
  }
  componentDidMount() {
    this.numberInterval = setInterval(() => {
      const number = this.state.number;
      if (number === text.length - 1) {
        this.setNumber(0);
      } else {
        this.setNumber(number + 1);
      }
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.numberInterval);
  }

  setNumber(number) {
    this.setState({
      number: number
    });
  }
  render() {
    const number = this.state.number;
    return (
      <div className="intro">
        <h1>
          I am a{" "}
          <span
            style={{
              color: text[number].color
            }}
          >
            {text[number].title}
          </span>{" "}
          <br /> Frontend Developer
        </h1>

        <p className="myintro">
          I’m an ambitious individual who’s looking for her first Junior
          Developer job. I left my job in April 2019 to focus all my time on
          learning how to code, and since then, I’ve attended Codebar every
          week, completed a Web Development boot camp and learned the basics of
          several modern languages and tools.
        </p>
      </div>
    );
  }
}
