"use client";

import { useQuery } from "@tanstack/react-query";
import { helloQueryOptions } from "../lib/api";
import styles from "./page.module.css";

export default function Home() {
  const hello = useQuery(helloQueryOptions);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Hello world</h1>
        <div aria-live="polite">
          {hello.isPending && <p>Loading…</p>}
          {hello.isError && (
            <p role="alert">
              Could not load the greeting: {hello.error.message}
            </p>
          )}
          {hello.data && <p>{hello.data.message}</p>}
        </div>
        <button
          className={styles.secondary}
          onClick={() => void hello.refetch()}
          disabled={hello.isFetching}
        >
          {hello.isFetching ? "Loading…" : "Refresh greeting"}
        </button>
      </main>
    </div>
  );
}
