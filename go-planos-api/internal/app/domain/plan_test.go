package domain_test

import (
	"fmt"
	"testing"
	"time"

	"github.com/igorlage/clinic-manager/plan/internal/app/domain"
	uuid "github.com/satori/go.uuid"
	"github.com/stretchr/testify/require"
)

func TestPlanos_IsValid(t *testing.T) {
	plan := domain.Plan{}

	// teste uuid não é uuid
	id := "asdasd"
	plan.ID = id
	plan.Title = "Titulo"
	plan.Description = "Description"
	plan.Price = 0
	_, err := plan.IsValid()
	require.Error(t, err)
	require.Equal(t, fmt.Sprintf("ID: %s does not validate as uuidv4", plan.ID), err.Error())

	// teste sem título
	plan.ID = uuid.NewV4().String()
	plan.Title = ""
	_, err = plan.IsValid()
	require.Error(t, err)
	require.Equal(t, "Title: non zero value required", err.Error())

	// teste sem description
	plan.ID = uuid.NewV4().String()
	plan.Title = "Helow"
	plan.Description = ""
	_, err = plan.IsValid()
	require.Error(t, err)
	require.Equal(t, "Description: non zero value required", err.Error())

	// teste preço negativo
	plan.ID = uuid.NewV4().String()
	plan.Description = "Description"
	plan.Price = -0.0002
	_, err = plan.IsValid()
	require.Error(t, err)
	require.Equal(t, "price must be greater than or equal to zero", err.Error())

	// teste de data de lançamento sem data de validade
	plan.Price = 0.0002
	plan.ReleaseDate = time.Now()
	_, err = plan.IsValid()
	require.NoError(t, err)

	// teste de data de validade sem data de lançamento
	plan.ReleaseDate = time.Time{}
	plan.ValidityDate = time.Now()
	_, err = plan.IsValid()
	require.NoError(t, err)

	// teste de data de validade maior que data de lançamento
	plan.ReleaseDate = time.Now()
	plan.ValidityDate = time.Now()
	_, err = plan.IsValid()
	require.NoError(t, err)

	// teste de data de validade menor que data de lançamento
	plan.ValidityDate = time.Now()
	plan.ReleaseDate = time.Now()
	_, err = plan.IsValid()
	require.Error(t, err)
	require.Equal(t, "the validity_data must be greater than relise_data", err.Error())

	// teste de data de validade igual que data de lançamento
	date := time.Now()
	plan.ValidityDate = date
	plan.ReleaseDate = date
	_, err = plan.IsValid()
	require.Error(t, err)
	require.Equal(t, "the validity_data must be greater than relise_data", err.Error())

	// teste de data de validade igual e data de lançamento igal a zero
	plan.ValidityDate = time.Time{}
	plan.ReleaseDate = time.Time{}
	_, err = plan.IsValid()
	require.NoError(t, err)

}
