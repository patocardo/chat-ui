import React, {useState} from 'react';
import moment from 'moment';
import './MessagesList.scss';

const MessagesList =(props) => {
  const [currentTimestamp, setCurrentTimestamp] = useState(null);
  // const [newMessages, setNewMessages] = useState(mockChat.reduce((sum, msg) => {
  //   return sum += (msg.status === 'received') ? 1 : 0;
  // }, 0));
  const newMessages = mockChat.reduce((sum, msg) => {
    return sum += (msg.status === 'received') ? 1 : 0;
  }, 0);

  const displayDate = (timestamp) => {

    if(timestamp === currentTimestamp) {
      return '';
    }
    setCurrentTimestamp(timestamp);
    const toDisplay = (Math.floor(moment.duration(moment().diff(timestamp)).as('days')))
      ? moment(timestamp).format('MMMM D, YYYY')
      : 'today';
    return (
      <div className="date-label">{toDisplay}</div>
    );
  }

  const displayMessage = (msg) => {
    return (
      <React.Fragment>
        {
          displayDate(parseFloat(msg.timestamp))
        }
        <div className={msg.direction}>
          <div className="content">{msg.text}</div>
          <div className="timing">{ moment(parseFloat(msg.timestamp)).format('H:mm')}</div>
        </div>
      </React.Fragment>
    );
  }

  return (
    <div className="messages-panel">
      {
        props.messages.map((msg) => displayMessage(msg))
      }
    </div>
  )
}

export default MessagesList;