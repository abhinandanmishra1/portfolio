"use client";

import * as React from "react";
import { profile } from "@/data/profile";
import { Mail, Copy, Check, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./icons";

export function ContactSection() {
  const [copied, setCopied] = React.useState(false);
  const [subject, setSubject] = React.useState("");
  const [body, setBody] = React.useState("");
  const emailAddress = "abhinandanmishra360@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject || "Hello from Portfolio"
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-xs uppercase font-mono font-semibold tracking-wider text-primary">
            Get In Touch
          </h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Let&apos;s build something great together.
          </p>
          <p className="text-muted-foreground text-sm sm:text-base">
            Have a question, an exciting engineering opportunity, or want to talk system design? Drop me a message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Direct channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-xl border border-border bg-card/60 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-foreground">Direct Email</h3>
                  <p className="text-xs text-muted-foreground">{emailAddress}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={handleCopy}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-border bg-muted/30 hover:bg-muted text-xs font-medium text-foreground transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500">Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${emailAddress}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Mail</span>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-border bg-card/60 space-y-4">
              <h3 className="font-semibold text-sm text-foreground">Social & Profiles</h3>
              <div className="space-y-2">
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg hover:bg-muted text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="flex items-center gap-2 font-medium">
                    <LinkedinIcon className="w-4 h-4 text-blue-500" />
                    LinkedIn
                  </span>
                  <span className="font-mono text-[11px]">/in/abhinandanmishra1</span>
                </a>
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg hover:bg-muted text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="flex items-center gap-2 font-medium">
                    <GithubIcon className="w-4 h-4" />
                    GitHub
                  </span>
                  <span className="font-mono text-[11px]">@abhinandanmishra1</span>
                </a>
                <a
                  href={profile.links.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg hover:bg-muted text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="flex items-center gap-2 font-medium">
                    <TwitterIcon className="w-4 h-4 text-sky-400" />
                    X / Twitter
                  </span>
                  <span className="font-mono text-[11px]">@abhinandan_0001</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSendEmail}
              className="p-6 sm:p-8 rounded-xl border border-border bg-card/60 space-y-4"
            >
              <h3 className="font-semibold text-base text-foreground">
                Send a Quick Note
              </h3>
              <p className="text-xs text-muted-foreground">
                This will open your preferred email client with the subject and body pre-filled.
              </p>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-foreground">
                  Subject
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Opportunity / Collaboration / Question"
                  className="w-full px-3.5 py-2 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-foreground">
                  Message
                </label>
                <textarea
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  rows={4}
                  placeholder="Hi Abhinandan, I wanted to reach out regarding..."
                  className="w-full px-3.5 py-2 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-y"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                <Send className="w-4 h-4" />
                <span>Compose Email</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
