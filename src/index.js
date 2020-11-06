import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/App'
//import 'bootstrap/scss/bootstrap.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './index.scss'

library.add(faSearch)

ReactDOM.render(<App />, document.getElementById('root'))
