import fs from 'fs';
import path from 'path';

const cpPath = path.join("functions", "cp.json");

export function getCpData() {
  const data = fs.readFileSync(cpPath, 'utf-8');
  return JSON.parse(data);
}