import { useHistory } from "react-router-dom"

import illustrationImg from "../assets/images/illustration.svg"
import logoImg from "../assets/images/logo.svg"
import googleIconImg from "../assets/images/google-icon.svg"

import { Button } from "../components/Button"

import { Container } from "../styles/auth"

import { useAuth } from "../hooks/useAuth"
import { FormEvent, useState } from "react"
import { database } from "../services/firebase"
import { useStylePage } from "../hooks/useStylePage"

export function Home() {
    const { color, handleChangeColor } = useStylePage()

    const history = useHistory()
    const { user, signInWithGoogle } = useAuth()
    const [roomCode, setRoomCode] = useState("")

    async function handleCreateRoom() {
        if(!user) {
           await signInWithGoogle()
        }

        history.push("/rooms/new")
    }

    async function handleJoinRoom(event: FormEvent) {
        event.preventDefault()
    
        if(roomCode.trim() === "") {
            return
        }

        const roomRef = await database.ref(`rooms/${roomCode}`).get()

        if(!roomRef.exists()) {
            alert("Room does not exists")
            return
        }

        if(roomRef.val().endedAt) {
            alert("Room already closed")
            return
        }

        history.push(`/rooms/${roomCode}`)
    }

    return (
        <Container>
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo </strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main className={color}>
                <div className="main-content">
                    <button onClick={handleChangeColor} className='button-style'>{color}</button>

                    <img src={logoImg} alt="Letmeask" />
                    <p className="text-info">Tire as dúvidas da sua audiência em tempo-real</p>
                    <button className="create-room" onClick={handleCreateRoom}>
                        <img src={googleIconImg} alt="Logo do Google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form onSubmit={handleJoinRoom}>
                        <input 
                        type="text"
                        placeholder="Digite o código da sala"
                        onChange={(event) => setRoomCode(event.target.value)}
                        value={roomCode}
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </Container>
    )
}