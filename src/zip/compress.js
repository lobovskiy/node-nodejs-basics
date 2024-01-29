import path from 'node:path';
import fs from 'node:fs';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTENT_DIR_NAME = 'files';
const FILE_NAME = 'fileToCompress.txt';
const ARCHIVE_NAME = 'archive.gz';

const compress = async () => {
  const filePath = path.resolve(__dirname, CONTENT_DIR_NAME, FILE_NAME);
  const archivePath = path.resolve(__dirname, CONTENT_DIR_NAME, ARCHIVE_NAME);
  const fileReadStream = fs.createReadStream(filePath);
  const archiveWriteStream = fs.createWriteStream(archivePath);
  const gzip = zlib.createGzip();

  fileReadStream.pipe(gzip).pipe(archiveWriteStream);
};

await compress();
