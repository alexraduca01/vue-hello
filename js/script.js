// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const { createApp } = Vue;

createApp({
    data() {
        return {
            message: "Kaizoku ou ni ore wa naru!",
            imgPath: "img/Rufy_bambino.webp",
            flexClass: "d-flex justify-content-center",
            h1Classes: "text-center display-1 text-danger fw-bold",
            bgOnePiece: `background-image: url("img/one-piece-4k-3840x2160-10904.png"); background-size: cover; background-repeat: no-repeat; height: 100vh;`,
        };
    },
}).mount("#app");
