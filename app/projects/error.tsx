"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div>
      <p>Something went wrong loading projects.</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}