"use client"
import React, { Component } from 'react';

class Mapa extends Component {
  componentDidMount() {
    if (window.simplemaps_countrymap) {
      window.simplemaps_countrymap.load();
    } else {
      console.error('simplemaps_countrymap is not available');
    }
  }

  render() {
    return <div id="map"/>;
  }
}

export default Mapa;
