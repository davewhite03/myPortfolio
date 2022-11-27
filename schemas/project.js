export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          { title: 'Animation', value: 'animation' },
          { title: 'Website', value: 'website' },
          { title: 'Design', value: 'design' },
        ],
      },
    },
    {
      name: 'videoURL',
      type: 'string',
      title: 'VideoURL',
    },
    {
      name: 'websiteURL',
      type: 'string',
      title: 'WebsiteURL',
    },
  ],
};
