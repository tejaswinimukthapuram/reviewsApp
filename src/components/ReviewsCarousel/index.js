// Write your code here

import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  onLeftArrowClick = () => {
    const {index} = this.state
    if (index !== 0) {
      this.setState(prevState => ({index: prevState.index - 1}))
    }
  }

  onRightArrowClick = () => {
    const {index} = this.state
    const {reviewsList} = this.props
    const {length} = reviewsList

    if (index !== length - 2) {
      this.setState(prevState => ({index: prevState.index + 1}))
    }
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[index]
    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <div className="card-container">
          <button
            onClick={this.onLeftArrowClick}
            type="button"
            testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
              alt="left arrow"
              className="arrow-image"
            />
          </button>
          <div className="review-card" key={username}>
            <img src={imgUrl} alt={username} className="person-image" />

            <p>{username}</p>
            <p>{companyName}</p>
            <p>{description}</p>
          </div>
          <button
            onClick={this.onRightArrowClick}
            type="button"
            testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow-image"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
