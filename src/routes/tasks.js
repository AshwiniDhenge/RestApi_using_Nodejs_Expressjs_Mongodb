import express from 'express';
import { auth } from '../middleware/auth.js';
import { getTasks, getTask, createTask, updateTask, deleteTask } from '../controllers/taskController.js';
 
/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 * 
 * tags:
 *   name: Tasks
 *   description: Task management endpoints
 */

const router = express.Router();

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     tags: [Tasks]
 *     summary: Get all tasks
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Items per page
 *     responses:
 *       200:
 *         description: List of tasks
 */
router.get('/', auth, getTasks);

/**
 * @swagger
 * /api/tasks/{id}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     tags: [Tasks]
 *     summary: Get task by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Task details
 */
router.get('/:id', auth, getTask);

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     tags: [Tasks]
 *     summary: Create new task
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Task created
 */
router.post('/', auth, createTask);

/**
 * @swagger
 * /api/tasks/{id}:
 *   put:
 *     security:
 *       - bearerAuth: []
 *     tags: [Tasks]
 *     summary: Update task
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               completed:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Task updated
 */
router.put('/:id', auth, updateTask);

/**
 * @swagger
 * /api/tasks/{id}:
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     tags: [Tasks]
 *     summary: Delete task
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Task deleted
 */
router.delete('/:id', auth, deleteTask);

export { router as taskRouter };