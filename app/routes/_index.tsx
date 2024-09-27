import type {
	LoaderFunction,
	LoaderFunctionArgs,
	MetaFunction,
} from "partymix";
import WhosHere from "../components/whos-here";
import { Link } from "@remix-run/react";

declare const PARTYKIT_HOST: string;

export const meta: MetaFunction = () => {
	return [
		{ title: "Minimal Retro" },
		{ name: "description", content: "This will help guide you on a retro" },
	];
};

export const loader: LoaderFunction = async function ({
	context,
}: LoaderFunctionArgs) {
	// You can use context.lobby to read vars, communicate with parties,
	// read from ai models or the vector db, and more.
	//
	// See https://docs.partykit.io/reference/partyserver-api/#partyfetchlobby
	// for more info.
	return Response.json({ partykitHost: PARTYKIT_HOST });
};

export default function Index() {
	return (
		<div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
			<h1>Boards</h1>
			<ul>
				<li>
					<Link to={`/boards/1`}>board 1</Link>
				</li>
				<li>
					<Link to={`/boards/2`}>board 2</Link>
				</li>
			</ul>

			<WhosHere />
		</div>
	);
}
