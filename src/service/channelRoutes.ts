import api from '../server';

const get = ({token}) => {
  return api.post('apps/canais', {
    subscription_id: 0,
    token,
  });
};

export default {get};
