// File: data/eventos.ts

export interface Evento {
    Location: string;
    Hour: string;
    Date: Date;
    Description: string;
    Image_url: string;
}

export const eventos: Evento[] = [
    {
        Location: "Auditorio Principal",
        Hour: "10:00 AM",
        Date: new Date("2023-11-15"),
        Description: "Conferencia sobre innovación tecnológica.",
        Image_url: "https://weezevent.com/wp-content/uploads/2023/01/12154730/animer-conferences-captivantes.jpg"
    },
    {
        Location: "Sala de Reuniones B",
        Hour: "2:00 PM",
        Date: new Date("2023-11-16"),
        Description: "Taller de desarrollo de aplicaciones móviles.",
        Image_url: 'https://cdn.prod.website-files.com/6410ebf8e483b5bb2c86eb27/6410ebf8e483b5758186fbd8_ABM%20college%20mobile%20app%20dev%20main.jpg'
    },
    {
        Location: "Campo Deportivo",
        Hour: "4:00 PM",
        Date: new Date("2023-11-17"),
        Description: "Partido de fútbol entre facultades.",
        Image_url: "https://www.udep.edu.pe/wp-content/uploads/sites/49/media/2014/05/Empresas-2.jpg"
    },
    {
        Location: "Biblioteca Central",
        Hour: "11:00 AM",
        Date: new Date("2023-11-18"),
        Description: "Exposición de libros antiguos.",
        Image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7hrCNQVJWTwM3d2vuoPpAF7A0G-WecIq3Jg&s"
    },
    {
        Location: "Laboratorio de Ciencias",
        Hour: "1:00 PM",
        Date: new Date("2023-11-19"),
        Description: "Demostración de experimentos científicos.",
        Image_url: "https://concepto.de/wp-content/uploads/2018/09/experimentacion-cientifica1-e1537979540123.jpg"
    },
    {
        Location: "Teatro Universitario",
        Hour: "6:00 PM",
        Date: new Date("2023-11-20"),
        Description: "Obra de teatro estudiantil.",
        Image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzvGAGqKthzDnkxtS7wepqV0bnTHdhORsQnQ&s"
    }
];