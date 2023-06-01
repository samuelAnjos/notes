const {Router} = require("express")
const notesController = require("../controllers/notesController")
const notesRouter = Router();

const notesController = new NotesController();

usersRouter.post('/', notesController.create) 
usersRouter.get('/:user_id', notesController.index) 
usersRouter.get('/:id', notesController.show) 
usersRouter.delete('/:id', notesController.delete) 

module.exports = notesRouter;
