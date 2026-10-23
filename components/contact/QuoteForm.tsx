"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, CheckCircle2, Loader2, Mail } from "lucide-react";

import { siteConfig } from "@/lib/site";

const initialForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  projectType: "",
  location: "",
  budget: "",
  message: "",
};

export default function QuoteForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);

    const subject = encodeURIComponent(
      `New Project Enquiry - ${form.projectType || "Construction"}`,
    );

    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Company: ${form.company || "Not provided"}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone || "Not provided"}`,
        `Project Type: ${form.projectType}`,
        `Project Location: ${form.location || "Not provided"}`,
        `Budget: ${form.budget || "Not provided"}`,
        "",
        "Project Requirement:",
        form.message,
      ].join("\n"),
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setLoading(false);
  }

  if (submitted) {
    return (
      <div className="flex min-h-[520px] flex-col items-center justify-center border border-black/10 bg-white p-8 text-center sm:p-12">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#d1b58b]/20 text-[#90754f]">
          <CheckCircle2 size={30} />
        </div>

        <h3 className="mt-7 text-3xl font-black uppercase tracking-[-0.05em] text-[#171714] sm:text-4xl">
          Enquiry Prepared.
        </h3>

        <p className="mt-4 max-w-md text-sm leading-7 text-black/50">
          Your email application should now open with the project details filled
          in. Review the information and send it to Speeddex.
        </p>

        <button
          type="button"
          onClick={() => {
            setForm(initialForm);
            setSubmitted(false);
          }}
          className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#90754f] underline underline-offset-4"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-black/10 bg-white p-6 sm:p-8 lg:p-10"
    >
      <div className="mb-10">
        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#90754f]">
          Project Enquiry
        </p>

        <h2 className="mt-4 text-3xl font-black uppercase leading-[0.9] tracking-[-0.055em] text-[#171714] sm:text-5xl">
          TELL US
          <br />
          WHAT YOU&apos;RE BUILDING.
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-black/45"
          >
            Your Name *
          </label>

          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
            className="w-full border-b border-black/15 bg-transparent px-0 py-4 text-sm text-[#171714] outline-none transition placeholder:text-black/25 focus:border-[#90754f]"
          />
        </div>

        {/* Company */}
        <div>
          <label
            htmlFor="company"
            className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-black/45"
          >
            Company
          </label>

          <input
            id="company"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Company name"
            className="w-full border-b border-black/15 bg-transparent px-0 py-4 text-sm text-[#171714] outline-none transition placeholder:text-black/25 focus:border-[#90754f]"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-black/45"
          >
            Email *
          </label>

          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
            className="w-full border-b border-black/15 bg-transparent px-0 py-4 text-sm text-[#171714] outline-none transition placeholder:text-black/25 focus:border-[#90754f]"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-black/45"
          >
            Phone
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="Your contact number"
            className="w-full border-b border-black/15 bg-transparent px-0 py-4 text-sm text-[#171714] outline-none transition placeholder:text-black/25 focus:border-[#90754f]"
          />
        </div>

        {/* Project Type */}
        <div>
          <label
            htmlFor="projectType"
            className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-black/45"
          >
            Project Type *
          </label>

          <select
            id="projectType"
            name="projectType"
            value={form.projectType}
            onChange={handleChange}
            required
            className="w-full border-b border-black/15 bg-transparent px-0 py-4 text-sm text-[#171714] outline-none transition focus:border-[#90754f]"
          >
            <option value="">Select project type</option>
            <option value="Residential Construction">
              Residential Construction
            </option>
            <option value="Commercial Construction">
              Commercial Construction
            </option>
            <option value="Industrial Construction">
              Industrial Construction
            </option>
            <option value="Turnkey Construction">Turnkey Construction</option>
            <option value="Civil & Structural Work">
              Civil & Structural Work
            </option>
            <option value="Renovation & Finishing">
              Renovation & Finishing
            </option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label
            htmlFor="location"
            className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-black/45"
          >
            Project Location
          </label>

          <input
            id="location"
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="City / Site location"
            className="w-full border-b border-black/15 bg-transparent px-0 py-4 text-sm text-[#171714] outline-none transition placeholder:text-black/25 focus:border-[#90754f]"
          />
        </div>

        {/* Budget */}
        <div className="sm:col-span-2">
          <label
            htmlFor="budget"
            className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-black/45"
          >
            Estimated Budget
          </label>

          <select
            id="budget"
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className="w-full border-b border-black/15 bg-transparent px-0 py-4 text-sm text-[#171714] outline-none transition focus:border-[#90754f]"
          >
            <option value="">Select an approximate range</option>
            <option value="Below ₹25 Lakh">Below ₹25 Lakh</option>
            <option value="₹25 Lakh - ₹50 Lakh">₹25 Lakh - ₹50 Lakh</option>
            <option value="₹50 Lakh - ₹1 Crore">₹50 Lakh - ₹1 Crore</option>
            <option value="₹1 Crore - ₹5 Crore">₹1 Crore - ₹5 Crore</option>
            <option value="Above ₹5 Crore">Above ₹5 Crore</option>
            <option value="To be discussed">To be discussed</option>
          </select>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-black/45"
          >
            Tell Us About Your Project *
          </label>

          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={6}
            placeholder="Tell us about the project, approximate area, requirements, timeline or anything else that may help us understand it."
            className="w-full resize-none border-b border-black/15 bg-transparent px-0 py-4 text-sm leading-7 text-[#171714] outline-none transition placeholder:text-black/25 focus:border-[#90754f]"
          />
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-xs leading-5 text-black/40">
          Your enquiry will open in your email application with the entered
          project information ready to send.
        </p>

        <button
          type="submit"
          disabled={loading}
          className="group inline-flex shrink-0 items-center justify-center gap-4 bg-[#171714] px-7 py-5 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#90754f] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? (
            <>
              Preparing
              <Loader2 size={17} className="animate-spin" />
            </>
          ) : (
            <>
              Send Enquiry
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </>
          )}
        </button>
      </div>

      <div className="mt-8 flex items-center gap-3 border-t border-black/10 pt-6 text-xs text-black/45">
        <Mail size={15} className="text-[#90754f]" />
        <span>{siteConfig.email}</span>
      </div>
    </form>
  );
}
