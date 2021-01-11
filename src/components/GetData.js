import axios from 'axios'
import React, { Component } from 'react'


export default class GetData extends Component {
    state = {
        data : []
    }

    componentDidMount() {
        axios.get('https://api.enye.tech/v1/challenge/records')
            .then(res => this.setState({ data: res.data }))
            .catch(err => console.log(err))
    }
    render() {
        console.log(this.state.data);
        return (
            <div>
                
            </div>
        )
    }
}
