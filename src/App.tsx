import React from 'react';
import './App.css';
import { QuizeStateProvider } from './components/quize-state';
import { ContentPage } from './components/content-page';

function App() {
  return (
    <div className="App">
      <QuizeStateProvider>
        <ContentPage />
      </QuizeStateProvider>
    </div>
  );
}

export default App;
