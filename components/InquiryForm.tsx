"use client";

import { useEffect, useId, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { site, type FormContent, type FormField } from "@/content/site";
import { schoolNames } from "@/lib/people";
import { TodoText } from "@/components/TodoText";

type Errors = Record<string, string>;

function fieldOptions(field: FormField): string[] {
  if (field.type === "school") {
    return [...schoolNames(), ...site.schoolFieldExtras];
  }
  return field.options ?? [];
}

function validate(fields: FormField[], values: Record<string, string>): Errors {
  const errors: Errors = {};
  for (const field of fields) {
    const value = (values[field.name] ?? "").trim();
    if (field.required && !value) {
      errors[field.name] = `${field.label} is required.`;
      continue;
    }
    if (field.type === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      errors[field.name] = "Enter an email address like name@example.com.";
    }
  }
  return errors;
}

export function InquiryForm({ form }: { form: FormContent }) {
  const baseId = useId();
  const statusRef = useRef<HTMLHeadingElement>(null);
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (success) {
      statusRef.current?.focus();
    }
  }, [success]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: Connect this form to Formspree or a similar service.
    // Do not fetch or POST the answers until that endpoint exists.
    const nextErrors = validate(form.fields, values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const first = form.fields.find((field) => nextErrors[field.name]);
      if (first) {
        document.getElementById(`${baseId}-${first.name}`)?.focus();
      }
      setSuccess(false);
      return;
    }
    setSuccess(true);
  }

  if (success) {
    return (
      <div className="rounded-2xl border border-line bg-white p-6 shadow-sm" role="status">
        <h3 ref={statusRef} tabIndex={-1} className="text-xl font-bold text-navy">
          {site.formSuccessTitle}
        </h3>
        <p className="mt-3 text-base leading-7 text-ink">
          <TodoText value={site.formSuccessBody} />
        </p>
        <button
          type="button"
          className="mt-6 inline-flex min-h-11 items-center rounded-xl border border-navy/15 px-5 text-sm font-semibold text-navy"
          onClick={() => setSuccess(false)}
        >
          Edit responses
        </button>
      </div>
    );
  }

  return (
    <form id={form.id} className="rounded-2xl border border-line bg-white p-6 shadow-sm" noValidate onSubmit={onSubmit}>
      <h3 className="text-xl font-bold text-navy">{form.title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{form.intro}</p>
      <p className="mt-4 text-sm leading-6">
        <TodoText value={site.formPendingNotice} />
      </p>
      <div className="mt-6 space-y-5">
        {form.fields.map((field) => {
          const inputId = `${baseId}-${field.name}`;
          const errorId = `${inputId}-error`;
          const error = errors[field.name];
          const shared = {
            id: inputId,
            name: field.name,
            required: field.required,
            autoComplete: field.autoComplete,
            "aria-invalid": error ? true : undefined,
            "aria-describedby": error ? errorId : undefined,
            value: values[field.name] ?? "",
            onChange: (
              event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
            ) => {
              const next = event.target.value;
              setValues((current) => ({ ...current, [field.name]: next }));
            },
            className:
              "mt-1 w-full rounded-xl border border-line bg-white px-3 py-2.5 text-base text-ink shadow-sm",
          };

          return (
            <div key={field.name}>
              <label htmlFor={inputId} className="text-sm font-semibold text-navy">
                {field.label}
                {field.required ? <span className="text-teal-dark"> *</span> : null}
              </label>
              {field.type === "textarea" ? (
                <textarea {...shared} rows={4} />
              ) : field.type === "select" || field.type === "school" ? (
                <select {...shared}>
                  <option value="">Select</option>
                  {fieldOptions(field).map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input {...shared} type={field.type} />
              )}
              {error ? (
                <p id={errorId} className="mt-1 text-sm font-medium text-red-800">
                  {error}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>
      <p className="mt-4 text-xs text-muted">* Required</p>
      <button
        type="submit"
        className="mt-4 inline-flex min-h-11 items-center justify-center rounded-xl bg-navy px-5 text-sm font-semibold text-white hover:bg-navy-800"
      >
        {form.submitLabel}
      </button>
    </form>
  );
}
