import React, {Component} from 'react'

class AddTodo extends Component {
    state = {
        title : ''
    }

    onChange = (e) => {
        this.setState({
            title : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.title)
        this.setState({
            title : ''
        })
    }

    render () {
        return (
            <form style={{display: 'flex'}} onSubmit={this.onSubmit}>
                <input value={this.state.title} onChange={this.onChange} type='text' name='title' placeholder='Enter title'/>
                <input type='submit' value='Submit'/>
            </form>
        )
    }
}

// AddTodo.propTypes = {
//     add : PropTypes.object

// }

export default AddTodo;
