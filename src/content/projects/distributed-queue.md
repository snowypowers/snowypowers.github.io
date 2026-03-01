---
title: "Distributed Queue"
description: "An experimental reliable message queue implemented with Raft consensus."
tags: ["Distributed Systems", "Raft", "Go"]
github: "https://github.com/snowypowers/distributed-queue"
order: 3
---

![Distributed Queue Architecture](/distributed_queue.png)

I wanted to learn how [consensus algorithms](https://raft.github.io/) work under the hood, so I built a simple distributed message queue that uses the Raft algorithm for leader election and log replication.

### What I learned

Implementing Raft from scratch is hard. Handling network partitions and leader changes correctly requires meticulous attention to detail.

While this isn't intended for production use, it served as a fantastic deep dive into the world of distributed systems. It now supports persistence and basic message acknowledgement.
