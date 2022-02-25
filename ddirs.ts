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
const libDdirs = `./target/release/libddirs.${libSuffix}`;

export function audio_dir(): string | undefined {
  const dylib = Deno.dlopen(libDdirs, {
    "audio_dir": { parameters: [], result: "pointer" },
  });
  const maybeResult = dylib.symbols.audio_dir();
  if (maybeResult.valueOf() !== 0n) {
    const result = new Deno.UnsafePointerView(maybeResult);
    return result.getCString();
  } else {
    return undefined;
  }
}

export function cache_dir(): string | undefined {
  const dylib = Deno.dlopen(libDdirs, {
    "cache_dir": { parameters: [], result: "pointer" },
  });
  const maybeResult = dylib.symbols.cache_dir();
  if (maybeResult.valueOf() !== 0n) {
    const result = new Deno.UnsafePointerView(maybeResult);
    return result.getCString();
  } else {
    return undefined;
  }
}

export function config_dir(): string | undefined {
  const dylib = Deno.dlopen(libDdirs, {
    "config_dir": { parameters: [], result: "pointer" },
  });
  const maybeResult = dylib.symbols.config_dir();
  if (maybeResult.valueOf() !== 0n) {
    const result = new Deno.UnsafePointerView(maybeResult);
    return result.getCString();
  } else {
    return undefined;
  }
}

export function data_dir(): string | undefined {
  const dylib = Deno.dlopen(libDdirs, {
    "data_dir": { parameters: [], result: "pointer" },
  });
  const maybeResult = dylib.symbols.data_dir();
  if (maybeResult.valueOf() !== 0n) {
    const result = new Deno.UnsafePointerView(maybeResult);
    return result.getCString();
  } else {
    return undefined;
  }
}

export function data_local_dir(): string | undefined {
  const dylib = Deno.dlopen(libDdirs, {
    "data_local_dir": { parameters: [], result: "pointer" },
  });
  const maybeResult = dylib.symbols.data_local_dir();
  if (maybeResult.valueOf() !== 0n) {
    const result = new Deno.UnsafePointerView(maybeResult);
    return result.getCString();
  } else {
    return undefined;
  }
}

export function desktop_dir(): string | undefined {
  const dylib = Deno.dlopen(libDdirs, {
    "desktop_dir": { parameters: [], result: "pointer" },
  });
  const maybeResult = dylib.symbols.desktop_dir();
  if (maybeResult.valueOf() !== 0n) {
    const result = new Deno.UnsafePointerView(maybeResult);
    return result.getCString();
  } else {
    return undefined;
  }
}

export function document_dir(): string | undefined {
  const dylib = Deno.dlopen(libDdirs, {
    "document_dir": { parameters: [], result: "pointer" },
  });
  const maybeResult = dylib.symbols.document_dir();
  if (maybeResult.valueOf() !== 0n) {
    const result = new Deno.UnsafePointerView(maybeResult);
    return result.getCString();
  } else {
    return undefined;
  }
}

export function download_dir(): string | undefined {
  const dylib = Deno.dlopen(libDdirs, {
    "download_dir": { parameters: [], result: "pointer" },
  });
  const maybeResult = dylib.symbols.download_dir();
  if (maybeResult.valueOf() !== 0n) {
    const result = new Deno.UnsafePointerView(maybeResult);
    return result.getCString();
  } else {
    return undefined;
  }
}

export function executable_dir(): string | undefined {
  const dylib = Deno.dlopen(libDdirs, {
    "executable_dir": { parameters: [], result: "pointer" },
  });
  const maybeResult = dylib.symbols.executable_dir();
  if (maybeResult.valueOf() !== 0n) {
    const result = new Deno.UnsafePointerView(maybeResult);
    return result.getCString();
  } else {
    return undefined;
  }
}

export function font_dir(): string | undefined {
  const dylib = Deno.dlopen(libDdirs, {
    "font_dir": { parameters: [], result: "pointer" },
  });
  const maybeResult = dylib.symbols.font_dir();
  if (maybeResult.valueOf() !== 0n) {
    const result = new Deno.UnsafePointerView(maybeResult);
    return result.getCString();
  } else {
    return undefined;
  }
}

export function home_dir(): string | undefined {
  const dylib = Deno.dlopen(libDdirs, {
    "home_dir": { parameters: [], result: "pointer" },
  });
  const maybeResult = dylib.symbols.home_dir();
  if (maybeResult.valueOf() !== 0n) {
    const result = new Deno.UnsafePointerView(maybeResult);
    return result.getCString();
  } else {
    return undefined;
  }
}

export function picture_dir(): string | undefined {
  const dylib = Deno.dlopen(libDdirs, {
    "picture_dir": { parameters: [], result: "pointer" },
  });
  const maybeResult = dylib.symbols.picture_dir();
  if (maybeResult.valueOf() !== 0n) {
    const result = new Deno.UnsafePointerView(maybeResult);
    return result.getCString();
  } else {
    return undefined;
  }
}

export function preference_dir(): string | undefined {
  const dylib = Deno.dlopen(libDdirs, {
    "preference_dir": { parameters: [], result: "pointer" },
  });
  const maybeResult = dylib.symbols.preference_dir();
  if (maybeResult.valueOf() !== 0n) {
    const result = new Deno.UnsafePointerView(maybeResult);
    return result.getCString();
  } else {
    return undefined;
  }
}

export function public_dir(): string | undefined {
  const dylib = Deno.dlopen(libDdirs, {
    "public_dir": { parameters: [], result: "pointer" },
  });
  const maybeResult = dylib.symbols.public_dir();
  if (maybeResult.valueOf() !== 0n) {
    const result = new Deno.UnsafePointerView(maybeResult);
    return result.getCString();
  } else {
    return undefined;
  }
}

export function runtime_dir(): string | undefined {
  const dylib = Deno.dlopen(libDdirs, {
    "runtime_dir": { parameters: [], result: "pointer" },
  });
  const maybeResult = dylib.symbols.runtime_dir();
  if (maybeResult.valueOf() !== 0n) {
    const result = new Deno.UnsafePointerView(maybeResult);
    return result.getCString();
  } else {
    return undefined;
  }
}

export function state_dir(): string | undefined {
  const dylib = Deno.dlopen(libDdirs, {
    "state_dir": { parameters: [], result: "pointer" },
  });
  const maybeResult = dylib.symbols.state_dir();
  if (maybeResult.valueOf() !== 0n) {
    const result = new Deno.UnsafePointerView(maybeResult);
    return result.getCString();
  } else {
    return undefined;
  }
}

export function template_dir(): string | undefined {
  const dylib = Deno.dlopen(libDdirs, {
    "template_dir": { parameters: [], result: "pointer" },
  });
  const maybeResult = dylib.symbols.template_dir();
  if (maybeResult.valueOf() !== 0n) {
    const result = new Deno.UnsafePointerView(maybeResult);
    return result.getCString();
  } else {
    return undefined;
  }
}

export function video_dir(): string | undefined {
  const dylib = Deno.dlopen(libDdirs, {
    "video_dir": { parameters: [], result: "pointer" },
  });
  const maybeResult = dylib.symbols.video_dir();
  if (maybeResult.valueOf() !== 0n) {
    const result = new Deno.UnsafePointerView(maybeResult);
    return result.getCString();
  } else {
    return undefined;
  }
}
