import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';


import { selectSections } from '../../redux/directory/directory-selector';
import { DirectoryMenuContainer } from './directory.styles';
import MenuItem from "../menu-item/menu-item";

export const Directory = ({sections}) => (
  <DirectoryMenuContainer>
    {sections.map(({ id, ...otherSectionsProps }) => (
      <MenuItem key={id} {...otherSectionsProps} />
    ))}
  </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
    sections: selectSections
})

export default connect(mapStateToProps)(Directory);
