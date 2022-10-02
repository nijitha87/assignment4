import axios from 'axios';

const ApiClient = {
  get client() {
    const headers: any = {
      'Cache-Control': 'no-cache',
    };

    return axios.create({
      timeout: 18000,
      headers: headers,
    });
  },
};

export default ApiClient;
