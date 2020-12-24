`frourio`検証リポジトリ
===

# 使用方法

## Git Clone

```sh
$ cd /path/to
$ git clone git@github.com:sparobo-tohishi/frourio_test.git
```

## コンテナビルド・起動

```sh
$ cd /path/to/frourio_test
$ docker-compose build app
$ docker-compose up -d app
```

## パッケージインストール

```sh
$ docker-compose exec app sh

app$ cd /opt/app/my_frourio_test
app$ npm install

app$ cd server
app$ npm install
```

## ビルド

```sh
app$ cd /opt/app/my_frourio_test
app$ npm build
```

## アプリケーション起動

```sh
app$ npm start
```

## ブラウザで確認

```sh
$ open http://localhost:13000
```

# 開発時

```sh
$ docker-compose exec app sh

app$ cd /opt/app/my_frourio_test
app$ npm dev # 関連ファイルがwatch状態になるので、自動的にビルドされる
```

# サーバーのホスト・ポートを変更

## Next.js

* `my_frourio_test/package.json`内の記述を変更

```json
{
  ...
  "script": {
    ...
    "dev:client": "next dev -H 0.0.0.0 -p 13000",
    ...
    "start:client": "next start -H 0.0.0.0 -p 13000",
    ...
  }
}
```

## APIサーバー

* `docker-compose.yml`内の記述を変更

```yaml
...
    ports:
      - 13000:13000
      - 13001:13001
    environment:
      SERVER_HOST: '0.0.0.0'
      SERVER_PORT: 13001
      NEXT_LISTEN_PORT: 13000
...
```

* `my_frourio_test/server/.env`内の記述を変更

```
SERVER_PORT=13001
...
API_ORIGIN=http://localhost:13001
```