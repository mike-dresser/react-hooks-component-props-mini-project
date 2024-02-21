import Article from './Article';

function ArticleList({ posts }) {
  //   console.log(articles);
  return (
    <main>
      {posts.map((post) => {
        return (
          <Article
            date={(post.date = 'January 1, 1970')}
            key={post.id}
            minutes={post.minutes}
            preview={post.preview}
            title={post.title}
          />
        );
      })}
    </main>
  );
}

export default ArticleList;
