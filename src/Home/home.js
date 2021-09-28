import React, { Component } from 'react'
import Contact from '../Contact/contact';
import Carosal from '../Carosal/Carosal';
import Lastcourse from '../Courses/lastcourse';


export class Home extends Component {
    render() {
        return (
            <div>
                <Carosal/>
                <Lastcourse/>
                <Contact/>
            </div>
        )
    }
}

export default Home
