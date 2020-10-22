import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';


import { selectSections } from '../../redux/directory/directory-selector';

import "./directory.scss";
import MenuItem from "../menu-item/menu-item";

const Directory = ({sections}) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionsProps }) => (
      <MenuItem key={id} {...otherSectionsProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectSections
})

export default connect(mapStateToProps)(Directory);
