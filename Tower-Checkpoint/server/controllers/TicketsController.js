import { Auth0Provider } from "@bcwdev/auth0provider";
import { ticketService } from "../services/TicketsService.js";
import BaseController from "../utils/BaseController.js";

export class TicketsController extends BaseController {
  constructor() {
    super('api/tickets')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createTicket)
      .delete('/:id', this.removeTicket)
  }
  async removeTicket(req, res, next) {
    try {
      req.body.accountId = req.userInfo.id
      const ticket = await ticketService.removeTicketToEvent(req.params.id,req.userInfo.id)
      res.send(ticket)
    } catch (error) {
      next(error)
    }
  }
  async createTicket(req, res, next) {
    try {
    req.body.accountId = req.userInfo.id
      const ticket = await ticketService.addTicketToEvent(req.body)
      res.send(ticket)
    } catch (error) {
    next(error)
    }
  }
}