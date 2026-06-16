import './BlogCard.css'

export default function BlogCard({ post }) {
  return (
    <div className="card blog-card">
      <div className="blog-card__img-placeholder">
        <span>{post.category.charAt(0)}</span>
      </div>
      <div className="card-body">
        <span className="blog-card__category">{post.category}</span>
        <h3>{post.title}</h3>
        <p className="blog-card__meta">{post.date} · {post.author}</p>
        <p>{post.excerpt}</p>
        <span className="btn-link">Read More →</span>
      </div>
    </div>
  )
}
