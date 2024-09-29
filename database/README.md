# Database 


## Prisma Usage

いつでも見れそうだけとメモ

```bash
npx prisma

    ◭  Prisma is a modern DB toolkit to query, migrate and model your database (https://prisma.io)

    Usage

      $ prisma [command]

    Commands

                init   Set up Prisma for your app
            generate   Generate artifacts (e.g. Prisma Client)
                  db   Manage your database schema and lifecycle
             migrate   Migrate your database
              studio   Browse your data with Prisma Studio
            validate   Validate your Prisma schema
              format   Format your Prisma schema
             version   Displays Prisma version info
               debug   Displays Prisma debug info

    Examples

      Set up a new Prisma project
      $ prisma init

      Generate artifacts (e.g. Prisma Client)
      $ prisma generate

      Browse your data
      $ prisma studio

      Create migrations from your Prisma schema, apply them to the database, generate artifacts (e.g. Prisma Client)
      $ prisma migrate dev

      Pull the schema from an existing database, updating the Prisma schema
      $ prisma db pull

      Push the Prisma schema state to the database
      $ prisma db push

      Validate your Prisma schema
      $ prisma validate

      Format your Prisma schema
      $ prisma format

      Display Prisma version info
      $ prisma version

      Display Prisma debug info
      $ prisma debug

```



# Prisma Migration

schema.prismaを変更したらmigrationを実行する。
devは開発環境でのmigrationを実行する。DDLを生成してくれる。

```bash
# 初回のマイグレーション（データベースの基礎を築きます）
npx prisma migrate dev --name init

# 2回目以降のマイグレーション（データベースの進化を続けます）
npx prisma migrate dev

# マイグレーションの状態確認（私たちの旅の記録をチェック）
npx prisma migrate status

```