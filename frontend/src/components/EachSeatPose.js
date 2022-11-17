import { Card, Button } from 'react-bootstrap'
export default function EachSeatPose({ pose }) {
    return (
        <div>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" height='250px' width='250px' src={pose.img_url} />
                <Card.Body>
                  <Card.Title>{pose.sanskrit_name} </Card.Title>
                  <Card.Text> 
                    {pose.english_name} Pose
                  </Card.Text>
                  <Button variant="primary">Video</Button>
                </Card.Body>
            </Card>
            </div>
    )
}
