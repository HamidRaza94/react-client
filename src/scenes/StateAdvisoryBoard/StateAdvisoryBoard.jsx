import React, { Component } from 'react';
import { withStyles, Select, MenuItem } from '@material-ui/core';

import styles from './style';
import { STATES } from '../../cms/constants';
import { stateAdvisoryBoardData } from '../../cms/board';
import { Table } from '../../components';

class StateAdvisoryBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: '',
      stateBoard: '',
    };
  }

  componentWillMount = () => {
    const { boardMembers } = stateAdvisoryBoardData;
    this.setState({stateBoard: boardMembers});
  }

  handleChangeState = event => {
    const currentState = event.target.value;
    let currentStateBoard;
    const { boardMembers } = stateAdvisoryBoardData;

    if (currentState === '') {
      currentStateBoard = boardMembers;
    } else {
      currentStateBoard = boardMembers.filter(row => row.state === currentState);
    }

    this.setState({
      state: currentState,
      stateBoard: currentStateBoard
    });
  };

  render() {
    const { state, stateBoard } = this.state;
    const { classes } = this.props;
    const { heading } = stateAdvisoryBoardData

    return (
      <div className={classes.root}>
        <div className={classes.state}>
          <Select
            value={state}
            onChange={this.handleChangeState}
            displayEmpty
            name="state"
            className={classes.select}
          >
            <MenuItem value="">
              <em>Select State</em>
            </MenuItem>
            {STATES.map(state => (
              <MenuItem value={state}>{state}</MenuItem>
            ))}
          </Select>
        </div>

        <Table data={stateBoard} head={heading} />
      </div>
    );
  }
}

export default withStyles(styles)(StateAdvisoryBoard);