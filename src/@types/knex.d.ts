// eslint-disable-next-line
import { Knex } from 'knex'

declare module 'knex/types/tables' {
  export interface Tables {
    transaction: {
      id: string
      title: string
      amount: number
      createdAt: string
      session_id?: string
    }
  }
}
