// File: data/reservas.ts

export interface Reserva {
    Location: string;
    Description: string;
    Image_url: string;
}

export const reservas: Reserva[] = [
    {
        Location: "Cancha de futbol",
        Description: "Una gran cancha de fútbol con césped artificial.",
        Image_url: "https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/tarhmadzucbnqb8wzhsg"
    },
    {
        Location: "Cancha de tenis",
        Description: "Una cancha de tenis bien mantenida con iluminación nocturna.",
        Image_url: "https://civideportes.com.co/wp-content/uploads/2021/05/image29954-2.jpg"
    },
    {
        Location: "Sala Bloomberg",
        Description: "Una sala moderna equipada con terminales Bloomberg.",
        Image_url: "https://data.bloomberglp.com/professional/sites/30/photo4-800x534.jpg"
    }
];