### Prerequisites
- [DFINITY SDK]  v0.6.26
- [Node.js] v13.12.0
- [npm] v6.14.4

### Start a local internet computer
```
dfx start
```
Execute the following commands in another tab

```
dfx canister create --all
dfx build
dfx canister install -- all

open "http://127.0.0.1:8000/?canisterId=$(your canister id)"
```

Rebuild and reinstall
```
dfx build
dfx canister install --all --mode reinstall
```