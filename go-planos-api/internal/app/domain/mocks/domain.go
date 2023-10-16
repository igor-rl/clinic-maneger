// Code generated by MockGen. DO NOT EDIT.
// Source: internal/app/domain/plan.go

// Package mock_domain is a generated GoMock package.
package mock_domain

import (
	reflect "reflect"
	time "time"

	gomock "github.com/golang/mock/gomock"
	domain "github.com/igorlage/clinic-manager/plan/internal/app/domain"
)

// MockPlanInterface is a mock of PlanInterface interface.
type MockPlanInterface struct {
	ctrl     *gomock.Controller
	recorder *MockPlanInterfaceMockRecorder
}

// MockPlanInterfaceMockRecorder is the mock recorder for MockPlanInterface.
type MockPlanInterfaceMockRecorder struct {
	mock *MockPlanInterface
}

// NewMockPlanInterface creates a new mock instance.
func NewMockPlanInterface(ctrl *gomock.Controller) *MockPlanInterface {
	mock := &MockPlanInterface{ctrl: ctrl}
	mock.recorder = &MockPlanInterfaceMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockPlanInterface) EXPECT() *MockPlanInterfaceMockRecorder {
	return m.recorder
}

// GetCreated mocks base method.
func (m *MockPlanInterface) GetCreated() time.Time {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetCreated")
	ret0, _ := ret[0].(time.Time)
	return ret0
}

// GetCreated indicates an expected call of GetCreated.
func (mr *MockPlanInterfaceMockRecorder) GetCreated() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetCreated", reflect.TypeOf((*MockPlanInterface)(nil).GetCreated))
}

// GetDescription mocks base method.
func (m *MockPlanInterface) GetDescription() string {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetDescription")
	ret0, _ := ret[0].(string)
	return ret0
}

// GetDescription indicates an expected call of GetDescription.
func (mr *MockPlanInterfaceMockRecorder) GetDescription() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetDescription", reflect.TypeOf((*MockPlanInterface)(nil).GetDescription))
}

// GetID mocks base method.
func (m *MockPlanInterface) GetID() string {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetID")
	ret0, _ := ret[0].(string)
	return ret0
}

// GetID indicates an expected call of GetID.
func (mr *MockPlanInterfaceMockRecorder) GetID() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetID", reflect.TypeOf((*MockPlanInterface)(nil).GetID))
}

// GetNotes mocks base method.
func (m *MockPlanInterface) GetNotes() string {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetNotes")
	ret0, _ := ret[0].(string)
	return ret0
}

// GetNotes indicates an expected call of GetNotes.
func (mr *MockPlanInterfaceMockRecorder) GetNotes() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetNotes", reflect.TypeOf((*MockPlanInterface)(nil).GetNotes))
}

// GetPrice mocks base method.
func (m *MockPlanInterface) GetPrice() float64 {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetPrice")
	ret0, _ := ret[0].(float64)
	return ret0
}

// GetPrice indicates an expected call of GetPrice.
func (mr *MockPlanInterfaceMockRecorder) GetPrice() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetPrice", reflect.TypeOf((*MockPlanInterface)(nil).GetPrice))
}

// GetReleaseDate mocks base method.
func (m *MockPlanInterface) GetReleaseDate() time.Time {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetReleaseDate")
	ret0, _ := ret[0].(time.Time)
	return ret0
}

// GetReleaseDate indicates an expected call of GetReleaseDate.
func (mr *MockPlanInterfaceMockRecorder) GetReleaseDate() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetReleaseDate", reflect.TypeOf((*MockPlanInterface)(nil).GetReleaseDate))
}

// GetTitle mocks base method.
func (m *MockPlanInterface) GetTitle() string {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetTitle")
	ret0, _ := ret[0].(string)
	return ret0
}

// GetTitle indicates an expected call of GetTitle.
func (mr *MockPlanInterfaceMockRecorder) GetTitle() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetTitle", reflect.TypeOf((*MockPlanInterface)(nil).GetTitle))
}

// GetUpdated mocks base method.
func (m *MockPlanInterface) GetUpdated() time.Time {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetUpdated")
	ret0, _ := ret[0].(time.Time)
	return ret0
}

// GetUpdated indicates an expected call of GetUpdated.
func (mr *MockPlanInterfaceMockRecorder) GetUpdated() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetUpdated", reflect.TypeOf((*MockPlanInterface)(nil).GetUpdated))
}

// GetValidityDate mocks base method.
func (m *MockPlanInterface) GetValidityDate() time.Time {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetValidityDate")
	ret0, _ := ret[0].(time.Time)
	return ret0
}

// GetValidityDate indicates an expected call of GetValidityDate.
func (mr *MockPlanInterfaceMockRecorder) GetValidityDate() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetValidityDate", reflect.TypeOf((*MockPlanInterface)(nil).GetValidityDate))
}

// IsValid mocks base method.
func (m *MockPlanInterface) IsValid() (bool, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "IsValid")
	ret0, _ := ret[0].(bool)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// IsValid indicates an expected call of IsValid.
func (mr *MockPlanInterfaceMockRecorder) IsValid() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "IsValid", reflect.TypeOf((*MockPlanInterface)(nil).IsValid))
}

// MockPlanServiceInterface is a mock of PlanServiceInterface interface.
type MockPlanServiceInterface struct {
	ctrl     *gomock.Controller
	recorder *MockPlanServiceInterfaceMockRecorder
}

// MockPlanServiceInterfaceMockRecorder is the mock recorder for MockPlanServiceInterface.
type MockPlanServiceInterfaceMockRecorder struct {
	mock *MockPlanServiceInterface
}

