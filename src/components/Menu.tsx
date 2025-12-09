import { useEffect, useState } from 'react'
import logoImage from '../assets/images/logo.png'
import type { MenuCategory } from '../data/menuData'

interface MenuProps {
  categories: MenuCategory[]
  scrollToCategoryId?: string
  onScrollComplete?: () => void
}

export function Menu({ categories, scrollToCategoryId, onScrollComplete }: MenuProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(scrollToCategoryId || categories[0]?.id || null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    if (scrollToCategoryId) {
      // Small delay to ensure the DOM is rendered
      const timer = setTimeout(() => {
        const element = document.getElementById(scrollToCategoryId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          setActiveCategory(scrollToCategoryId)
          // Clear the scroll target after scrolling
          if (onScrollComplete) {
            setTimeout(() => {
              onScrollComplete()
            }, 500)
          }
        }
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [scrollToCategoryId, onScrollComplete])

  // Track scroll position for navbar behavior
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 100) // Show main navbar when scrolled past 100px
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check on mount
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Track which category is in view for active state
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200 // Offset for better detection
      
      for (const category of categories) {
        const element = document.getElementById(category.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = rect.top + window.scrollY
          const elementBottom = elementTop + rect.height
          
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveCategory(category.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check on mount
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [categories])
  return (
    <div className="page">
      <header className={`top-bar menu-top-bar ${isScrolled ? 'scrolled' : ''}`}>
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
      </header>

      <nav className={`category-nav ${isScrolled ? 'scrolled' : ''}`} aria-label="Category Navigation">
        {categories.map((category) => (
          <a
            key={category.id}
            href={`#${category.id}`}
            className={activeCategory === category.id ? 'active' : ''}
            onClick={(event) => {
              event.preventDefault()
              setActiveCategory(category.id)
              document.getElementById(category.id)?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            {category.titleEn}
          </a>
        ))}
      </nav>

      <main>
        <section className="menu-page">
          <div className="menu-page-header">
            <h1>Our Menu</h1>
            <p className="menu-page-subtitle">Discover our authentic Lebanese flavors</p>
          </div>

          <div className="menu-categories">
            {categories.map((category) => (
              <div key={category.id} id={category.id} className="menu-category">
                <h2 className="category-title">{category.titleAr}</h2>
                <p className="category-subtitle">{category.titleEn}</p>

                <div className="menu-items-table">
                  <table>
                    <thead>
                      <tr>
                        <th className="item-name-col">Item</th>
                        <th className="item-price-col">Price</th>
                      </tr>
                    </thead>

                    <tbody>
                      {category.items.map((item) => (
                        <tr key={item.id}>
                          <td className="item-name">
                            <span className="item-name-ar">{item.name}</span>
                            <span className="item-name-en">{item.nameEn}</span>
                          </td>
                          <td className="item-price">
                            {item.price ? (
                              <>
                                {item.price} <span className="currency">ل.ل.</span>
                              </>
                            ) : (
                              <span className="price-available">Available</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-content">
          <div>
            <h3>L&apos;étoile</h3>
            <p>Authentic Lebanese bakery crafting traditional delights since 2015.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} L&apos;étoile Bakery. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

