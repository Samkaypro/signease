import { useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import alphabet from './abc-pics';
import FlippingCard from './FlippinCard';
import './gameCard.css'; 

export const Dictionary = () => {
  const [flipAll, setFlipAll] = useState(false);

  return (
    <Container >
      {alphabet && (
        <Row className="text-center justify-content-center no-gutters">
          {alphabet.map(letter => (
            <Col xs={6} key={letter.id} className="mb-0 p-0">
              <FlippingCard otherSide={letter.id} flip={flipAll}>
                <Card className='text-center custom-shadow bg-white '>
                  <Card.Img
                    height='180'
                    variant='top'
                    src={letter.src}
                    title={letter.title}
                    alt={letter.alt}
                  />
                  <Card.Body>Flip Card</Card.Body>
                </Card>
              </FlippingCard>
            </Col>
          ))}
          {/* <Button style={{ backgroundColor: '#121212', color: 'white', PaddingBottom: '100px' }} onClick={() => setFlipAll(!flipAll)}>Reveal all</Button> */}
        </Row>
      )}
    </Container>
  );
};
