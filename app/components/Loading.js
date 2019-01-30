import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  content: {
    textAlign: 'center',
    fontSize: '35px'
  }
};

class Loading extends React.Component {

   static propTypes = {
    text: PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired,
  };
  
  static defaultProps = {
    text: 'Loading',
    speed: 300
  };

  state = {
    text: props.text
  };

  componentDidMount = ({text, speed}) => {
    const stopper = text + '...';
    this.interval = window.setInterval(() => {
    this.state.text === stopper
      ? this.setState(() => ({ text: text}))
      : this.setState((prev) => ({ text: prev.text + '.'})) 
    }, speed)
  }

  componentWillUnmount = () => {
    window.clearInterval(this.interval);
  }

  render() {
    const { text } = this.state
    return <p style={styles.content}>{text}</p>
  }
}



export default Loading;