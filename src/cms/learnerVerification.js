import { ROW_PER_PAGE_OPTIONS } from './constants';

const BEAUTICIAN = 'BEAUTICIAN';
const COMPUTER = 'COMPUTER';
const TAILOR = 'VOCATIONAL (TAILOR)';

const learnerVerification = {
  title: 'Learners List',
  columns: ['REGN NO', 'NAME', 'FATHER/HUSBAND NAME', 'DATE OF BIRTH', 'SUBJECT', 'ADDRESS'],
  options: {
    filterType: 'dropdown',
    selectableRows: 'none',
    responsive: 'scroll',
    print: false,
    rowsPerPage: 5,
    rowsPerPageOptions: ROW_PER_PAGE_OPTIONS,
    fixedHeader: false,
  },
  data: [
    ['001/2019', 'GULAFSHA', 'MD. SALEEM', '17-08-1996', BEAUTICIAN, 'L-II, 917/23, SANGAM VIHAR, NEW DELHI - 110080'],
    ['002/2019', 'FARHANA', 'SAJID ALI', '01-01-1987', BEAUTICIAN, 'L-I, 1734/9, SANGAM VIHAR, NEW DELHI - 110080'],
    ['003/2019','MD ARIF','MD SALEEM','14-12-2003',COMPUTER, 'L-II, *****/23, SANGAM VIHAR, NEW DELHI - 110080'],
    ['004/2019', 'SAMEER', 'MD SALEEM', '15-09-2002', COMPUTER, 'L-II, *****/23, SANGAM VIHAR, NEW DELHI - 110080'],
    ['005/2019', 'TANIYA', 'JITENDRA', '25-10-2006', COMPUTER, 'K-II, 135, SANGAM VIHAR, NEW DELHI'],
    ['006/2019', 'REENA KUMARI', 'ASHOK KUMAR', '20-06-2002', BEAUTICIAN, 'G, 1016, SANGAM VIHAR'],
    ['007/2019', 'MONA', 'ASHOK KUMAR', '01-01-1989', BEAUTICIAN, 'G, 1016, SANGAM VIHAR'],
    ['008/2019', 'VANDANA', 'SANTRAM', '20-05-1999', TAILOR, 'K-II, 1103, SANGAM VIHAR'],
    ['009/2019', 'POOJA', 'AMAR SINGH', '20-09-1999', COMPUTER, 'L-I, 758-B/14, SANGAM VIHAR'],
    ['010/2019', 'POOJA', 'AMAR SINGH', '20-09-1999', BEAUTICIAN, 'L-I, 758-B/14, SANGAM VIHAR'],
    ['011/2019', 'VIMLESH', 'ANIL', '06-05-1990', TAILOR, 'L-I, 758'],
    ['012/2019', 'RAKHI KUMARI', 'PURAN SINGH', '01-01-1991', BEAUTICIAN, 'K-II, 813, SANGAM VIHAR'],
    ['013/2019', 'AARTI', 'AMIR SINGH', '01-01-1997', TAILOR, 'K-II, 702, SANGAM VIHAR'],
    ['014/2019', 'RITA VERMA', 'MONU VERMA', '01-01-1993', TAILOR, 'K-II, 2, SANGAM VIHAR'],
    ['015/2019', 'MANISHA', 'SONU', '01-09-1988', TAILOR, 'K-II, 2, SANGAM VIHAR'],
    ['016/2019', 'SAKSHI', 'UTTAM SINGH', '24-10-2001', BEAUTICIAN, 'B, 1476, SANGAM VIHAR'],
    ['017/2019', 'TANNU', 'RAJESH', '01-01-2002', BEAUTICIAN, 'K-II, 41/4, SANGAM VIHAR'],
    ['018/2019', 'ANAMIKA', 'TARKESHWAR', '25-01-2001', BEAUTICIAN, 'L-I, 29, SANGAM VIHAR'],
    ['019/2019', 'NEHA KUMARI', 'RAM NARAYAN', '23-03-1994', BEAUTICIAN, 'K-II, 704, SANGAM VIHAR'],
    ['020/2019', 'NEHA KUMARI', 'RAM NARAYAN', '23-03-1994', TAILOR, 'K-II, 704, SANGAM VIHAR'],
    ['021/2019', 'PRIYANKA DEVI', 'RAJESH KR SHARMA', '01-01-2001', COMPUTER, 'K-II, 886, SANGAM VIHAR'],
    ['022/2019', 'NASREEN', 'NASRUDDIN', '', BEAUTICIAN, 'K-II, 705, SANGAM VIHAR'],
    ['023/2019', 'RUBEENA', 'MUKHTYAR', '01-01-1996', BEAUTICIAN, 'K-II, 706, SANGAM VIHAR'],
    ['024/2019', 'GUNJAN', 'RAM BABU', '26-07-2001', TAILOR, 'K-II, 318, SANGAM VIHAR'],
    ['025/2019', 'GUNJAN', 'RAM BABU', '26-07-2001', BEAUTICIAN, 'K-II, 318, SANGAM VIHAR'],
    ['026/2019', 'SHALU', 'MOHAN LAL', '12-11-2000', BEAUTICIAN, 'K-II, 43, SANGAM VIHAR'],
    ['027/2019', 'REKHA DEVI', 'GYA PRASAD', '01-01-1968', TAILOR, 'L-I, 1540/19, SANGAM VIHAR'],
    ['028/2019', 'YASMIN', 'VAKIR HUSSAIN', '01-01-1999', BEAUTICIAN, 'L-I, 354, TIGRI'],
    ['029/2019', 'YOGITA KASYAP', 'BIJENDAR', '03-10-2001', BEAUTICIAN, 'L-6, 309, SANGAM VIHAR'],
    ['030/2019', 'PRIYANKA GAUTAM', 'LATE DHARAMPAL', '15-12-2001', BEAUTICIAN, 'L-6, 2019, SANGAM VIHAR'],
    ['031/2019', 'NASREEN', 'TASLIM KHAN', '16-06-2005', TAILOR, 'L-II, 706, SANGAM VIHAR'],
    ['032/2019', 'PREETI SHAH', 'JAIVEER SINGH', '22-06-2005', TAILOR, '1506, CHURCH COLONY'],
    ['033/2019', 'SUDHA DEVI SHRIVASTAV', 'SATISH KUMAR', '01-01-1975', TAILOR, 'K-II, 1210, SANGAM VIHAR'],
    ['034/2019', 'SANDHYA', 'PREM SINGH', '01-01-2002', TAILOR, 'H. NO. 6 KHASRA NO 58, SANGAM VIHAR'],
    ['035/2019', 'KISHAN KUMAR', 'BAID NATH', '10-03-2003', COMPUTER, 'G-182, SANGAM VIHAR'],
    ['036/2019', 'SANIYA BANO', 'SAJID HUSSAIN', '28-01-2003', COMPUTER, 'K-II, 19, SANGAM VIHAR'],
    ['037/2019', 'AARTI', 'RAGHU RAJ', '28-10-1996', BEAUTICIAN, 'K-II, 195/7, SANGAM VIHAR'],
    ['038/2019', 'NEHA NAGAR', 'ASHOK NAGAR', '07-07-2008', BEAUTICIAN, 'K-II, 1248, SANGAM VIHAR'],
    ['039/2019', 'ANJUM SAIFI', 'FAHIMUDDIN', '26-10-1999', TAILOR, 'K-II, 827, SANGAM VIHAR'],
    ['040/2019', 'SHAISTA', 'SHAHID', '07-06-1998', BEAUTICIAN, 'VEER BAJAR, SANGAM VIHAR'],
    ['041/2019', 'KAVITA', 'DUSHASAN', '01-01-1978', TAILOR, 'K-II, 145, SANGAM VIHAR'],
    ['042/2019', 'SHASHI KALA', 'SATISH', '05-03-1987', TAILOR, 'K-II A, 66/3, SANGAM VIHAR'],
    ['043/2019', 'AALMA BEGUM', 'MD. SALIM', '01-01-1985', BEAUTICIAN, 'L-II, 1251, SANGAM VIHAR'],
    ['044/2019', 'AZAM ALI', 'SAYYAD *****', '12-07-2002', COMPUTER, 'K-II, 706, SANGAM VIHAR'],
    ['045/2019', 'MONIKA', 'DATA RAM', '21-03-1996', TAILOR, 'K-2, 132, H.B., SANGAM VIHAR'],
    ['046/2019', 'POOJA DEVI', 'VIKRAM KUMAR', '01-01-1992', BEAUTICIAN, 'K-2, 204, H.B., SANGAM VIHAR'],
    ['047/2019', 'SHIVA', 'VINOD', '20-12-2006', COMPUTER, 'K-2, 131A, SANGAM VIHAR'],
    ['048/2019', 'ANKUSH KUMAR', 'MANOJ KUMAR', '20-06-2005', COMPUTER, 'K-2, 28, H.B., SANGAM VIHAR'],
    ['049/2019', 'MD. MUKHTAR ASHRAF', 'MD. AYYUB', '26-03-2009', COMPUTER, 'K-2, 154, SANGAM VIHAR1'],
    ['050/2019', 'SAJIYA', 'MD. AYYUB', '15-08-2006', COMPUTER, 'K-2, 154, SANGAM VIHAR'],
    ['051/2019', 'ANJUM SAIFI', 'FAHIMUDDIN', '26-10-1999', BEAUTICIAN, ''],
    ['052/2019', 'TANEESHA', 'NIZAM', '01-01-2003', BEAUTICIAN, 'K-2, 827, SANGAM VIHAR'],
    ['053/2019', 'AMRIN', 'ALTAF KHAN', '01-01-2003', TAILOR, 'KHASRA NO, 568, NOIDA'],
    ['054/2019', 'UJMA', 'KADEER', '22-01-2002', COMPUTER, 'L-I, 1780, SANGAM VIHAR'],
    ['055/2019', 'FARIN JAHAN', 'NASIR AHMAD', '30-11-1999', TAILOR, 'L-I, 2208, SANGAM VIHAR'],
    ['056/2019', 'FARHEEN', 'KHAN AHMAD', '01-01-1998', COMPUTER, 'L-I, 497/8, SANGAM VIHAR'],
    ['057/2019', 'ARTI RATHORE', 'MANOJ RATHORE', '*****', BEAUTICIAN, 'L-I, 2549/11, SANGAM VIHAR'],
    ['058/2019', 'SABIYA', 'MD. SAHABUDDIN', '10-01-2001', TAILOR, '*****'],
    ['059/2019', 'MEERA SINGH', 'GHANSHYAM', '01-01-2006', COMPUTER, 'L-625/9, SANGAM VIHAR'],
  ],
}

export default learnerVerification;
