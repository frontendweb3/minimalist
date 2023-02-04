import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer/source-files'

const Social = defineNestedType(() => ({
  name: 'Social',
  fields: {
    facebook: { type: 'string'},
    twitter:  { type: 'string'},
    linkedin: { type: 'string'},   
  },
}))

const Author = defineNestedType(() => ({
  name: 'Author',
  fields: {
    name:     { type: 'string', required: true },
    job:      { type: 'string'},
    bio:      { type: 'string'},
    image:    { type: 'string', required: true },   
    social:   { type:'nested', of: [Social]} 
  },
}))

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
    view: {
      type: 'string',
      description: 'The view of the post'
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
      type: 'nested',
      of: [Author],
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
