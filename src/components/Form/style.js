const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',

    [theme.breakpoints.down(450)]: {
      flexDirection: 'column',
    },
  },

  field: {
    width: '50%',
    padding: 5,

    '& label': {
      padding: 5,
    },

    [theme.breakpoints.down(450)]: {
      width: '100%',
    },
  },

  radioField: {
    width: '100%',
    marginTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },

  radioFieldLabel: {
    paddingTop: 5,
  },

  imageDiv: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 5,
  },

  multiline: {
    width: '100%',
    padding: 5,

    '& label': {
      padding: 5,
    },
  },
});

export default styles;
