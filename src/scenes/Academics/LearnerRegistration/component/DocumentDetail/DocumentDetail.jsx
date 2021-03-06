import React, { Component } from 'react';
import { withStyles, TextField } from '@material-ui/core';

// import {
//   DocumentDetailDefaultProps,
//   DocumentDetailPropTypes
// } from '../../../../libs/utils/props';
import styles from './style';

class DocumentDetail extends Component {
  handleChange = field => e => {
    this.props.onChange(field, e.target.value);
  }

  render() {
    const {
      // classes,
      aadhaar,
    } = this.props;

    return (
      <>
        <TextField
          id="aadhaar"
          label="Aadhar"
          value={aadhaar}
          onChange={this.handleChange('aadhaar')}
          type="number"
          margin="dense"
        />
      </>
    );
  }
}

// PersonalDetail.defaultProps = DocumentDetailDefaultProps;
// PersonalDetail.propTypes = DocumentDetailPropTypes;

export default withStyles(styles)(DocumentDetail);
