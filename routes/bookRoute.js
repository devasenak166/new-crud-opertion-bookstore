import express from 'express';
import {addBooks, getAllbooks, getBookbyid, updateBookdetails,deleteBook} from '../controller/book_logic.js';
const router =express.Router();
router.get('/',getAllbooks);
router.post('/add',addBooks);
router.get('/:id',getBookbyid);
router.put('/:id',updateBookdetails);
router.delete('/:id',deleteBook);
export default router;