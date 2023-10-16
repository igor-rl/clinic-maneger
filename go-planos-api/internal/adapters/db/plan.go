package db

import (
	"database/sql"
	"time"

	"github.com/igorlage/clinic-manager/plan/internal/app/domain"
)

type PlanDb struct {
	db *sql.DB
}

func NewPlanDb(db *sql.DB) *PlanDb {
	return &PlanDb{db: db}
}

func (p *PlanDb) Save(plan domain.PlanInterface) (domain.PlanInterface, error) {
	var existingID string
	err := p.db.QueryRow("SELECT id FROM plan WHERE id = ?", plan.GetID()).Scan(&existingID)
	if err != nil && err != sql.ErrNoRows {
		return nil, err
	}

	if err == sql.ErrNoRows {
		_, err := p.create(plan)
		if err != nil {
			return nil, err
		}
	} else {
		_, err := p.update(plan)
		if err != nil {
			return nil, err
		}
	}
	return plan, nil
}

func (p *PlanDb) Get(id string) (domain.PlanInterface, error) {
	var plan domain.Plan
	var releaseDataStr, validityDataStr, createdDataStr, updatedDataStr string // Variáveis temporárias para escanear as datas como strings

	stmt, err := p.db.Prepare("SELECT * FROM plan WHERE id=?")
	if err != nil {
		return nil, err
	}
	err = stmt.QueryRow(id).Scan(
		&plan.ID,
		&plan.Title,
		&plan.Description,
		&plan.Notes,
		&plan.Price,
		&releaseDataStr,
		&validityDataStr,
		&createdDataStr,
		&updatedDataStr,
	)
	if err != nil {
		return nil, err
	}

	// Convertendo as strings para time.Time
	plan.ReleaseDate, err = time.Parse(time.RFC3339, releaseDataStr)
	if err != nil {
		return nil, err
	}
	plan.ValidityDate, err = time.Parse(time.RFC3339, validityDataStr)
	if err != nil {
		return nil, err
	}
	plan.Created, err = time.Parse(time.RFC3339, createdDataStr)
	if err != nil {
		return nil, err
	}
	plan.Updated, err = time.Parse(time.RFC3339, updatedDataStr)
	if err != nil {
		return nil, err
	}

	return &plan, nil
}

func (p *PlanDb) create(plan domain.PlanInterface) (domain.PlanInterface, error) {
	stmt, err := p.db.Prepare(`INSERT INTO plan (id, title, description, notes, price, release_data, validity_data, created, updated) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?);`)
	if err != nil {
		return nil, err
	}
	_, err = stmt.Exec(plan.GetID(), plan.GetTitle(), plan.GetDescription(), plan.GetNotes(), plan.GetPrice(), plan.GetReleaseDate(), plan.GetValidityDate(), time.Now(), time.Now())
	if err != nil {
		return nil, err
	}
	err = stmt.Close()
	if err != nil {
		return nil, err
	}
	return plan, nil
}

func (p *PlanDb) update(plan domain.PlanInterface) (domain.PlanInterface, error) {
	_, err := p.db.Exec("UPDATE plan SET title = ?, description = ?, notes = ?, price = ?, release_data = ?, validity_data  = ?, updated = ? WHERE id = ?",
		plan.GetTitle(), plan.GetDescription(), plan.GetNotes(), plan.GetPrice(), plan.GetReleaseDate(), plan.GetValidityDate(), time.Now(), plan.GetID(),
	)
	if err != nil {
		return nil, err
	}
	return plan, nil
}
