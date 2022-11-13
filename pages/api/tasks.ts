import { IncomingMessage, ServerResponse } from "http"
import { unstable_getServerSession } from "next-auth"
import { authOptions } from "./auth/[...nextauth]"

export default async (req: IncomingMessage, res: ServerResponse) => {
	const session = await unstable_getServerSession(
		req as any,
		res,
		authOptions
	)

	res.end(JSON.stringify(session))
}
