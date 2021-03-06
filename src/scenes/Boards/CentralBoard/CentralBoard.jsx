import React from 'react';
import { withStyles, Typography } from '@material-ui/core';

import styles from './style';
import { Card } from '../../../components';
import { centralBoardData } from '../../../cms/board';

const CentralBoard = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography className={classes.typo} variant="h2" align="center">Central Governing Board</Typography>
      <div className={classes.team}>      
        {centralBoardData.map((team, index) => (
          <Card key={index} variant="team" data={team} />
        ))}
      </div>
    </div>
  );
};

export default withStyles(styles)(CentralBoard);
