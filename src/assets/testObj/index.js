export const response1 = {
  id: '1',
  day: 'Sexta',
  date: '2023-06-02',
  auditoriums: [
    {
      name: 'Auditorio XX',
      events: [
        {
          name: 'Minecraft: montando o PC ideal',
          time: '10:00 - 11:00',
          spots: '100',
        },
        {
          name: 'LoL: montando o PC ideal',
          time: '12:00 - 13:00',
          spots: '0',
        },
        {
          name: 'Event 1',
          time: '14:00 - 15:00',
          spots: '50',
        },
        {
          name: 'Event 2',
          time: '16:00 - 17:00',
          spots: '75',
        },
      ],
    },
    {
      name: 'Auditorio YY',
      events: [
        {
          name: 'Fortnite: estratégias avançadas',
          time: '10:00 - 11:00',
          spots: '100',
        },
        {
          name: 'CS:GO: dicas de jogo em equipe',
          time: '12:00 - 13:00',
          spots: '100',
        },
        {
          name: 'Event 3',
          time: '14:00 - 15:00',
          spots: '80',
        },
        {
          name: 'Event 4',
          time: '16:00 - 17:00',
          spots: '90',
        },
      ],
    },
    {
      name: 'Auditorio ZZ',
      events: [
        {
          name: 'League of Legends: introdução ao jogo',
          time: '09:00 - 12:00',
          spots: '100',
        },
        {
          name: 'Valorant: táticas de ataque e defesa',
          time: '12:00 - 14:00',
          spots: '100',
        },
        {
          name: 'Event 5',
          time: '14:00 - 16:00',
          spots: '70',
        },
        {
          name: 'Event 6',
          time: '16:00 - 17:00',
          spots: '60',
        },
      ],
    },
  ],
};

export const response2 = {
  id: '2',
  day: 'Sábado',
  date: '2023-06-03',
  auditoriums: [
    {
      name: 'Auditório A',
      events: [
        {
          name: 'Programação para iniciantes',
          time: '10:00 - 11:30',
          spots: '150',
        },
        {
          name: 'Inteligência Artificial: do básico ao avançado',
          time: '12:00 - 13:30',
          spots: '150',
        },
      ],
    },
    {
      name: 'Auditório B',
      events: [
        {
          name: 'Desenvolvimento web moderno',
          time: '14:00 - 15:30',
          spots: '150',
        },
        {
          name: 'Machine Learning aplicado a negócios',
          time: '16:00 - 17:30',
          spots: '150',
        },
      ],
    },
    {
      name: 'Auditório C',
      events: [
        {
          name: 'Introdução ao Design de Interface',
          time: '10:00 - 11:30',
          spots: '150',
        },
        {
          name: 'User Experience: a importância do design centrado no usuário',
          time: '12:00 - 13:30',
          spots: '150',
        },
      ],
    },
  ],
};

export const response3 = {
  id: '3',
  day: 'Domingo',
  date: '2023-06-04',
  auditoriums: [
    {
      name: 'Auditório X',
      events: [
        {
          name: 'Workshop de Fotografia Digital',
          time: '10:00 - 11:30',
          spots: '80',
        },
        {
          name: 'Edição de Vídeo para Iniciantes',
          time: '12:00 - 13:30',
          spots: '80',
        },
      ],
    },
    {
      name: 'Auditório Y',
      events: [
        {
          name: 'Introdução ao Marketing Digital',
          time: '14:00 - 15:30',
          spots: '80',
        },
        {
          name: 'Estratégias Avançadas de SEO',
          time: '16:00 - 17:30',
          spots: '80',
        },
      ],
    },
    {
      name: 'Auditório Z',
      events: [
        {
          name: 'Empreendedorismo Digital: Desafios e Oportunidades',
          time: '10:00 - 11:30',
          spots: '80',
        },
        {
          name: 'Redes Sociais como Ferramenta de Negócios',
          time: '12:00 - 14:00',
          spots: '0',
        },
      ],
    },
  ],
};

export const axiosResponseDays = {
  data: {
    eventDates: [
      { day: 'Sexta', date: '2023-06-02', relatedTableId: 1 },
      { day: 'Sábado', date: '2023-06-03', relatedTableId: 2 },
      { day: 'Domingo', date: '2023-06-04', relatedTableId: 3 },
    ],
  },
};
