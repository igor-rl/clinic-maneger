package db_test

import (
	"database/sql"
	"log"
	"testing"
	"time"

	"github.com/igorlage/clinic-manager/plan/internal/adapters/db"
	"github.com/igorlage/clinic-manager/plan/internal/app/domain"
	_ "github.com/mattn/go-sqlite3"
	"github.com/stretchr/testify/require"
)

var Db *sql.DB

func setUp() {
	Db, _ = sql.Open("sqlite3", ":memory:") // o banco de dados vai ficar na memória han para efeitos de testes. Após a conclusão ele é deletado
	createTable(Db)
	createPlan(Db)
}

func createTable(db *sql.DB) {
	table := `CREATE TABLE plan (
		"id" TEXT PRIMARY KEY NOT NULL CHECK(length(id) == 36),
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "notes" TEXT,
    "price" REAL,
    "release_data" TEXT,
    "validity_data" TEXT,
    "created" TEXT DEFAULT CURRENT_TIMESTAMP,
    "updated" TEXT
	);`
	stmt, err := db.Prepare(table)
	if err != nil {
		log.Fatal(err.Error())
	}
	_, err = stmt.Exec()
	if err != nil {
		log.Fatal(err)
	}
}

func createPlan(db *sql.DB) {
	insert := `INSERT INTO plan VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?);`

	_, err := db.Exec(
		insert,
		"550e8400-e29b-41d4-a716-446655440000",
		"Plano Teste",
		"Descrição do Plano Teste",
		"Notas do Plano Teste",
		float64(29.99),
		time.Now().Format(time.RFC3339),
		time.Now().Add(30*24*time.Hour).Format(time.RFC3339),
		time.Now().Format(time.RFC3339),
		time.Now().Format(time.RFC3339),
	)
	if err != nil {
		log.Fatal(err)
	}
}

func TestPlanService_Get(t *testing.T) {
	setUp()
	defer Db.Close()
	planDb := db.NewPlanDb(Db)
	plan, err := planDb.Get("550e8400-e29b-41d4-a716-446655440000")
	require.Nil(t, err)
	require.Equal(t, "550e8400-e29b-41d4-a716-446655440000", plan.GetID())
	require.Equal(t, "Plano Teste", plan.GetTitle())
	require.Equal(t, "Descrição do Plano Teste", plan.GetDescription())
	require.Equal(t, "Notas do Plano Teste", plan.GetNotes())
	require.Equal(t, float64(29.99), plan.GetPrice())
}

func TestPlanDb_Save(t *testing.T) {
	setUp()
	defer Db.Close()
	planDb := db.NewPlanDb(Db)
	plan := domain.NewPlan()
	plan.Title = "Plano Teste"
	plan.Description = "Descrição do Plano Teste"
	plan.Notes = "Notas do Plano Teste"
	plan.Price = 29.99
	plan.ReleaseDate = time.Time{}
	plan.ValidityDate = time.Time{}

	planResult, err := planDb.Save(plan)
	require.Nil(t, err)
	require.Equal(t, plan.Title, planResult.GetTitle())
	require.Equal(t, plan.Description, planResult.GetDescription())
	require.Equal(t, plan.Notes, planResult.GetNotes())
	require.Equal(t, plan.Price, planResult.GetPrice())

	plan.ReleaseDate = time.Now()

	planResult, err = planDb.Save(plan)
	require.Nil(t, err)
	require.Equal(t, plan.Title, planResult.GetTitle())
	require.Equal(t, plan.Description, planResult.GetDescription())
	require.Equal(t, plan.Notes, planResult.GetNotes())
	require.Equal(t, plan.Price, planResult.GetPrice())

}
