import fs from "node:fs/promises"
import parseStatementXml from "./parseStatementXml.js";

/**
 * Reads a statement file and parses its data into an account statement object.
 * 
 * @param {string} path
 * @param {string} fileType
 */
export default async function readStatementAsync(path, fileType) {
    const data = await fs.readFile(path, "utf-8")

    if (fileType == "xml")
        return parseStatementXml(data)
    else
        throw new Error("Unsupported file type!")
}