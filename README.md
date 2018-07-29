# solidity-recompiler

Project to convert compiled Solidity bytecode back into pseudo-Solidity or llvm assembly

Planned implementation features:

* Search for common compiler patterns and replace opcodes with compound statements (e.g. cast to address, keccak256)
* Use stack state evaluation to determine if JUMP corresponds to function call, function return statement or loop
* Identify public and internal functions and scope appropriately
* Convert JUMPI blocks into for loops, while loops and if statements where appropriate
* Remove redundant code generated by compiler (e.g. junk between REVERT and JUMPDEST opcodes)
* Identify temporaries, function parameters, local variables and storage variables for a given scope block and label appropriately