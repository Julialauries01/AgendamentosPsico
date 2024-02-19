const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function seedDatabase() {
  try {
    const images = [
      "https://media.istockphoto.com/id/1471651485/pt/foto/millennial-black-woman-psychologist-consults-smiling-european-guy-in-modern-clinic-interior.jpg?s=1024x1024&w=is&k=20&c=g7CEoPK4khmzSxNIiTKyjKhBWnykVJZJkVZz7M3Sjyc=",
      "https://media.istockphoto.com/id/1471478144/pt/foto/smiling-young-black-female-doctor-psychologist-consulting-european-woman-in-modern-clinic.jpg?s=1024x1024&w=is&k=20&c=DWVoLYSGRqLG1pZ25d5WL0cayloRVcTmJDYxbJs6cEY=",
      "https://media.istockphoto.com/id/1369683259/pt/foto/shot-of-a-mature-psychiatrist-sitting-with-her-patient-during-a-consultation-in-her-clinic.jpg?s=1024x1024&w=is&k=20&c=99ow6n-nKOoS-lnrSzZpC3DujwhA6zopdRWcF5XpwPM=",
      "https://media.istockphoto.com/id/1451107504/pt/foto/group-of-people-talking-in-a-therapy-session.jpg?s=1024x1024&w=is&k=20&c=zKbbZ9-ArAqNWCChVrl0Z8SI0qeM1R_TSWDouYz09sY=",
      "https://media.istockphoto.com/id/1004109302/pt/foto/hand-of-a-professional-family-psychotherapist-writing-notes-in-front-of-a-couple-with-a-child.jpg?s=1024x1024&w=is&k=20&c=J3IkAaV_L-d0EDDjYoVzPXOvwGvXMMfcHRT2N7TTvZ0=",


];
    // Nomes criativos para as barbearias
    const creativeNames = [
      "Avaliação",
      "Pacientes Clinicos",
      "Pacientes Hospitalares",
      "Terapia em grupo",
      "Terapia familiar",

    ];

    // Endereços fictícios para as barbearias
    const addresses = [
      "",
      "",
      "",
      "",
      "",
    ];

    const services = [
      {
        name: "Corte de Cabelo",
        description: "Estilo personalizado com as últimas tendências.",
        price: 60.0,
        imageUrl:
          "https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png",
      },
      {
        name: "Barba",
        description: "Modelagem completa para destacar sua masculinidade.",
        price: 40.0,
        imageUrl:
          "https://utfs.io/f/e6bdffb6-24a9-455b-aba3-903c2c2b5bde-1jo6tu.png",
      },
      {
        name: "Pézinho",
        description: "Acabamento perfeito para um visual renovado.",
        price: 35.0,
        imageUrl:
          "https://utfs.io/f/8a457cda-f768-411d-a737-cdb23ca6b9b5-b3pegf.png",
      },
      {
        name: "Sobrancelha",
        description: "Expressão acentuada com modelagem precisa.",
        price: 20.0,
        imageUrl:
          "https://utfs.io/f/2118f76e-89e4-43e6-87c9-8f157500c333-b0ps0b.png",
      },
      {
        name: "Massagem",
        description: "Relaxe com uma massagem revigorante.",
        price: 50.0,
        imageUrl:
          "https://utfs.io/f/c4919193-a675-4c47-9f21-ebd86d1c8e6a-4oen2a.png",
      },
      {
        name: "Hidratação",
        description: "Hidratação profunda para cabelo e barba.",
        price: 25.0,
        imageUrl: "https://utfs.io/f/c4919193-a675-4c47-9f21-ebd86d1c8e6a-4oen2a.png",
      },
    ];

    // Criar 10 barbearias com nomes e endereços fictícios
    const barbershops = [];
    for (let i = 0; i < 5; i++) {
      const name = creativeNames[i];
      const address = addresses[i];
      const imageUrl = images[i];

      const barbershop = await prisma.barbershop.create({
        data: {
          name,
          address,
          imageUrl: imageUrl,
        },
      });

      for (const service of services) {
        await prisma.service.create({
          data: {
            name: service.name,
            description: service.description,
            price: service.price,
            barbershop: {
              connect: {
                id: barbershop.id,
              },
            },
            imageUrl: service.imageUrl,
          },
        });
      }

      barbershops.push(barbershop);
    }

    // Fechar a conexão com o banco de dados
    await prisma.$disconnect();
  } catch (error) {
    console.error("Erro ao criar as barbearias:", error);
  }
}

seedDatabase();