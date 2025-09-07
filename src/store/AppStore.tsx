import { store } from '.'
import React from 'react'
import { Provider } from 'react-redux'

interface AppStoreProps {
  children: React.ReactNode
}

const AppStore: React.FC<AppStoreProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}

export default AppStore
