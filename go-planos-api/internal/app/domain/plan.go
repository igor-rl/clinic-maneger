package domain

/* Regras de negócio

Um Plano só pode ser criado se o id for um uuid válido, tiver um título, descrição
Um plano é válido quando a RealiseData(data de lançamento) < data atual > que ValidityDate. ValidityDate pode ser vazio
Se ValidityDate for incluido, ele tem que ser maior que releaseDate
*/

import (
	"errors"
	"time"

	"github.com/asaskevich/govalidator"
	uuid "github.com/satori/go.uuid"
)

var (
	ErrInvalidPrice = errors.New("price must be greater than or equal to zero")
	ErrInvalidDate  = errors.New("the validity_data must be greater than relise_data")
)

func init() {
	govalidator.SetFieldsRequiredByDefault(true)
}

type PlanInterface interface {
	IsValid() (bool, error)
	GetID() string
	GetTitle() string
	GetDescription() string
	GetNotes() string
	GetPrice() float64
	GetReleaseDate() time.Time
	GetValidityDate() time.Time
	GetCreated() time.Time
	GetUpdated() time.Time
}

type PlanServiceInterface interface {
	Get(id string) (PlanInterface, error)
	Create(Title, Description, Notes string, Price float64, releaseDate, ValidityDate time.Time) (PlanInterface, error)
}

type PlanReader interface {
	Get(id string) (PlanInterface, error)
}

type PlanWriter interface {
	Save(plan PlanInterface) (PlanInterface, error)
}

type PlanPersistenceInterface interface {
	PlanReader
	PlanWriter
}

type Plan struct {
	ID           string    `valid:"uuidv4"`
	Title        string    `valid:"required"`
	Description  string    `valid:"required"`
	Notes        string    `valid:"optional"`
	Price        float64   `valid:"optional"`
	ReleaseDate  time.Time `valid:"optional"`
	ValidityDate time.Time `valid:"optional"`
	Created      time.Time `valid:"optional"`
	Updated      time.Time `valid:"optional"`
}

func NewPlan() *Plan {
	p := Plan{
		ID:      uuid.NewV4().String(),
		Created: time.Now(),
		Updated: time.Now(),
	}
	return &p
}

func (p *Plan) IsValid() (bool, error) {
	if p.Price < 0 {
		return false, ErrInvalidPrice
	}
	if !p.ValidityDate.IsZero() {
		if p.ReleaseDate.After(p.ValidityDate) || p.ReleaseDate.Equal(p.ValidityDate) {
			return false, ErrInvalidDate
		}
	}
	_, err := govalidator.ValidateStruct(p)
	if err != nil {
		return false, err
	}
	return true, nil
}

func (p *Plan) GetID() string {
	return p.ID
}

func (p *Plan) GetTitle() string {
	return p.Title
}

func (p *Plan) GetDescription() string {
	return p.Description
}

func (p *Plan) GetNotes() string {
	return p.Notes
}

func (p *Plan) GetPrice() float64 {
	return p.Price
}

func (p *Plan) GetReleaseDate() time.Time {
	return p.ReleaseDate
}

func (p *Plan) GetValidityDate() time.Time {
	return p.ValidityDate
}

func (p *Plan) GetCreated() time.Time {
	return p.Created
}

func (p *Plan) GetUpdated() time.Time {
	return p.Updated
}
