import { supabase } from "./supabase";

/**
 * Submit a contact form to the database
 * @param {Object} contactData - The contact data to submit
 * @param {string} contactData.name - Contact person's name
 * @param {string} contactData.email - Contact person's email
 * @param {string} contactData.message - Contact message
 * @returns {Promise<{success: boolean, data?: Object, error?: string}>}
 */
export async function submitContactForm(contactData) {
  try {
    // Validate input
    if (!contactData.name || !contactData.email || !contactData.message) {
      return {
        success: false,
        error: "Name, email, and message are required",
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactData.email)) {
      return {
        success: false,
        error: "Invalid email format",
      };
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from("contacts")
      .insert([
        {
          name: contactData.name.trim(),
          email: contactData.email.trim(),
          message: contactData.message.trim(),
        },
      ])
      .select();

    if (error) {
      console.error("Supabase error:", error);
      return {
        success: false,
        error: error.message || "Failed to submit contact form",
      };
    }

    return {
      success: true,
      data: data,
    };
  } catch (err) {
    console.error("Unexpected error:", err);
    return {
      success: false,
      error: "An unexpected error occurred",
    };
  }
}

/**
 * Fetch all contacts (admin function)
 * Note: This requires authenticated admin access
 * @returns {Promise<{success: boolean, data?: Array, error?: string}>}
 */
export async function fetchContacts() {
  try {
    const { data, error } = await supabase
      .from("contacts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase error:", error);
      return {
        success: false,
        error: error.message || "Failed to fetch contacts",
      };
    }

    return {
      success: true,
      data: data,
    };
  } catch (err) {
    console.error("Unexpected error:", err);
    return {
      success: false,
      error: "An unexpected error occurred",
    };
  }
}

/**
 * Delete a contact by ID (admin function)
 * @param {string} contactId - The ID of the contact to delete
 * @returns {Promise<{success: boolean, error?: string}>}
 */
export async function deleteContact(contactId) {
  try {
    const { error } = await supabase
      .from("contacts")
      .delete()
      .eq("id", contactId);

    if (error) {
      console.error("Supabase error:", error);
      return {
        success: false,
        error: error.message || "Failed to delete contact",
      };
    }

    return {
      success: true,
    };
  } catch (err) {
    console.error("Unexpected error:", err);
    return {
      success: false,
      error: "An unexpected error occurred",
    };
  }
}
