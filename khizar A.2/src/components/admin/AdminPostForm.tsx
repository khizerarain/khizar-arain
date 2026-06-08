"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Post, CreatePostInput, UpdatePostInput } from "@/types/blog";
import { createPost, updatePost, getPostById } from "@/lib/blog";
import { generateSlug, validatePost } from "@/utils/blog";

interface AdminPostFormProps {
  postId?: string;
  onSuccess?: () => void;
}

export default function AdminPostForm({
  postId,
  onSuccess,
}: AdminPostFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingPost, setIsLoadingPost] = useState(!!postId);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    cover_image: "",
    category: "",
    tags: "",
    published: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Load post data if editing
  useEffect(() => {
    if (postId) {
      loadPost();
    }
  }, [postId]);

  const loadPost = async () => {
    if (!postId) return;
    const result = await getPostById(postId);
    if (result.success && result.data) {
      setFormData({
        title: result.data.title,
        slug: result.data.slug,
        excerpt: result.data.excerpt,
        content: result.data.content,
        cover_image: result.data.cover_image || "",
        category: result.data.category || "",
        tags: result.data.tags?.join(", ") || "",
        published: result.data.published,
      });
    }
    setIsLoadingPost(false);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleGenerateSlug = () => {
    const slug = generateSlug(formData.title);
    setFormData({
      ...formData,
      slug,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    // Validate form
    const validation = validatePost({
      title: formData.title,
      slug: formData.slug,
      excerpt: formData.excerpt,
      content: formData.content,
    });

    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsLoading(true);

    try {
      const tags = formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag);

      if (postId) {
        // Update post
        const updateData: UpdatePostInput = {
          title: formData.title,
          slug: formData.slug,
          excerpt: formData.excerpt,
          content: formData.content,
          cover_image: formData.cover_image || undefined,
          category: formData.category || undefined,
          tags: tags.length > 0 ? tags : undefined,
          published: formData.published,
        };

        const result = await updatePost(postId, updateData);
        if (result.success) {
          setSuccessMessage("Post updated successfully!");
          setTimeout(() => {
            onSuccess?.();
            router.push("/admin/posts");
          }, 1000);
        } else {
          setErrorMessage(result.error || "Failed to update post");
        }
      } else {
        // Create post
        const createData: CreatePostInput = {
          title: formData.title,
          slug: formData.slug,
          excerpt: formData.excerpt,
          content: formData.content,
          cover_image: formData.cover_image || undefined,
          category: formData.category || undefined,
          tags: tags.length > 0 ? tags : undefined,
          published: formData.published,
        };

        const result = await createPost(createData);
        if (result.success) {
          setSuccessMessage("Post created successfully!");
          setFormData({
            title: "",
            slug: "",
            excerpt: "",
            content: "",
            cover_image: "",
            category: "",
            tags: "",
            published: false,
          });
          setTimeout(() => {
            onSuccess?.();
            router.push("/admin/posts");
          }, 1000);
        } else {
          setErrorMessage(result.error || "Failed to create post");
        }
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setErrorMessage("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoadingPost) {
    return <div className="text-center py-12">Loading post...</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Messages */}
      {successMessage && (
        <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          {successMessage}
        </div>
      )}

      {errorMessage && (
        <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          {errorMessage}
        </div>
      )}

      {/* Title */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Title <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          disabled={isLoading}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 ${
            errors.title ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter post title"
        />
        {errors.title && (
          <p className="text-sm text-red-600 mt-1">{errors.title}</p>
        )}
      </div>

      {/* Slug */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="block text-sm font-semibold text-gray-900">
            Slug <span className="text-red-500">*</span>
          </label>
          <button
            type="button"
            onClick={handleGenerateSlug}
            className="text-sm text-blue-600 hover:text-blue-700"
          >
            Auto-generate from title
          </button>
        </div>
        <input
          type="text"
          name="slug"
          value={formData.slug}
          onChange={handleChange}
          disabled={isLoading}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 ${
            errors.slug ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="url-friendly-slug"
        />
        {errors.slug && (
          <p className="text-sm text-red-600 mt-1">{errors.slug}</p>
        )}
      </div>

      {/* Excerpt */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Excerpt <span className="text-red-500">*</span>
        </label>
        <textarea
          name="excerpt"
          value={formData.excerpt}
          onChange={handleChange}
          disabled={isLoading}
          rows={3}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 resize-none ${
            errors.excerpt ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Short preview of your post"
        />
        {errors.excerpt && (
          <p className="text-sm text-red-600 mt-1">{errors.excerpt}</p>
        )}
      </div>

      {/* Content */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Content <span className="text-red-500">*</span>
        </label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          disabled={isLoading}
          rows={12}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 font-mono text-sm resize-none ${
            errors.content ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Write your post content (markdown supported)"
        />
        <p className="text-sm text-gray-500 mt-1">
          Markdown formatting is supported (# for headings, ## for subheadings,
          - for bullets, etc.)
        </p>
        {errors.content && (
          <p className="text-sm text-red-600 mt-1">{errors.content}</p>
        )}
      </div>

      {/* Cover Image */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Cover Image URL
        </label>
        <input
          type="url"
          name="cover_image"
          value={formData.cover_image}
          onChange={handleChange}
          disabled={isLoading}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
          placeholder="https://example.com/image.jpg"
        />
        <p className="text-sm text-gray-500 mt-1">
          Provide a URL to a cover image (optional)
        </p>
      </div>

      {/* Category */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Category
        </label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          disabled={isLoading}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
        >
          <option value="">Select a category (optional)</option>
          <option value="Web Development">Web Development</option>
          <option value="React">React</option>
          <option value="Next.js">Next.js</option>
          <option value="TypeScript">TypeScript</option>
          <option value="JavaScript">JavaScript</option>
          <option value="CSS">CSS</option>
          <option value="Tools & Tips">Tools & Tips</option>
          <option value="Career">Career</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Tags */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Tags
        </label>
        <input
          type="text"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          disabled={isLoading}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
          placeholder="Comma-separated tags (e.g., react, javascript, tutorial)"
        />
        <p className="text-sm text-gray-500 mt-1">
          Separate multiple tags with commas
        </p>
      </div>

      {/* Published */}
      <div className="flex items-center">
        <input
          type="checkbox"
          name="published"
          id="published"
          checked={formData.published}
          onChange={handleChange}
          disabled={isLoading}
          className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
        />
        <label
          htmlFor="published"
          className="ml-2 block text-sm font-semibold text-gray-900 cursor-pointer"
        >
          Publish this post
        </label>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 pt-6">
        <button
          type="submit"
          disabled={isLoading}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading
            ? postId
              ? "Updating..."
              : "Creating..."
            : postId
              ? "Update Post"
              : "Create Post"}
        </button>
        <button
          type="button"
          onClick={() => router.push("/admin/posts")}
          disabled={isLoading}
          className="px-6 py-3 bg-gray-300 text-gray-900 font-semibold rounded-lg hover:bg-gray-400 disabled:opacity-50 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
