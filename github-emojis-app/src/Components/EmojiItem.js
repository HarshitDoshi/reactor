import React from 'react'

const EmojiItem = (props) => {
  const { emojiTitle, emojiImgSrc, changePageTitle } = props;
  return (
    <div className="flex flex-wrap -m-4 justify-center justify-items-stretch" onClick={() => changePageTitle(emojiTitle)}>
      <div className="p-4">
        <div className="flex flex-col justify-center items-center text-center justify-items-stretch justify-self-stretch content-start self-stretch">
          <img alt={emojiTitle} className="rounded-lg object-center m-4" src={emojiImgSrc} />
          <h2 className="title-font font-medium text-lg text-white font-mono p-2 m-2">
            {emojiTitle}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default EmojiItem
