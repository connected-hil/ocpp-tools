<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <img src="https://raw.githubusercontent.com/connected-hil/ocpp-tools/main/images/logo.webp" width=100 style="border: 1px solid grey"/>

  <h3 align="center">OCPP tools</h3>

  <p align="center">
    OCPP-J v1.6 message and payload types with validation.
    <br />
    <a href="docs/index.html"><strong>Explore the docs »</strong></a>
    <br />
    <br />
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li><a href="#validating-ocpp-json-messages">Validating OCPP JSON messages</a></li>
        <li><a href="#using-ocpp-interfaces">Using OCPP interfaces</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

**OCPP tools** is a collection of Open Charge Point Protocol message schemas, validation functions, utility types and typed interfaces for Typescript. Most of the code is generated using the OCPP payload JSON schema files.

**Note**: Things are changing, and backwards compatibility might be broken until a v1 release.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

Add ocpp-tools to your project using any package manager, or by cloning this repository.

### Installation

```sh
npm install @cshil/ocpp-tools
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

### Typescript interfaces and types and utilities

This project includes

- All OCPP v1.6 payloads have [interfaces](src/generated/v16/types) generated from JSON schema files.
- Types for valid CALL [actions, request and repsonse types as well as error code types](src/generated/v16/types/index.ts).
- Utility classes for RPC requests for [CALL](src/message/ocpp-call.ts), [CALL_RESULT](src/message/ocpp-call-result.ts) and [CALL ERROR](src/message/ocpp-call-error.ts).
- Parsers for [OCPP RPC calls](src/validation/index.ts) and [OCPP message payloads](src/generated/v16/validators.ts).

### Validating OCPP JSON message payloads

```typescript
import { isValidHeartbeatRequestV16, HeartbeatV16 } from "@cshil/ocpp-tools";

const data = JSON.parse("{}"")
const result = isValidHeartbeatRequestV16(data) //  => true

```

### Using OCPP interfaces

```typescript
import { AuthorizeResponseV16 } from "@cshil/ocpp-tools";

const message: AuthorizeResponseV16 = {
  idTagInfo: { status: "Accepted" }
};
```

### Parsing full OCPP RPC messages

```typescript
import { parseOCPPMessage, OCPPCallResult } from "@cshil/ocpp-tools";

const authorizeResponse = parseOCPPMessage(
  "[3, \"abc123\", {\"status\": \"Accepted\""}]",
) as OCPPCallResult
```

### Construct a response to a RPC call

```typescript
import { parseOCPPMessage, AuthorizeResponseV16, OCPPCall} from "@cshil/ocpp-tools";

const request = parseOCPPMessage(
  "[2, \"abc123\", \"Authorize\", {\"idTag\": \"abc-123-abc\""}]",
) as OCPPCall

const callResult = request.toCallResponse<AuthorizeResponseV16>({idTagInfo: { status: "Accepted"}})
console.info(callResult).toRPCObject)
// => [3, "abc123", { "status": "Accepted"}]

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Include OCPP v1.6 schemas
- [ ] Include OCPP v2.0.1 schemas
- [ ] Proper documentation

See the [open issues](https://github.com/connected-hil/ocpp-tools/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[logo]: https://raw.githubusercontent.com/connected-hil/ocpp-tools/main/images/logo.webp
[logo-url]: https://github.com/connected-hil/ocpp-tools/
