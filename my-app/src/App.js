// Externql dependencies
import React from "react";

//Internal components

import { Header } from "./header/header";
import { Intro } from "./intro/intro";
import { Card } from "./mainCard/mainCard";

// styles
import "./App.css";
import { Item } from "./cardItem/cardItem";
import { Tools } from "./toolsItem/toolsItem";
import { Footer } from "./footer/footer";

export const App = () => {
  return (
    <div className="main">
      <Header className="main" />
      <Intro />
      <div className="cardcontainer">
        <Card
          picture="./img/firstpic.png"
          number="01"
          title="Education &amp; Work experience"
        >
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
        </Card>
        <Card
          picture="./img/secondpic.png"
          number="02"
          title="Skils &amp; Tools"
        >
          <Tools />
        </Card>
        <Card picture="./img/thirdpic.png" number="03" title="Portfolio" />
      </div>
    </div>
  );
};
