import { Router } from 'express'

import { tokens, users, uuid } from './data'
import { access } from 'fs'

const router: Router = Router()

const getToken = (): string => uuid() + uuid()

const accessTokenLifetime = 10 * 60 * 1000

router.post('/token', (req, res) => {
  const { grant_type, username, password, refresh_token } = req.body
  if (grant_type === 'password') {
    const user = users.find((u) => u.username === username && u.password === password)
    if (user === null) {
      return res.status(401).send({ message: 'Bad credentials: invalid username or password' })
    }

    const token = {
      access: getToken(),
      refresh: getToken(),
      expires: Date.now() + accessTokenLifetime,
      userId: user?.id || '',
    }

    tokens.push(token)

    res.send({
      token_type: 'Bearer',
      expires_in: (token.expires - Date.now()) / 1000,
      access_token: token.access,
      refresh_token: token.refresh,
    })
  }
})
