import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  BookOpen,
  PlusCircle,
  MessageSquare,
  LogOut,
  ExternalLink,
  Layout,
  Clock,
  CheckCircle,
  Users,
  Menu,
  X,
  Trash2,
  Archive,
  ArchiveRestore,
  Eye,
  EyeOff,
  Edit
} from 'lucide-react'
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  deleteDoc,
  doc,
  updateDoc,
  serverTimestamp
} from 'firebase/firestore'
import { db } from '../firebase'
import { useAuth } from '../context/AuthContext'
import BlogCard from '../components/BlogCard/BlogCard'
import './DashboardPage.css'

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('blogs')
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()

  // Blog State
  const [blogs, setBlogs] = useState([])
  const [blogLoading, setBlogLoading] = useState(true)

  // Inquiry State
  const [inquiries, setInquiries] = useState([])
  const [inquiriesLoading, setInquiriesLoading] = useState(true)

  // Form State
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('Wellness')
  const [excerpt, setExcerpt] = useState('')
  const [content, setContent] = useState('')
  const [photoUrlInput, setPhotoUrlInput] = useState('')
  const [isPublishing, setIsPublishing] = useState(false)
  const [editingBlogId, setEditingBlogId] = useState(null)

  // Fetch Blogs
  useEffect(() => {
    const q = query(collection(db, 'blogs'), orderBy('createdAt', 'desc'))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const blogData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setBlogs(blogData)
      setBlogLoading(false)
    })

    return () => unsubscribe()
  }, [])

  // Fetch Inquiries
  useEffect(() => {
    const q = query(collection(db, 'inquiries'), orderBy('submittedAt', 'desc'))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const inquiryData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setInquiries(inquiryData)
      setInquiriesLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/login')
    } catch (err) {
      console.error('Failed to log out', err)
    }
  }

  const resetForm = () => {
    setTitle('')
    setCategory('Wellness')
    setExcerpt('')
    setContent('')
    setPhotoUrlInput('')
    setEditingBlogId(null)
  }

  const startEdit = (post) => {
    setTitle(post.title)
    setCategory(post.category || 'Wellness')
    setExcerpt(post.excerpt)
    setContent(post.content)
    setPhotoUrlInput(post.photoUrl)
    setEditingBlogId(post.id)
    setActiveTab('create')
    closeSidebar()
  }

  const handleSubmitBlog = async (e) => {
    e.preventDefault()

    setIsPublishing(true)
    try {
      const photoUrl = photoUrlInput.trim() || 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800'

      if (editingBlogId) {
        // Update existing blog
        await updateDoc(doc(db, 'blogs', editingBlogId), {
          title,
          category,
          excerpt,
          content,
          photoUrl
        })
        alert('Blog updated successfully!')
      } else {
        // Create new blog
        await addDoc(collection(db, 'blogs'), {
          title,
          category,
          excerpt,
          content,
          photoUrl,
          author: currentUser.email.split('@')[0],
          authorEmail: currentUser.email,
          isArchived: false,
          createdAt: serverTimestamp()
        })
        alert('Blog published successfully!')
      }

      resetForm()
      setActiveTab('blogs')
    } catch (err) {
      console.error('Error saving blog:', err)
      alert(`Failed to save blog: ${err.message}`)
    } finally {
      setIsPublishing(false)
    }
  }

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await deleteDoc(doc(db, 'blogs', id))
        alert('Blog deleted successfully!')
      } catch (err) {
        console.error('Error deleting blog:', err)
        alert(`Error deleting blog: ${err.message}`)
      }
    }
  }

  const handleDeleteInquiry = async (id) => {
    if (window.confirm('Are you sure you want to delete this inquiry?')) {
      try {
        await deleteDoc(doc(db, 'inquiries', id))
      } catch (err) {
        console.error('Error deleting inquiry:', err)
        alert('Failed to delete inquiry.')
      }
    }
  }

  const toggleArchive = async (id, currentStatus) => {
    try {
      await updateDoc(doc(db, 'blogs', id), {
        isArchived: !currentStatus
      })
    } catch (err) {
      console.error('Error toggling archive:', err)
    }
  }

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen)
  const closeSidebar = () => setSidebarOpen(false)

  const handleTabChange = (tab) => {
    if (tab !== 'create') {
      resetForm()
    }
    setActiveTab(tab)
    closeSidebar()
  }

  const stats = [
    { label: 'Total Blogs', value: blogs.length.toString(), icon: <BookOpen />, color: '#6366f1' },
    { label: 'Archived', value: blogs.filter(b => b.isArchived).length.toString(), icon: <Archive />, color: '#f59e0b' },
    { label: 'Live Posts', value: blogs.filter(b => !b.isArchived).length.toString(), icon: <CheckCircle />, color: '#10b981' },
    { label: 'Total Inquiries', value: inquiries.length.toString(), icon: <MessageSquare />, color: '#3b82f6' },
    { label: 'Recent Inquiry', value: inquiries.length > 0 ? inquiries[0].name.split(' ')[0] : 'None', icon: <Clock />, color: '#f59e0b' },
    { label: 'System Users', value: '1', icon: <Users />, color: '#a855f7' },
  ]

  const dummyPosts = [
    {
      id: 1,
      title: "The Power of Breath: Pranayama Basics",
      category: "Wellness",
      date: "March 15, 2026",
      author: "Guru Ji",
      excerpt: "Deep breathing is more than just oxygen intake. It's the bridge between body and mind..."
    },
    {
      id: 2,
      title: "Morning Flow for Energy",
      category: "Yoga",
      date: "March 12, 2026",
      author: "Anjali Sharma",
      excerpt: "Start your day with these 5 essential asanas to wake up your nervous system."
    }
  ]


  return (
    <div className="dashboard-layout dark-theme">
      {/* Top Navigation */}
      <nav className="dashboard-top-nav">
        <div className="nav-left">
          <button className="menu-toggle" onClick={toggleSidebar}>
            <Menu size={24} />
          </button>
          <div className="brand-info">
            <h2>Sidhanthi Guru</h2>
            <div className="user-meta">
              <span>{currentUser?.email}</span>
              <span className="badge">admin</span>
            </div>
          </div>
        </div>
        <div className="nav-right">
          <Link to="/" className="nav-btn secondary">
            <ExternalLink size={18} /> <span className="btn-text">Back to Site</span>
          </Link>
          <button onClick={handleLogout} className="nav-btn danger">
            <LogOut size={18} /> <span className="btn-text">Logout</span>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar overlay */}
      {isSidebarOpen && <div className="sidebar-overlay" onClick={closeSidebar}></div>}

      {/* Sidebar Navigation */}
      <aside className={`dashboard-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h3>Dashboard</h3>
          <button className="close-btn" onClick={closeSidebar}>
            <X size={24} />
          </button>
        </div>
        <div className="sidebar-nav">
          <button
            className={`sidebar-link ${activeTab === 'blogs' ? 'active' : ''}`}
            onClick={() => handleTabChange('blogs')}
          >
            <BookOpen size={20} /> Blogs
          </button>
          <button
            className={`sidebar-link ${activeTab === 'create' ? 'active' : ''}`}
            onClick={() => handleTabChange('create')}
          >
            <PlusCircle size={20} /> {editingBlogId ? 'Edit Blog' : 'Create Blog'}
          </button>
          <button
            className={`sidebar-link ${activeTab === 'forms' ? 'active' : ''}`}
            onClick={() => handleTabChange('forms')}
          >
            <MessageSquare size={20} /> Form Submissions
          </button>
        </div>

        <div className="sidebar-footer">
          <Link to="/" className="sidebar-link">
            <ExternalLink size={20} /> Main Website
          </Link>
          <button onClick={handleLogout} className="sidebar-link danger">
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>

      <div className="dashboard-container">
        {/* Overview Header */}
        <section className="dashboard-section">
          <h3 className="section-label">OVERVIEW</h3>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon-wrapper" style={{ backgroundColor: `${stat.color}15`, color: stat.color }}>
                  {stat.icon}
                </div>
                <div className="stat-content">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Content Tabs */}
        <section className="dashboard-main-content">
          <div className="tabs-header">
            <button
              className={`tab-btn ${activeTab === 'blogs' ? 'active' : ''}`}
              onClick={() => setActiveTab('blogs')}
            >
              <BookOpen size={18} /> Blogs ({blogs.length})
            </button>
            <button
              className={`tab-btn ${activeTab === 'create' ? 'active' : ''}`}
              onClick={() => {
                if (activeTab !== 'create') resetForm()
                setActiveTab('create')
              }}
            >
              <PlusCircle size={18} /> {editingBlogId ? 'Edit Blog' : 'Create Blog'}
            </button>
            <button
              className={`tab-btn ${activeTab === 'forms' ? 'active' : ''}`}
              onClick={() => setActiveTab('forms')}
            >
              <MessageSquare size={18} /> Form Submissions ({inquiries.length})
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'blogs' && (
              <div className="blogs-tab fade-in">
                <div className="data-table-wrapper">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Post Title</th>
                        <th>Category</th>
                        <th>Date</th>
                        <th>Author</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {blogLoading ? (
                        <tr><td colSpan="5" className="text-center">Loading blogs...</td></tr>
                      ) : blogs.length === 0 ? (
                        <tr><td colSpan="5" className="text-center">No blogs found.</td></tr>
                      ) : blogs.map(post => (
                        <tr key={post.id} className={post.isArchived ? 'row-archived' : ''}>
                          <td className="font-medium">
                            <div className="flex items-center gap-2">
                              {post.isArchived && <EyeOff size={14} className="text-muted" />}
                              {post.title}
                            </div>
                          </td>
                          <td><span className="table-badge">{post.category}</span></td>
                          <td>{post.createdAt?.toDate ? post.createdAt.toDate().toLocaleDateString() : 'Just now'}</td>
                          <td>{post.author}</td>
                          <td>
                            <div className="action-btns">
                              <button
                                className="icon-btn"
                                onClick={() => startEdit(post)}
                                title="Edit"
                                style={{ color: '#3b82f6' }}
                              >
                                <Edit size={18} />
                              </button>
                              <button
                                className={`icon-btn ${post.isArchived ? 'restore' : 'archive'}`}
                                onClick={() => toggleArchive(post.id, post.isArchived)}
                                title={post.isArchived ? 'Unarchive' : 'Archive'}
                              >
                                {post.isArchived ? <ArchiveRestore size={18} /> : <Archive size={18} />}
                              </button>
                              <button
                                className="icon-btn delete"
                                onClick={() => handleDelete(post.id)}
                                title="Delete"
                              >
                                <Trash2 size={18} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'create' && (
              <div className="create-tab fade-in">
                <form className="create-form-wrapper" onSubmit={handleSubmitBlog}>
                  <div className="form-grid">
                    <div className="form-group">
                      <label>Blog Title</label>
                      <input
                        type="text"
                        placeholder="Enter post title..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Category</label>
                      <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option>Wellness</option>
                        <option>Yoga</option>
                        <option>Meditation</option>
                        <option>Nutrition</option>
                        <option>Yoga Practice Tips</option>
                        <option>Meditation & Mindfulness</option>
                        <option>Wellness & Health</option>
                        <option>Yoga Philosophy</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Photo URL (Required)</label>
                    <input
                      type="url"
                      placeholder="https://images.unsplash.com/photo-..."
                      value={photoUrlInput}
                      onChange={(e) => setPhotoUrlInput(e.target.value)}
                      required
                    />
                    <small style={{ color: '#94a3b8', marginTop: '4px', display: 'block' }}>
                      Tip: Right-click any image on the web and select "Copy image address".
                    </small>
                  </div>

                  <div className="form-group">
                    <label>Excerpt (Short summary)</label>
                    <input
                      type="text"
                      placeholder="Short description..."
                      value={excerpt}
                      onChange={(e) => setExcerpt(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Content</label>
                    <textarea
                      rows="10"
                      placeholder="Write your blog post content here..."
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      required
                    ></textarea>
                  </div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                      type="submit"
                      className="btn btn-primary submit-btn"
                      disabled={isPublishing}
                    >
                      {isPublishing ? (editingBlogId ? 'Updating...' : 'Publishing...') : (editingBlogId ? 'Update Post' : 'Publish Post')}
                    </button>
                    {editingBlogId && (
                      <button
                        type="button"
                        className="btn nav-btn secondary"
                        onClick={() => {
                          resetForm()
                          setActiveTab('blogs')
                        }}
                        style={{ padding: '0.75rem 1.5rem', borderRadius: '8px', cursor: 'pointer', background: '#334155', color: '#f8fafc', border: 'none' }}
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </form>
              </div>
            )}

            {activeTab === 'forms' && (
              <div className="forms-tab fade-in">
                <div className="data-table-wrapper">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Sender</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Subject</th>
                        <th>Date</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {inquiriesLoading ? (
                        <tr><td colSpan="6" className="text-center">Loading submissions...</td></tr>
                      ) : inquiries.length === 0 ? (
                        <tr><td colSpan="6" className="text-center">No submissions found.</td></tr>
                      ) : (
                        inquiries.map(sub => (
                          <tr key={sub.id}>
                            <td className="font-medium">{sub.name}</td>
                            <td>{sub.email}</td>
                            <td>{sub.phone || 'N/A'}</td>
                            <td><span className="table-badge secondary">{sub.subject}</span></td>
                            <td>{sub.submittedAt?.toDate ? sub.submittedAt.toDate().toLocaleDateString() : 'Just now'}</td>
                            <td>
                              <div className="action-btns">
                                <button
                                  className="icon-btn delete"
                                  onClick={() => handleDeleteInquiry(sub.id)}
                                  title="Delete"
                                >
                                  <Trash2 size={18} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}
