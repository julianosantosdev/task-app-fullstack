interface ILoginRequest {
  email: string
  password: string
}

interface IToken {
  token: string
}

export type { ILoginRequest, IToken }
