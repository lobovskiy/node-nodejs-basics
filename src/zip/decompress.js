import path from 'node:path';
import fs from 'node:fs';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTENT_DIR_NAME = 'files';
const ARCHIVE_NAME = 'archive.gz';
const FILE_NAME = 'fileToCompress.txt';

const compress = async () => {
  const archivePath = path.resolve(__dirname, CONTENT_DIR_NAME, ARCHIVE_NAME);
  const filePath = path.resolve(__dirname, CONTENT_DIR_NAME, FILE_NAME);
  const archiveReadStream = fs.createReadStream(archivePath);
  const fileWriteStream = fs.createWriteStream(filePath);
  const gunzip = zlib.createGunzip();

  archiveReadStream.pipe(gunzip).pipe(fileWriteStream);
};

await compress();
