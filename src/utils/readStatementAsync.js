import fs from "node:fs/promises"
import parseStatementXml from "./parseStatementXml.js";

/**
 * @param {string} path
 * @param {string} fileType
 */
export default async function readStatementAsync(path, fileType)
{
    const data = await fs.readFile(path, "utf-8")
    
    if (fileType == "xml")
        return parseStatementXml(data)
    else
        throw new Error("Unsupported file type!")
}