export interface Job {
  id: string
  title: string
  createdAt: Date
  deadline: Date
  employer: string
  salaryRange: {
    from: number
    to: number
  }
  offers: number
  favorite: boolean
  tags: string[]
  profitHighlight: boolean
}

export const jobs: Job[] = [
  {
    id: '4dae306d-5707-4118-82ff-55465055ac78',
    title: 'Desenvolvimento de App para Delivery de Comida White Label',
    createdAt: new Date('2025-05-01'),
    deadline: new Date('2025-06-15'),
    employer: 'Michel Siqueira',
    salaryRange: {
      from: 39000,
      to: 52900,
    },
    offers: 15,
    favorite: false,
    tags: ['Mobile App', 'Flutter', 'Android', 'iOS'],
    profitHighlight: true,
  },
  {
    id: 'ec5cc1e9-c8e6-464d-9514-7fff36df9b1b',
    title: 'Construção de página de vendas para Lançamento',
    createdAt: new Date('2025-05-10'),
    deadline: new Date('2025-05-30'),
    employer: 'Ramiro Inchauspe',
    salaryRange: {
      from: 600,
      to: 1200,
    },
    offers: 15,
    favorite: false,
    tags: ['Elementor', 'Figma', 'UI/UX', 'Web Design'],
    profitHighlight: false,
  },
]
