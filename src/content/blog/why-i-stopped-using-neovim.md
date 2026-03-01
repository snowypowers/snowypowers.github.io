---
title: "Why I stopped using Neovim"
date: 2026-02-15
description: "A short reflection on editor tooling, configuring the universe, and just getting work done."
tags: ["tech", "tooling"]
---

For a long time, my workflow heavily revolved around Neovim. I had the perfect `init.lua`, custom tailored LSP configurations, and keymaps for everything. Fast forward a few years, and I realized I was spending more time maintaining my configuration than writing code.

The transition back to a "batteries-included" editor wasn't immediate, but eventually, the friction of simply opening up a project and having it work outweighed the infinite customizability.

### The tipping point

It happened when I was debugging a complex distributed system issue. I needed to trace calls across multiple microservices. My Neovim setup crashed due to an obscure plugin conflict involving the debugger and the tree-sitter parser. 

I opened VS Code, clicked "Run and Debug," and it just worked.

### Conclusion

There is beauty in simple software, and Neovim is incredible. But my job is to build systems, not text editors. And occasionally, that means choosing unsexy reliability over absolute control.
