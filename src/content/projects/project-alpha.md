---
title: "Project Alpha"
description: "A high-performance backend analytics service built with Rust and PostgreSQL."
tags: ["Rust", "PostgreSQL", "Analytics"]
github: "https://github.com/snowypowers/project-alpha"
order: 1
---

Project Alpha was built to handle massive amounts of incoming telemetry data from various microservices. The architectural requirement was low latency and high throughput. 

By leveraging Rust's ownership model we were able to completely eliminate a whole class of memory issues we previously encountered using C++, while maintaining sub-millisecond processing times.

## Architecture

Data arrives via an HTTP gateway, gets batched, and is asynchronously flushed to PostgreSQL using `sqlx`. The system easily scales horizontally, handling thousands of requests per second per node.
