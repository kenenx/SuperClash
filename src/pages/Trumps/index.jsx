import React, { useState, useEffect } from 'react'
import { Card, ListGroup } from 'react-bootstrap';

const Trumps = () => {

    const [superhero, setSuperhero] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchSuperheroes()
    }, [])

    const fetchSuperheroes = async () => {
        try {
            const response = await fetch('https://superheroapi.com/api.php/10161034412029859/289')
            const data = await response.json()
            console.log(data)
            setSuperhero(data)
            setLoading(false)
            // console.log(superhero.image.url)
        } catch (error) {
            console.log('error message:', error);
        }
    }



    return (
        <>
            <div>Trumps Card</div>
            {
              loading
              ? <p>Loading...</p>
              : <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={superhero.image.url} />

              <Card.Body>
                  <Card.Title>{superhero.name}</Card.Title>
                  <Card.Text>Powerstats</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                  <ListGroup.Item>Intelligence: {superhero.powerstats.intelligence}</ListGroup.Item>
                  <ListGroup.Item>Strength: {superhero.powerstats.strength}</ListGroup.Item>
                  <ListGroup.Item>Speed: {superhero.powerstats.speed}</ListGroup.Item>
                  <ListGroup.Item>Durability: {superhero.powerstats.durability}</ListGroup.Item>
                  <ListGroup.Item>Combat: {superhero.powerstats.combat}</ListGroup.Item>
              </ListGroup>
          </Card>
            }
        </>
    )
}

export default Trumps