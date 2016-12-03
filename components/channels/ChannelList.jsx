import React, {Component} from 'react';
import Channel from './Channel.jsx';

class ChannelList extends Component {
  render(){
    return (
      <ul>
        {
          this.props.channels.map( chan => {
            <Channel
              channel={chan}
              setChannel={this.props.setChannel}
            />
          })
        }</ul>
    )
  }
}

ChannelList.PropTypes = {
  channels: React.PropTypes.array.isRequired, // array is used for possibly containing many channels
  setChannel: React.PropTypes.func.isRequired
}

export default ChannelList
