/**
 * Type definitions for Supabase contact form integration
 */

/**
 * Contact form submission data
 */
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

/**
 * Contact record from database
 */
export interface Contact extends ContactFormData {
  id: string;
  created_at: string;
  updated_at: string;
}

/**
 * Service function response
 */
export interface ServiceResponse<T = void> {
  success: boolean;
  data?: T;
  error?: string;
}

/**
 * Contact submission response
 */
export type SubmitContactResponse = ServiceResponse<Contact[]>;

/**
 * Fetch contacts response
 */
export type FetchContactsResponse = ServiceResponse<Contact[]>;

/**
 * Delete contact response
 */
export type DeleteContactResponse = ServiceResponse<void>;

/**
 * Form state
 */
export interface FormState {
  name: string;
  email: string;
  message: string;
  loading: boolean;
  success: boolean;
  error: string;
}
