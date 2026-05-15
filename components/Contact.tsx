"use client";
import { useState } from "react";
import { Mail, MapPin, CheckCircle } from "lucide-react";
import { CONTACT } from "@/data/properties";

type FormState = "idle" | "sending" | "success" | "error";
type FieldErrors = { name?: string; email?: string; message?: string };

function validate(form: { name: string; email: string; message: string }): FieldErrors {
  const errors: FieldErrors = {};
  if (!form.name.trim() || form.name.trim().length < 2)
    errors.name = "Por favor ingresa tu nombre.";
  if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = "Ingresa un correo electrónico válido.";
  if (!form.message.trim() || form.message.trim().length < 10)
    errors.message = "El mensaje debe tener al menos 10 caracteres.";
  return errors;
}

const EMPTY = { name: "", email: "", phone: "", message: "" };

export default function Contact() {
  const [form, setForm]       = useState(EMPTY);
  const [errors, setErrors]   = useState<FieldErrors>({});
  const [state, setState]     = useState<FormState>("idle");
  const [honeypot, setHoneypot] = useState(""); // spam trap

  const whatsappUrl = (phone: string) =>
    `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`;

  const field = (k: keyof typeof EMPTY) => ({
    value: form[k],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [k]: e.target.value }));
      if (errors[k as keyof FieldErrors]) setErrors((err) => ({ ...err, [k]: undefined }));
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // bot trap
    const errs = validate(form);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setState("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: CONTACT.web3formsKey,          // set NEXT_PUBLIC_WEB3FORMS_KEY in Vercel
          subject: `Nuevo contacto — ${form.name} · Senda Allende`,
          from_name: "Senda Allende Residences",
          name: form.name,
          email: form.email,
          phone: form.phone || "No proporcionado",
          message: form.message,
          botcheck: honeypot,
        }),
      });
      const data = await res.json();
      if (data.success) { setState("success"); setForm(EMPTY); setErrors({}); }
      else setState("error");
    } catch { setState("error"); }
  };

  const inputClass = (err?: string) =>
    `w-full px-4 py-3 rounded-xl border font-sans text-sm text-brown placeholder-stone-300 focus:outline-none focus:ring-2 transition-all ${
      err
        ? "border-red-300 focus:border-red-400 focus:ring-red-100 bg-red-50/30"
        : "border-stone-200 focus:border-terracotta/50 focus:ring-terracotta/10"
    }`;

  return (
    <section id="contact" className="py-24 md:py-32 bg-cream-dark">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-terracotta mb-4">Contacto</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-brown leading-tight mb-4">
            Hablemos sobre <em className="text-terracotta">tu residencia</em>
          </h2>
          <p className="font-sans text-brown/60 text-sm leading-relaxed">
            Estamos para resolver tus dudas, agendar una visita o enviar información detallada.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Left — contact info */}
          <div className="md:col-span-2 flex flex-col gap-5">
            {CONTACT.agents.map((agent) => (
              <a
                key={agent.whatsapp}
                href={whatsappUrl(agent.whatsapp)} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#25D366] text-white rounded-2xl p-5 hover:bg-[#1ebe5d] transition-colors shadow-lg shadow-[#25D366]/20"
              >
                <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 32 32" fill="currentColor">
                  <path d="M16 0C7.164 0 0 7.163 0 16a15.93 15.93 0 002.286 8.267L0 32l7.995-2.103A15.953 15.953 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm8.26 22.637c-.344.965-2.003 1.847-2.737 1.96-.699.106-1.575.15-2.54-.16a22.99 22.99 0 01-2.298-.85c-4.04-1.744-6.676-5.8-6.876-6.066-.2-.267-1.63-2.166-1.63-4.13 0-1.965 1.03-2.93 1.396-3.33.365-.4.795-.5 1.06-.5h.766c.246 0 .58-.093.908.692.344.817 1.163 2.828 1.264 3.032.1.2.168.435.033.7-.133.267-.2.433-.4.666-.2.234-.42.522-.6.7-.2.2-.408.418-.175.817.233.4 1.033 1.7 2.216 2.75 1.52 1.353 2.803 1.773 3.203 1.97.4.2.632.167.866-.1.234-.267 1-1.166 1.267-1.566.267-.4.533-.333.9-.2.366.133 2.33 1.1 2.73 1.3.4.2.666.3.766.466.1.167.1.966-.244 1.932z" />
                </svg>
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase mb-0.5 opacity-80">WhatsApp</p>
                  <p className="font-sans font-semibold text-sm">{agent.name}</p>
                  <p className="font-sans text-xs opacity-70 mt-0.5">{agent.whatsapp}</p>
                </div>
              </a>
            ))}

            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-4 bg-white text-brown rounded-2xl p-5 hover:bg-stone-50 transition-colors border border-stone-100 shadow-sm"
            >
              <Mail className="w-5 h-5 flex-shrink-0 text-terracotta" />
              <div>
                <p className="font-sans text-xs tracking-widest uppercase text-brown/40 mb-0.5">Correo Electrónico</p>
                <p className="font-sans text-sm text-brown">{CONTACT.email}</p>
              </div>
            </a>

            <div className="flex items-start gap-4 bg-white text-brown rounded-2xl p-5 border border-stone-100 shadow-sm">
              <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-terracotta" />
              <div>
                <p className="font-sans text-xs tracking-widest uppercase text-brown/40 mb-1">Ubicación</p>
                <p className="font-sans text-sm text-brown leading-relaxed">San Miguel de Allende,<br />Guanajuato, México</p>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} noValidate className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100">

              {/* Honeypot — hidden from humans, traps bots */}
              <input
                type="text" name="_gotcha" tabIndex={-1} aria-hidden="true"
                value={honeypot} onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
              />

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block font-sans text-xs tracking-widest uppercase text-brown/50 mb-2">Nombre *</label>
                  <input type="text" placeholder="Tu nombre" {...field("name")} className={inputClass(errors.name)} />
                  {errors.name && <p className="mt-1 font-sans text-[11px] text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <label className="block font-sans text-xs tracking-widest uppercase text-brown/50 mb-2">Teléfono</label>
                  <input type="tel" placeholder="+52 415 000 0000" {...field("phone")} className={inputClass()} />
                </div>
              </div>

              <div className="mb-4">
                <label className="block font-sans text-xs tracking-widest uppercase text-brown/50 mb-2">Correo Electrónico *</label>
                <input type="email" placeholder="correo@ejemplo.com" {...field("email")} className={inputClass(errors.email)} />
                {errors.email && <p className="mt-1 font-sans text-[11px] text-red-500">{errors.email}</p>}
              </div>

              <div className="mb-6">
                <label className="block font-sans text-xs tracking-widest uppercase text-brown/50 mb-2">Mensaje *</label>
                <textarea
                  rows={4} placeholder="¿Qué modelo te interesa? ¿Tienes alguna pregunta?"
                  value={form.message}
                  onChange={(e) => { setForm((f) => ({ ...f, message: e.target.value })); if (errors.message) setErrors((err) => ({ ...err, message: undefined })); }}
                  className={`${inputClass(errors.message)} resize-none`}
                />
                {errors.message && <p className="mt-1 font-sans text-[11px] text-red-500">{errors.message}</p>}
              </div>

              {state === "success" ? (
                <div className="w-full py-5 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-emerald-500" />
                  <p className="font-sans text-sm text-emerald-700 font-medium">Mensaje enviado con éxito.</p>
                  <p className="font-sans text-xs text-emerald-600">Nos pondremos en contacto contigo pronto.</p>
                </div>
              ) : (
                <button
                  type="submit" disabled={state === "sending"}
                  className="w-full py-4 rounded-full bg-terracotta text-white font-sans text-xs tracking-widest uppercase hover:bg-terracotta-dark transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {state === "sending" && (
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z" />
                    </svg>
                  )}
                  {state === "sending" ? "Enviando..." : "Enviar Mensaje"}
                </button>
              )}

              {state === "error" && (
                <p className="mt-3 text-center font-sans text-xs text-red-500">
                  Ocurrió un error al enviar. Por favor escríbenos por{" "}
                  <a href={whatsappUrl(CONTACT.agents[0].whatsapp)} target="_blank" rel="noopener noreferrer" className="underline hover:text-red-600">WhatsApp</a>.
                </p>
              )}

              <p className="mt-4 text-center font-sans text-[10px] text-brown/30">* Campos obligatorios</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
