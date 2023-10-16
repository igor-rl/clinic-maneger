package cli

import (
	"fmt"
	"time"

	"github.com/igorlage/clinic-manager/plan/internal/app/domain"
)

func RunPlan(
	service domain.PlanServiceInterface,
	action, id, title, description, notes string,
	price float64,
	releaseDate, validityDate time.Time) (string, error) {

	var result = ""
	switch action {
	case "create":
		res, err := service.Create(title, description, notes, price, releaseDate, validityDate)
		if err != nil {
			return result, err
		}
		result = fmt.Sprintf("Plan has been created: {id: %s, title: %s, description: %s, notes: %s, price: %f, releaseDate: %s, validityDate: %s, created: %s, updated: %s}",
			res.GetID(), res.GetTitle(), res.GetDescription(), res.GetNotes(), res.GetPrice(), res.GetReleaseDate(), res.GetValidityDate(), res.GetCreated(), res.GetUpdated())
	default:
		res, err := service.Get(id)
		if err != nil {
			return result, err
		}
		result = fmt.Sprintf("Plan has been found: {id: %s, title: %s, description: %s, notes: %s, price: %f, releaseDate: %s, validityDate: %s, created: %s, updated: %s}",
			res.GetID(), res.GetTitle(), res.GetDescription(), res.GetNotes(), res.GetPrice(), res.GetReleaseDate(), res.GetValidityDate(), res.GetCreated(), res.GetUpdated())

	}
	return result, nil
}
