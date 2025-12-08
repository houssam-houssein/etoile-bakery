import { useEffect, useMemo, useState, type FormEvent } from 'react'
import type { MenuCategory, MenuItem } from '../data/menuData'

export interface ItemDraft {
  name: string
  nameEn: string
  price: string
}

interface AdminDashboardProps {
  categories: MenuCategory[]
  onAddItem: (categoryId: string, item: ItemDraft) => void
  onUpdateItem: (categoryId: string, itemId: string, item: ItemDraft) => void
  onDeleteItem: (categoryId: string, itemId: string) => void
  onBack: () => void
  onLogout: () => void
}

const emptyDraft: ItemDraft = {
  name: '',
  nameEn: '',
  price: '',
}

export function AdminDashboard({ categories, onAddItem, onUpdateItem, onDeleteItem, onBack, onLogout }: AdminDashboardProps) {
  const [selectedCategoryId, setSelectedCategoryId] = useState(() => categories[0]?.id ?? '')
  const [draft, setDraft] = useState<ItemDraft>(emptyDraft)
  const [editingItemId, setEditingItemId] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    if (!categories.length) {
      return
    }

    const stillExists = categories.some((category) => category.id === selectedCategoryId)
    if (!stillExists) {
      setSelectedCategoryId(categories[0].id)
      setEditingItemId(null)
      setDraft(emptyDraft)
    }
  }, [categories, selectedCategoryId])

  const selectedCategory = useMemo(
    () => categories.find((category) => category.id === selectedCategoryId),
    [categories, selectedCategoryId],
  )

  const visibleItems = useMemo(() => {
    if (!selectedCategory) {
      return []
    }

    if (!searchQuery.trim()) {
      return selectedCategory.items
    }

    const query = searchQuery.toLowerCase()
    return selectedCategory.items.filter(
      (item) =>
        item.name.toLowerCase().includes(query) || item.nameEn.toLowerCase().includes(query) || item.price?.includes(query),
    )
  }, [searchQuery, selectedCategory])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!selectedCategory) {
      return
    }

    if (!draft.name.trim() || !draft.nameEn.trim()) {
      return
    }

    const normalizedDraft: ItemDraft = {
      name: draft.name.trim(),
      nameEn: draft.nameEn.trim(),
      price: draft.price.trim(),
    }

    if (editingItemId) {
      onUpdateItem(selectedCategory.id, editingItemId, normalizedDraft)
    } else {
      onAddItem(selectedCategory.id, normalizedDraft)
    }

    setDraft(emptyDraft)
    setEditingItemId(null)
  }

  const startEdit = (item: MenuItem) => {
    setDraft({
      name: item.name,
      nameEn: item.nameEn,
      price: item.price ?? '',
    })
    setEditingItemId(item.id)
  }

  const handleDelete = (itemId: string) => {
    if (!selectedCategory) {
      return
    }
    onDeleteItem(selectedCategory.id, itemId)
    if (editingItemId === itemId) {
      setEditingItemId(null)
      setDraft(emptyDraft)
    }
  }

  return (
    <div className="admin-page">
      <header className="admin-header">
        <div>
          <p className="eyebrow">Admin Tools</p>
          <h1>Menu Management</h1>
          <p className="admin-subtitle">Add, edit, or remove items from any menu category.</p>
        </div>
        <div className="admin-actions">
          <button type="button" className="btn primary" onClick={onBack}>
            Exit dashboard
          </button>
          <button type="button" className="btn danger" onClick={onLogout}>
            Log out
          </button>
        </div>
      </header>

      <section className="admin-panel">
        <div className="admin-controls">
          <label>
            Category
            <select
              value={selectedCategoryId}
              onChange={(event) => {
                setSelectedCategoryId(event.target.value)
                setEditingItemId(null)
                setDraft(emptyDraft)
              }}
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.titleEn}
                </option>
              ))}
            </select>
          </label>

          <label>
            Search items
            <input
              type="search"
              placeholder="Search by Arabic, English, or price"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
          </label>
        </div>

        <div className="admin-grid">
          <form className="admin-form" onSubmit={handleSubmit}>
            <h2>{editingItemId ? 'Edit item' : 'Add new item'}</h2>
            <label>
              Arabic name
              <input
                type="text"
                value={draft.name}
                onChange={(event) => setDraft((prev) => ({ ...prev, name: event.target.value }))}
                required
              />
            </label>
            <label>
              English name
              <input
                type="text"
                value={draft.nameEn}
                onChange={(event) => setDraft((prev) => ({ ...prev, nameEn: event.target.value }))}
                required
              />
            </label>
            <label>
              Price (leave empty to show “Available”)
              <input
                type="text"
                value={draft.price}
                onChange={(event) => setDraft((prev) => ({ ...prev, price: event.target.value }))}
                placeholder="e.g. 350.000"
              />
            </label>
            <div className="admin-form__actions">
              {editingItemId && (
                <button
                  type="button"
                  className="btn ghost"
                  onClick={() => {
                    setEditingItemId(null)
                    setDraft(emptyDraft)
                  }}
                >
                  Cancel edit
                </button>
              )}
              <button type="submit" className="btn primary">
                {editingItemId ? 'Update item' : 'Add item'}
              </button>
            </div>
          </form>

          <div className="admin-table">
            <div className="admin-table__header">
              <div>
                <h2>{selectedCategory?.titleEn ?? 'Select a category'}</h2>
                <p>{visibleItems.length} items</p>
              </div>
            </div>

            <div className="admin-table__body">
              <table>
                <thead>
                  <tr>
                    <th>Arabic name</th>
                    <th>English name</th>
                    <th>Price</th>
                    <th aria-label="actions" />
                  </tr>
                </thead>
                <tbody>
                  {visibleItems.map((item) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.nameEn}</td>
                      <td>{item.price ?? 'Available'}</td>
                      <td className="admin-table__actions">
                        <button type="button" className="btn ghost" onClick={() => startEdit(item)}>
                          Edit
                        </button>
                        <button type="button" className="btn danger" onClick={() => handleDelete(item.id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                  {!visibleItems.length && (
                    <tr>
                      <td colSpan={4} className="admin-table__empty">
                        No items found for this search.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

