import { Link, useHistory } from "react-router-dom"
import { FormEvent, useState } from "react"

import illustrationImg from "../assets/images/illustration.svg"
import { ReactComponent as LogoImg } from "../assets/images/logo.svg"

import { Button } from "../components/Button"
import { useAuth } from "../hooks/useAuth"
import { database } from "../services/firebase"
import { Container } from "../styles/auth"
import { useStylePage } from "../hooks/useStylePage"

export function NewRoom() {
    const { color, handleChangeColor } = useStylePage()
    const { user } = useAuth()

    const [newRoom, setNewRoom] = useState('')

    const history = useHistory()
    
    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault()

        if(newRoom.trim() === "") {
            return
        }

        const roomRef = database.ref('rooms');

        const firebaseRoom = await roomRef.push({
            title: newRoom,
            autorId: user?.id
        })

        history.push(`/rooms/${firebaseRoom.key}`)
    }

    return (
        <Container color={color}>
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo </strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <button onClick={handleChangeColor} className='button-style'>{color}</button>
                    <LogoImg />
                    <h2>Criar uma nova sala</h2>
                    <form onSubmit={handleCreateRoom}>
                        <input 
                        type="text"
                        placeholder="Nome da sala"
                        onChange={event => setNewRoom(event.target.value)}
                        value={newRoom}
                        />
                        <Button type="submit" color={color}>
                            Criar sala
                        </Button>
                    </form>
                    <p>Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link></p>
                </div>
            </main>
        </Container>
    )
}