// To copy prisma types to shared folder
// To update, must compile first (simply run server)

import * as fs from 'fs';
import * as path from 'path';
import { promisify } from 'util';

const readdir = promisify(fs.readdir);
const copyFile = promisify(fs.copyFile);

const sharedFolderPath = '../../apps/client/src/prisma-types.d.ts';
//const sharedFolderPath = '../../packages/shared/src/prisma-types.d.ts';
//const sharedDistFolderPath = '../../packages/shared/dist/prisma-types.d.ts';

const relativeTypesPath = 'node_modules/.prisma/client/index.d.ts';

async function findNodeModulesDir(startDir: string): Promise<string | null> {
  let currentDir = startDir;

  while (currentDir !== path.parse(currentDir).root) {
    const potentialPath = path.join(currentDir, 'node_modules/.pnpm');
    if (fs.existsSync(potentialPath)) {
      return potentialPath;
    }
    currentDir = path.dirname(currentDir);
  }

  return null;
}

async function findAndCopyIndexDts() {
  try {
    const pnpmDir = await findNodeModulesDir(__dirname);
    if (!pnpmDir) {
      console.error('No node_modules/.pnpm directory found');
      return;
    }

    const pnpmPackages = await readdir(pnpmDir);

    for (const pkg of pnpmPackages) {
      if (pkg.startsWith('@prisma+client@')) {
        const indexPath = path.join(pnpmDir, pkg, relativeTypesPath);
        if (fs.existsSync(indexPath)) {
          // Copy to shared folder
          await copyFile(indexPath, sharedFolderPath);
          console.log(`Copied to ${sharedFolderPath}`);

          // Copy to shared/dist folder
          //await copyFile(indexPath, sharedDistFolderPath);
          //console.log(`Copied to ${sharedDistFolderPath}`);

          return;
        }
      }
    }

    console.error('No index.d.ts file found');
  } catch (err) {
    console.error('Error finding index.d.ts:', err);
  }
}

findAndCopyIndexDts();
