# 📁 Google Drive Clone

A modern Google Drive clone built with **Next.js**, **TypeScript**, **Clerk auth**, **UploadThing**, **SingleStore**, and **Drizzle ORM**

## 🚀 Live Demo

👉 [Try it here](https://tirawat-googledrive-nextjs.netlify.app/)

## ✨ Features

- 🔐 Authentication with Clerk
- 📁 Folder navigation with breadcrumb trail
- ⬆️ File uploads using UploadThing
- 📦 Structured database with Drizzle + SingleStore
- 🧠 Typed schema with end-to-end safety (TypeScript)
- 🧭 Dynamic routing with Next App Router
- 🎨 Styled with Tailwind CSS

## 🧪 Fun Follow-Ups (next steps you could try)

Want to push it further? Here are some ideas:

### 🗑️ Folder deletions  
When deleting a folder, make sure to:
- Recursively delete all child folders
- Also remove all nested files

### 📂 Folder creations  
Add a form or button to:
- Create new folders using a **server action**
- Pass in `name` and `parentId`
- Set the `ownerId` to the current user

### 🔒 Access control  
Before rendering a folder:
- Check if the logged-in user is the owner
- Redirect or show an error if not

### 📄 File view page  
Let users click on a file to:
- Preview image/pdf files
- Download or copy file link
> You can also check Theo's last tutorial for inspiration 😉

### 🔔 Toasts & UX polish  
- Show a toast after upload or delete
- Gray out a row while deleting (optimistic UI)

---

Made with ☕, TypeScript, and a bit of chaos.
