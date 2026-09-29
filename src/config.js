// Configuration loader for Demo Project.
export function loadConfig(env = process.env) {
  return {
    port: Number(env.PORT || 8080),
    retries: Number(env.RETRIES || 3),
    region: env.REGION || "local",
    verbose: env.VERBOSE === "1",
  };
}
