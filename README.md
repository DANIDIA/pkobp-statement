<div align="center">

  ![pkobp-statement Logo](/docs/branding/pkobpstatement-light.png#gh-light-mode-only)
  ![pkobp-statement Logo](/docs/branding/pkobpstatement-dark.png#gh-dark-mode-only)

  An unofficial Node.js library for parsing PKO BP bank account statements
  
  <a href="https://www.npmjs.com/package/pkobp-statement/">
    <img src="https://img.shields.io/npm/d18m/pkobp-statement" alt="NPM">
  </a>
  <a href="https://github.com/discord-net/Discord.Net/actions/workflows/dotnet.yml">
    <img src="https://github.com/wiktorczernik/pkobp-statement/actions/workflows/node.js.yml/badge.svg" alt="Test Status">
  </a>
</div>

### Statement retrieval, basic operations
```javascript
import { readStatementAsync } from "pkobp-statement"

// You must specify which file extension is used by this statement, but be aware only XML is supported for now.
const statement = await readStatementAsync("statement.xml", "xml")

// The account number this statement refers to
const accNum = statement.accountNumber
// The date from which the transactions were retrieved
const sinceDate = statement.sinceDate
// The date until which the transactions were retrieved
const toDate = statement.toDate

// Iterate through all transactions and print each one's
for (const trx of statement.transactions) {
    
    console.log(op)
}
```