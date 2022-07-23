import * as yup from 'yup';
import ERROR from './strings';

const SCHEMAS = {
  LOGIN: yup.object({
    user: yup.string().required(ERROR.FORM.REQUIRED),
    password: yup.string().required(ERROR.FORM.REQUIRED),
  }),
};

export default SCHEMAS;
