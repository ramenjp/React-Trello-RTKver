import * as React from 'react'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../store'

export default function App({
  Component,
  pageProps
}: AppProps): React.ReactElement {
  
  return (
    <Provider store={store}>
            <Component {...pageProps} />
    </Provider>
  )
}
