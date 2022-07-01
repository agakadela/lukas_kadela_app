import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const newsDirectory = path.join(process.cwd(), 'news');
const projectsDirectory = path.join(process.cwd(), 'projects');

export function getSortedData(dataType) {
  const fileNames = fs.readdirSync(
    dataType === 'news' ? newsDirectory : projectsDirectory
  );
  const allData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(newsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    return {
      id,

      ...matterResult.data,
    };
  });

  return allData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}

export function getAllDataIds(dataType) {
  const fileNames = fs.readdirSync(
    dataType === 'news' ? newsDirectory : projectsDirectory
  );

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getNewData(id, dataType) {
  const fullPath = path.join(
    dataType === 'news' ? newsDirectory : projectsDirectory,
    `${id}.md`
  );
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
