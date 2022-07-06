/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const fs = require("fs")
const path = require("path")

const SOURCE_PATH = "./src"
const STORIES_PATH = "./storybook"

const getStoryPaths = (dirPath, filePaths) => {
  filePaths = filePaths || []

  fs.readdirSync(dirPath).forEach(dirent => {
    const node = path.join(dirPath, "/", dirent)

    if (fs.statSync(node).isDirectory())
      return (filePaths = getStoryPaths(node, filePaths))

    filePaths.push(node)
  })

  return filePaths.filter(file => file.endsWith(".stories.tsx"))
}

const generate = () => {
  const requires = getStoryPaths(SOURCE_PATH)
    .map(storyPath => `  require("../${storyPath}")`)
    .join("\n")

  const contents = `// Auto-generated by scripts/generateStorybook.js\n\nexport const loadStories = () => {\n${requires}\n}`

  fs.writeFileSync(`${STORIES_PATH}/stories.ts`, contents)
}

generate()