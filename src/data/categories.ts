export interface Category {
  id: number
  name: string
  children?: Category[]
  selected: boolean
  isMaster?: boolean
}

export const categories: Category[] = [
  { id: 1, name: 'Desenvolvimento', selected: true },
  {
    id: 2,
    name: 'Design',
    selected: true,
    children: [
      { id: 3, name: 'Web Design', selected: true },
      { id: 4, name: 'UI e UX Design', selected: true },
      { id: 5, name: 'Motion Design', selected: true },
    ],
  },
  { id: 6, name: 'Copywriting', selected: true },
  { id: 7, name: 'Especialistas em IA', selected: true },
  { id: 8, name: 'Social Media', selected: true },
  { id: 9, name: 'UGC / Content Creator', selected: true },
]
