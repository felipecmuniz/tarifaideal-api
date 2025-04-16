import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const dataDir = path.join(process.cwd(), 'data');
  const files = fs.readdirSync(dataDir).filter(file => file.endsWith('.json'));

  const lista = files.map(file => {
    const content = fs.readFileSync(path.join(dataDir, file), 'utf8');
    const json = JSON.parse(content);
    return {
      sigla: json.sigla,
      nome: json.nome,
      ultima_atualizacao: json.ultima_atualizacao
    };
  });

  res.status(200).json(lista);
}