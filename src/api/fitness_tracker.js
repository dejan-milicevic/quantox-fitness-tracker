import axios from 'axios'

export function getData() {
  return axios.get('https://api.myjson.com/bins/1gwnal')
}
