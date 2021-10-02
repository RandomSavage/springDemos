db.posts.insert({
  title: "Post One",
  body: "Body of Post One",
  category: "News",
  likes: 4,
  tags: ['news', 'events'],
  user: {
    name: 'John Doe',
    status: 'author'
  },
  date: Date()
})

db.posts.insertMany([
  {
    title: "Post 2",
    body: "Body of Post 2",
    category: "News2",
    likes: 19,
    tags: ['news', 'events'],
    user: {
      name: 'noel Charrizaro',
      status: 'author'
    },
    date: Date()
  },
  {
    title: "Post 3",
    body: "Body of Post 3",
    category: "News3",
    likes: 36,
    tags: ['news', 'events'],
    user: {
      name: 'Jane Doe',
      status: 'author'
    },
    date: Date()
  },
  {
    title: "Post 4",
    body: "Body of Post 4",
    category: "News4",
    likes: 52,
    tags: ['news', 'events'],
    user: {
      name: 'Billy rodriques',
      status: 'author'
    },
    date: Date()
  }
])