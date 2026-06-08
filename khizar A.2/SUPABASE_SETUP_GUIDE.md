# Supabase Integration Guide

Complete setup guide for integrating Supabase with your Next.js portfolio website.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Supabase Project Setup](#supabase-project-setup)
3. [Environment Variables](#environment-variables)
4. [Database Schema](#database-schema)
5. [Row Level Security (RLS)](#row-level-security)
6. [Testing](#testing)
7. [Troubleshooting](#troubleshooting)

---

## Prerequisites

- Node.js 16+ installed
- npm or yarn package manager
- A Supabase account (free at https://supabase.com)
- Your Next.js portfolio project set up

## Supabase Project Setup

### Step 1: Create a Supabase Project

1. Go to https://app.supabase.com
2. Click "New Project"
3. Enter project name: `khizar-arain-portfolio` (or your preference)
4. Choose a strong password (this is your database password)
5. Select your region (choose closest to your users)
6. Click "Create new project" and wait for it to initialize (takes ~2-3 minutes)

### Step 2: Get Your Credentials

1. Once your project is created, go to **Project Settings** (gear icon, bottom left)
2. Click on **API** in the left menu
3. Copy the following values:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **Anon/Public Key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

⚠️ **Important:** These are public keys, but keep your database password private!

---

## Environment Variables

### Step 1: Create .env.local file

1. In your project root, create a file named `.env.local`
2. Add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

**Example:**

```env
NEXT_PUBLIC_SUPABASE_URL=https://abcdefghijklmnop.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Step 2: Add to .gitignore

Ensure `.env.local` is in your `.gitignore`:

```
.env.local
.env*.local
```

---

## Database Schema

### Step 1: Create the contacts table

1. In Supabase, go to the **SQL Editor** (left sidebar)
2. Click **New query**
3. Copy and paste the SQL from `SUPABASE_SCHEMA.sql`
4. Click **Run** or press `Ctrl+Enter`
5. Wait for success message

**What this creates:**

- `contacts` table with columns: id, name, email, message, created_at, updated_at
- Indexes for faster queries
- Row Level Security (RLS) enabled
- Automatic updated_at timestamp

### Step 2: Verify the table

1. Go to **Table Editor** in Supabase
2. You should see the `contacts` table
3. Click on it to view its structure

---

## Row Level Security (RLS)

The RLS policies are automatically created by the SQL script above. Here's what they do:

### Policies Created:

1. **Allow public to insert contacts** ✓
   - Anyone can submit a contact form WITHOUT authentication
   - This is what you want for public visitors

2. **Allow public to view contacts** ✓
   - Anyone can read the contacts (adjust if you want this private)

3. **Prevent updates/deletes**
   - Public users cannot modify or delete contacts
   - Only authenticated admins can (configure manually in dashboard if needed)

### Verify Policies:

1. In Supabase, go to **Authentication** → **Policies**
2. Click on the `contacts` table
3. You should see the 4 policies listed

---

## Project Structure

```
khizar A.2/
├── src/
│   ├── app/
│   │   ├── contact/
│   │   │   └── page.tsx          ← Contact page
│   │   └── page.tsx
│   ├── components/
│   │   └── ContactForm.tsx        ← Contact form component
│   ├── lib/
│   │   ├── supabase.js            ← Supabase client
│   │   └── contactService.js      ← Database functions
│   └── types/
├── .env.local                     ← Your credentials (NOT in git)
├── .env.local.example             ← Template
├── SUPABASE_SCHEMA.sql            ← Database schema
└── package.json
```

---

## Testing

### Step 1: Start your development server

```bash
cd "D:\khizar arain\khizar A.2"
npm run dev
```

### Step 2: Navigate to the contact page

1. Open http://localhost:3000/contact
2. You should see the contact form

### Step 3: Submit a test message

1. Fill in the form:
   - Name: "Test User"
   - Email: "test@example.com"
   - Message: "This is a test message"
2. Click "Send Message"
3. You should see: "Thank you! Your message has been sent successfully."

### Step 4: Verify in Supabase

1. Go to Supabase Dashboard
2. Click **Table Editor**
3. Select the `contacts` table
4. You should see your test message!

---

## Using the Contact Form

### In Your Portfolio Pages

Simply import and use the ContactForm component:

```tsx
// In any page file
import ContactForm from "@/components/ContactForm";

export default function Page() {
  return (
    <div>
      <h1>Contact</h1>
      <ContactForm />
    </div>
  );
}
```

### Using the Service Functions

If you want to build custom forms:

```tsx
import { submitContactForm } from "@/lib/contactService";

async function handleSubmit(formData) {
  const result = await submitContactForm({
    name: formData.name,
    email: formData.email,
    message: formData.message,
  });

  if (result.success) {
    console.log("Message sent!", result.data);
  } else {
    console.error("Error:", result.error);
  }
}
```

---

## Features Included

✅ **Form Validation**

- Name, email, and message required
- Email format validation
- Minimum message length (10 characters)

✅ **Error Handling**

- User-friendly error messages
- Validation errors displayed in real-time
- Network error handling

✅ **Loading States**

- "Sending..." button text while submitting
- Form inputs disabled during submission
- Prevents double-submit

✅ **Success Messages**

- Confirmation message shown for 5 seconds
- Form clears after successful submission
- User feedback built-in

✅ **Security**

- Credentials in environment variables only
- Input sanitization (trim whitespace)
- Row Level Security policies
- Public users can't access admin functions

✅ **Production Ready**

- Async/await error handling
- Proper input validation
- Console error logging
- Responsive design
- Tailwind CSS styling

---

## Troubleshooting

### Issue: "Missing Supabase environment variables"

**Solution:**

1. Check `.env.local` file exists
2. Verify variable names are exactly:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. Restart dev server: `npm run dev`

### Issue: Form submission fails silently

**Solution:**

1. Open browser DevTools (F12)
2. Go to **Console** tab
3. Look for error messages
4. Check that the `contacts` table exists in Supabase
5. Verify RLS policies are enabled

### Issue: "Failed to submit form"

**Solution:**

1. Check internet connection
2. Verify Supabase project is active
3. Check that the `contacts` table was created
4. Make sure RLS policies allow public INSERT

### Issue: Environment variables not loading

**Solution:**

1. Ensure `.env.local` is in project root (not in src folder)
2. Restart dev server: `npm run dev`
3. Hard refresh browser: `Ctrl+Shift+R`
4. Check that variables start with `NEXT_PUBLIC_`

### Issue: CORS or network errors

**Solution:**

1. Go to Supabase Project Settings → **API**
2. Verify your URL is correct
3. Check browser console for specific error
4. Ensure RLS policies allow public access

---

## Next Steps

1. ✅ Customize the ContactForm styling to match your portfolio
2. ✅ Add email notifications (using Supabase Functions or third-party service)
3. ✅ Create an admin dashboard to view submitted contacts
4. ✅ Add spam protection (reCAPTCHA)
5. ✅ Set up automated email replies to users

---

## Useful Links

- [Supabase Docs](https://supabase.com/docs)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript)
- [Row Level Security Guide](https://supabase.com/docs/guides/auth/row-level-security)
- [Next.js Documentation](https://nextjs.org/docs)

---

## Support

For issues, check:

1. Supabase Dashboard → Project Health
2. Browser DevTools Console
3. Network tab in DevTools
4. Supabase Logs (in dashboard)

Happy building! 🚀
