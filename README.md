# myx

Send a nicepass string to the browser via WebSocket. The user who types it in the fastest per round wins like a million bitcoins; or based on the least richest player who has been logged in for the longest session time (or something). There's some algo I read about the other day that makes incentivization more exciting than the typical "rich get richer" Darwinistic hubris.

Hypermodern, hyperminimalistic, stupid sick P2P gamez, yo.

## Prepare and Install

    $ git clone https://github.com/nerdfiles/myx
    $ cd myx
    $ npm i
    $ npm run server

Now go to [http://localhost:3000](http://localhost:3000) and use your trackpad/mouse to triple click, select all the `<input>` field, then secondary click, copy the passphrase.

## TODO

1. A good chance for DualAPI?
2. Make it microservice-y?
3. Need some awful UI patterns and textures with noisome distractions to undermine the players. Make them hate the game.
