import axios from 'axios';

const devStatus = 'development';
const token = sessionStorage.getItem('token') || '';

axios.defaults.headers.common.Authorization = token;

/* SAMPLE Login:
    {
        "un": "JDo",
        "pw": "CatsRule123!"
    }
    */
/* SAMPLE CreateUser:
    {
      "FirstName": "Jason",
      "LastName": "Do",
      "UserName": "JDo",
      "Email": "jdo@example.com",
      "Password": "CatsRule123!",
      "DistributionCenter": "6003"
    }
    */

export default {
  updateFavorites(favorites) {
    return favorites;
  },
  fetchReports() {
    return axios.get('http://sddevserver01:8082/api/reports');
  },
  fetchSingleReport(reportId) {
    return axios.get(`http://sddevserver01:8082/api/reports/${reportId}`);
  },
  fetchUserFavorites() {
    return axios.get('http://sddevserver01:8082/api/reports/favorites/1');
  },
  postUserFavorite(reportId) {
    return axios.post(`http://sddevserver01:8082/api/reports/favorites/1/${reportId}`);
  },
  patchUserFavorite(reportId) {
    return axios.patch(`http://sddevserver01:8082/api/reports/favorites/1/${reportId}`);
  },
  authenticateUser(creds) {
    if (devStatus === 'production') {
      return axios.post('http://RSSQLSERVER02:90/api/Users/Auth', JSON.stringify({ un: creds.un, pw: creds.pw }), { headers: { 'Content-Type': 'application/json' } });
    }
    return axios.post('http://sddevserver01:8090/api/Users/Auth', JSON.stringify({ un: creds.un, pw: creds.pw }), { headers: { 'Content-Type': 'application/json' } });
  },
  // eslint-disable-next-line no-shadow
  validateUserToken(userName, expiration, token) {
    // id = UserID
    if (devStatus === 'production') {
      return axios.post('http://RSSQLSERVER02:90/api/Users/TokenValidation', JSON.stringify({ userName, expiration, token }), { headers: { 'Content-Type': 'application/json' } });
    }
    return axios.post('https://localhost:44305/api/Users/TokenValidation', JSON.stringify({ userName, expiration, token }), { headers: { 'Content-Type': 'application/json' } });
  },
  createUser(firstName, lastName, userName, email, password, distributionCenter) {
    if (devStatus === 'production') {
      return axios.post('http://RSSQLSERVER02:90/api/User', JSON.stringify({
        FirstName: firstName,
        LastName: lastName,
        UserName: userName,
        Email: email,
        Password: password,
        DistributionCenter: distributionCenter,
        Salt: null,
      }), { headers: { 'Content-Type': 'application/json' } });
    }
    return axios.post('https://localhost:44305/api/User', JSON.stringify({
      FirstName: firstName,
      LastName: lastName,
      UserName: userName,
      Email: email,
      Password: password,
      DistributionCenter: distributionCenter,
      Salt: null,
    }), { headers: { 'Content-Type': 'application/json' } });
  },
};
