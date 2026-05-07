/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Lista de productos
 *     responses:
 *       200:
 *         description: OK
 */

export default function handler(req, res) {
  res.status(200).json([
    { id: 1, name: "Laptop" },
    { id: 2, name: "Teclado" }
  ]);
}