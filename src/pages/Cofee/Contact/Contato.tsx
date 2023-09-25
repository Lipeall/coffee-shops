import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

//CSS
import "./style.scss";


const Contato: React.FC = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [enviando, setEnviando] = useState(false);
    const [mensagemEnviada, setMensagemEnviada] = useState(false);

    const handleNomeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNome(event.target.value);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleMensagemChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setMensagem(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        setEnviando(true);

        // Simulando um envio assíncrono (você pode substituir por sua lógica real de envio)
        setTimeout(() => {
            setEnviando(false);
            setMensagemEnviada(true);

            // Resetando o formulário
            setNome("");
            setEmail("");
            setMensagem("");

            // Removendo a mensagem de "Mensagem enviada" após 5 segundos
            setTimeout(() => {
                setMensagemEnviada(false);
            }, 5000);
        }, 2000); // Simulando um atraso de 2 segundos para o envio
    };

    return (
        <div id="contact"
            style={{
                display: "grid",
                placeItems: "center",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(10px)",
                borderRadius: "10px",
                padding: "20px",
                width: 600,
                height: 450,
                zIndex: 2,
            }}
        >
            <Typography variant="h4" gutterBottom>Entre em Contato</Typography>
            {mensagemEnviada ? (
                <div>
                    <Typography variant="h5" gutterBottom>
                        Mensagem enviada!
                    </Typography>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="Nome"
                                variant="outlined"
                                fullWidth
                                value={nome}
                                onChange={handleNomeChange}
                                required
								InputProps={{
									style: {
										color: "#FFF",
										fontWeight: 700
									}
								}}
								InputLabelProps={{
									style: {
										color: "#FFF",
										fontWeight: 700
									}
								}}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Email"
                                variant="outlined"
                                fullWidth
                                value={email}
                                onChange={handleEmailChange}
                                required
								InputProps={{
									style: {
										color: "#FFF",
										fontWeight: 700
									}
								}}
								InputLabelProps={{
									style: {
										color: "#FFF",
										fontWeight: 700
									}
								}}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Mensagem"
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={4}
                                value={mensagem}
                                onChange={handleMensagemChange}
                                required
								InputProps={{
									style: {
										color: "#FFF",
										fontWeight: 700
									}
								}}
								InputLabelProps={{
									style: {
										color: "#FFF",
										fontWeight: 700
									}
								}}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        style={{ marginTop: 20 }}
                        variant="contained"
                        color="primary"
                        type="submit"
                        disabled={enviando}
                    >
                        {enviando ? "Enviando..." : "Enviar"}
                    </Button>
                </form>
            )}
        </div>
    );
};

export default Contato;
