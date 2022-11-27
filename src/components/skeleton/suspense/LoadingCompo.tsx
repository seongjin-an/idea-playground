import React from "react";
import styled from "@emotion/styled";
import Skeleton from "../Skeleton";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  //box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
  border-radius: 4px;
  width: 20vw;
  height: 30vh;
  
`;
const Placeholder: React.FC = () => {
    return <Container>
        <Skeleton rounded />
    </Container>
}

const LoadingCompo: React.FC = () => {
    console.log('loadingCompo rendering')
    return (
        <>
            {
                Array(25).fill(0).map((_, index) => (
                    <Placeholder key={index} />
                ))
            }
        </>
    )
}

export default LoadingCompo