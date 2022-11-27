import React, {useEffect, useState} from "react";
import {css, keyframes} from "@emotion/react";
import styled from "@emotion/styled";

interface Props{
    width?: number;
    height?: number;
    circle?: boolean;
    rounded?: boolean;
    count?: number;
    unit?: string
    animation?: boolean;
    color?: string;
    style?: React.CSSProperties;
}
const pulseKeyframe = keyframes`
  0%{
    opacity: 1;
  }
  50%{
    opacity: 0.4;
  }
  100%{
    opacity: 1;
  }
`
const pulseAnimation = css`
  animation: ${pulseKeyframe} 1.5s ease-in-out infinite;
`
const Base = styled.div<Props>`
  ${({ color }) => color && `background-color: ${color}`};
  ${({ rounded }) => rounded && `border-radius: 8px`};
  ${({ circle }) => circle && `border-radius: 50%`};
  ${({ animation }) => animation && pulseAnimation};
  width: 100%;
  height: 100%;
`;
//${({ width, height }) => (width || height) && 'display: block'};
//width: ${({ width, unit }) => width && unit && `${width}${unit}`};
//height: ${({ height, unit }) => height && unit && `${height}${unit}`};
const Skeleton: React.FC<Props> = ({
                                            width, height, circle,
                                            rounded, count, unit = 'px',
                                            animation = true, color = '#F4F4F4', style
                                        }) => {


    return(
        <Base
            style={style}
            rounded={rounded}
            circle={circle}
            width={width}
            height={height}
            animation={animation}
            unit={unit}
            color={color}
        />
    )
}

export default Skeleton