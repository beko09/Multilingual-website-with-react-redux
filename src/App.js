import React, { Component,Fragment } from 'react';
import Navbar from './components/navbar/index';
import Content from './components/content/Content';
import { Provider } from 'react-redux';
import { store, persister } from './redux/store';
import { PersistGate } from 'redux-persist/es/integration/react';
class App extends Component {
  render(){
  return (
    <Provider store={store}>
      <PersistGate loading={'loading...'} persistor={persister}>
        <Fragment>
          <Navbar />
          <Content />
        </Fragment>
      </PersistGate>
    
    </Provider>
  )
}
}

export default App;
