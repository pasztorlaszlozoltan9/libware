# Végpontok

## book

| Végpont | Metódus | Auth | CRUD | Leírás |
| - | - | - | - | - |
| /books | GET | igen | read | Könyvek lekérése
| /books | POST | igen | create | Könyv létrehozása
| /books/:id | PUT | igen | update | Könyv módosítása
| /books/:id | DELETE | igen | delete | Könyv törlése

### Könyvek lekérdezése

* /api/books/ GET

### Könyv létrehozás

* /api/books/ POST

```JSON
    {
	"isbn": "eee",
	"title": "Olcsó",
	"author": "Trehány Zoltán",
	"totalCopies": 54	
}
```

### Könyv módosítása

* /api/books/4 PUT

```JSON
    {
	"isbn": "eee",
	"title": "Olcsó",
	"author": "Trehány Zoltán",
	"totalCopies": 51	
}
```

### Könyv törlése

* /api/books/4 DELETE


## customer

| Végpont | Metódus | Auth | CRUD | Leírás |
| - | - | - | - | - |
| /customers | GET | igen | read | Vásárlók lekérése
| /customers | POST | igen | create | Vásárló létrehozása
| /customers/:id | PUT | igen | update | Vásárló módosítása
| /customers/:id | DELETE | igen | delete | Vásárló törlése

### Vásárlók lekérdezése

* /api/customers/ GET

### Vásárló létrehozás

* /api/customers/ POST

```JSON
    {
	"idNumber": "479895LO",
	"fullname": "Bolond Mari",
	"email" : "mari.botond@example.com"
}
```

### Vásárló módosítása

* /api/customers/3 PUT

```JSON
    {
	"idNumber": "479895LO",
	"fullname": "Bolond Jani",
	"email" : "mari.botond@example.com"
}
```

### Vásárló törlése

* /api/customers/3 DELETE