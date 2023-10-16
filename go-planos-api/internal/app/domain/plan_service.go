package domain

import (
	"fmt"
	"time"
)

type PlanService struct {
	Persistence PlanPersistenceInterface
}

func NewPlanService(persistence PlanPersistenceInterface) *PlanService {
	return &PlanService{Persistence: persistence}
}

func (s *PlanService) Get(id string) (PlanInterface, error) {
	plan, err := s.Persistence.Get(id)
	if err != nil {
		return nil, err
	}
	return plan, nil
}

func (s *PlanService) Create(Title, Description, Notes string, Price float64, releaseDate, ValidityDate time.Time) (PlanInterface, error) {
	plan := NewPlan()
	plan.Title = Title
	plan.Description = Description
	plan.Notes = Notes
	plan.Price = Price
	plan.ReleaseDate = releaseDate
	plan.ValidityDate = ValidityDate
	fmt.Println("Criar novo registro na tabela 'plan': ", plan)
	_, err := plan.IsValid()
	if err != nil {
		return &Plan{}, err
	}
	result, err := s.Persistence.Save(plan)
	if err != nil {
		return &Plan{}, err
	}
	fmt.Print("Registrado com sucesso!\n")
	return result, nil
}
