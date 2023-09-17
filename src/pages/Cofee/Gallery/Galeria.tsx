import React from "react";
import Gallery from "../../../components/Gallery/Gallery";
import Typography from "@mui/material/Typography";
//CSS
import "./style.scss"

const itemData = [
    {
        img: "https://picsum.photos/600",
        title: "Lorem Ipsum",
        description:
            'O "Lorem Ipsum" é um texto fictício amplamente utilizado como espaço reservado ou amostra de texto em diversas áreas da tipografia, design gráfico e editoração.',
    },
    {
        img: "https://picsum.photos/600",
        title: "Lorem Ipsum",
        description:
            'O "Lorem Ipsum" é um texto fictício amplamente utilizado como espaço reservado ou amostra de texto em diversas áreas da tipografia, design gráfico e editoração.',
    },
    {
        img: "https://picsum.photos/600",
        title: "Lorem Ipsum",
        description:
            'O "Lorem Ipsum" é um texto fictício amplamente utilizado como espaço reservado ou amostra de texto em diversas áreas da tipografia, design gráfico e editoração.',
    },
    {
        img: "https://picsum.photos/600",
        title: "Lorem Ipsum",
        description:
            'O "Lorem Ipsum" é um texto fictício amplamente utilizado como espaço reservado ou amostra de texto em diversas áreas da tipografia, design gráfico e editoração.',
    },
    {
        img: "https://picsum.photos/600",
        title: "Lorem Ipsum",
        description:
            'O "Lorem Ipsum" é um texto fictício amplamente utilizado como espaço reservado ou amostra de texto em diversas áreas da tipografia, design gráfico e editoração.',
    },
    {
        img: "https://picsum.photos/600",
        title: "Lorem Ipsum",
        description:
            'O "Lorem Ipsum" é um texto fictício amplamente utilizado como espaço reservado ou amostra de texto em diversas áreas da tipografia, design gráfico e editoração.',
    },
    {
        img: "https://picsum.photos/600",
        title: "Lorem Ipsum",
        description:
            'O "Lorem Ipsum" é um texto fictício amplamente utilizado como espaço reservado ou amostra de texto em diversas áreas da tipografia, design gráfico e editoração.',
    },
    {
        img: "https://picsum.photos/600",
        title: "Lorem Ipsum",
        description:
            'O "Lorem Ipsum" é um texto fictício amplamente utilizado como espaço reservado ou amostra de texto em diversas áreas da tipografia, design gráfico e editoração.',
    },
    {
        img: "https://picsum.photos/600",
        title: "Lorem Ipsum",
        description:
            'O "Lorem Ipsum" é um texto fictício amplamente utilizado como espaço reservado ou amostra de texto em diversas áreas da tipografia, design gráfico e editoração.',
    },
    {
        img: "https://picsum.photos/600",
        title: "Lorem Ipsum",
        description:
            'O "Lorem Ipsum" é um texto fictício amplamente utilizado como espaço reservado ou amostra de texto em diversas áreas da tipografia, design gráfico e editoração.',
    },
    {
        img: "https://picsum.photos/600",
        title: "Lorem Ipsum",
        description:
            'O "Lorem Ipsum" é um texto fictício amplamente utilizado como espaço reservado ou amostra de texto em diversas áreas da tipografia, design gráfico e editoração.',
    },
    {
        img: "https://picsum.photos/600",
        title: "Lorem Ipsum",
        description:
            'O "Lorem Ipsum" é um texto fictício amplamente utilizado como espaço reservado ou amostra de texto em diversas áreas da tipografia, design gráfico e editoração.',
    },
];


const Galeria: React.FC = () => {

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Tentadores Sabores: <br />
            </Typography>
                <Typography variant="h5" gutterBottom>
                    Explore Nosso Cardápio
                </Typography>
			<div style={{padding: "0 40px"}}>
                <Gallery data={itemData} />
			</div>
        </div>
    );
};

export default Galeria;
