import YAML from 'yamljs';
import path from "node:path";
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const swaggerDocument = YAML.load(path.resolve(__dirname,'./swagger.yaml'));