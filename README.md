# pkobp-statement
A neat package that reads PKO BP account statements and outputs them as human-readable objects

### Statement retrieval, basic operations
```javascript
import { readStatementAsync } from "pkobp-statement"

// You must specify which file extension is used by this statement, but be aware only XML is supported for now.
const statement = await readStatementAsync("statement.xml", "xml")

// The account number this statement refers to
const accNum = statement.accountNumber
// The date from which the operations were retrieved
const sinceDate = statement.sinceDate
// The date until which the operations were retrieved
const toDate = statement.toDate

// Iterate through all operations and print each one's
for (const op of statement.operations) {
    
    console.log(op)
}
```