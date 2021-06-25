web: node build/server.js
release: node ace swagger:generate && cp -a docs/ build/docs
release: node build/ace migration:run --force && node build/ace db:seed
