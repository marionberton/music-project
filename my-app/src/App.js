// Externql dependencies
import React, { Component } from "react";
import Radium, { StyleRoot } from "radium";
//Internal components

import { Header } from "./header/header";
import { Intro } from "./intro/intro";
import { Card } from "./Card/Card";
import Portfolio from "./components/Portfolio/Portfolio";

// styles
import "./App.css";
import { Item } from "./cardItem/cardItem";
import { Tools } from "./toolsItem/toolsItem";
import Section from "./Section/Section";
import Footer from "./components/Footer/Footer";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  isSectionOpen = name => this.state.open === name;

  toggleSection = name => {
    this.setState({ open: this.isSectionOpen(name) ? null : name });
  };

  render() {
    return (
      <StyleRoot>
        <div className="main">
          <Header className="main" />
          <Intro />
          <div className="cardcontainer">
            <Card
              picture="./img/firstpic.png"
              number="01"
              title="Education &amp; Work experience"
              onClick={() => this.toggleSection("education")} // give the onClick a function
            ></Card>
            <div className="mobile">
              <Section isOpen={this.isSectionOpen("education")}>
                <div className="itemcontainer">
                  <Item
                    picture="./img/school.svg"
                    title="CSUN"
                    date="2013 - 2016"
                    jobTitle="B.S Business and Managment"
                    paragraph="California State University, Northridge"
                  />
                  <Item
                    picture="./img/work.svg"
                    title="Potentialpark"
                    date="Aug 2018 - Apr 2019"
                    jobTitle="Partnership Management &amp; Digital marketing"
                    paragraph="Worked on improving recruiting and job search by helping companies with their 'Talent Communication and Employer Branding.' Increased the companies French market survey response rate by 30% through Branded surveys."
                  />
                  <Item
                    picture="./img/work.svg"
                    title="Apalaa Music App"
                    date="Mar 2017 - Apr 2018"
                    jobTitle="Product Marketing"
                    paragraph="Increased the applicable social media presence and beta user's growth by evaluating product improvement through A/B testing, attending pitch events, and communicating with artists to understand the competitive landscape; identified strategic opportunities and threats."
                  />
                </div>
              </Section>
            </div>
            <Card
              picture="./img/secondpic.png"
              number="02"
              title="Skils &amp; Tools"
              onClick={() => this.toggleSection("tools")}
            ></Card>
            <div className="mobile">
              <Section isOpen={this.isSectionOpen("tools")}>
                <Tools />
              </Section>
            </div>
            <Card
              picture="./img/thirdpic.png"
              number="03"
              title="Portfolio"
              onClick={() => this.toggleSection("portfolio")}
            />
            <div className="mobile">
              <Section isOpen={this.isSectionOpen("portfolio")}>
                <Portfolio />
              </Section>
            </div>
          </div>
          <div className="desktop">
            <Section isOpen={this.isSectionOpen("education")}>
              <div className="itemcontainer">
                <Item
                  picture="./img/school.svg"
                  title="CSUN"
                  date="2013 - 2016"
                  jobTitle="B.S Business and Managment"
                  paragraph="California State University, Northridge"
                />
                <Item
                  picture="./img/work.svg"
                  title="Potentialpark"
                  date="Aug 2018 - Apr 2019"
                  jobTitle="Partnership Management &amp; Digital marketing"
                  paragraph="Worked on improving recruiting and job search by helping companies with their 'Talent Communication and Employer Branding.' Increased the companies French market survey response rate by 30% through Branded surveys."
                />
                <Item
                  picture="./img/work.svg"
                  title="Apalaa Music App"
                  date="Mar 2017 - Apr 2018"
                  jobTitle="Product Marketing"
                  paragraph="Increased the applicable social media presence and beta user's growth by evaluating product improvement through A/B testing, attending pitch events, and communicating with artists to understand the competitive landscape; identified strategic opportunities and threats."
                />
              </div>
            </Section>
            <Section isOpen={this.isSectionOpen("tools")}>
              <Tools />
            </Section>
            <Section isOpen={this.isSectionOpen("portfolio")}>
              <Portfolio />
            </Section>
          </div>
          <Footer />
        </div>
      </StyleRoot>
    );
  }
}
