# Gyors Telepítés

```cmd
git clone https://github.com/valai/libware
cd libware
npm install
node op conf:generate
node op key:generate
node op migrate
node op db:seed
npm run dev
```