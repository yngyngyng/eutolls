FROM oven/bun:alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json bun.lockb ./
RUN if [ -f bun.lockb ]; then \
  bun install --frozen-lockfile; \
else \
  echo "Lockfile not found." && exit 1; \
fi

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG INSTANCE
ARG GOOGLE_ANALYTICS
ENV NODE_ENV ${INSTANCE}
ENV NEXT_PUBLIC_GOOGLE_ANALYTICS ${GOOGLE_ANALYTICS}
ENV NEXT_TELEMETRY_DISABLED 1

RUN if [ -f bun.lockb ]; then \
  bun run build; \
else \
  echo "Lockfile not found." && exit 1; \
fi

FROM base AS runner
WORKDIR /app

ARG INSTANCE
ENV NODE_ENV ${INSTANCE}
ENV NEXT_TELEMETRY_DISABLED 1

# Alpine specific commands for adding users and groups
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001 -G nodejs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

# server.js is created by next build from the standalone output
CMD ["bun", "server.js"]