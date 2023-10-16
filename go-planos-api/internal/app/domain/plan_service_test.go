package domain_test

import (
	"testing"
	"time"

	"github.com/golang/mock/gomock"
	"github.com/igorlage/clinic-manager/plan/internal/app/domain"
	mock_domain "github.com/igorlage/clinic-manager/plan/internal/app/domain/mocks"
	"github.com/stretchr/testify/require"
)

func TestPlanService_Get(t *testing.T) {
	cntl := gomock.NewController(t)
	defer cntl.Finish()
	plan := mock_domain.NewMockPlanInterface(cntl)
	persistence := mock_domain.NewMockPlanPersistenceInterface(cntl)
	persistence.EXPECT().Get(gomock.Any()).Return(plan, nil).AnyTimes()
	service := domain.PlanService{
		Persistence: persistence,
	}

	result, err := service.Get("abc")
	require.Nil(t, err)
	require.Equal(t, plan, result)

}
func TestPlanService_Create(t *testing.T) {
	cntl := gomock.NewController(t)
	defer cntl.Finish()
	plan := mock_domain.NewMockPlanInterface(cntl)
	persistence := mock_domain.NewMockPlanPersistenceInterface(cntl)
	persistence.EXPECT().Save(gomock.Any()).Return(plan, nil).AnyTimes()
	service := domain.PlanService{
		Persistence: persistence,
	}

	result, err := service.Create("title test", "Descriptin test", "", 89.97, time.Time{}, time.Time{})
	require.Nil(t, err)
	require.Equal(t, plan, result)

}
