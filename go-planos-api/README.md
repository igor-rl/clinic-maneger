# Sqlite
### Novo arquivo de banco de dados
```yml
touch db.sqlite
```

### Iniciar o cli no arquivo do banco de dados
```yml
sqlite3 db.sqlite
```

### Listar tabelas
```yml
.tables 
```

### Criar uma tabela
```yml
CREATE TABLE IF NOT EXISTS tabel_name ("id" TEXT PRIMARY KEY NOT NULL CHECK(length(id) == 36)));
```

### Listar dados de uma tabela
```yml
SELECT * FROM table_name;
```

# CLI
### Criar novo plano
```yml
go run main.go cli [cmd]
```

### CMD help
```yml
--help
```

### CMD create
```yml
-a="New Plan Cli" -t="Title cli" -d="Description cli" -n="Note cli" -p=102.21
```