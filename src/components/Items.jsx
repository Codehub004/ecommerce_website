import styled from "styled-components";
import { productItems } from "../data";
import Item from "./Item";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Items = (cat, filters, sort) => {
  console.log(cat, filters, sort);
 
  return (
    <Container>
      {productItems.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </Container>
  );
};


export default Items;
