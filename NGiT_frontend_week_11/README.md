# Explain why we use an ID for each task object instead of just using the text string.

When storing tasks, using a unique **ID** as the primary identifier instead of the text string is important for several reasons:

**1. Uniqueness and collision avoidance**
Two tasks can have identical text (e.g., "Buy milk" added twice). A text string can't distinguish between them, but an ID can — each is a separate task with its own lifecycle.

**2. Efficient updates and deletions**
When you want to toggle, edit, or delete a task, you need a stable, guaranteed-unique handle to target the exact item. Searching by text is fragile — it could match the wrong duplicate, or break if the text is edited.

**3. Text is mutable, IDs are not**
Users should be able to rename/edit a task's text without the task "becoming" a different object. The ID stays constant, so editing the label doesn't break references to that task anywhere else in the system.

**4. React (and UI frameworks) need stable keys**
When rendering lists, React uses a `key` prop to track which DOM elements correspond to which data. Using text as a key causes bugs when text changes or duplicates exist. A stable ID makes reconciliation correct and efficient.

**5. Integration with backends and databases**
When syncing with a server or database, every record needs a unique identifier. Building that habit locally (even in a simple todo app) mirrors how real systems work — the DB row's primary key is always an ID, not the content.

**text describes a task, an ID *identifies* it.** They serve different purposes, and conflating them creates bugs that are hard to debug as your app grows.