import { blogPosts } from '../../data/blogPosts.js';
import BlogCard from '../ui/BlogCard.jsx';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import './Blog.css';

function Blog() {
  const revealRef = useScrollReveal();

  return (
    <section id="blog" className="blog" ref={revealRef} data-reveal>
      <div className="container">
        <span className="eyebrow">06 — From the Journal</span>
        <h2>Blog</h2>

        {blogPosts.length > 0 ? (
          <div className="blog__grid">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <p className="blog__empty">New posts are on the way — check back soon.</p>
        )}
      </div>
    </section>
  );
}

export default Blog;