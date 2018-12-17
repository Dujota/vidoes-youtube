import axios from 'axios';

const KEY = 'AIzaSyCayHHWo-Rrp0f0SWCVVfaUCh-zXrYnNYU';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: '5',
    keys: KEY
  }
});
