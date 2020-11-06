import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID zqbdSwfLdSjLCVVHzahOXD92_RBXsnG54a8-9TYnBoU',
  },
})
