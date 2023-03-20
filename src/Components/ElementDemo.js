import { Button, Card, Container, Image } from "semantic-ui-react";
import nic1 from '../images/nic1.jpg';
import nic2 from '../images/nic2.jpg';
import nic3 from '../images/nic3.jpg';

function ElementDemo() {
    return (
        <div className="avoid-nav">
            <Container>
                <h2>HTML JSX Button Element w/o Class Name</h2>
                <button>Click Me!</button>
                <br/>
                <h2>HTML JSX Button Element w/ Class Name</h2>
                <button class="green ui button">click me!</button>
                <br/>
                <h2>Semantic UI Button Component</h2>
                <Button>click me!</Button>
            </Container>

            <div id="cards">
                <Card.Group>
                    <Card>
                        <Card.Content>
                            <Image src={nic1} alt="nicholas cage crazy hair"/>
                            <Card.Header>Our Boy Nic</Card.Header>
                            <Card.Description>Love me some Nic</Card.Description>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Content>
                            <Image src={nic2} alt="nicholas cage you don't say"/>
                            <Card.Header>My Boy Nic</Card.Header>
                            <Card.Description>You Don't Say?</Card.Description>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Content>
                            <Image src={nic3} alt="nicholas cage basking in the sunshine"/>
                            <Card.Header>It's Nic</Card.Header>
                            <Card.Description>Ahhh yesss</Card.Description>
                        </Card.Content>
                    </Card>
                </Card.Group>
            </div>
        </div>
    )
};

export default ElementDemo;










            // <Container>
            //     <Form>
            //         <Form.Field
            //             control={Input} 
            //             label="First Name"
            //             placeholder="First Name"
            //         />
            //         <Form.Group>
            //             <label>Is a Hot Dog a sandwich?</label>
            //             <Form.Field 
            //                 control={Radio}
            //                 label='Yes'
            //             />
            //             <Form.Field 
            //                 control={Radio}
            //                 label='No'
            //             />
            //         </Form.Group>
            //         <Form.Field
            //         control={TextArea}
            //         label='Your Argument:'
            //         placeholder="Tell us more about why you do or don't think a hot dog is a sandwich..."
            //         />
            //         <Form.Field control={Button}>Submit</Form.Field>
            //     </Form>
            // </Container>