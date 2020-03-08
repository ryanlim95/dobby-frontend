import React, { Component } from "react";

import tools from "./utils/tools.js";

import "./assets/css/Toolbar.css";

class Toolbar extends Component {
  handleCmd = (e) => {
    console.log(e.target.id);
    this.props.setCmd(e.target.id);

    //TODO: enable only when contents are made inside block
  };

  render() {
    return (
      <div className="toolbar">
        <tools.Image id="tools_image"/>
        <tools.Media id="tools_media"/>
        <tools.Table id="tools_table"/>
        <tools.Graph id="tools_graph"/>
        <tools.Bulletlist id="tools_bulletlist" onClick={(e) => this.handleList(e)}/>
        <tools.Numlist id="tools_numlist" onClick={(e) => this.handleList(e)}/>
        <tools.Pagination id="tools_pagination" onClick={this.handleCmd}/>
        <tools.Capture id="tools_capture"/>
        <tools.Etc id="tools_etc"/>
      </div>
    );
  }
}

export default Toolbar;
