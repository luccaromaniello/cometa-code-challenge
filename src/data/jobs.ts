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
}
