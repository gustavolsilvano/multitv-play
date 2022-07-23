import api from '../server';

const login = ({user, password}) => {
  return api.post('apps/login', {user, senha: password, opid: '1'});
};

export default {login};
