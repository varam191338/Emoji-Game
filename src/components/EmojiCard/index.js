import './index.css'

const EmojiCard = props => {
  const {details} = props
  const {emojiUrl, emojiName} = details

  return (
    <div>
      <li className="emoji-card">
        <img src={emojiUrl} alt={emojiName} />
      </li>
    </div>
  )
}

export default EmojiCard
