---
title: DataProcessor
kind: class
longname: DataProcessor
description: This class extends the {@link BaseEntity} to provide async processing and event-driven updates.
group: Core/Processing
order: 1
---

# DataProcessor

<SourceLink href="/source/dataprocessor-js/#L10" label="DataProcessor.js:10" />

Advanced data processing suite.

This class extends the `BaseEntity` to provide async processing and event-driven updates.

- **Author:** Ankit Kumar \<mailto:ankit\@example.com>
- **Requires:** `module:CoreSchema`
- **Tutorials:** processing-guide

---

## Constructor

**Parameters**

- `id` (string) — The processor ID.
- `options` (Object, optional) — Configuration.
  - `options.timeout` (number, optional, default: 5000) — Timeout in ms.

---

## Instance Methods

<MemberHeading id="process" depth="3" name="process" sig="process(data) -> Promise.<number>" />

<MemberMeta badges="async,deprecated" sourceHref="/source/dataprocessor-js/#L51" sourceLabel="DataProcessor.js:51" />

Processes a data stream asynchronously.

<Callout type="error">
  &#x20;Use the internal `DataProcessor#streamEngine` instead.
</Callout>

**Parameters**

- `data` (Array.\<string>) — Array of strings to process.

**Returns**

- `Promise.<number>` — The total count of processed items.

**Fires**

- `DataProcessor#event:dataProcessed`

**Example**

```js
const proc = new DataProcessor('main');
await proc.process(['a', 'b']);
```

<Embed src="https://www.youtube.com/embed/Q9Ix1najiHI?si=2vA7GvwpHjDslEAS" title="Bihar tourism" height="315" width="560" clickToLoad="true" />

- **Since:** 1.2.0
- **Version:** 2.0.1

<MemberHeading id="idgenerator" depth="3" name="idGenerator" sig="idGenerator()" />

<MemberMeta badges="generator" sourceHref="/source/dataprocessor-js/#L68" sourceLabel="DataProcessor.js:68" />

Generates a sequence of IDs.

**Yields**

- `string` — The next formatted ID in the sequence.

<MemberHeading id="serialize" depth="3" name="serialize" sig="serialize() -> string" />

<MemberMeta sourceHref="/source/dataprocessor-js/#L78" sourceLabel="DataProcessor.js:78" />

**Returns**

- `string`

## Static Methods

<MemberHeading id="isvalidid" depth="3" name="isValidId" sig="isValidId(val) -> boolean" />

<MemberMeta badges="static" sourceHref="/source/dataprocessor-js/#L89" sourceLabel="DataProcessor.js:89" />

Utility to check if a value is a valid ID.

**Parameters**

- `val` (\*) — The value to test.

**Returns**

- `boolean`

* **TODO:**
  - Add regex validation for stricter ID checks.

## Enums

<MemberHeading id="states" depth="3" name="States" sig="States" />

<MemberMeta badges="enum" sourceHref="/source/dataprocessor-js/#L22" sourceLabel="DataProcessor.js:22" />

Current processing state.

**Type**

`number`

## Events

<MemberHeading id="dataprocessed" depth="3" name="dataProcessed" sig="dataProcessed" />

<MemberMeta badges="event" sourceHref="/source/dataprocessor-js/#L60" sourceLabel="DataProcessor.js:60" />

Event fired when data is successfully processed.

**Properties**

- `count` (number) — Total items processed.

**Type**

`object`
