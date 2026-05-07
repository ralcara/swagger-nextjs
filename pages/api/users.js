/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Devuelve usuarios ficticios
 *     responses:
 *       200:
 *         description: Lista de usuarios
 */

export default function handler(req, res) {
  res.status(200).json([
    { id: 1, name: "Juan" },
    { id: 2, name: "Ana" }
  ]);
}