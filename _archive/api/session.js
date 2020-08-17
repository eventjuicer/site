import session from "../../server/session";

export default async (req, res) => {

    session(req, res)

    if (req.method === 'POST') {
        req.session = {...req.session, ...( req.body || {} )}
    }

    res.status(200).json(req.session);

}


