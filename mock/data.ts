export const uuid = (): string => Math.random().toString(16).slice(2)

export enum Role {
  user,
  staff,
  admin,
  owner,
}

export interface User {
  id: string
  username: string
  password: string
  role: Role
  name: string
  avatar: string
}

export const users: User[] = [
  {
    id: uuid(),
    username: 'chenghuai',
    password: 'chenghuai',
    role: Role.owner,
    name: 'chenghuai',
    avatar: 'https://avatars.githubusercontent.com/u/132592887?v=4',
  },
  {
    id: uuid(),
    username: 'admin',
    password: '123',
    role: Role.admin,
    name: '管理员A',
    avatar: 'https://avatars.githubusercontent.com/u/132592887?v=4',
  },
  {
    id: uuid(),
    username: 'staff',
    password: '123',
    role: Role.staff,
    name: '员工B',
    avatar: 'https://avatars.githubusercontent.com/u/132592887?v=4',
  },
  {
    id: uuid(),
    username: 'user',
    password: '123',
    role: Role.user,
    name: '用户C',
    avatar: 'https://avatars.githubusercontent.com/u/132592887?v=4',
  },
]

export interface Token {
  access: string
  refresh: string
  expires: number
  userId: string
}

export const tokens: Token[] = []
