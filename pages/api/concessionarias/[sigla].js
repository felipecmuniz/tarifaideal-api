import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { sigla } = req.query;
  const filePath = path.join(process.cwd(), 'data', `${sigla}.json`);

  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    res.status(200).json(JSON.parse(data));
  } else {
    res.status(404).json({ error: 'Concessionária não encontrada' });
  }
}