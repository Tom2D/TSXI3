## Initial setup

```bash
# Install dependencies
$ pnpm install

# Generate prisma types
$ prisma generate

# Build
$ pnpm build

# Deploy prisma types to client
$ pnpm prisma:generate
```
## Update prisma types
```bash
$ pnpm prisma:generate
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```