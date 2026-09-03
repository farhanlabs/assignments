# 1. Base image
FROM node:22-alpine AS builder
WORKDIR /app

# 2. Install dependencies
COPY package*.json ./
RUN npm ci

# 3. MongoDB URI for build
ARG MONGODB_URI
ENV MONGODB_URI=$MONGODB_URI

# 4. Build the Next.js app
COPY . .
RUN npm run build


# 5. Production run image
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT=3000
CMD ["node", "server.js"]