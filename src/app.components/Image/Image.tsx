import React from 'react';
import OriginalImage, { ImageProps } from 'next/image';
import styled from 'styled-components';

const Image = ({ src, ...imageProps }: ImageProps) => {
  return (
    <StyledWrapper
      src={src}
      blurDataURL={src}
      placeholder="blur"
      width="100%"
      height="100%"
      layout="fill"
      {...imageProps}
    />
  );
};

export default Image;

const StyledWrapper = styled(OriginalImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
