import * as React from 'react'
import Router from './router'
import ErrorBoundary from '../components/hocs/error-boundary'
import { injectSwitchModeToWindow } from '@reapit/elements'
import '../styles/index.css'

import { ReapitConnectBrowserSession } from '@reapit/connect-session'
import { PropertyModel } from '@reapit/foundations-ts-definitions'

// You should instantiate the class once only as a singleton as the module manages it's own state
export const reapitConnectBrowserSession = new ReapitConnectBrowserSession({
    // The client id of your application, obtained from Reapit Developer Portal
    connectClientId: '6ekdrbarjl964eilpncl7sl0mp',
    // The url to the Reapit Connect instance. While in beta this is the below URL but will need to be context aware in full prod/
    connectOAuthUrl: 'https://dev.connect.reapit.cloud',
    // OAuth UserPoolId - refer to the foundations documentation to obtain this for the correct environment
    connectUserPoolId: 'eu-west-2_eQ7dreNzJ',
    // The relative path you want to re-direct in your application after a successful login. You will have supplied this when you registered your app.
    // Defaults to '' or the root of your project if not supplied
    connectLoginRedirectPath: '/login',
    // The relative path you want to re-direct in your application after a successful logout. You will have supplied this when you registered your app.
    // Defaults to '/login' if not supplied
    connectLogoutRedirectPath: '/logout',
})

injectSwitchModeToWindow()

const App = () => {
  return (
    <ErrorBoundary>
      <Router />
    </ErrorBoundary>
  )
}

export default App
