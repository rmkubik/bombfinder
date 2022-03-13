import React from "react";
import styled from "styled-components";
import MovesList from "./MovesList";

const ItemContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Inventory = ({ inventory }) => {
  return (
    <>
      <h2>Inventory</h2>
      <ul>
        {Object.values(inventory).map((item) => (
          <ItemContainer key={item.name}>
            <span>{`${item.name} -`}</span>
            {item.moves ? <MovesList moves={item.moves} /> : null}
          </ItemContainer>
        ))}
      </ul>
    </>
  );
};

export default Inventory;
