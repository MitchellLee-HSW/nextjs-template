import { useState } from "react";

// eslint-disable-next-line max-lines-per-function
export function useLoad<ResponseType = string, ErrorType = string | Error>()
  : {
    response: ResponseType | undefined,
    error: ErrorType | undefined,
    isLoading: boolean,
    lastUpdated: Date,
    load: (fn: () => Promise<ResponseType>) => void,
    update: (fn: () => Promise<ResponseType>) => void
  } {
  const [loading, setLoading] = useState<boolean>(true);
  const [response, setResponse] = useState<ResponseType | undefined>(undefined);
  const [error, setError] = useState<ErrorType | undefined>(undefined);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  async function load(fn: () => Promise<ResponseType>) {
    setLoading(true);
    await update(fn);
    setLoading(false);
  }
  
  async function update(fn: () => Promise<ResponseType>) {
    try {
      const payload = await fn();
      // console.log("Update:", payload);
      setResponse(payload);
      setError(undefined);
    } catch (error) {
      setError(error);
      setResponse(undefined);
    }
    setLastUpdated(new Date());
  }
  return { response, error, isLoading: loading, lastUpdated, load, update };
}