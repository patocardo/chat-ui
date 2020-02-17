import React, {useState} from 'react';
import '.OtherUser.scss';

const OtherUser = () => {
  const [isDoing, setIsDoing] = useState('User is typing ...');

  const goList = () => {
    window.alert('should go to the list');
  }
  return (
    <div className="other-user">
      <button className="to-list" onClick={goList}>
        <img src="imgs/chevron-left.png" alt="go list" />
      </button>
      <img src="imgs/other_person.png" alt="other's avatar" />
      <div className="description">
        <div>
        </div>
        <p className="other-doing">{isDoing}</p>
      </div>
    </div>

  )
}

export default OtherUser;