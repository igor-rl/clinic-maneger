/*
Copyright © 2021 NAME HERE <EMAIL ADDRESS>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
package cmd

import (
	"fmt"
	"time"

	"github.com/igorlage/clinic-manager/plan/internal/adapters/cli"
	"github.com/spf13/cobra"
)

var action string
var planID string
var planTitle string
var planDescription string
var planNotes string
var planPrice float64
var planReleaseData string
var planValidityData string

// cliCmd represents the cli command
var cliCmd = &cobra.Command{
	Use:   "cli",
	Short: "A brief description of your command",
	Long: `A longer description that spans multiple lines and likely contains examples
and usage of using your command. For example:

Cobra is a CLI library for Go that empowers applications.
This application is a tool to generate the needed files
to quickly create a Cobra application.`,
	Run: func(cmd *cobra.Command, args []string) {
		releaseDate, err := parseDate(planReleaseData)
		if err != nil {
			fmt.Printf("Erro ao fazer o parse da data de lançamento: %v\n", err)
			return
		}
		validityDate, err := parseDate(planValidityData)
		if err != nil {
			fmt.Printf("Erro ao fazer o parse da data de validade: %v\n", err)
			return
		}
		cli.RunPlan(&planService, action, planID, planTitle, planDescription, planNotes, planPrice, releaseDate, validityDate)
	},
}

func init() {
	rootCmd.AddCommand(cliCmd)
	cliCmd.Flags().StringVarP(&action, "action", "a", "", "ação")
	cliCmd.Flags().StringVarP(&planID, "id", "i", "", "Plan ID")
	cliCmd.Flags().StringVarP(&planTitle, "title", "t", "", "Plan Title")
	cliCmd.Flags().StringVarP(&planDescription, "description", "d", "", "Plan Description")
	cliCmd.Flags().StringVarP(&planNotes, "notes", "n", "", "Plan Notes")
	cliCmd.Flags().Float64VarP(&planPrice, "price", "p", 0, "Plan Price")
	cliCmd.Flags().StringVarP(&planReleaseData, "release", "r", "", "Plan Release Date")
	cliCmd.Flags().StringVarP(&planValidityData, "validity", "v", "", "Plan Validity Date")

	// Here you will define your flags and configuration settings.

	// Cobra supports Persistent Flags which will work for this command
	// and all subcommands, e.g.:
	// cliCmd.PersistentFlags().String("foo", "", "A help for foo")

	// Cobra supports local flags which will only run when this command
	// is called directly, e.g.:
	// cliCmd.Flags().BoolP("toggle", "t", false, "Help message for toggle")
}

func parseDate(dateStr string) (time.Time, error) {
	layout := "2006-01-02" // Escolha o layout apropriado de acordo com o formato de data esperado. Este é apenas um exemplo para datas no formato "YYYY-MM-DD".
	return time.Parse(layout, dateStr)
}
