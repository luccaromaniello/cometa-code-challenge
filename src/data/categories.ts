export interface Category {
  name: string
  children?: Category[]
  selected: boolean
}

export const categories: Category[] = [
  { name: 'Todas as categorias', selected: true },
  { name: 'Desenvolvimento', selected: true },
  {
    name: 'Design',
    selected: true,
    children: [
      { name: 'Web Design', selected: true },
      { name: 'UI e UX Design', selected: true },
      { name: 'Motion Design', selected: true },
    ],
  },
  { name: 'Copywriting', selected: true },
  { name: 'Especialistas em IA', selected: true },
  { name: 'Social Media', selected: true },
  { name: 'UGC / Content Creator', selected: true },
]
