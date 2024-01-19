import { Environment, Network, RecordSource, Store } from "relay-runtime";
import { config } from "dotenv";

config();

const APIKEY = "p2zgjw9gzyydvdb6";
const HTTP_ENDPOINT = "http://localhost:3000/graphql";

const fetchFn = async (request, variables) => {
  console.log(JSON.stringify({
    query: request.text,
    variables,
  }));
  try {
    const resp = await fetch(HTTP_ENDPOINT, {
      method: "POST",
      headers: {
        "FLEXHIRE-API-KEY": APIKEY,
        Accept: "application/graphql-response+json; charset=utf-8, application/json; charset=utf-8",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: request.text,
        variables,
      }),
    });

    if (!resp.ok) {
      throw new Error(`Network request failed with status ${resp.status}`);
    }

    const contentType = resp.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('Expected JSON response but received non-JSON response');
    }

    const json = await resp.json();
    return json;
  } catch (error) {
    console.error('Error in fetchFn:', error);
    throw error; // Propagate the error
  }
};

function createRelayEnvironment() {
  return new Environment({
    network: Network.create(fetchFn),
    store: new Store(new RecordSource()),
  });
}

let relayEnvironment;

export function initRelayEnvironment() {
  const environment = relayEnvironment ?? createRelayEnvironment();

  // For SSG and SSR always create a new Relay environment.
  if (typeof window === "undefined") {
    return environment;
  }

  // Create the Relay environment once in the client
  // and then reuse it.
  if (!relayEnvironment) {
    relayEnvironment = environment;
  }

  return relayEnvironment;
}
