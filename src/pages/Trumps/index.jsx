import React, { useState, useEffect } from 'react'
import { Card, ListGroup } from 'react-bootstrap';

const Trumps = () => {

  const [playerSuperhero, setPlayerSuperhero] = useState("");
  const [cpuSuperhero, setCpuSuperhero] = useState("");
  const [playerLoading, setPlayerLoading] = useState(true)
  const [cpuLoading, setCpuLoading] = useState(true);
  const [winner, setWinner] = useState("...")

  const Pid = Math.floor(Math.random() * 731) + 1
  const Cid = Math.floor(Math.random() * 731) + 1

    useEffect(() => {
        fetchSuperheroesP()
        fetchSuperheroesC()
    }, [])

    const fetchSuperheroesP = async () => {
        try {
            const response = await fetch(`https://superheroapi.com/api.php/10161034412029859/${Pid}`)
            const data = await response.json()
            setPlayerSuperhero(data)
            setPlayerLoading(false)
        } catch (error) {
            console.log('error message:', error);
        }
    }

    const fetchSuperheroesC = async () => {
      try {
          const response = await fetch(`https://superheroapi.com/api.php/10161034412029859/${Cid}`)
          const data = await response.json()
          setCpuSuperhero(data)
          setCpuLoading(false)
      } catch (error) {
          console.log('error message:', error);
      }
  }

    async function compareInt(){
      console.log(playerSuperhero.powerstats.intelligence)
      console.log(cpuSuperhero.powerstats.intelligence)
      if (playerSuperhero.powerstats.intelligence > cpuSuperhero.powerstats.intelligence){
        setWinner("You!")
      } else {
        setWinner("CPU!")
      }
    }

    async function compareStr(){
      if (playerSuperhero.powerstats.strength > cpuSuperhero.powerstats.strength){
        setWinner("You!")
      } else {
        setWinner("CPU!")
      }
    }

    async function compareSpe(){
      if (playerSuperhero.powerstats.speed > cpuSuperhero.powerstats.speed){
        setWinner("You!")
      } else {
        setWinner("CPU!")
      }
    }

    async function compareDur(){
      if (playerSuperhero.powerstats.durability > cpuSuperhero.powerstats.durability){
        setWinner("You!")
      } else {
        setWinner("CPU!")
      }
    }

    async function compareCom(){
      if (playerSuperhero.powerstats.combat > cpuSuperhero.powerstats.combat){
        setWinner("You!")
      } else {
        setWinner("CPU!")
      }
    }


    return (
        <>
            {
              playerLoading
              ? <p>Loading...</p>
              : <Card className='playerCard' style={{ width: '18rem' }}>
                <Card.Img className='card-image' variant="top" src={playerSuperhero.image.url} />

              <Card.Body>
                  <Card.Title>{playerSuperhero.name}</Card.Title>
                  <Card.Text>Powerstats</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                  <ListGroup.Item onClick={compareInt}>Intelligence: {playerSuperhero.powerstats.intelligence}</ListGroup.Item>
                  <ListGroup.Item onClick={compareStr}>Strength: {playerSuperhero.powerstats.strength}</ListGroup.Item>
                  <ListGroup.Item onClick={compareSpe}>Speed: {playerSuperhero.powerstats.speed}</ListGroup.Item>
                  <ListGroup.Item onClick={compareDur}>Durability: {playerSuperhero.powerstats.durability}</ListGroup.Item>
                  <ListGroup.Item onClick={compareCom}>Combat: {playerSuperhero.powerstats.combat}</ListGroup.Item>
              </ListGroup>
          </Card>
            }
            <img src="vs.png" className='vs' alt="VS graphic" />
            {
              cpuLoading
              ? <p>Loading...</p>
              : <Card className='cpuCard' style={{ width: '18rem' }}>
              <Card.Body>
              <Card.Img className='card-image' variant="top" src={cpuSuperhero.image.url} />
              <Card.Title>{cpuSuperhero.name}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                  <ListGroup.Item>Intelligence: ???</ListGroup.Item>
                  <ListGroup.Item >Strength: ???</ListGroup.Item>
                  <ListGroup.Item >Speed: ???</ListGroup.Item>
                  <ListGroup.Item >Durability: ???</ListGroup.Item>
                  <ListGroup.Item >Combat: ???</ListGroup.Item>
              </ListGroup>

            </Card>
            }
            <h3 className='winner'>Winner is {winner}</h3>
        </>
    )
}

export default Trumps