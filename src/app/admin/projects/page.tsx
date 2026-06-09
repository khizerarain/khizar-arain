"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "../../../../lib/supabase";

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<any>({ title: "", slug: "" });

  async function fetchProjects() {
    setLoading(true);
    const { data } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });
    setProjects(data || []);
    setLoading(false);
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  async function createProject(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const payload = { ...form };
    const { error } = await supabase.from("projects").insert([payload]);
    if (error) alert(error.message);
    else {
      setForm({ title: "", slug: "" });
      fetchProjects();
    }
    setLoading(false);
  }

  async function deleteProject(id: string) {
    if (!confirm("Delete project?")) return;
    setLoading(true);
    const { error } = await supabase.from("projects").delete().eq("id", id);
    if (error) alert(error.message);
    else fetchProjects();
    setLoading(false);
  }

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Admin — Projects</h1>
      <form onSubmit={createProject} className="mb-6">
        <input
          className="border p-2 mr-2"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <input
          className="border p-2 mr-2"
          placeholder="slug"
          value={form.slug}
          onChange={(e) => setForm({ ...form, slug: e.target.value })}
        />
        <button
          className="px-3 py-2 bg-blue-600 text-white rounded"
          disabled={loading}
        >
          Create
        </button>
      </form>

      {loading ? <div>Loading...</div> : null}

      <div className="space-y-3">
        {projects.map((p) => (
          <div
            key={p.id}
            className="p-3 border rounded flex justify-between items-center"
          >
            <div>
              <div className="font-semibold">{p.title}</div>
              <div className="text-sm text-gray-600">{p.slug}</div>
            </div>
            <div className="flex gap-2">
              <button className="px-2 py-1 bg-yellow-200 rounded">Edit</button>
              <button
                onClick={() => deleteProject(p.id)}
                className="px-2 py-1 bg-red-200 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
