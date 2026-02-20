"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface Contact2Props {
    title?: string;
    description?: string;
    phone?: string;
    email?: string;
    web?: { label: string; url: string };
}

export const Contact2 = ({
    title = "Contact Us",
    description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
    phone = "09070077701",
    email = "matcha.ai789@gmail.com",
    web = { label: "shadcnblocks.com", url: "https://shadcnblocks.com" },
}: Contact2Props) => {
    const [state, setState] = useState<{ submitting: boolean; succeeded: boolean; errors: any }>({
        submitting: false,
        succeeded: false,
        errors: null,
    });

    console.log("Contact form loaded v1.1");

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        try {
            setState(prev => ({ ...prev, submitting: true }));
            const response = await fetch("https://formspree.io/f/xaqddonn", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setState({ submitting: false, succeeded: true, errors: null });
            } else {
                const data = await response.json();
                setState({ submitting: false, succeeded: false, errors: data.errors });
            }
        } catch (error) {
            setState({ submitting: false, succeeded: false, errors: error });
        }
    };

    if (state.succeeded) {
        return (
            <section className="py-32 bg-background">
                <div className="container px-4 md:px-6 text-center">
                    <div className="max-w-md mx-auto p-10 rounded-lg border border-border bg-card shadow-sm">
                        <h2 className="text-3xl font-bold mb-4 text-foreground">お問い合わせありがとうございます！</h2>
                        <p className="text-muted-foreground mb-8">メッセージを受け付けました。確認後、ご連絡いたします。</p>
                        <Button onClick={() => window.location.reload()}>戻る</Button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-32 bg-background">
            <div className="container px-4 md:px-6">
                <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
                    <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
                        <div className="text-center lg:text-left">
                            <h1 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl text-foreground">
                                {title}
                            </h1>
                            <p className="text-muted-foreground">{description}</p>
                        </div>
                        <div className="mx-auto w-fit lg:mx-0">
                            <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left text-foreground">
                                Contact Details
                            </h3>
                            <ul className="ml-4 list-disc space-y-2 text-foreground">
                                <li>
                                    <span className="font-bold">Phone: </span>
                                    {phone}
                                </li>
                                <li>
                                    <span className="font-bold">Email: </span>
                                    <a href={`mailto:${email}`} className="underline text-primary hover:text-primary/80">
                                        {email}
                                    </a>
                                </li>
                                {/* 
                <li>
                  <span className="font-bold">Web: </span>
                  <a href={web.url} target="_blank" className="underline text-primary hover:text-primary/80">
                    {web.label}
                  </a>
                </li>
                */}
                            </ul>
                        </div>
                    </div>
                    <div className="mx-auto flex max-w-screen-md flex-col gap-6 rounded-lg border border-border bg-card p-10 shadow-sm w-full">
                        <form onSubmit={onSubmit} className="flex flex-col gap-6">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="grid w-full items-center gap-1.5">
                                    <Label htmlFor="firstname">First Name</Label>
                                    <Input type="text" name="firstname" id="firstname" placeholder="First Name" required />
                                </div>
                                <div className="grid w-full items-center gap-1.5">
                                    <Label htmlFor="lastname">Last Name</Label>
                                    <Input type="text" name="lastname" id="lastname" placeholder="Last Name" required />
                                </div>
                            </div>
                            <div className="grid w-full items-center gap-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input type="email" name="email" id="email" placeholder="Email" required />
                            </div>
                            <div className="grid w-full items-center gap-1.5">
                                <Label htmlFor="subject">Subject</Label>
                                <Input type="text" name="subject" id="subject" placeholder="Subject" required />
                            </div>
                            <div className="grid w-full gap-1.5">
                                <Label htmlFor="message">Message</Label>
                                <Textarea placeholder="Type your message here." name="message" id="message" required />
                            </div>
                            <Button className="w-full" type="submit" disabled={state.submitting}>
                                {state.submitting ? "Sending..." : "Send Message"}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
