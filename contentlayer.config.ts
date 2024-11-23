import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `/**/*.md`,
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The description of the post',
    },
    draft: {
      type: 'boolean',
      description: 'The draft of the post',
      required: true,
      default: true
    },
    author: {
      type: 'string',
      description: 'Name of author'
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      description: 'The list of the post',
    },
    category: {
      type: 'list',
      of: { type: 'string' },
      description: 'The category of the post',
    },
    image: {
      type: 'string',
      description: 'The image of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    id: {
      type: 'number',
      description: 'The id of the post',
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (article) => `${article._raw.flattenedPath}`,
    },
  }
}))



export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
})
