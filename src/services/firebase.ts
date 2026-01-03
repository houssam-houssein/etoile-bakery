import { initializeApp, type FirebaseApp } from 'firebase/app'
import { getFirestore, doc, getDoc, setDoc, type Firestore } from 'firebase/firestore'
import type { MenuCategory } from '../data/menuData'

const MENU_DOC_ID = 'menu-data'

interface FirebaseConfig {
  apiKey: string
  authDomain: string
  projectId: string
  storageBucket: string
  messagingSenderId: string
  appId: string
}

let app: FirebaseApp | null = null
let db: Firestore | null = null

function initializeFirebase(): { app: FirebaseApp; db: Firestore } | null {
  if (app && db) {
    return { app, db }
  }

  const config: FirebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY || '',
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || '',
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || '',
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || '',
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '',
    appId: import.meta.env.VITE_FIREBASE_APP_ID || '',
  }

  // Check if Firebase is configured
  if (!config.apiKey || !config.projectId) {
    console.warn('Firebase is not configured. Menu data will be stored locally only.')
    return null
  }

  try {
    app = initializeApp(config)
    db = getFirestore(app)
    return { app, db }
  } catch (error) {
    console.error('Failed to initialize Firebase:', error)
    return null
  }
}

export async function loadMenuDataFromFirebase(): Promise<MenuCategory[] | null> {
  const firebase = initializeFirebase()
  if (!firebase) {
    return null
  }

  try {
    const menuDocRef = doc(firebase.db, 'menu', MENU_DOC_ID)
    const menuDocSnap = await getDoc(menuDocRef)

    if (menuDocSnap.exists()) {
      const data = menuDocSnap.data()
      return data.categories as MenuCategory[]
    }

    return null
  } catch (error) {
    console.error('Failed to load menu data from Firebase:', error)
    return null
  }
}

export async function saveMenuDataToFirebase(categories: MenuCategory[]): Promise<boolean> {
  const firebase = initializeFirebase()
  if (!firebase) {
    return false
  }

  try {
    const menuDocRef = doc(firebase.db, 'menu', MENU_DOC_ID)
    await setDoc(menuDocRef, { categories }, { merge: false })
    return true
  } catch (error) {
    console.error('Failed to save menu data to Firebase:', error)
    return false
  }
}

export function isFirebaseConfigured(): boolean {
  return !!(
    import.meta.env.VITE_FIREBASE_API_KEY &&
    import.meta.env.VITE_FIREBASE_PROJECT_ID
  )
}

