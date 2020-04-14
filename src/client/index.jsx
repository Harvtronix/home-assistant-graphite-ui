import './index.scss'
import { enablePatches } from 'immer'

import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

enablePatches()

ReactDOM.render(<App />, document.getElementById('root'))
