import React from 'react';
import { withStyles, Typography } from '@material-ui/core';

import styles from './style';
import { Card } from '../../components';
import { teams } from '../../cms';

const CentralBoard = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography className={classes.typo} variant="h2" align="center">Central Board</Typography>
      <div className={classes.team}>      
        {teams.central.map(team => (
          <Card variant="team" data={team} />
        ))}
      </div>
    </div>
  );
};

export default withStyles(styles)(CentralBoard);