# **Cookie Manager**

A tiny browser-based CRUD interface for document.cookie — set, list, and delete cookies from a single page. Built as a hands-on exercise in DOM manipulation and browser storage APIs.

<img width="695" height="362" alt="image" src="https://github.com/user-attachments/assets/53412bd6-ae3c-4db6-917f-46287cd00e2f" />

## **What it does**
- Set — type a key and value, click Set Cookie. Setting an existing key overwrites it, so one button covers both create and update.
- List — the table shows every cookie readable from document.cookie on this page.
- Delete — the ✕ on a row removes that cookie.

## **How it works**

Deletion is really expiration. There is no delete API for cookies. You remove one by re-setting it with an expiry date in the past:

```document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;```

- The value is irrelevant here. A cookie's identity is the triple (name, domain, path) — value is just payload — so the empty string is syntax filler, nothing more.
- Each delete button remembers its own key through a closure. Handlers are created inside the render loop, so each one captures that iteration's key. There are no element IDs, no data- attributes, and no walking from the button back up to its row.
- The table is re-rendered from document.cookie after every change, rather than the row being removed directly. document.cookie is the single source of truth and the DOM is derived from it — editing both in parallel is how a UI drifts out of sync with its data.
