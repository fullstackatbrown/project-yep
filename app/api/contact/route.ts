import FormData from "form-data";
import Mailgun from "mailgun.js";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
	first?: string;
	last?: string;
	email?: string;
	message?: string;
};

function getRequiredEnv(name: string): string {
	const value = process.env[name];
	if (!value) {
		throw new Error(`Missing required environment variable: ${name}`);
	}
	return value;
}

async function sendSimpleMessage(payload: Required<ContactPayload>) {
	const mailgun = new Mailgun(FormData);
	const mg = mailgun.client({
		username: "api",
		key: getRequiredEnv("API_KEY"),
		// When using an EU domain, set MAILGUN_URL to https://api.eu.mailgun.net
		...(process.env.MAILGUN_URL ? { url: process.env.MAILGUN_URL } : {}),
	});

	const domain =
		process.env.MAILGUN_DOMAIN ??
		"sandboxa3435f8727b3405b9925fb8b19c23621.mailgun.org";
	const from =
		process.env.MAILGUN_FROM ??
		"Mailgun Sandbox <postmaster@sandboxa3435f8727b3405b9925fb8b19c23621.mailgun.org>";
	const to = process.env.MAILGUN_TO ?? "WW <wangw3943@gmail.com>";

	return mg.messages.create(domain, {
		from,
		to: [to],
		subject: `Hello ${payload.first}`,
		text: [
			`Name: ${payload.first} ${payload.last}`,
			`Email: ${payload.email}`,
			"",
			payload.message,
		].join("\n"),
		"h:Reply-To": payload.email,
	});
}

export async function POST(request: Request) {
	try {
		const body = (await request.json()) as ContactPayload;

		const first = body.first?.trim();
		const last = body.last?.trim();
		const email = body.email?.trim();
		const message = body.message?.trim();

		if (!first || !last || !email || !message) {
			return NextResponse.json({ message: "All fields are required." }, { status: 400 });
		}

		await sendSimpleMessage({ first, last, email, message });

		return NextResponse.json({ message: "Message sent successfully." });
	} catch (error) {
		const details = error instanceof Error ? error.message : "Unknown error";
		return NextResponse.json({ message: `Mailgun send failed: ${details}` }, { status: 500 });
	}
}
