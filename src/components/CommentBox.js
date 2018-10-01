import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from 'actions';

// export default () => {
//   return <div>Comment Box</div>
// }

class CommentBox extends Component {

  state = {
    comment: ''
  }

  handleChange = (e) => {
    this.setState({
      comment: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.saveComment(this.state.comment)

    this.setState({
      comment: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <h4>Comment</h4>
          <textarea onChange={this.handleChange.bind(this)} value={this.state.comment}/>
          <div>
            <button>Submit</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch comments</button>
      </div>
    )
  }
}

export default connect(null, actions)(CommentBox)