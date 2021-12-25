import React, { Component } from "react";
import { Button, SmallButton } from "../Components/Button";
import { StyledLink } from "../Components/Link";
import { TextField } from "../Components/TextFile";

export default class DemoJSS extends Component {
  render() {
    return (
      <div>
        <Button className="button_style" bgPrimary fontSize2x>
          Hello dũng
        </Button>
        <SmallButton>Hello dũng nhỏ</SmallButton>

        <StyledLink id="abc" name="abc123">
          Hello Style link
        </StyledLink>
        <TextField inputColor="purple" />
      </div>
    );
  }
}
