import React, { Component } from "react";

import SubNav from "../subnav/SubNav";
import macSubNavData from "./macSubNavData";

export default class Mac extends Component {
  render() {
    return (
      <div>
        <SubNav data={macSubNavData} />
        <p>Mac</p>
      </div>
    );
  }
}
