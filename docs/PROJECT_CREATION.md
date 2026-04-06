# Phase 1 · Create the Auth Portal Repository
G
oal: Bootstrap the new standalone app with the same stack.

## 1.1 Create a new repository
- Create a new Git repository: auth-portal (or equivalent name).
- Scaffold with Vite + React + TypeScript: 
```
npm create vite@latest . -- --template react-ts
```
- Install Shadcn/ui: (https://ui.shadcn.com/docs/installation/vite)[Shadcn/ui]
  - Add button, card
```
npx shadcn@latest add button
```
- Install React Router
```
npm install react-router
```
- Install Firebase SDK
```
npm install -g firebase-tools
npm install firebase react-router-dom
firebase login
``` 

## 1.2 Register the Auth Portal as a new web app

- In the Firebase Console → Project Settings → Your apps → Add app → Web.
- Give it the name auth-portal. Note the new firebaseConfig object (different appId from pew-pew, but same projectId, apiKey, and authDomain).
- Register the Auth Portal's domain (e.g. auth.yourdomain.com) under Firebase Console → Authentication → Settings → Authorized domains.

## 1.3 Firebase

firebase init functions
firebase emulators:start


