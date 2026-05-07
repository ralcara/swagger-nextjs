export default function handler(req, res) {
  res.status(200).json({ ok: true });
}
/**
 * @swagger
 * /api/test:
 *   get:
 *     summary: Endpoint de prueba
 *     responses:
 *       200:
 *         description: OK
 */