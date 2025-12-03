import logoImage from '../assets/images/logo.png'
import type { MenuCategory } from '../data/menuData'

interface MenuProps {
  categories: MenuCategory[]
  onBack?: () => void
}

export function Menu({ categories, onBack }: MenuProps) {
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
          {categories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              onClick={(event) => {
                event.preventDefault()
                document.getElementById(category.id)?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {category.titleEn}
            </a>
          ))}
        </nav>

        {onBack && (
          <button type="button" className="btn ghost dark menu-back-btn" onClick={onBack}>
            Back
          </button>
        )}
      </header>

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
            <p>Authentic Lebanese bakery crafting traditional delights since 1985.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} L&apos;étoile Bakery. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

