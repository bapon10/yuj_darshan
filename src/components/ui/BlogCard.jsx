import './BlogCard.css';

function BlogCard({ post }) {
  return (
    <article className="blog-card">
      <div className="blog-card__thumb" aria-hidden="true" />
      <span className="blog-card__category">{post.category}</span>
      <h3 className="blog-card__title">{post.title}</h3>
      <p className="blog-card__excerpt">{post.excerpt}</p>
      <a className="blog-card__link" href={post.href}>Read more →</a>
    </article>
  );
}

export default BlogCard;