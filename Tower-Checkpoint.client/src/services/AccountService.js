import { AppState } from '../AppState'
import { Event } from "../models/Event.js"
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
    
    console.log(AppState.myEvents)
    AppState.myEvents = AppState.myEvents.filter(e => e.creator.id == AppState.account.id)
    console.log(AppState.myEvents)
    AppState.myEvents = res.data
  }

  async getTicketsForAccount() {
    
  }
}

export const accountService = new AccountService()
