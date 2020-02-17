import React, {useState} from 'react';

import './InputBoard.scss';

const InputBoard =  () => {
  const listenKey = (evt) => {
    if(evt.code != 'Enter') {
      return
    }
    // send message
  }
  return (
    <div className="footer">
      <textarea className="area" onKeyUp={} />
    </div>
  )
}

export default InputBoard;