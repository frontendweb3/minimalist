import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.md`,
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
      default: "true"
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
    author: {
      type: 'string',
      description: 'The author of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    slug: {
      type: 'string',
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
    url: {
      type: 'string',
      resolve: (article) => `/posts/${article._raw.flattenedPath}`,
    },
  }
}))

// export const Author = defineDocumentType(() => ({
//   name: 'Author',
//   filePathPattern: `**/*.md`,
//   fields: {
//     name: {
//       type: 'string',
//       description: 'The title of the post',
//       required: true,
//     },
//     description: {
//       type: 'string',
//       description: 'The description of the post',
//     },
//     date:{
//       type:'date',
//       description: 'the author account create date ',
//       required:true
//     },
//     draft: {
//       type: 'boolean',
//       description: 'The draft of the post',
//       required: true,
//       default: true
//     },
//     tags: {
//       type: 'list',
//       of: { type: 'string' },
//       description: 'The list of the post',
//     },
//     image: {
//       type: 'string',
//       description: 'The image of the post',
//       required: true,
//     },
//     social: {
//       type: 'list',
//       description: 'The list of the social',
//     },
//     slug: {
//       type: 'string',
//       description: 'The date of the post',
//       required: true,
//     },
//   },
//   computedFields: {
//     url: {
//       type: 'string',
//       resolve: (post) => `/posts/${post._raw.flattenedPath}`,
//     },
//   },
// }))

export default makeSource({
  contentDirPath: '.',
  contentDirInclude:['posts'],
  documentTypes: [Post],
})