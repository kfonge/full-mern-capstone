import { Card, Button } from 'react-bootstrap'

export default function EachCorePose({ pose }) {
    return (
        <div>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={pose.img_url} />
                <Card.Body>
                  <Card.Title>{pose.sanskrit_name} </Card.Title>
                  <Card.Text> 
                    {pose.english_name} Pose
                  </Card.Text>
                  <Button variant="primary">Video</Button>
                </Card.Body>
              </Card>
         
        {/* <div>
        <img width='300' height='300'src={pose.img_url} alt="yoga pose" />
            <h2>  {pose.sanskrit_name} - {pose.english_name} Pose</h2>
            
            </div> */}
            </div>
    )
}
