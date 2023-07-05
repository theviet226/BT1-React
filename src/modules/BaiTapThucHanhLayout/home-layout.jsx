import React, { Component } from 'react'
import Header from './header'
import Banner from './banner'
import Item from './item'
import Footer from './footer'

export default class HomeLayout extends Component {
  render() {
    return (
        <div>
            <Header/>
            <div className="container">
                <Banner/>
                <Item/>
            </div>
            <Footer/>
        </div>
    )
  }
}
