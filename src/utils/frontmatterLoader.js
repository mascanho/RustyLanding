export default async function frontmatterLoader(source) {
  const { frontmatter } = await parseFrontmatter(source);
  return {
    code: `export const frontmatter = ${JSON.stringify(frontmatter)};`,
    map: null
  };
}