var quests = [{
        id: 0,
        desc: "Mueres en una serie de acontecimientos extraños.",
        options: []
    },
    {
        id: 1,
        desc: "Llegaste a Villa Felicidad, que quieres hacer?",
        options: [
            { questId: 2, desc: "Tomar Cerveza" },
            { questId: 3, desc: "Preguntarse por el sentido de la vida" },
            { questId: 4, desc: "Dormir" }
        ]
    },
    {
        id: 2,
        desc: "Encuentras un bar, y pides una cerveza pero no tienes dinero.",
        options: [
            { questId: 5, desc: "Suplicar" },
            { questId: 6, desc: "Robar" }
        ]
    },
    {
        id: 3,
        desc: "Te lo preguntas por mucho tiempo, y cuando te das cuenta pasaste 3 días sin comer.",
        options: [
            { questId: 0, desc: "" }
        ]
    },
    {
        id: 4,
        desc: "Duermes por mucho tiempo, y cuando te das cuenta pasaste 3 días sin comer.",
        options: [
            { questId: 0, desc: "" }
        ]
    },
    {
        id: 5,
        desc: "El tabernero se compadece y decide darte la cerveza mientras te cuenta su historia de vida.",
        options: [
            { questId: 7, desc: "Muy interesante!" },
            { questId: 6, desc: "Aburrido..." }
        ]
    },
    {
        id: 6,
        desc: "El tabernero se enoja por tu actitud...",
        options: [
            { questId: 0, desc: "" }
        ]
    },
    {
        id: 7,
        desc: "Luego de una buena historia, despides al tabernero y termina tu aventura. Esperabas mas? :D",
        options: []
    }
];