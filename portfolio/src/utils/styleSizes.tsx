import { css, CSSObject } from "styled-components";

interface MediaSizes {
  mobile: number;
  tablet: number;
  desktop: number;
  largeDesktop: number;
}

type MediaFunction = {
  [key in keyof MediaSizes]: (
    strings: TemplateStringsArray | CSSObject,
    ...interpolations: number[]
  ) => ReturnType<typeof css>;
};

const sizes: MediaSizes = {
  mobile: 425,
  tablet: 768,
  desktop: 1024,
  largeDesktop: 1200,
};

const media = (Object.keys(sizes) as Array<keyof MediaSizes>).reduce(
  (acc, label) => {
    acc[label] = (
      strings: TemplateStringsArray | CSSObject,
      ...interpolations: number[]
    ) => css`
      @media (max-width: ${sizes[label]}px) {
        ${css(strings, ...interpolations)}
      }
    `;
    return acc;
  },
  {} as MediaFunction
);

export default media;
