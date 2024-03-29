import { Link } from "react-router-dom";
import { Button, Header, Icon, Segment } from "semantic-ui-react";

export default function NotFound(){
    return (
        <Segment placeholder>
            <Header icon>
                <Icon name='search'/>
                Opps - we've looked everywhere, We coun't find this
            </Header>
            <Segment.Inline>
                <Button as={Link} to='/activities' primary>
                    Return to activities page
                </Button>
            </Segment.Inline>
        </Segment>
    )
}