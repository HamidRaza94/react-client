import { RANKS } from './constants';

const {
  STATE_INCHARGE,
  SUPERINTENDENT,
  DEPUTY_SUPERINTENDENT,
  CHIEF_SECRETORY_STATE,
  STATE_SECRETORY,
  DIRECTOR_GENERAL,
  DIRECTOR,
} = RANKS;

function createData(state, name, rank, contact) {
  return { state, name, rank, contact };
}

const data = [
  createData('DELHI', 'YOGESH MEHTA', SUPERINTENDENT, 9015826397),
  createData('DELHI', 'DR. M. H. PASHA', DIRECTOR, 9990547081),
  createData('HARYANA', 'MARDAN ALI', DIRECTOR_GENERAL, 9671213606),
  createData('BIHAR', 'MD. YAKUB ANSARI', STATE_INCHARGE, 7903798853),
  createData('BIHAR', 'SUMAN KUMAR', CHIEF_SECRETORY_STATE, 8210767690),
  createData('BIHAR', 'ARADHANA KUMARI', STATE_SECRETORY, 6201841772),
  createData('GUJARAT', 'HARESH AMBALIYA', STATE_INCHARGE, 9714428903),
  createData('GUJARAT', 'GHAN SHYAM DONGA', SUPERINTENDENT, 8160350508),
  createData('MAHARASHTRA', 'RAHIM MD. PINJARI', SUPERINTENDENT, 8530378535),
  createData('UTTAR PRADESH', 'VED PRAKASH SHARMA', STATE_INCHARGE, 9548540575),
  createData('UTTAR PRADESH', 'S. M. KHALID ADV. HIGH COURT OF U.P.', SUPERINTENDENT, 9839110962),
  createData('UTTAR PRADESH', 'RAJ BABU GAHLAUT', DEPUTY_SUPERINTENDENT, 9634401079),
  createData('UTTAR PRADESH', 'FAISAL MUMTAZ', DIRECTOR_GENERAL, 9837551110),
  createData('UTTAR PRADESH', 'CHAUDHARY FARMAN RAYEEM', DIRECTOR, 7417282919)
];

export { data }
