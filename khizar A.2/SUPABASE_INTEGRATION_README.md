# Supabase Integration Files

This directory contains all files related to Supabase integration for your portfolio website.

## File Descriptions

### 1. `src/lib/supabase.js`

**Supabase Client Initialization**

Creates and exports the Supabase client instance with proper error handling.

**Environment Variables Required:**

- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anonymous key

**Usage:**

```javascript
import { supabase } from "@/lib/supabase";

// Now use supabase object in your components
const { data, error } = await supabase.from("contacts").select();
```

### 2. `src/lib/contactService.js`

**Contact Service Functions**

Reusable functions for all database operations related to contacts.

**Functions:**

- `submitContactForm(contactData)` - Submit a new contact form
- `fetchContacts()` - Fetch all contacts (admin)
- `deleteContact(contactId)` - Delete a contact (admin)

**Usage:**

```javascript
import { submitContactForm } from "@/lib/contactService";

const result = await submitContactForm({
  name: "John Doe",
  email: "john@example.com",
  message: "Hello!",
});

if (result.success) {
  console.log("Success!", result.data);
} else {
  console.error("Error:", result.error);
}
```

### 3. `src/components/ContactForm.tsx`

**Contact Form Component**

A complete, production-ready contact form component with:

- Form validation
- Error handling
- Loading states
- Success messages
- Tailwind CSS styling

**Features:**

- ✅ Name, email, message fields
- ✅ Email format validation
- ✅ Minimum message length validation
- ✅ Real-time error clearing
- ✅ Loading state with disabled inputs
- ✅ Success confirmation message
- ✅ Fully accessible with proper labels

**Usage:**

```tsx
import ContactForm from "@/components/ContactForm";

export default function Page() {
  return <ContactForm />;
}
```

### 4. `src/app/contact/page.tsx`

**Contact Page**

Example page implementing the contact form with surrounding content.

**Features:**

- Professional layout
- Form heading and description
- Information section below form
- Responsive design

### 5. `.env.local.example`

**Environment Variables Template**

Template file showing which environment variables are needed.

**Instructions:**

1. Copy this file and rename to `.env.local`
2. Fill in your Supabase credentials
3. Never commit `.env.local` to git (it's in .gitignore)

### 6. `SUPABASE_SCHEMA.sql`

**Database Schema**

Complete SQL script to create:

- `contacts` table with proper columns
- Indexes for performance
- Row Level Security (RLS) policies
- Automatic timestamp updates

**How to use:**

1. Go to Supabase Dashboard
2. Open SQL Editor
3. Paste the contents
4. Execute the query

### 7. `SUPABASE_SETUP_GUIDE.md`

**Complete Setup Documentation**

Step-by-step guide covering:

- Creating a Supabase project
- Getting credentials
- Setting up environment variables
- Creating the database
- Understanding RLS policies
- Testing everything
- Troubleshooting common issues

---

## Quick Start

1. **Install dependencies:**

   ```bash
   npm install @supabase/supabase-js
   ```

2. **Create `.env.local`:**

   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   ```

3. **Create database:**
   - Run SQL from `SUPABASE_SCHEMA.sql` in Supabase SQL Editor

4. **Use the form:**

   ```tsx
   import ContactForm from "@/components/ContactForm";

   export default function Page() {
     return <ContactForm />;
   }
   ```

5. **Test:**
   - Navigate to `/contact` page
   - Fill and submit form
   - Check Supabase Dashboard for the new entry

---

## File Structure

```
src/
├── lib/
│   ├── supabase.js              ← Supabase client
│   └── contactService.js        ← Database functions
├── components/
│   └── ContactForm.tsx          ← Form component
└── app/
    └── contact/
        └── page.tsx             ← Contact page

Root files:
├── .env.local                   ← Your credentials (NOT in git)
├── .env.local.example           ← Template for credentials
├── SUPABASE_SCHEMA.sql          ← Database schema
└── SUPABASE_SETUP_GUIDE.md      ← Complete guide
```

---

## Best Practices Implemented

✅ **Security:**

- Credentials in environment variables only
- Input validation and sanitization
- Row Level Security (RLS) policies
- No sensitive data in code

✅ **Error Handling:**

- Try-catch blocks
- User-friendly error messages
- Console logging for debugging
- Graceful fallbacks

✅ **Performance:**

- Database indexes
- Efficient queries
- Proper state management
- No unnecessary re-renders

✅ **User Experience:**

- Form validation feedback
- Loading states
- Success/error messages
- Responsive design
- Accessible form inputs

✅ **Code Quality:**

- Async/await (not callbacks)
- Clean, well-commented code
- Reusable functions
- Proper TypeScript (where applicable)

---

## Common Tasks

### Display all contacts (admin page)

```tsx
"use client";

import { useEffect, useState } from "react";
import { fetchContacts } from "@/lib/contactService";

export default function AdminPage() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function load() {
      const result = await fetchContacts();
      if (result.success) {
        setContacts(result.data);
      }
    }
    load();
  }, []);

  return (
    <div>
      <h1>Contacts</h1>
      {contacts.map((contact) => (
        <div key={contact.id}>
          <p>{contact.name}</p>
          <p>{contact.email}</p>
          <p>{contact.message}</p>
        </div>
      ))}
    </div>
  );
}
```

### Custom form with more fields

```tsx
"use client";

import { useState } from "react";
import { submitContactForm } from "@/lib/contactService";

export default function CustomForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "", // Additional field
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Combine fields as needed
    const result = await submitContactForm({
      name: formData.name,
      email: formData.email,
      message: `Subject: ${formData.subject}\n\n${formData.message}`,
    });

    if (result.success) {
      console.log("Sent!");
    }
  };

  // ... rest of component
}
```

---

## Support & Documentation

- 📖 Read: `SUPABASE_SETUP_GUIDE.md`
- 🔗 Supabase Docs: https://supabase.com/docs
- 🔗 Next.js Docs: https://nextjs.org/docs
- 💬 Supabase Community: https://discord.supabase.com

---

Happy coding! 🚀
