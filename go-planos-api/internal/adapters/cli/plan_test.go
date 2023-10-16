package cli_test

import (
	"testing"
	"time"

	"github.com/golang/mock/gomock"
	"github.com/igorlage/clinic-manager/plan/internal/adapters/cli"
	mock_domain "github.com/igorlage/clinic-manager/plan/internal/app/domain/mocks"
	"github.com/stretchr/testify/require"
)

func TestRun(t *testing.T) {
	ctrl := gomock.NewController(t)
	defer ctrl.Finish()

	title := "Titulo teste"
	description := "Description Teste"
	notes := "Notes teste"
	price := 199.90
	releaseDate := time.Time{}
	validityDate := time.Time{}
	id := "abc"
	createdTime := time.Time{}
	updatedTime := time.Time{}

	planMock := mock_domain.NewMockPlanInterface(ctrl)
	planMock.EXPECT().GetID().Return(id).AnyTimes()
	planMock.EXPECT().GetTitle().Return(title).AnyTimes()
	planMock.EXPECT().GetDescription().Return(description).AnyTimes()
	planMock.EXPECT().GetNotes().Return(notes).AnyTimes()
	planMock.EXPECT().GetPrice().Return(price).AnyTimes()
	planMock.EXPECT().GetReleaseDate().Return(releaseDate).AnyTimes()
	planMock.EXPECT().GetValidityDate().Return(validityDate).AnyTimes()
	planMock.EXPECT().GetCreated().Return(createdTime).AnyTimes()
	planMock.EXPECT().GetUpdated().Return(updatedTime).AnyTimes()

	service := mock_domain.NewMockPlanServiceInterface(ctrl)
	service.EXPECT().Create(title, description, notes, price, releaseDate, validityDate).Return(planMock, nil).AnyTimes()
	service.EXPECT().Get(id).Return(planMock, nil).AnyTimes()

	// create
	declarationExpected := "Plan has been created"

	result, err := cli.RunPlan(service, "create", id, title, description, notes, price, releaseDate, validityDate)
	require.Nil(t, err)
	require.Contains(t, result, declarationExpected)

	declarationExpected = "Plan has been found"
	result, err = cli.RunPlan(service, "", id, title, description, notes, price, releaseDate, validityDate)
	require.Nil(t, err)
	require.Contains(t, result, declarationExpected)
}
