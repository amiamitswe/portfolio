import { useState } from "react";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import {
  ArrowUpRightIcon,
  CheckIcon,
  CloudArrowDownIcon,
  DocumentDuplicateIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { email } from "../data/profile";

function ContactSection({ onContactClick, onCvClick }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      toast.success("Email copied");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Couldn't copy, please copy it manually");
    }
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-300 scroll-mt-24 px-5 pt-16 sm:px-8 lg:pt-35 xl:px-0"
    >
      <div className="section-reveal flex flex-col gap-8 rounded-[22px] border border-line bg-surface px-6 py-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:rounded-[28px] lg:p-20">
        <div className="flex max-w-160 flex-col gap-4 lg:gap-4.5">
          <span className="eyebrow text-accent-ink">07 · Contact</span>
          <h2 className="font-display text-[32px] font-bold leading-[1.1] tracking-[-0.02em] text-fg sm:text-[44px] lg:text-[56px] lg:leading-[1.05]">
            Tell me about your project
          </h2>
          <p className="text-base leading-relaxed text-fg-muted lg:text-[17px]">
            Senior frontend engineer building responsive interfaces, dashboards, and
            product experiences with React, Next.js, and Tailwind CSS. Share a
            few details and I will get back to you with a clear next step.
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <a
              href={`mailto:${email}`}
              className="inline-flex min-h-11 items-center gap-2.5 font-mono text-[15px] text-fg underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-accent sm:text-base"
            >
              <EnvelopeIcon className="h-4.5 w-4.5 text-accent-ink" aria-hidden="true" />
              {email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              aria-label="Copy email address"
              className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-line-strong px-3 text-[13px] text-fg-muted transition-colors hover:bg-surface-2 hover:text-fg"
            >
              {copied ? (
                <CheckIcon className="h-4 w-4 text-accent-ink" aria-hidden="true" />
              ) : (
                <DocumentDuplicateIcon className="h-4 w-4" aria-hidden="true" />
              )}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        </div>

        <div className="flex w-full flex-col gap-3.5 lg:w-85 lg:shrink-0">
          <button
            type="button"
            onClick={onContactClick}
            className="inline-flex h-14 items-center justify-between gap-3 rounded-[14px] bg-accent px-6 text-base font-semibold text-accent-fg transition hover:brightness-95"
          >
            Start a Conversation
            <ArrowUpRightIcon className="h-4.5 w-4.5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={onCvClick}
            className="inline-flex h-13 items-center justify-center gap-2.5 rounded-[14px] border border-line-strong px-6 text-[15px] font-medium text-fg transition-colors hover:bg-surface-2"
          >
            <CloudArrowDownIcon className="h-4 w-4" aria-hidden="true" />
            View CV
          </button>
        </div>
      </div>
    </section>
  );
}

ContactSection.propTypes = {
  onContactClick: PropTypes.func.isRequired,
  onCvClick: PropTypes.func.isRequired,
};

export default ContactSection;
