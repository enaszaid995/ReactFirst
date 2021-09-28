import React, { Component } from 'react'
import { Card , Button } from 'react-bootstrap';
import axios from 'axios';
export class Lastcourse extends Component {
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
        const lengthh = this.state.courses.length
        console.log(lengthh);
        const x = lengthh-1;
        const y = lengthh-2;
        const z = lengthh-3;
        console.log(x);
        console.log(y);
        console.log(z);
        const c1=this.state.courses.map((cous) => {
            console.log(cous.id)
            if(cous.id == x){
                return(
                    
                    <Card style={{ width: '18rem' , marginLeft:'50px'}}>
                    <Card.Img variant="top" src="logo192.png" />
                    <Card.Body>
                        <Card.Title>{cous.title}</Card.Title>
                        <Card.Text>
                        {cous.body}
                        </Card.Text>
                        
                    </Card.Body>
                    </Card>
                )
                
                }
                if(cous.id == y){
                    return(
                        
                        <Card style={{ width: '18rem' , marginLeft:'50px'}}>
                        <Card.Img variant="top" src="logo192.png" />
                        <Card.Body>
                            <Card.Title>{cous.title}</Card.Title>
                            <Card.Text>
                            {cous.body}
                            </Card.Text>
                            
                        </Card.Body>
                        </Card>
                    )
                    
                    }

                    if(cous.id == z){
                        return(
                            
                            <Card style={{ width: '18rem' , marginLeft:'50px'}}>
                            <Card.Img variant="top" src="logo192.png" />
                            <Card.Body>
                                <Card.Title>{cous.title}</Card.Title>
                                <Card.Text>
                                {cous.body}
                                </Card.Text>
                                
                            </Card.Body>
                            </Card>
                        )
                        
                        }
           
        })
       
        

        return (
            <div className="lastc">
               <h4 className="lasthead">Last Courses:</h4>
               <div className="lastcard">

           {c1}
               
                {/* <Card style={{ width: '18rem' , marginLeft:'50px'}}>
                    <Card.Img variant="top" src="logo192.png" />
                    <Card.Body>
                        <Card.Title>Front-End Developer</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        
                    </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem', marginLeft:'50px' }}>
                <Card.Img variant="top" src="logo192.png" />
                <Card.Body>
                    <Card.Title>React JS</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
               
                </Card.Body>
                </Card>

                <Card style={{ width: '18rem' ,marginLeft:'50px' }}>
                <Card.Img variant="top" src="logo192.png" />
                <Card.Body>
                    <Card.Title>Vue JS</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    
                </Card.Body>
                </Card>


         

               </div>
               <div className="lastMore">
               <Button variant="primary">More Courses</Button> */}
               </div>
            </div>
        )
    }
}

export default Lastcourse
