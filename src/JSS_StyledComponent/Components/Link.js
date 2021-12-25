import styled from "styled-components";
import React from "react";

// Cach 1
// export const Link = ({ className, children, ...restProps }) => {
//   return <a className={className}>{children}</a>;
// };

// Cach 2
export const Link = ({ className, children, ...restProps }) => (
  <a className={className} {...restProps}>
    {children}
  </a>
);

export const StyledLink = styled(Link)`
  color: red !important;
  font-weight: bold;
`;
