import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from './pages/home.page';
import AboutPage from './pages/about.page';

render(
  <BrowserRouter>
    <Route path="/" component={HomePage} exact />
    <Route path="/about" component={AboutPage} exact />
  </BrowserRouter>,
  document.getElementById('root-app')
)