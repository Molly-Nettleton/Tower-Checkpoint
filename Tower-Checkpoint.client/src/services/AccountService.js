import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { SandboxApi } from './AxiosService'

class AccountService {
  async getAccount() {
    try {
      const res = await SandboxApi.get('/account')
      AppState.account = res.data
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }
  
  async getEventsForAccount() {
    const res = await SandboxApi.get('api/events')
    AppState.myEvents = AppState.myEvents.filter(e => e.creator.id == AppState.account.id)
    AppState.myEvents = res.data
  }

  async getTicketsForAccount() {
    const res = await SandboxApi.get('account/tickets')
    AppState.myTickets = res.data
  }
}

export const accountService = new AccountService()
