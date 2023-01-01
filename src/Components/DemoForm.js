import {Container, Form, Input, Radio, TextArea, Button, Checkbox} from 'semantic-ui-react'

function DemoForm() {
    return(
        <Container id="form">
            <Form>
                <Form.Field
                    id="form-input-control-first-name"
                    control={Input} 
                    label="First Name"
                    placeholder="First Name"
                />
                <Form.Field
                    id="form-input-control-favorite-color"
                    control={Input} 
                    label="Favorite Color"
                    placeholder="Favorite Color"
                />
                    
                <Form.Group>
                    <label>Is a Hot Dog a sandwich?</label>
                    <Form.Field 
                        control={Radio}
                        label='Yes'
                    />
                    <Form.Field 
                        control={Radio}
                        label='No'
                    />
                </Form.Group>

                <Form.Field
                    control={TextArea}
                    label='Your Argument:'
                    placeholder="Tell us more about why you do or don't think a hot dog is a sandwich..."
                />
                <Form.Field
                    control={Checkbox}
                    label='I agree to not become enraged by the lunacy of this question'
                />
                <Form.Field control={Button}>Submit</Form.Field>
            </Form>
        </Container>
    )
};

export default DemoForm;