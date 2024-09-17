// File: data/productos.ts

export interface Producto {
    Name: string;
    Description: string;
    Color: string;
    Price: number;
    ContactInfo: string;
    Image_url: string;
}

export const productos: Producto[] = [
    {
        Name: "Used Textbook - Calculus",
        Description: "A used textbook for Calculus I and II.",
        Color: "Blue",
        Price: 50,
        ContactInfo: "contacto1@example.com",
        Image_url: "https://i.etsystatic.com/12662587/r/il/b8d001/4683244517/il_fullxfull.4683244517_h66r.jpg"
    },
    {
        Name: "Texas Instruments TI-84 Calculator",
        Description: "A used TI-84 graphing calculator.",
        Color: "Black",
        Price: 80,
        ContactInfo: "contacto2@example.com",
        Image_url: "https://i.ebayimg.com/images/g/5~cAAOSwFO1lFyd8/s-l1600.jpg"
    },
    {
        Name: "Used Laptop - Dell Inspiron",
        Description: "A used Dell Inspiron laptop, 8GB RAM, 256GB SSD.",
        Color: "Silver",
        Price: 300,
        ContactInfo: "contacto3@example.com",
        Image_url: "https://www.psero.com/wp-content/uploads/2020/03/zinonicomputers_20200325_42.jpg"
    },
    {
        Name: "Lab Coat",
        Description: "A white lab coat for chemistry labs.",
        Color: "White",
        Price: 20,
        ContactInfo: "contacto4@example.com",
        Image_url: "https://i.etsystatic.com/37193719/r/il/8fa839/5764509108/il_570xN.5764509108_fgcr.jpg"
    },
    {
        Name: "Used Backpack",
        Description: "A used backpack with multiple compartments.",
        Color: "Red",
        Price: 25,
        ContactInfo: "contacto5@example.com",
        Image_url: "https://i.ebayimg.com/images/g/1~AAAOSw9~5fJ6Zz/s-l1600.jpg"
    },
    {
        Name: "Used Bicycle",
        Description: "A used bicycle in good condition.",
        Color: "Blue",
        Price: 100,
        ContactInfo: "contacto9@example.com",
        Image_url: "https://oldspokeshome.com/sites/default/files/u59/23_Shogun%20Speeder_Side1.jpeg"
    },
];