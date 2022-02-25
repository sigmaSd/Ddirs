// Determine library extension based on
// your OS.
let libSuffix = "";
switch (Deno.build.os) {
  case "windows":
    libSuffix = "dll";
    break;
  case "darwin":
    libSuffix = "dylib";
    break;
  case "linux":
    libSuffix = "so";
    break;
}

const libName = `./target/debug/libddirs.${libSuffix}`;
// Open library and define exported symbols
const dylib = Deno.dlopen(libName, {
  "data_dir": { parameters: [], result: "pointer" },
});

// Call the symbol `add`
const result = new Deno.UnsafePointerView(dylib.symbols.data_dir());

console.log(
  `Result from external addition of 35 and 34: ${result.getCString()}`,
);
export function dataDir() {}
