import { supabase } from './supabase';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormResponse {
  success: boolean;
  data?: { id: string };
  error?: string;
}

/**
 * Submit a contact form to Supabase
 * Inserts the contact form data into the contacts table
 */
export async function submitContactForm(
  data: ContactFormData
): Promise<ContactFormResponse> {
  try {
    // Validate input
    if (!data.name?.trim()) {
      return { success: false, error: 'Name is required' };
    }
    if (!data.email?.trim()) {
      return { success: false, error: 'Email is required' };
    }
    if (!data.message?.trim()) {
      return { success: false, error: 'Message is required' };
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return { success: false, error: 'Please enter a valid email address' };
    }

    // Insert into Supabase
    const { data: insertedData, error } = await supabase
      .from('contacts')
      .insert([
        {
          name: data.name.trim(),
          email: data.email.trim(),
          message: data.message.trim(),
        },
      ])
      .select('id')
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return {
        success: false,
        error: 'Failed to submit form. Please try again.',
      };
    }

    return {
      success: true,
      data: insertedData,
    };
  } catch (err) {
    console.error('Unexpected error:', err);
    return {
      success: false,
      error: 'An unexpected error occurred. Please try again.',
    };
  }
}

/**
 * Fetch all contact form submissions (for admin use)
 * Note: Requires proper authentication and RLS policies
 */
export async function getContacts() {
  try {
    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    return { success: true, data };
  } catch (err) {
    console.error('Error fetching contacts:', err);
    return { success: false, error: 'Failed to fetch contacts' };
  }
}
