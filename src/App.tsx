import { useEffect, useState } from 'react'
import { IconCalendar, IconClock, IconFacebook, IconInstagram, IconMedal, IconTikTok } from './components/Icons'
import { Contact } from './components/Contact'
import { Menu } from './components/Menu'
import { AdminDashboard, type ItemDraft } from './components/AdminDashboard'
import { AdminLogin } from './components/AdminLogin'
import { cloneMenuData, defaultMenuData, type MenuCategory } from './data/menuData'
import { loadMenuDataFromFirebase, saveMenuDataToFirebase, isFirebaseConfigured } from './services/firebase'
import heroImage from './assets/images/sp.png'
import logoImage from './assets/images/logo.png'
import osImage from './assets/images/os.png'
import mankoushImage from './assets/images/m.png'
import croissantImage from './assets/images/c.png'
import pizzaImage from './assets/images/p.png'

const navLinks = ['Home', 'About', 'Menu', 'Contact']
const MENU_STORAGE_KEY = 'etoile-menu-data'
const ADMIN_STORAGE_KEY = 'etoile-admin-auth'
// Admin password must be set via VITE_ADMIN_PASSWORD environment variable
// No default password for security reasons
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD?.trim() || ''
type AppView = 'home' | 'menu' | 'contact' | 'admin'

const RAW_BASE_PATH = import.meta.env.BASE_URL ?? '/'
const BASE_PATH = RAW_BASE_PATH === '/' ? '' : RAW_BASE_PATH.replace(/\/$/, '')

const stripBaseFromPath = (path: string) => {
  if (!BASE_PATH) {
    return path || '/'
  }

  if (path.startsWith(BASE_PATH)) {
    const stripped = path.slice(BASE_PATH.length)
    return stripped || '/'
  }

  return path || '/'
}

const normalizePath = (path: string) => {
  if (!path) {
    return '/'
  }
  return path.startsWith('/') ? path : `/${path}`
}

const viewFromPath = (path: string): AppView => {
  const normalized = normalizePath(stripBaseFromPath(path))
  if (normalized === '/admin') return 'admin'
  if (normalized === '/menu') return 'menu'
  if (normalized === '/contact') return 'contact'
  return 'home'
}

const pathForView = (view: AppView) => {
  const suffix = view === 'home' ? '/' : `/${view}`
  if (!BASE_PATH) {
    return suffix
  }
  return `${BASE_PATH}${suffix}`
}

interface HomePageProps {
  onFindLocation: () => void
  onShowMenu: () => void
  onShowMenuCategory?: (categoryId: string) => void
}

