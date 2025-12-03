import { IconClock, IconEmail, IconLocation, IconPhone, IconStar } from './Icons'

interface ContactProps {
  onBack: () => void
}

export function Contact({ onBack }: ContactProps) {
  return (
    <div className="page">
      <header className="top-bar">
        <div className="wordmark">
          <IconStar />
          <span>L&apos;ETOILE</span>
        </div>

        <nav className="primary-nav" aria-label="Primary">
          <a href="#home" onClick={(e) => { e.preventDefault(); onBack() }}>
            Home
          </a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact" onClick={(e) => { e.preventDefault() }}>
            Contact
          </a>
        </nav>
      </header>

      <main>
        <section className="contact-page">
          <div className="contact-header">
            <h1>Contact Us</h1>
            <p className="contact-subtitle">We&apos;d love to hear from you. Visit us or send us a message.</p>
          </div>

          <div className="contact-content">
            <div className="contact-info-section">
              <h2>Get in Touch</h2>

              <div className="contact-item">
                <div className="contact-icon-box">
                  <IconLocation />
                </div>
                <div className="contact-details">
                  <h3>Visit Us</h3>
                  <p>123 Bakery Street, Beirut, Lebanon</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-box">
                  <IconPhone />
                </div>
                <div className="contact-details">
                  <h3>Call Us</h3>
                  <p>+961 1 234 567</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-box">
                  <IconEmail />
                </div>
                <div className="contact-details">
                  <h3>Email Us</h3>
                  <p>hello@letoile.lb</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-box">
                  <IconClock />
                </div>
                <div className="contact-details">
                  <h3>Opening Hours</h3>
                  <p>Monday - Saturday: 6:00 AM - 8:00 PM</p>
                  <p>Sunday: 7:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="contact-form-section">
              <h2>Send a Message</h2>
              <form className="contact-form" onSubmit={(e) => { e.preventDefault() }}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" placeholder="John Doe" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" placeholder="john@example.com" required />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} placeholder="Tell us how we can help you..." required />
                </div>

                <button type="submit" className="btn primary">
                  Send Message
                </button>
              </form>
            </div>
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

