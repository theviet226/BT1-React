import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (
      <div className='py-5'>
        <section className="container px-lg-5">
          <div className='p-4 p-lg-5 bg-light rounded-3 text-center'>
            <div className="container pt-5">
              <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
              <p className="fs-4">Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
            </div>
            <a href="#" className="btn btn-lg btn-primary ">Call to action</a>
          </div>

        </section>
      </div>
    )
  }
}
