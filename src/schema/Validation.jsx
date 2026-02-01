import * as yup from 'yup';

const Validation = yup.object({
  name: yup.string().min(5).max(20).required('Please enter your name'),
  email: yup.string().email().required('Please enter a valid email'),
  url: yup.string(),
  message: yup.string().required('Please enter a message'),
});

export default Validation;
