import React from "react";

import styled from "styled-components";
import { VectorMap } from "@south-paw/react-vector-maps";
import classes from "./Globe.module.css";
import WorldMap from "../../Data/world-low-res.json";

/*  
The MIT License (MIT)

Copyright (c) 2018 Alex Gabites

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

const StyledDiv = styled.div`
  //margin: 1rem auto;

  width: 100%;

  svg {
    stroke: #fff;
    margin: 25px 40px;
    width: 50%;

    // All layers are just path elements
    path {
      fill: #cccccc;
      cursor: pointer;
      outline: none;

      // When a layer is hovered
      &:hover {
        fill: rgb(247, 152, 87, 0.83);
      }

      // When a layer is focused.
      &:focus {
        fill: rgb(247, 152, 87, 0.6);
      }
      // When a layer is 'selected' (via currentLayers prop).
      &[aria-current="true"] {
        fill: #382ba8;
      }
    }
  }
`;

const Globe = (props) => {
  //destructuring
  const { country, onClick } = props;
  //linked to the search, to highlight the current country
  const countries = country ? [country.id] : [];

  const layerProps = {
    //target is destructuring ( {target} = event.target )
    onClick: ({ target }) => onClick(target.attributes.name.value),
  };

  return (
    <StyledDiv className={classes.Globe} >
      <VectorMap
        currentLayers={countries}
        layerProps={layerProps}
        {...WorldMap}
      />
    </StyledDiv>
  );
};

export default Globe;
