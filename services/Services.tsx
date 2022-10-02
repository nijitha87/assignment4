import ApiClient from './ApiClient';

export const getCountries = () => {
  return ApiClient.client.get(
    'https://api.countries.code-test.utopiamusic.com/all'
  );
};
