import { useLoaderData } from "@remix-run/react";

type Board = {
	id: number;
	message: string;
};

export const loader = async (): Promise<Board> => {
	const board: Board = {
		id: 1,
		message: "hello the world",
	};
	return Promise.resolve(board);
};

export default function Board() {
	const board = useLoaderData<Board>();

	return (
		<div>
			<h1>board: {board.id}</h1>
			<ul>
				<li key={board.id}>{board.message}</li>
			</ul>
			hello
		</div>
	);
}
