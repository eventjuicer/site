import session from "../../server/session";
import acceptLanguageParser from "accept-language-parser"

const defaultLocale = "en"


export const getLocale = (req, res) => {

    const {lang} = req.query

    session(req, res)

    const {locale} = req.session //remembered locale...

    const browserLocale = "accept-language" in req.headers ? acceptLanguageParser.pick(["en", "de", "pl"], req.headers["accept-language"], {loose : true}) : ""

    const resolvedLocale = locale || lang || browserLocale || defaultLocale;

    return resolvedLocale
}


export default async (req, res) => {

    res.status(200).json({locale : getLocale(req, res) })
}


