import React, { Component } from 'react'
import { Card , Button } from 'react-bootstrap';
import axios from 'axios';
// import data from '../JS/data.json';
export class Allcourses extends Component {
    state={
        courses:[]
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then( res => {
            console.log(res.data)
          this.setState({
              courses:res.data
          })
        })
    }
    
    render() {
        
        const courselistt = this.state.courses.map((cours) => {
            return (
                <Card style={{ width: '18rem' , marginLeft:'50px'}} key={cours.id}>
                             <Card.Img variant="top" src="logo192.png" />
                             <Card.Body>
                                 <Card.Title>{cours.title}</Card.Title>
                                 <Card.Text>
                                 {cours.body}
                                </Card.Text>
                                
                             </Card.Body>
                            </Card>)
        
     
        })
       
        return (
            <div className="lastc">
               <h4 className="lasthead">Our Courses:</h4>
               <div className="lastcard">
                   {courselistt}


               </div>
               <div className="lastMore">
               <Button variant="primary">More Courses</Button>
               </div>
            </div>
        )
    }
}

export default Allcourses
