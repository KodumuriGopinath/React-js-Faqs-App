// Write your code here.
import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  state = {isActive: false}

  toggleItem = id => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
    const {isActive} = this.state
    console.log(`Button ${id}`)
  }

  render() {
    const {faqsList} = this.props

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="main-heading">FAQs</h1>
          <ul className="faqs-list-items-container">
            {faqsList.map(eachItem => (
              <FaqItem
                key={eachItem.id}
                toggleItem={this.toggleItem}
                faqDetails={eachItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
