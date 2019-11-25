import { Validation } from '../models/Validation';

export const getValidateStatus = (validate: Validation) => {
  switch (validate.status) {
    case 0:
      return null;
    case 1:
      return 'success';
    case 2:
      return 'error';
  }
};
