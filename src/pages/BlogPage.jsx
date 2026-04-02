import { useState, useEffect } from 'react'
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'
import Hero from '../components/Hero/Hero'
import ScrollReveal from '../components/ScrollReveal/ScrollReveal'
import SectionDivider from '../components/SectionDivider/SectionDivider'
import { blogCategories } from '../data/blog'
import './BlogPage.css'

const blogImages = [
  "/images/attachments (1)/IMG_0399.JPG",
  "/images/attachments (1)/IMG_0430.JPG",
  "/images/attachments (1)/IMG_0436.JPG"
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const q = query(
      collection(db, 'blogs'), 
      where('isArchived', '==', false),
      orderBy('createdAt', 'desc')
    )

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const livePosts = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setPosts(livePosts)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const filtered = activeCategory === 'All'
    ? posts
    : posts.filter((p) => p.category === activeCategory)

  const featuredPost = filtered.length > 0 ? filtered[0] : null;

  return (
    <div className="blog-page">
      <Hero
        title="Journal & Insights"
        accentWords="Journal"
        subtitle="Deepen Your Knowledge, Transform Your Life"
        body="A resource for practitioners and those curious about starting their yoga journey."
      />

      <SectionDivider />

      {/* Featured Post */}
      {featuredPost && (
        <section className="section overflow-hidden">
          <div className="container">
            <ScrollReveal>
              <div className="featured-post glass-card">
                <div className="featured-post__image-wrapper">
                  <img src={featuredPost.photoUrl} alt={featuredPost.title} className="featured-post__image" />
                  <div className="featured-post__badge">Featured</div>
                </div>
                <div className="featured-post__content">
                  <span className="blog-meta">
                    {featuredPost.category} • {featuredPost.createdAt?.toDate ? featuredPost.createdAt.toDate().toLocaleDateString() : 'Recent'}
                  </span>
                  <h2>{featuredPost.title}</h2>
                  <p>{featuredPost.excerpt}</p>
                  <div className="featured-post__footer">
                    <span className="blog-author">By {featuredPost.author}</span>
                    <button className="btn-link">Read Article →</button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="section bg-surface overflow-hidden">
        <div className="container">
          <ScrollReveal>
            <div className="section-header text-center mx-auto">
              <h2>Latest Articles</h2>
            </div>
          </ScrollReveal>

          {/* Category Filter */}
          <ScrollReveal delay={100}>
            <div className="blog-categories-modern">
              {blogCategories.map((cat) => (
                <button
                  key={cat}
                  className={`blog-category-pill ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Grid */}
          <div className="blog-grid-modern">
            {loading ? (
              <div className="blog-loading w-full text-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
                <p className="mt-4">Fetching articles...</p>
              </div>
            ) : filtered.length > 0 ? (
              filtered.map((post, i) => (
                <ScrollReveal key={post.id} delay={i * 100}>
                  <div className="blog-card-modern">
                    <div className="blog-card-modern__image-wrapper">
                      <img src={post.photoUrl} alt={post.title} className="blog-card-modern__image" />
                      <div className="blog-card-modern__category">{post.category}</div>
                    </div>
                    <div className="blog-card-modern__content">
                      <span className="blog-meta">
                        {post.createdAt?.toDate ? post.createdAt.toDate().toLocaleDateString() : 'Recent'}
                      </span>
                      <h3>{post.title}</h3>
                      <p>{post.excerpt}</p>
                      <button className="btn-link mt-auto">Read More →</button>
                    </div>
                  </div>
                </ScrollReveal>
              ))
            ) : null}
          </div>

          {filtered.length === 0 && (
            <div className="blog-empty">
              <p>No posts found in this category yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      <SectionDivider />

      {/* Newsletter */}
      <section className="section overflow-hidden">
        <div className="container">
          <ScrollReveal>
            <div className="newsletter-cta">
              <div className="newsletter-cta__bg"></div>
              <div className="newsletter-cta__content">
                <h2>Join Our Newsletter</h2>
                <p>Get the latest articles, academy news, and wellness tips delivered straight to your inbox.</p>
                <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                  <input type="email" placeholder="Enter your email address" required />
                  <button type="submit" className="btn btn-primary">Subscribe</button>
                </form>
                <p className="newsletter-disclaimer">We respect your privacy. Unsubscribe at any time.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
