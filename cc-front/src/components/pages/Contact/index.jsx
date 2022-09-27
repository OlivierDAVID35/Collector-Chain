import { Button, ButtonToolbar, Form, Input } from 'rsuite'
import './styles.scss'

const Contact = () => {
  return (
    <div className='contact'>
        <h1>Contact us</h1>
        <Form>
            <Form.Group controlId="name">
                <Form.ControlLabel>Username</Form.ControlLabel>
                <Form.Control name="name" placeholder='Your name'/>
            </Form.Group>
            <Form.Group controlId="email">
                <Form.ControlLabel>Email</Form.ControlLabel>
                <Form.Control name="email" type="email" placeholder='Your email'/>
            </Form.Group>
            <Form.Group controlId="textarea">
                <Form.ControlLabel>Textarea</Form.ControlLabel>
                <Input as="textarea" rows={3} placeholder="Your message" />
            </Form.Group>
            <Form.Group>
                <ButtonToolbar>
                    <Button appearance="primary">Submit</Button>
                    {/* <Button appearance="default">Cancel</Button> */}
                </ButtonToolbar>
            </Form.Group>
        </Form>
    </div>
  )
}

export default Contact