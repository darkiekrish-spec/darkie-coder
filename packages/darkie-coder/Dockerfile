FROM alpine AS base

# Disable the runtime transpiler cache by default inside Docker containers.
# On ephemeral containers, the cache is not useful
ARG BUN_RUNTIME_TRANSPILER_CACHE_PATH=0
ENV BUN_RUNTIME_TRANSPILER_CACHE_PATH=${BUN_RUNTIME_TRANSPILER_CACHE_PATH}
RUN apk add libgcc libstdc++ ripgrep

FROM base AS build-amd64
COPY dist/darkie-coder-linux-x64-baseline-musl/bin/darkie-coder /usr/local/bin/darkie-coder

FROM base AS build-arm64
COPY dist/darkie-coder-linux-arm64-musl/bin/darkie-coder /usr/local/bin/darkie-coder

ARG TARGETARCH
FROM build-${TARGETARCH}
RUN darkie-coder --version
ENTRYPOINT ["darkie-coder"]
