import axios from 'axios';

export async function getTokenOrRefresh() {
  try {
    const res = await axios.get('https://namepronunciationserviceptmvn.azurewebsites.net/api/token');
    const token = res.data;
    const region = 'eastus';

    console.log('Token fetched from back-end: ' + token);
    return { authToken: token, region: region };
  } catch (err) {
    console.log(err.response.data);
    return { authToken: null, error: err.response.data };
  }

}