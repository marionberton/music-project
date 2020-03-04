import React from "react";

import styled from "styled-components";
import { VectorMap } from "@south-paw/react-vector-maps";

import WorldMap from "../../Data/world-low-res.json";


const StyledDiv = styled.div`
  //margin: 1rem auto;

  width: 100%;

  svg {
    stroke: #fff;
    margin: 25px 40px;

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

const Globe = props => {
	//linked to the search, to highlight the current country
	const countries = props.country ? [props.country.id] : [];
  
	return (
    <StyledDiv>
      <VectorMap
        currentLayers={countries}
        onClick={props.click}
        {...WorldMap}
      />
    </StyledDiv>
  );
}


export default Globe;

