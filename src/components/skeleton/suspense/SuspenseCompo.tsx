import React, {Suspense} from "react";
import LoadingCompo from "./LoadingCompo";
import ListSuspense from "./ListSuspense";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: grid;
  width: 100vw;
  height: 40vh;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 12px;
  row-gap: 24px;
`;

const SuspenseCompo: React.FC = () => {
    return(
        <Wrapper>
            <Suspense fallback={<LoadingCompo />}>
                <ListSuspense />
            </Suspense>
        </Wrapper>
    )
}

export default SuspenseCompo