function HomePage({ onFindLocation, onShowMenu, onShowMenuCategory }: HomePageProps) {
  return (
    <div className="page">
      <header className="top-bar">
        <div className="wordmark">
          <img 
            src={logoImage} 
            alt="L'ETOILE Logo" 
            style={{ maxHeight: '60px', width: 'auto', objectFit: 'contain' }}
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>

        <nav className="primary-nav" aria-label="Primary">
          {navLinks.map((link) => {
            if (link === 'Menu') {
              return (
                <a
                  key={link}
                  href="#menu"
                  onClick={(e) => {
                    e.preventDefault()
                    onShowMenu()
                  }}
                >
                  {link}
                </a>
              )
            }
            return (
              <a key={link} href={`#${link.toLowerCase()}`}>
                {link}
              </a>
            )
          })}
        </nav>
      </header>

      <main>
        <section
          id="home"
          className="hero hero--photo"
          aria-labelledby="hero-title"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(18, 18, 18, 0.75), rgba(0, 0, 0, 0.45)), url(${heroImage})`,
          }}
        >
          <div className="hero-inner">
            <p className="eyebrow">Authentic Lebanese bakery</p>
            <p className="lead">
              Authentic Lebanese bakery crafting traditional delights with French elegance.
            </p>
            <p className="support">Where every bite tells a story of tradition and passion.</p>
            <div className="cta-group">
              <button className="btn primary" onClick={onShowMenu}>Explore Menu</button>
              <button className="btn ghost dark" onClick={onFindLocation}>Visit Us Today</button>
            </div>
          </div>
        </section>

        <section className="pillars" aria-label="Bakery pillars">
          {[
            {
              title: 'Fresh Daily',
              body: 'All our products are baked fresh every morning using traditional methods passed down through generations.',
              icon: <IconClock />,
            },
            {
              title: 'Premium Quality',
              body: 'We use only the finest, locally sourced ingredients for an authentic and unforgettable taste.',
              icon: <IconMedal />,
            },
            {
              title: 'Since 2015',
              body: 'Nearly four decades of serving our community with authentic Lebanese baking excellence.',
              icon: <IconCalendar />,
            },
          ].map((pillar) => (
            <article key={pillar.title} className="pillar-card">
              <div className="pillar-icon" aria-hidden="true">
                {pillar.icon}
              </div>
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </article>
          ))}
        </section>

        <section id="about" className="story-block" aria-labelledby="story-title">
          <div className="story-text">
            <h2 id="story-title">Our Story</h2>
            <p>
              L&apos;étoile was born from a dream to bring the authentic flavors of Lebanon to our community. Since 2015,
              our master bakers have been crafting each delicacy with the same passion and dedication that defined
              Lebanese baking for centuries.
            </p>
            <p>
              Every morning, our ovens come alive with the aroma of fresh manakish, the sweetness of baklava, and the
              warmth of traditional bread. We believe in honoring our heritage while creating moments of joy for every
              customer who walks through our doors.
            </p>
            <div className="story-note">
              <span className="heart" aria-hidden="true">
                ♡
              </span>
              <span>Made with love, served with pride</span>
            </div>
          </div>

          <div className="story-gallery" aria-hidden="true">
            <img
              src={osImage}
              alt="L'ETOILE Bakery"
            />
          </div>
        </section>

        <section className="menu" id="menu" aria-labelledby="menu-title">
          <div className="menu-text">
            <p className="eyebrow">Signature Collections</p>
            <h2 id="menu-title">Explore Our Menu</h2>
            <p className="menu-lead">
              From sweet delicacies to savory flatbreads, discover the authentic taste of Lebanon.
            </p>
          </div>

          <div className="menu-grid">
            {[
              {
                title: 'Croissant',
                body: 'Buttery, flaky pastries baked fresh daily with authentic French technique.',
                image: croissantImage,
                categoryId: 'croissant',
              },
              {
                title: 'Fresh Mankoush',
                body: "Authentic flatbreads topped with za'atar, cheese, and more.",
                image: mankoushImage,
                categoryId: 'mashrouha',
              },
              {
                title: 'Italian Pizza',
                body: 'Crispy, wood-fired pizzas with premium toppings and authentic Italian flavors.',
                image: pizzaImage,
                categoryId: 'italian-pizza',
              },
            ].map((card) => (
              <article key={card.title} className="menu-card">
                <div className="menu-image">
                  <img src={card.image} alt={card.title} />
                </div>
                <div className="menu-card__overlay">
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                  <button 
                    type="button" 
                    className="menu-link" 
                    onClick={() => {
                      if (card.categoryId && onShowMenuCategory) {
                        onShowMenuCategory(card.categoryId)
                      } else {
                        onShowMenu()
                      }
                    }}
                  >
                    View Collection →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="visit" aria-labelledby="visit-title">
          <div className="visit-icon" aria-hidden="true">
            👨‍🍳
          </div>
          <h2 id="visit-title">Visit Us Today</h2>
          <p>
            Experience the warmth of our bakery and the authentic taste of Lebanese tradition. We&apos;re open daily and
            ready to serve you.
          </p>
          <button className="btn primary" onClick={onFindLocation}>
            Find Our Location
          </button>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="footer-content">
          <div>
            <h3>L&apos;étoile</h3>
            <p>Authentic Lebanese bakery crafting traditional delights since 2015.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#story-title">About Us</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Menu</h4>
            <ul>
              <li>
                <a href="#menu">Full Menu</a>
              </li>
              <li>
                <a href="#menu">Sweet</a>
              </li>
              <li>
                <a href="#menu">Mankoush</a>
              </li>
              <li>
                <a href="#menu">Bread</a>
              </li>
            </ul>
          </div>
          <div className="contact-info">
            <h4>Contact Info</h4>
            <ul>
              <li>Highway, Balamand junction</li>
              <li>+961 06 401 894/71 894 894</li>
              <li>hello@etoilebakery.com</li>
              <li>Mon–Sun: 24/7</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} L&apos;étoile Bakery. All rights reserved.</p>
          <div className="social">
            <a
              href="https://www.instagram.com/letoile.bakery?igsh=MXZwdzNlaHc4YzY1MA=="
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <IconInstagram />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/share/14R3QubZgiP/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <IconFacebook />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="https://www.tiktok.com/@letoilebakery?_r=1&_t=ZS-91YtNZC5UXd"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
            >
              <IconTikTok />
              <span className="sr-only">TikTok</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function App() {
  const [view, setView] = useState<AppView>(() => {
    if (typeof window === 'undefined') {
      return 'home'
    }
    return viewFromPath(window.location.pathname)
  })
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(() => {
    if (typeof window === 'undefined') {
      return false
    }
    return window.sessionStorage.getItem(ADMIN_STORAGE_KEY) === 'true'
  })
  const [loginError, setLoginError] = useState<string | null>(null)
  const [scrollToCategoryId, setScrollToCategoryId] = useState<string | undefined>(undefined)
  const [menuCategories, setMenuCategories] = useState<MenuCategory[]>(() => {
    // Initialize with defaults, will be replaced by Firebase/localStorage data on mount
    return cloneMenuData(defaultMenuData)
  })
  const [isLoadingMenu, setIsLoadingMenu] = useState(true)

  // Load menu data on mount: Firebase first, then localStorage, then defaults
  useEffect(() => {
    if (typeof window === 'undefined') {
      setIsLoadingMenu(false)
      return
    }

    const loadMenuData = async () => {
      setIsLoadingMenu(true)
      
      // Try Firebase first (if configured)
      if (isFirebaseConfigured()) {
        const firebaseData = await loadMenuDataFromFirebase()
        if (firebaseData) {
          setMenuCategories(firebaseData)
          // Also save to localStorage as backup
          window.localStorage.setItem(MENU_STORAGE_KEY, JSON.stringify(firebaseData))
          setIsLoadingMenu(false)
          return
        }
      }

      // Fallback to localStorage
      const stored = window.localStorage.getItem(MENU_STORAGE_KEY)
      if (stored) {
        try {
          const parsed = JSON.parse(stored) as MenuCategory[]
          setMenuCategories(parsed)
          setIsLoadingMenu(false)
          return
        } catch {
          // ignore corrupted data
        }
      }

      // Use defaults
      const defaults = cloneMenuData(defaultMenuData)
      setMenuCategories(defaults)
      
      // Save defaults to Firebase if configured (first time setup)
      if (isFirebaseConfigured()) {
        await saveMenuDataToFirebase(defaults)
      }
      
      setIsLoadingMenu(false)
    }

    loadMenuData()
  }, [])

  // Save menu data whenever it changes
  useEffect(() => {
    if (typeof window === 'undefined' || isLoadingMenu) {
      return
    }

    // Save to localStorage as backup
    window.localStorage.setItem(MENU_STORAGE_KEY, JSON.stringify(menuCategories))

    // Save to Firebase if configured (for global updates)
    if (isFirebaseConfigured()) {
      saveMenuDataToFirebase(menuCategories).catch((error) => {
        console.error('Failed to save menu data to Firebase:', error)
      })
    }
  }, [menuCategories, isLoadingMenu])

  const getItemId = () => {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
      return crypto.randomUUID()
    }

    return `item-${Date.now()}-${Math.random().toString(16).slice(2)}`
  }

  const normalizePrice = (value: string) => {
    const trimmed = value.trim()
    return trimmed.length ? trimmed : null
  }

  const handleAddItem = (categoryId: string, item: ItemDraft) => {
    setMenuCategories((prev) =>
      prev.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              items: [
                ...category.items,
                {
                  id: getItemId(),
                  name: item.name,
                  nameEn: item.nameEn,
                  price: normalizePrice(item.price),
                },
              ],
            }
          : category,
      ),
    )
  }

  const handleUpdateItem = (categoryId: string, itemId: string, item: ItemDraft) => {
    setMenuCategories((prev) =>
      prev.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              items: category.items.map((existing) =>
                existing.id === itemId
                  ? {
                      ...existing,
                      name: item.name,
                      nameEn: item.nameEn,
                      price: normalizePrice(item.price),
                    }
                  : existing,
              ),
            }
          : category,
      ),
    )
  }

  const handleDeleteItem = (categoryId: string, itemId: string) => {
    setMenuCategories((prev) =>
      prev.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              items: category.items.filter((item) => item.id !== itemId),
            }
          : category,
      ),
    )
  }

  const handleAdminLogin = (password: string) => {
    if (!ADMIN_PASSWORD) {
      setLoginError('Admin password is not configured. Please set VITE_ADMIN_PASSWORD environment variable.')
      return
    }
    
    if (password.trim() === ADMIN_PASSWORD) {
      setIsAdminAuthenticated(true)
      setLoginError(null)
      if (typeof window !== 'undefined') {
        window.sessionStorage.setItem(ADMIN_STORAGE_KEY, 'true')
      }
      setView('admin')
    } else {
      setLoginError('Incorrect password. Please try again.')
    }
  }

  const handleAdminLogout = () => {
    setIsAdminAuthenticated(false)
    setLoginError(null)
    if (typeof window !== 'undefined') {
      window.sessionStorage.removeItem(ADMIN_STORAGE_KEY)
    }
    setView('home')
  }

  const handleShowMenuCategory = (categoryId: string) => {
    setScrollToCategoryId(categoryId)
    setView('menu')
  }

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const handlePopState = () => {
      setView(viewFromPath(window.location.pathname))
    }

    window.addEventListener('popstate', handlePopState)
    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const targetPath = pathForView(view)
    if (window.location.pathname !== targetPath) {
      window.history.pushState({ view }, '', targetPath)
    }
  }, [view])

  if (view === 'contact') {
    return <Contact onBack={() => setView('home')} />
  }

  if (view === 'menu') {
    return (
      <Menu
        categories={menuCategories}
        scrollToCategoryId={scrollToCategoryId}
        onScrollComplete={() => setScrollToCategoryId(undefined)}
      />
    )
  }

  if (view === 'admin') {
    if (!isAdminAuthenticated) {
      return <AdminLogin onSubmit={handleAdminLogin} errorMessage={loginError} onBack={() => setView('home')} />
    }

    return (
      <AdminDashboard
        categories={menuCategories}
        onAddItem={handleAddItem}
        onUpdateItem={handleUpdateItem}
        onDeleteItem={handleDeleteItem}
        onBack={() => setView('home')}
        onLogout={handleAdminLogout}
      />
    )
  }

  return (
    <HomePage
      onFindLocation={() => setView('contact')}
      onShowMenu={() => {
        setScrollToCategoryId(undefined)
        setView('menu')
      }}
      onShowMenuCategory={handleShowMenuCategory}
    />
  )
}

export default App


