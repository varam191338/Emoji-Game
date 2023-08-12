import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  shuffledList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {emojisList} = this.props
    const shuffledList = this.shuffledList()

    return (
      <div className="bg-container">
        <NavBar />
        <div>
          <ul className="emoji-cards">
            {shuffledList.map(eachItem => (
              <EmojiCard details={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default EmojiGame