// NewMockPlanServiceInterface creates a new mock instance.
func NewMockPlanServiceInterface(ctrl *gomock.Controller) *MockPlanServiceInterface {
	mock := &MockPlanServiceInterface{ctrl: ctrl}
	mock.recorder = &MockPlanServiceInterfaceMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockPlanServiceInterface) EXPECT() *MockPlanServiceInterfaceMockRecorder {
	return m.recorder
}

// Create mocks base method.
func (m *MockPlanServiceInterface) Create(Title, Description, Notes string, Price float64, releaseDate, ValidityDate time.Time) (domain.PlanInterface, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Create", Title, Description, Notes, Price, releaseDate, ValidityDate)
	ret0, _ := ret[0].(domain.PlanInterface)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// Create indicates an expected call of Create.
func (mr *MockPlanServiceInterfaceMockRecorder) Create(Title, Description, Notes, Price, releaseDate, ValidityDate interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Create", reflect.TypeOf((*MockPlanServiceInterface)(nil).Create), Title, Description, Notes, Price, releaseDate, ValidityDate)
}

// Get mocks base method.
func (m *MockPlanServiceInterface) Get(id string) (domain.PlanInterface, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Get", id)
	ret0, _ := ret[0].(domain.PlanInterface)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// Get indicates an expected call of Get.
func (mr *MockPlanServiceInterfaceMockRecorder) Get(id interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Get", reflect.TypeOf((*MockPlanServiceInterface)(nil).Get), id)
}

// MockPlanReader is a mock of PlanReader interface.
type MockPlanReader struct {
	ctrl     *gomock.Controller
	recorder *MockPlanReaderMockRecorder
}

// MockPlanReaderMockRecorder is the mock recorder for MockPlanReader.
type MockPlanReaderMockRecorder struct {
	mock *MockPlanReader
}

// NewMockPlanReader creates a new mock instance.
func NewMockPlanReader(ctrl *gomock.Controller) *MockPlanReader {
	mock := &MockPlanReader{ctrl: ctrl}
	mock.recorder = &MockPlanReaderMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockPlanReader) EXPECT() *MockPlanReaderMockRecorder {
	return m.recorder
}

// Get mocks base method.
func (m *MockPlanReader) Get(id string) (domain.PlanInterface, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Get", id)
	ret0, _ := ret[0].(domain.PlanInterface)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// Get indicates an expected call of Get.
func (mr *MockPlanReaderMockRecorder) Get(id interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Get", reflect.TypeOf((*MockPlanReader)(nil).Get), id)
}

// MockPlanWriter is a mock of PlanWriter interface.
type MockPlanWriter struct {
	ctrl     *gomock.Controller
	recorder *MockPlanWriterMockRecorder
}

// MockPlanWriterMockRecorder is the mock recorder for MockPlanWriter.
type MockPlanWriterMockRecorder struct {
	mock *MockPlanWriter
}

// NewMockPlanWriter creates a new mock instance.
func NewMockPlanWriter(ctrl *gomock.Controller) *MockPlanWriter {
	mock := &MockPlanWriter{ctrl: ctrl}
	mock.recorder = &MockPlanWriterMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockPlanWriter) EXPECT() *MockPlanWriterMockRecorder {
	return m.recorder
}

// Save mocks base method.
func (m *MockPlanWriter) Save(plan domain.PlanInterface) (domain.PlanInterface, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Save", plan)
	ret0, _ := ret[0].(domain.PlanInterface)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// Save indicates an expected call of Save.
func (mr *MockPlanWriterMockRecorder) Save(plan interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Save", reflect.TypeOf((*MockPlanWriter)(nil).Save), plan)
}

// MockPlanPersistenceInterface is a mock of PlanPersistenceInterface interface.
type MockPlanPersistenceInterface struct {
	ctrl     *gomock.Controller
	recorder *MockPlanPersistenceInterfaceMockRecorder
}

// MockPlanPersistenceInterfaceMockRecorder is the mock recorder for MockPlanPersistenceInterface.
type MockPlanPersistenceInterfaceMockRecorder struct {
	mock *MockPlanPersistenceInterface
}

// NewMockPlanPersistenceInterface creates a new mock instance.
func NewMockPlanPersistenceInterface(ctrl *gomock.Controller) *MockPlanPersistenceInterface {
	mock := &MockPlanPersistenceInterface{ctrl: ctrl}
	mock.recorder = &MockPlanPersistenceInterfaceMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockPlanPersistenceInterface) EXPECT() *MockPlanPersistenceInterfaceMockRecorder {
	return m.recorder
}

// Get mocks base method.
func (m *MockPlanPersistenceInterface) Get(id string) (domain.PlanInterface, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Get", id)
	ret0, _ := ret[0].(domain.PlanInterface)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// Get indicates an expected call of Get.
func (mr *MockPlanPersistenceInterfaceMockRecorder) Get(id interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Get", reflect.TypeOf((*MockPlanPersistenceInterface)(nil).Get), id)
}

// Save mocks base method.
func (m *MockPlanPersistenceInterface) Save(plan domain.PlanInterface) (domain.PlanInterface, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Save", plan)
	ret0, _ := ret[0].(domain.PlanInterface)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// Save indicates an expected call of Save.
func (mr *MockPlanPersistenceInterfaceMockRecorder) Save(plan interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Save", reflect.TypeOf((*MockPlanPersistenceInterface)(nil).Save), plan)
}
