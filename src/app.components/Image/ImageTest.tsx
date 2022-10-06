import React from 'react';
import OriginalImage, { ImageProps } from 'next/image';
import styled from 'styled-components';

const ImageTest = ({ src, ...imageProps }: ImageProps) => {
  return (
    <StyledWrapper>
      <OriginalImage
        src={src}
        blurDataURL={src}
        placeholder="blur"
        layout="fill"
        {...imageProps}
      />
    </StyledWrapper>
  );
};

export default ImageTest;

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  object-fit: cover;
`;
