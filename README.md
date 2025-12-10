# pkobp-statement
A neat package that reads PKO BP account statements and outputs them as human-readable objects

### Read and get statement object
```javascript
import { readStatementAsync } from "pkobp-statement"

const statement = await readStatementAsync("statement.xml", "xml")
```