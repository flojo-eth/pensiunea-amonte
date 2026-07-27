"use client";

import { useEffect, useRef, type ReactNode } from "react";

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

type Props = {
  /** Announced as the dialog's name. Describe what is being shown. */
  label: string;
  onClose: () => void;
  children: ReactNode;
};

/**
 * Accessible modal shell shared by the photo lightboxes.
 *
 * The overlays used to be plain divs: no dialog role, no focus management. A
 * keyboard user who opened one could Tab straight out into the page behind it
 * — still scrolled to the top, with the overlay covering everything — and a
 * screen reader never announced that anything had opened.
 *
 * This provides the four things a modal owes its users:
 *   1. dialog semantics (role + aria-modal + a name)
 *   2. focus moved into the dialog on open
 *   3. focus trapped inside while it is open
 *   4. focus returned to whatever opened it on close
 *
 * Escape and the body scroll lock live here too, so callers only handle their
 * own concerns (e.g. arrow-key navigation between photos).
 */
export default function Lightbox({ label, onClose, children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  // Kept in a ref so the effect below can run once on mount: callers pass inline
  // arrows, and a changing dependency would re-run the effect on every render,
  // stealing focus back to the top of the dialog mid-interaction.
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  });

  useEffect(() => {
    const dialog = ref.current;
    const opener = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const visibleTargets = () =>
      Array.from(dialog?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? []).filter(
        (el) => el.offsetParent !== null,
      );

    (visibleTargets()[0] ?? dialog)?.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onCloseRef.current();
        return;
      }
      if (e.key !== "Tab") return;

      const targets = visibleTargets();
      if (targets.length === 0) {
        e.preventDefault();
        return;
      }
      const first = targets[0];
      const last = targets[targets.length - 1];
      const active = document.activeElement;
      const inside = dialog?.contains(active) ?? false;

      if (e.shiftKey && (active === first || !inside)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && (active === last || !inside)) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      opener?.focus?.();
    };
  }, []);

  return (
    <div
      ref={ref}
      role="dialog"
      aria-modal="true"
      aria-label={label}
      tabIndex={-1}
      onClick={onClose}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 p-4 outline-none"
    >
      {children}
    </div>
  );
}
