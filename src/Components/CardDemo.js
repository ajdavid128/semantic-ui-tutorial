import { Card, Image } from 'semantic-ui-react';
import Sboy from '../images/Sboy.png';
import Sboy2 from '../images/Sboy2.png';
import Sboy3 from '../images/Sboy3.png';
import Sboy4 from '../images/Sboy4.png';
import Hspirit from '../images/Hspirit.png';
import Hspirit2 from '../images/Hspirit2.png';
import Pspirit from '../images/Pspirit.png';
import Pspirit2 from '../images/Pspirit2.png';


function CardDemo() {
    return (
        <Card.Group>
            <Card>
                <Card.Content>
                    <div class="ui fade reveal image">
                        <img class="visible content" src={Pspirit} alt="drawing of spirit with a large leaf" />
                        <img class="hidden content" src={Pspirit2} alt="drawing of spirit with a large leaf" />
                    </div>
                    <Card.Header>Plant Spirit</Card.Header>
                    <Card.Description>Doodles by Aaron David</Card.Description>
                </Card.Content>
            </Card>
            <Card>
                <Card.Content>
                    <div class="ui fade reveal image">
                        <img class="visible content" src={Hspirit} alt="drawing of spirit in a hole" />
                        <img class="hidden content" src={Hspirit2} alt="drawing of spirit in a hole" />
                    </div>
                    <Card.Header>Hiding Spirit</Card.Header>
                    <Card.Description>Doodles by Aaron David</Card.Description>
                </Card.Content>
            </Card>
            <Card>
                <Card.Content>
                    <div class="ui fade reveal image">
                        <img class="visible content" src={Sboy} alt="drawing of spirit with baseball hat" />
                        <img class="hidden content" src={Sboy2} alt="drawing of spirit with baseball hat" />
                    </div>
                    <Card.Header>Spirit Boy</Card.Header>
                    <Card.Description>Doodles by Aaron David</Card.Description>
                </Card.Content>
            </Card>
            <Card>
                <Card.Content>
                    <div class="ui fade reveal image">
                        <img class="visible content" src={Sboy4} alt="drawing of spirit with baseball hat" />
                        <img class="hidden content" src={Sboy3} alt="drawing of spirit with baseball hat" />
                    </div>
                    <Card.Header>Spirit Boy (invert)</Card.Header>
                    <Card.Description>Doodles by Aaron David</Card.Description>
                </Card.Content>
            </Card>
             
        </Card.Group>
    )
};

export default CardDemo;