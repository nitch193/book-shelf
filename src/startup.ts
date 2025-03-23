import { createDbWorker, WorkerHttpvfs } from "sql.js-httpvfs";
const workerUrl = new URL(
  "sql.js-httpvfs/dist/sqlite.worker.js",
  import.meta.url
);
const wasmUrl = new URL("sql.js-httpvfs/dist/sql-wasm.wasm", import.meta.url); // globalVariable.js
let globalVarPromise: WorkerHttpvfs | null = null;

export const initializeGlobalVariable = async () => {
  if (!globalVarPromise) {
    globalVarPromise = await createDbWorker(
      [
        {
          from: "inline",
          config: {
            serverMode: "full",
            url: "/book-shelf/example.sqlite3",
            requestChunkSize: 4096,
          },
        },
      ],
      workerUrl.toString(),
      wasmUrl.toString()
    );
  }
  return globalVarPromise;
};

export const useGlobalVariable = () => {
  return globalVarPromise;
};
