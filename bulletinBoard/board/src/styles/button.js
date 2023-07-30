import { styled, css } from "styled-components";
import COLOR from "./themeColor";
import { FlexCenter } from "./common";

const DGButton = ({ variant, size, shape, children, ...rest }) => {
  return (
    <Button variant={variant} size={size} shape={shape} {...rest}>
      {children}
    </Button>
  );
};

export default DGButton;

const variantCSS = {
  primary: css`
    background-color: ${COLOR.theme[200]};
    color: ${COLOR.theme[100]};
  `,
  secondary: css`
    background-color: ${COLOR.theme[300]};
  `,
};

const sizeCSS = {
  small: css`
    width: 100px;
    height: 30px;
    padding: 10px 0;
  `,
  medium: css`
    width: 80px;
    height: 50px;
    padding: 10px 0;
  `,
  large: css`
    width: 100px;
    height: 30px;
    padding: 10px 0;
  `,
  full: css`
    width: 100%;
    height: 100%;
    aspect-ratio: 8 / 1;
  `,
};
const shapeCSS = {
  shape: css`
    border-radius: 8px;
  `,
  round: css`
    border-radius: 50%;
  `,
};

const Button = styled.button`
  ${({ variant }) => variantCSS[variant]};
  ${({ size }) => sizeCSS[size]};
  ${({ shape }) => shapeCSS[shape]};
  ${FlexCenter}
  cursor: pointer;
  border: none;
  &:hover {
    opacity: 0.8;
  }
`;
