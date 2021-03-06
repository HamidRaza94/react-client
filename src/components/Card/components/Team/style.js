const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 350,
    backgroundColor: '#1e2251',
    borderRadius: 5,
    boxShadow: '0px 0px 10px 5px #111433',
    fontFamily: 'Arial, Helvetica, sans-serif',
    color: 'white',
    margin: 10,
  },

  team: {
    width: '100%',
    height: 300,
    borderRadius: '5px 5px 0px 0px',
    boxShadow: '0px 0px 1px black',
    position: 'relative',
  },

  image: {
    width: '100%',
    height: '100%',
    borderRadius: '5px 5px 0px 0px',
    transition: '0.5s ease',
  },

  description: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    margin: '0px 10px',
  },

  span: {
    width: 35,
    height: 2,
    margin: '20px 0px',
    backgroundColor: '#b247af',
  },

  typo: {
    color: 'white',
  },

  socialDiv: {
    width: '100%',
    margin: '15px 0px',
  },

  social: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  socialTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default styles;
