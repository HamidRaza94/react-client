import * as yup from 'yup';

import { REGEX, FILE_SIZE, SUPPORTED_FORMATS } from '../../../libs/extra/constants';

const personalDetailSchema = yup.object().shape({
  name: yup.string().min(3).required().label('Name'),
  fatherName: yup.string().min(3).required().label('Father Name'),
  sex: yup.string().required().label('Sex'),
  maritalStatus: yup.string().required().label('Marital Status'),
  dateOfBirth: yup.date().required().label('Date of Birth'),
  placeOfBirth: yup.string().min(3).required().label('Place Of Birth'),
  category: yup.string().required().label('Category'),
  religion: yup.string().required().label('Religion'),
  occupation: yup.string().required().label('Occupation'),
  physicalStatus: yup.string().required().label('Physical Status'),
});

const communicationDetailSchema = yup.object().shape({
  phone: yup.string().matches(REGEX.phone, 'Phone Number is not valid').required().label('Phone Number'),
  email: yup.string().email().required().label('Email Address'),
  address: yup.string().required().label('Address'),
  policeStation: yup.string().required().label('Police Station'),
  state: yup.string().required().label('State'),
  pincode: yup.number().required().label('Pincode'),
});

const documentDetailSchema = yup.object().shape({
  aadhaar: yup.number().required().label('Aadhar'),
  pan: yup.string().required().label('PAN'),
  photo: yup
    .mixed()
    .required('A Photo is required')
    .test('fileSize', 'File too large', value => value && value.size <= FILE_SIZE.image)
    .test('fileFormat', 'Unsupported Format', value => value && SUPPORTED_FORMATS.image.includes(value.type)),
  sign: yup
    .mixed()
    .required('A Signature is required')
    .test('fileSize', 'File too large', value => value && value.size <= FILE_SIZE.image)
    .test('fileFormat', 'Unsupported Format', value => value && SUPPORTED_FORMATS.image.includes(value.type)),
});

const enrollmentRegistrationSchema = personalDetailSchema
  .concat(communicationDetailSchema)
  .concat(documentDetailSchema);

export {
  personalDetailSchema,
  communicationDetailSchema,
  documentDetailSchema,
  enrollmentRegistrationSchema,
}
