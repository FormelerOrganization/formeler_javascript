# Formeler JavasScript SDK as CommonJS module or ES module

First, please check the documentation (https://formeler.com/lang-id/doc/) page to familiarize yourself with the basics of the API.
## Installation

Install the Formeler module using `npm`:
```bash
npm install formeler
```

## Usage

### `Formeler` Class

The `Formeler` class initializes the connection to the Formeler server. To get started, create a new instance of `Formeler` and pass your API key as the first argument to the constructor. You can obtain a fresh API key from the [website](https://formeler.com/lang-id/overview/) that includes 10M tokens of free credit.
```js
import {Formeler} from "formeler";
const formeler = new Formeler("YOUR-API-KEY");
```

Once initialized, you can use the available `Formeler` methods. Currently, language detection via the LangID module is supported. Below are examples of how to use the LangID methods.

### `detect` Example

```js
try {
    const result = await formeler.langID.detect("Dies ist ein Test");
    console.log(result);
} catch (error) {
    console.log("Something went wrong: ", error);
}
```
If the API call is successful, the `result` variable will contain the following JSON response:
```json
{
  "result": "success",
  "language": "de",
  "tokenCount": "4"
}
```
### `batchDetect`

```js
try {
    const result = await formeler.langID.batchDetect(["This is a test.", "Dies ist ein Test"]);
    console.log(result);
} catch (error) {
    console.log("Something went wrong: ", error);
}
```
If the API call is successful, the `result` variable will contain the following JSON response:
```json
{
  "result": "success",
  "languages": [
    "en",
    "de"
  ],
  "tokenCount": "8"
}
```
### More Example

You can find additional examples in the `examples` directory of this repository.

## Error Handling

Two types of errors may occur when calling SDK methods:

### Network Errors

If a network issue arises, the call will throw an error that you can catch using a try/catch block.

### API Errors

The Formeler API may return an error in the response. You can identify these by checking the `result` field in the returned object.
An error response will follow this structure:
```json
{
  "result": "failed",
  "message": "unauthorized"
}
```
## TypeScript

This package includes TypeScript declarations for the Formeler SDK.
