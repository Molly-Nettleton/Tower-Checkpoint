import BaseController from "../utils/BaseController.js";
import { Auth0Provider } from "@bcwdev/auth0provider";
import { commentsService } from "../services/CommentsService.js";

export class CommentsController extends BaseController{

  constructor(){
    super('api/comments')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/id:', this.getCommentById)
    .post('', this.createComment)
    .delete('/:id', this.removeComment)

  }
  async removeComment(req, res, next) {
  try {
    const comment = await commentsService.removeComment(req.params.id, req.userInfo.id)
    res.send(comment)
  } catch (error) {
    next(error)
  }
  }
  async getCommentById(req, res, next) {
    try {
      const comment = await commentsService.getCommentsById(req.params.id)
      res.send(comment)
    } catch (error) {
      next(error)
    }
  }
  async createComment(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const comment = await commentsService.createComment(req.body)
      res.send(comment)
  } catch (error) {
    next(error)
  }
  }
  
  // async getCommentsByEventId(req,res,next) {
  // try {
  // const comments = await commentsService.getCommentsByEventId(req.params.id)
  // res.send(comments)
  // } catch (error) {
  //   next(error)
  // }
  // }
}